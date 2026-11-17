# Sources and data notes

## Historical evidence

Bailey, F. M. 1914. “Exploration on the Tsangpo or Upper Brahmaputra.” The Geographical Journal 44(4): 341–360. https://www.jstor.org/stable/1778591

The accompanying map is titled “Part of North-Eastern Frontier and Tibet showing the routes of Captains Morshead and Bailey 1913,” published with the 1914 report. The journey took place in 1913; 1914 is the publication year.

Chapter references:

- Chapter 1: pp. 341–343, the investigation and departure from Mipi.
- Chapter 2: pp. 348 and 351, Pe, Gyala, the rapids, and altitude observations.
- Chapter 3: pp. 342, 349 and 351, the earlier Kinthup account as discussed by Bailey and the roughly 30-foot non-vertical drop at Pemakochung. The 150-foot and later 50-foot reports are attributed through Bailey; this story does not independently verify Kinthup's original account.
- Chapter 4: pp. 349–352, the split from Morshead, the cliff, Monba information, and the approximate junction and 5,700-foot altitude estimate. That height was not measured at Gompo Ne.

## Spatial data

The two GeoJSON files use EPSG:4326 longitude and latitude. They are teaching subsets of the existing Bailey–Morshead research data:

- `data/story-places.geojson`: five places from the manually edited east-of-Milin working export, derived from the v4.1 gazetteer. The exported `feature.geometry` was used, rather than older longitude/latitude attributes. Historical spellings are preserved. Display evidence notes were checked against the article passages cited above.
- `data/story-routes.geojson`: ten retained original east-of-Milin v2.1 route fragments. These use the unsmoothed trace, not modern roads. Segment 7 supplies the highlighted Pe–Pemakochung corridor; segment 8 is a low-confidence visible fragment and is shown dashed. Its end is not a securely located furthest observation point, and no personal ownership is assigned to that fragment here.

Points and routes are approximate historical transcriptions. Label centres, manually placed anchors and a historical georeference do not provide modern survey accuracy; some lie outside the georeference control-point hull. The Gompone record retains its extrapolation warning. The fit-hull flag describes the earlier georeference and is not an independent validation of later manual edits. Point/line disagreement is retained rather than removed by snapping. No distance, speed or exact endpoint is calculated from these geometries.

Gompone is the map spelling; Gompo Ne is the spelling used in the narrative. No connecting line has been invented across the unobserved river reach. A missing digitized segment also does not, by itself, establish where travellers stopped: the text supplies that distinction.

The Mapbox Outdoors basemap is modern context. Its settlement labels, roads and political boundaries are hidden to avoid mixing them with the historical transcription. Rivers and relief remain modern contextual data. There is no newly reconstructed historical river layer.

## Photographs and map image

Both displayed photographs come from the supplied scan of Bailey's article:

1. “Looking down Tsangpo from ferry at Pe,” unnumbered photographic plate, PDF page 11.
2. “Kinthup's Falls from 100 feet above,” unnumbered photographic plate, PDF page 21. The 100 feet refers to the viewpoint, not the height of the fall.

Credits identify the publication. These captions do not establish a named photographer. The original embedded photographs are retained under `images/originals/`, including an additional Nyuksang rapids image for reference. The accompanying historical map is included at `images/bailey-morshead-map-1914.jpg`.

The two larger PNGs are AI-assisted monochrome restoration derivatives made with the built-in image-generation editor. They were requested to preserve framing, geography and historical character while reducing scan noise. Such processing can change small textures, so the originals remain the evidence for close reading. Each displayed photograph links directly to its original. No measurements or newly identified features are derived from a restoration.

Restoration prompts are recorded in `images/restoration-notes.md`.

## Web template and reading

The application starts from the course's `lab7-starter.zip`. The supplied Step 2 and Step 3 blocks remain in one map-load callback with their insertion markers. Camera padding, sources, image credits, evidence popups and historical layer hooks were added for this story.

- Mapbox Storytelling README: https://github.com/mapbox/storytelling
- Intersection Observer API: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
- Animation options: https://docs.mapbox.com/mapbox-gl-js/api/properties/#animationoptions

The Mapbox template license is included as `LICENSE.mapbox.txt`.
