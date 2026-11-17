# Lab 7 reflection

zhiting cai

## From configuration to sections

Each object in `config.chapters` describes one chapter. In `forEach((chapter, index) => ...)`, `chapter` is the current object and `index` is its zero-based position. The loop creates a section, assigns `chapter.id` to its HTML ID, and stores `index` in `data-index`. The navigation links to that same ID. When the observer selects a section, `data-index` identifies the configuration object with its camera settings. Unique IDs keep the links from pointing to the wrong section.

## Activation and observation

`activateChapter()` updates the current card, sets `aria-current="step"` on its navigation link, applies the layer opacity changes, and calls `moveMap()`. `observeChapters()` registers which sections enter or leave the viewport's detection band. It passes the selected section's index to the activation function.

The first chapter already has a known index, zero, so it can be selected before observation starts. `activateChapter(0, true)` sets that first view without an opening flight. The observer supplies later selections as the reader scrolls. Both functions are inside the same map-load callback, after the historical layers have loaded.

## The detection band

The observer uses `root: null`, so its root is the browser viewport. It calculates `Math.floor(window.innerHeight * 0.45)` and uses that number as a negative top and bottom `rootMargin`. Removing about 45% at each end leaves roughly the middle 10%.

`threshold: 0` reports entry and exit, not 50% overlap. The callback keeps a set of intersecting sections. If two sections overlap the band, it chooses the one whose section centre is closer to the viewport centre. Crossing the exact centre does not itself trigger another callback while both sections remain intersecting. A resize rebuilds the observer with a new pixel margin.

## A camera choice and a historical limitation

I start with the wider route so the reader can locate Pe before moving into the gorge. At Pemakochung the view tightens around the site discussed in the photograph. The final view pulls back to include Gompo Ne, where Bailey relied on information and an altitude estimate. I kept north up so the reader can follow these changes in scale. Camera padding keeps the target clear of the card and, on a narrow screen, leaves space above the text.

The teal route and the amber ring distinguish the mapped travel corridor from an inferred junction. I left the unresolved connection open. The historical point coordinates and line traces remain approximate, and the modern terrain does not verify their accuracy. The restored photographs have links to the original scans; measurements and interpretation use the original report.

## Example reviewed

I looked at Al Jazeera's [Saving the Nile](https://interactive.aljazeera.com/aje/2020/saving-the-nile/index.html). It asks how large dams affect water access and agriculture downstream. The wider river view gives context before the story moves to places such as Lake Tana. The text names the feature to look for and explains its relationship to the river. I used a similar change of scale between the route overview and Pemakochung.

## Checks

I checked scrolling through all four chapters in both directions, navigation jumps, image loading and the place popup. I also checked the layout in a 390-pixel frame. The 4-second flight gives more time to follow the camera; I kept 2 seconds as the default and left both options available.
