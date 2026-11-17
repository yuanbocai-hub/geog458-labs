// Story and camera settings. Locations follow the historical working map.
var config = {
    accessToken: 'pk.eyJ1IjoiZG91ZG91MDEyODE5IiwiYSI6ImNtdjdvZDN3ZzA5a3AyenEwZTV4ZnBwYnIifQ.pCGIuHdjcxeJ9ZO5WaiEWw',
    style: 'mapbox://styles/mapbox/outdoors-v12',
    theme: 'light',
    showMarkers: false,
    markerColor: '#175e62',
    transitionDuration: 2000,
    title: 'Following the Tsangpo',
    subtitle: 'Where could Bailey and Morshead follow the river in 1913, and how did they describe the reach they could not see?',
    byline: 'zhiting cai · GEOG 458 · 1913 fieldwork / 1914 publication',
    footer: 'F. M. Bailey, “Exploration on the Tsangpo or Upper Brahmaputra,” The Geographical Journal 44(4), October 1914, pp. 341–360, and the accompanying Bailey–Morshead map. Historical names follow the map. Point positions and traced routes are approximate working transcriptions, not modern surveyed locations. Modern terrain is provided for orientation. No line has been added across the unobserved reach.',
    sources: [
        { title: 'Bailey 1914: article and plates', url: 'https://www.jstor.org/stable/1778591' },
        { title: 'View the accompanying historical map', url: './images/bailey-morshead-map-1914.jpg' },
        { title: 'Grothmann: region, migration and refuge', url: 'https://d1i1jdw69xsqx0.cloudfront.net/digitalhimalaya/collections/journals/jbs/pdf/JBS_26_02.pdf' },
        { title: 'Pemakö: name and religious geography', url: 'https://www.rigpawiki.org/index.php?title=Pemak%C3%B6' },
        { title: 'Buddhist texts on Pemakö as a refuge', url: 'https://www.lotsawahouse.org/topics/pemako/' },
        { title: 'Data and image notes', url: './sources.md' }
    ],
    chapters: [
        {
            id: 'river-question', label: '01 · The question', alignment: 'left',
            title: "A river beyond the surveyed route", image: '', imageAlt: '',
            description: "Bailey and Morshead left Mipi in May 1913 and travelled through the mountains toward the Tsangpo. They wanted to establish how the river descended from the Tibetan plateau toward the Dihang valley. Bailey began his report by discussing earlier accounts of a 150-foot waterfall at Pemakochung.\n\nFollowing their mapped route brings us to Pe and the gorge below it. Here we can compare the places they reached with a downstream junction they could only place approximately. A name on the published map does not always record a visit.",
            source: "Bailey 1914, pp. 341–343; accompanying map.",
            location: { center: [95.18, 29.55], zoom: 6.95, pitch: 0, bearing: 0 },
            mapAnimation: 'flyTo',
            onChapterEnter: [
                { layer: 'survey-routes', opacity: 0.48, duration: 600 },
                { layer: 'corridor-route', opacity: 0.35, duration: 600 },
                { layer: 'route-fragment', opacity: 0, duration: 600 },
                { layer: 'story-points', opacity: 1, duration: 600 },
                { layer: 'story-labels', opacity: 1, duration: 600 },
                { layer: 'inferred-point', opacity: 0, duration: 600 },
                { layer: 'inferred-label', opacity: 0, duration: 600 }
            ], onChapterExit: []
        },
        {
            id: 'along-the-river', label: '02 · Along the river', alignment: 'left',
            title: "From Pe into the gorge",
            image: './images/pe-ferry-restored.png',
            imageAlt: 'Historical monochrome view down the Tsangpo from the ferry at Pe, with mountains reflected in a broad, smooth stretch of river.',
            imageCaption: '“Looking down Tsangpo from ferry at Pe.” Bailey 1914, photographic plate, PDF p. 11. Restored display copy.',
            originalImage: './images/originals/pe-ferry-original.jpg',
            description: "At Pe, Bailey describes a smooth river. About two miles downstream it breaks into rapids, which continue toward Gyala. The ferry photograph shows the quieter water before that change.\n\nThe party used boiling-point observations to estimate river altitude, with trigonometrical heights as checks. Bailey reports 9,680 feet at Pe and 8,380 feet at Pemakochung. He used these observations to compare the descent between stops. The teal line traces the route printed on the historical map. The line is an itinerary trace, not a surveyed river centreline.",
            measurements: [ { label: 'Pe', value: '9,680 ft' }, { label: 'Pemakochung', value: '8,380 ft' } ],
            measurementLabel: 'River altitudes reported by Bailey, p. 351',
            source: "Bailey 1914, pp. 348, 351.",
            location: { center: [94.935, 29.665], zoom: 9.05, pitch: 20, bearing: 0 },
            mapAnimation: 'flyTo',
            onChapterEnter: [
                { layer: 'survey-routes', opacity: 0.12, duration: 600 },
                { layer: 'corridor-route', opacity: 1, duration: 600 },
                { layer: 'route-fragment', opacity: 0, duration: 600 },
                { layer: 'story-points', opacity: 1, duration: 600 },
                { layer: 'story-labels', opacity: 1, duration: 600 },
                { layer: 'inferred-point', opacity: 0, duration: 600 },
                { layer: 'inferred-label', opacity: 0, duration: 600 }
            ], onChapterExit: []
        },
        {
            id: 'pemakochung', label: '03 · The falls', alignment: 'right',
            title: "Pemakochung: a place within Pemakö",
            image: './images/pemakochung-falls-restored.png',
            imageAlt: 'Historical monochrome photograph looking down onto fast, broken water at Kinthup’s Falls near Pemakochung, between steep wooded banks.',
            imageCaption: '“Kinthup’s Falls from 100 feet above.” Bailey 1914, photographic plate, PDF p. 21. Restored display copy.',
            originalImage: './images/originals/pemakochung-falls-original.jpg',
            description: "Pemakochung means “Little Pemakö”: chung means “small.” Bailey describes it as a small monastery in 1913. It is a particular site, distinct from Kapu and from the modern town of Metog. Events described somewhere in Pemakö cannot all be placed at this one point.\n\nPemakö (པདྨ་བཀོད་), or “Lotus Array,” names a wider region. In his separate frontier report, Bailey describes the Tsangpo valley below the gorge as Pemako and says that it has no definite boundaries. Grothmann’s study includes Tuting, Geling and Singa in southern Pemakö, extending the cultural region beyond modern Metog County.\n\nPemakö is also a beyul, a sacred hidden land. Buddhist traditions describe such places as refuges during conflict and religious decline. Grothmann relates this expectation to migration from eastern Bhutan and the Tawang area.\n\nAt Pemakochung, Bailey describes a non-vertical drop of about 30 feet. The earlier account he attributes to Kinthup gives 150 feet; Bailey says Kinthup later recalled about 50 feet. He suggests that this site had been confused with a tributary waterfall near Gyala. We are reading that explanation through Bailey’s report.\n\nThe photograph’s caption, “from 100 feet above,” gives the viewing position, not the height of the fall. Bailey could describe this drop from observation, but the river farther down the gorge remained partly unseen.",
            source: "Bailey 1914, pp. 342, 348–349, 351; regional and religious context: see the sources below.",
            location: { center: [95.075, 29.77], zoom: 9.65, pitch: 0, bearing: 0 },
            mapAnimation: 'flyTo',
            onChapterEnter: [
                { layer: 'survey-routes', opacity: 0.06, duration: 600 },
                { layer: 'corridor-route', opacity: 0.75, duration: 600 },
                { layer: 'route-fragment', opacity: 0.7, duration: 600 },
                { layer: 'story-points', opacity: 1, duration: 600 },
                { layer: 'story-labels', opacity: 1, duration: 600 },
                { layer: 'inferred-point', opacity: 0, duration: 600 },
                { layer: 'inferred-label', opacity: 0, duration: 600 }
            ], onChapterExit: []
        },
        {
            id: 'beyond-the-route', label: '04 · Beyond the route', alignment: 'left',
            title: "Where direct observation stopped", image: '', imageAlt: '',
            description: "Below Pemakochung, cliffs and dwindling food restricted progress. Bailey continued beyond the Churung stream after Morshead turned back toward Gyala, but another cliff stopped him. He did not follow the whole river to Gompo Ne.\n\nMonba hunters supplied information about parts of that reach. Bailey combined accounts of journeys with the measured slope of another reach on the Po Tsangpo to place its junction approximately and estimate a river altitude of about 5,700 feet.\n\nThe amber ring marks Gompone on the historical map, called Gompo Ne in the text. I have left the route open before it. The junction’s estimated position and altitude depended on information from people who knew parts of the gorge, beyond what Bailey and Morshead could survey themselves.",
            source: "Bailey 1914, pp. 349–352; accompanying map.",
            location: { center: [95.04, 29.755], zoom: 8.6, pitch: 0, bearing: 0 },
            mapAnimation: 'flyTo',
            onChapterEnter: [
                { layer: 'survey-routes', opacity: 0.14, duration: 600 },
                { layer: 'corridor-route', opacity: 0.8, duration: 600 },
                { layer: 'route-fragment', opacity: 0.7, duration: 600 },
                { layer: 'story-points', opacity: 1, duration: 600 },
                { layer: 'story-labels', opacity: 1, duration: 600 },
                { layer: 'inferred-point', opacity: 1, duration: 800 },
                { layer: 'inferred-label', opacity: 1, duration: 800 }
            ], onChapterExit: []
        }
    ]
};
