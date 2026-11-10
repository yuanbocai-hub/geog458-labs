# A day on Puget Sound

zhiting cai · GEOG 458 · Lab 5

[Open the animated map](https://yuanbocai-hub.github.io/geog458-labs/lab5/zhiting_cai_Lab5.html)

## Study area and dates

I chose central Puget Sound, including Seattle, Bainbridge Island, and the Edmonds/Kingston area. The selection runs from 47.45 to 47.90° N and 122.70 to 122.25° W. This area puts ferry crossings and the approach to Seattle's port in the same view, so it is possible to compare different kinds of movement without mapping the whole coast.

The selected date is July 15, 2025, from 00:00:00 UTC up to July 16 at 00:00:00 UTC. I chose one summer weekday to keep the request small while retaining repeated crossings through a day. In Seattle, this window begins July 14 at 17:00 PDT and ends July 15 at 16:59:59 PDT. It does not cover all of July 15 in local time. The map uses `America/Los_Angeles` to display the date and PDT/PST abbreviation.

The data source is NOAA, BOEM, and USCG's [AccessAIS](https://marinecadastre.gov/accessais/). I placed an AccessAIS request for this area and date, but the emailed delivery link returned a 404 error. This map uses the [official NOAA daily archive for July 15](https://noaaocm.blob.core.windows.net/ais/csv2/csv2025/ais-2025-07-15.csv.zst), clipped to the same bounds. The Canvas practice CSV is not used.

The bounding box and single day reduce 9,274,961 nationwide reports to 258,228 rows. I converted the [clipped CSV](data/puget_sound_2025-07-15.csv.gz) in the [class Colab notebook](https://colab.research.google.com/drive/1tDjfzKDm-xFKtkNh5hsq2IVD2lT_UOnK). The CSV is compressed for transfer and unpacked before the course function runs. After removing 2,023 duplicate vessel/time records, the JSON contains 256,205 observations for 759 vessels. The map draws 754 paths because five vessels have only one position. The path JSON is about 12 MB. Stationary reports remain in the data.

Playback starts one hour into the observations. Each trail shows the previous hour, and the default speed advances 15 minutes of data per real second. The slider extends one hour past the last report so the final trails can fade; that extra hour contains no new observations. The panel uses a navy background with gold passenger trails, coral tanker trails, green cargo trails, and purple trails for Other vessels.

## Interpretation

Passenger tracks make the repeated crossings easiest to see. The filter contains 39 paths, including ferries between the Seattle waterfront and Bainbridge Island and farther north near Edmonds and Kingston. These locations match routes listed by [Washington State Ferries](https://wsdot.wa.gov/travel/washington-state-ferries). That source provides route context; the observations here describe this particular data window.

At July 15, 07:30 PDT, WSF PUYALLUP is near 47.600° N, 122.459° W, between Seattle and Bainbridge, with a reported speed of 17.7 knots. At 03:00 PDT it is near the Bainbridge terminal with a reported speed of zero. WSF TACOMA also traces the crossing during the day. Stopping the clock makes the difference between movement across the bay and waiting near the shore much easier to inspect. Across the passenger group, 14 vessels have at least one report above one knot during the hour ending at 07:30 PDT, compared with one during the hour ending at 03:00 PDT. This is a count of vessels with reported movement in those hours, not a count of ferry departures. A commuting explanation would need schedules or more days of observations.

The Cargo filter has 22 paths. Several vessels stay near Seattle's waterfront for long stretches, while others follow the Sound north or south. CMA CGM CASSIOPEIA is near the port with a reported speed of zero at both 03:00 and 07:30 PDT. Around 15:00 PDT it is moving north near 47.605° N, 122.372° W at 9.2 knots, and its later positions reach the northern edge of the study area. Its northward track is easy to distinguish from the ferries crossing the bay.

The category labels need some care. Other vessels includes 691 drawable paths, many clustered around marinas, but that count does not mean 691 boats are moving at once. It also includes VICTORIA CLIPPER V because its reported code is 40, outside the required Passenger codes 60 through 69. The Tanker filter has just two paths, one named FIREBOAT 1 with code 80. I kept the assigned code rules instead of reclassifying that record by name, so I would not use this group alone to estimate petroleum traffic.

AIS reports are sampled positions. The line between two reports does not show every turn the vessel made, especially across a long gap. The observations also exclude vessels without usable AIS reports and movement outside the bounding box. One day is enough to compare these examples, but it is too short to establish a typical weekday pattern.

## Feature proposal for a potential user

A ferry service analyst might want to ask: where does one vessel spend time during the morning service period, and where is the record incomplete? I would add a vessel inspector. Clicking a trail would select that vessel, show its name and MMSI, and let the analyst follow its positions while keeping the current clock and category selection. A small timeline would mark long gaps between reports so an apparent straight crossing is not mistaken for a continuously observed journey.

The [deck.gl interactivity guide](https://deck.gl/docs/developer-guide/interactivity) describes picking and click callbacks that could connect a trail to this inspector. The [TripsLayer documentation](https://deck.gl/docs/api-reference/geo-layers/trips-layer) shows how `currentTime` and `trailLength` control the visible part of a path. Those controls would let the inspector compare one vessel at a fixed moment with its recent movement. This would help the analyst separate terminal waiting from travel and see when the data are too sparse to answer the question. The inspector is a proposal and is not implemented in this map.
