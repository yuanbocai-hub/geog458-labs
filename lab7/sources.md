# Sources and data notes

## Historical evidence

Bailey, F. M. 1914. “Exploration on the Tsangpo or Upper Brahmaputra.” The Geographical Journal 44(4): 341–360. https://www.jstor.org/stable/1778591

The accompanying map is titled “Part of North-Eastern Frontier and Tibet showing the routes of Captains Morshead and Bailey 1913,” published with the 1914 report. The journey took place in 1913; 1914 is the publication year.

Chapter references:

- Chapter 1: pp. 341–343, the investigation and departure from Mipi.
- Chapter 2: pp. 348 and 351, Pe, Gyala, the rapids, and altitude observations.
- Chapter 3: pp. 342, 348–349 and 351, the small monastery, the earlier Kinthup account as discussed by Bailey and the roughly 30-foot non-vertical drop at Pemakochung. The 150-foot and later 50-foot reports are attributed through Bailey; this story does not independently verify Kinthup's original account. The distinction between the region and the site, and the religious background, use the additional sources below.
- Chapter 4: pp. 349–352, the split from Morshead, the cliff, Monba information, and the approximate junction and 5,700-foot altitude estimate. That height was not measured at Gompo Ne.

## Pemakö, Pemakochung and the hidden-land tradition

These names refer to different geographical scales. Pemakö / Pemako (Tibetan པདྨ་བཀོད་, Wylie pad ma bkod) is commonly translated as “Lotus Array.” Pemaköchung / Pemakochung adds chung, “small,” giving “Little Pemakö.” Bailey's RGS article calls Pemakochung a small monastery, rather than using that name for the whole region (p. 348).

The regional definition comes from a separate publication: F. M. Bailey, *Report on an Exploration on the North-East Frontier* (Simla: Government Monotype Press, 1914), Chapter I, §3 “Pemako,” pp. 2–3. In the combined local report PDF this passage begins on scan page 33. Bailey describes Pemako as the Tsangpo valley below the gorge and explicitly treats its boundaries as indefinite. His account discusses places including Kapu, Giling, Makti, Meto and Rinchenpung in this valley. The English gloss “Little Pemako” also appears in the place-name glossary, Appendix I, of H. T. Morshead's separate survey report, included earlier in the same combined PDF (scan page 19). These report references should not be confused with the page numbers of the RGS article.

Kerstin Grothmann, “Population History and Identity in the Hidden Land of Pemakö,” *Journal of Bhutan Studies* 26 (2012): 21–52, identifies Tuting, Geling and Singa as southern Pemakö (p. 21), discusses the region's approximate extent (pp. 22–23), and explains hidden-land traditions of refuge and their relation to migration (pp. 26–30). This cultural and religious region should not be reduced to modern Metog County or to the monastery at Pemakochung. The sanctuary tradition supplies regional context; the story does not claim that a particular group found refuge in this monastery during the 1913 visit.

- [Grothmann's article](https://d1i1jdw69xsqx0.cloudfront.net/digitalhimalaya/collections/journals/jbs/pdf/JBS_26_02.pdf)
- [Rigpa Wiki: Pemakö, Tibetan spelling and “Lotus Array”](https://www.rigpawiki.org/index.php?title=Pemak%C3%B6)
- [Lotsawa House: Pemakö texts and the sanctuary tradition](https://www.lotsawahouse.org/topics/pemako/)
- [Jatsön Nyingpo's guidebook, in translation](https://www.lotsawahouse.org/tibetan-masters/jatson-nyingpo/pemako-guidebook)

中文释名备注：“白马狗熊”若作为 Pemakochung 的音译使用，应按音译理解；这些汉字不是藏文地名的语义。“小 Pemakö”也不是墨脱县城或 Kapu 的另一种写法，不能把整个 Pemakö 区域的事件都定位到这个寺院点上。

## Pe, Pai Town and Doshong La

Bailey’s 1914 journal article captions the photograph “Looking down Tsangpo from ferry at Pe” (scan p. 11). In the [1913 expedition report](https://pahar.in/pahar/Books%20and%20Articles/Indian%20Subcontinent/1913%20Report%20on%20an%20Exploration%20on%20the%20North%20East%20Frontier%201913%20by%20Bailey%20and%20Morshead%20s.pdf), scan p. 6, the party records arriving via Nyima La on 13 July and hearing that another party had previously crossed Doshong La (Duoxiong La) from Pemakö. The historical point represents the riverside settlement at the precision of the digitized map. It does not locate the ferry landing exactly.

Pai Town (派镇) is a present-day administrative unit of Milin City. The [Milin municipal government](https://www.milin.gov.cn/mlx/c101444/202408/9182bb636222410196adb90a29a2cc69.shtml) lists Pai Village (派村), Duoxiong Village and several other villages within it. The modern names identify the administrative setting; assigning the historical ferry to a particular present-day landing would require separate evidence.

The contemporary terrain illustration is by Yuanbo. The Pai–Medog road and tunnel provide modern orientation. Terrain: Copernicus DEM GLO-30. Imagery: EOxCloudless / EOX, modified Copernicus Sentinel data 2016 (CC BY 4.0). Road and path data: © OpenStreetMap contributors.

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
