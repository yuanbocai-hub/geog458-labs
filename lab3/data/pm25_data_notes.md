# Provided PM2.5 observations

Source: [U.S. EPA AirData](https://aqs.epa.gov/aqsweb/airdata/download_files.html), daily PM2.5 FRM/FEM mass (parameter 88101), downloaded 2026-10-18.

Date: **2025-07-05**, local standard day. 11 distinct monitoring sites in the Puget Sound teaching area.

- `pm25_puget_sound_2025-07-05.csv`: load in QGIS as delimited text, X=`longitude`, Y=`latitude`, CRS EPSG:4326.
- `pm25_stations.geojson`: the same rows as WGS84 point geometry for Mapbox and QGIS.
- `pm25_source.json`: exact source URL, filters, source hash, units, and deduplication rule.

The numeric `pm25` field uses **µg/m³**, not AQI. `station_name`, `station_id`, `date`, `units`, and `poc` document each observation. The source's 24-HR BLK AVG values may have less precision than the daily means of 1-hour values. All supplied rows use the same aggregation, standard, date and units. Do not mix both summaries as independent stations.

Reproduce by selecting Washington, the bounding box in the metadata, 2025-07-05, 24-HR BLK AVG, PM25 24-hour 2012, no exceptional events, nonnegative values and at least 75% observations. If multiple POCs remain, retain the lowest numeric POC per site. Preserve station identifiers as text.

An interpolated map estimates values between monitors. Its apparent 250 m cell size does not establish 250 m measurement accuracy. This sample supports a classroom demonstration, not a health or regulatory conclusion.
