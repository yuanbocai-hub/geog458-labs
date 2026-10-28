#!/bin/bash
set -euo pipefail

root="$(cd "$(dirname "$0")" && pwd)"
gdal="/Applications/QGIS.app/Contents/MacOS"
export PROJ_DATA="/Applications/QGIS.app/Contents/Resources/qgis/proj"
work="${TMPDIR:-/private/tmp}/geog458-lab3-build"
mkdir -p "$work"

tile_x() {
  awk -v lon="$1" -v z="$2" 'BEGIN { n=2^z; print int((lon+180)/360*n) }'
}

tile_y() {
  awk -v lat="$1" -v z="$2" 'BEGIN {
    pi=atan2(0,-1); n=2^z; r=lat*pi/180;
    print int((1-log((1+sin(r))/cos(r))/pi)/2*n)
  }'
}

tile_bounds() {
  awk -v x="$1" -v y="$2" -v z="$3" 'BEGIN {
    world=20037508.342789244; span=2*world/(2^z);
    minx=-world+x*span; maxx=minx+span;
    maxy=world-y*span; miny=maxy-span;
    printf "%.8f %.8f %.8f %.8f", minx, miny, maxx, maxy
  }'
}

render_tiles() {
  src="$1"; out="$2"; minzoom="$3"; maxzoom="$4"
  west="$5"; south="$6"; east="$7"; north="$8"
  for z in $(seq "$minzoom" "$maxzoom"); do
    xmin=$(tile_x "$west" "$z"); xmax=$(tile_x "$east" "$z")
    ymin=$(tile_y "$north" "$z"); ymax=$(tile_y "$south" "$z")
    for x in $(seq "$xmin" "$xmax"); do
      mkdir -p "$out/$z/$x"
      for y in $(seq "$ymin" "$ymax"); do
        bounds=$(tile_bounds "$x" "$y" "$z")
        "$gdal/gdalwarp" -q -overwrite -of PNG -te $bounds -te_srs EPSG:3857 \
          -ts 256 256 -r bilinear -srcalpha -dstalpha "$src" "$out/$z/$x/$y.png"
      done
    done
  done
}

download_tiles() {
  style="$1"; out="$2"; minzoom="$3"; maxzoom="$4"
  west="$5"; south="$6"; east="$7"; north="$8"
  : "${MAPBOX_TOKEN:?Set MAPBOX_TOKEN before downloading Mapbox tiles}"
  for z in $(seq "$minzoom" "$maxzoom"); do
    xmin=$(tile_x "$west" "$z"); xmax=$(tile_x "$east" "$z")
    ymin=$(tile_y "$north" "$z"); ymax=$(tile_y "$south" "$z")
    for x in $(seq "$xmin" "$xmax"); do
      mkdir -p "$out/$z/$x"
      for y in $(seq "$ymin" "$ymax"); do
        url="https://api.mapbox.com/styles/v1/doudou012819/${style}/tiles/256/${z}/${x}/${y}.png?access_token=${MAPBOX_TOKEN}"
        curl --fail --silent --show-error "$url" -o "$out/$z/$x/$y.png"
      done
    done
  done
}

build_pm25() {
  "$gdal/ogr2ogr" -f GeoJSON "$work/pm25_3857.geojson" \
    "$root/data/pm25_stations.geojson" -t_srs EPSG:3857
  "$gdal/gdal_grid" -q -a invdist:power=2.0:smoothing=0.0:nodata=-9999 -zfield pm25 \
    -txe -13650819.391345 -13600072.397716 -tye 5972552.547110 6115895.677003 \
    -outsize 203 573 -ot Float32 -of GTiff -a_srs EPSG:3857 \
    "$work/pm25_3857.geojson" "$work/pm25_idw.tif"
  "$gdal/gdaldem" color-relief -q -alpha "$work/pm25_idw.tif" \
    "$root/data/pm25_colors.txt" "$work/pm25_color.tif"
  render_tiles "$work/pm25_color.tif" "$root/assets/pm25-guided" 8 12 -122.75 47.10 -122.05 48.15
}

build_wildfire() {
  "$gdal/ogr2ogr" -f GeoJSON "$work/wildfire_3857.geojson" \
    "$root/data/wildfires_1985_1999_pnw.geojson" -t_srs EPSG:3857
  "$gdal/gdal_grid" -q \
    -a invdistnn:power=2.0:radius=250000:max_points=30:min_points=2:nodata=-9999 \
    -zfield log_acres -txe -13914936.3491592 -12913060.9320197 \
    -tye 5160979.44404978 6274861.39400658 -outsize 400 445 -ot Float32 \
    -of GTiff -a_srs EPSG:3857 \
    "$work/wildfire_3857.geojson" "$work/wildfire_idw.tif"
  "$gdal/gdaldem" color-relief -q -alpha "$work/wildfire_idw.tif" \
    "$root/data/wildfire_colors.txt" "$work/wildfire_color.tif"
  render_tiles "$work/wildfire_color.tif" "$root/assets/wildfire-history" 5 8 -125 42 -116 49
}

case "${1:-all}" in
  thematic)
    build_pm25
    build_wildfire
    ;;
  basemaps)
    : "${GUIDED_STYLE:?Set GUIDED_STYLE}"
    : "${INDEPENDENT_STYLE:?Set INDEPENDENT_STYLE}"
    download_tiles "$GUIDED_STYLE" "$root/assets/mapbox-guided" 8 12 -122.75 47.10 -122.05 48.15
    download_tiles "$INDEPENDENT_STYLE" "$root/assets/mapbox-independent" 5 8 -125 42 -116 49
    ;;
  *)
    echo "Use: ./build_tiles.sh thematic|basemaps"
    exit 2
    ;;
esac
