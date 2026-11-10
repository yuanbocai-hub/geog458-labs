# A day on Puget Sound

zhiting cai · GEOG 458 · Lab 5

[Open the animated map](https://yuanbocai-hub.github.io/geog458-labs/lab5/zhiting_cai_Lab5.html)

## Study area and dates

I chose central Puget Sound, including Seattle, Bainbridge Island, and the Edmonds/Kingston area. The selection runs from 47.45 to 47.90° N and 122.70 to 122.25° W. This area puts ferry crossings and the approach to Seattle's port in the same view, so it is possible to compare different kinds of movement connecting different parts of Puget Sound without mapping the whole coast.

The selected date is July 15, 2025, from 00:00:00 UTC up to July 16 at 00:00:00 UTC. I chose a summer weekday to keep the request small while retaining repeated crossings through a day. This window begins July 14 at 17:00 PDT and ends July 15 at 16:59:59 PDT. It does not cover all of July 15 in local time. The map uses `America/Los_Angeles` to display the date and PDT/PST abbreviation.

The data source is NOAA, BOEM, and USCG's [AccessAIS](https://marinecadastre.gov/accessais/). I placed an AccessAIS request for this area and date, but the emailed delivery link returned a 404 error. This map uses the [official NOAA daily archive for July 15](https://noaaocm.blob.core.windows.net/ais/csv2/csv2025/ais-2025-07-15.csv.zst), clipped to the same bounds.

The bounding box and single day reduce 9,274,961 nationwide reports to 258,228 rows. I converted the csv in the class Colab notebook. The CSV is compressed for transfer and unpacked before the course function runs. After removing 2,023 duplicate vessel/time records, the JSON contains 256,205 observations for 759 vessels. The map draws 754 paths because five vessels have only one position. The path JSON is about 12 MB. Stationary reports remain in the data.

Playback starts one hour into the observations. Each trail shows the previous hour, and the default speed advances 15 minutes of data per real second. The slider extends one hour past the last report so the final trails can fade; that extra hour contains no new observations. The panel uses a navy background with gold passenger trails, coral tanker trails, green cargo trails, and purple trails for Other vessels.

## Interpretation

The Passenger filter has 39 paths. Repeated crossings appear between Seattle and Bainbridge Island and near Edmonds/Kingston, matching routes listed by [Washington State Ferries](https://wsdot.wa.gov/travel/washington-state-ferries).

On July 15, WSF PUYALLUP reports zero speed near the Bainbridge terminal at 03:00 PDT. By 07:30 PDT, it reports 17.7 knots between Bainbridge and Seattle. The passenger group also shows more movement in the morning: 14 vessels report speeds above one knot in the hour ending at 07:30, compared with one in the hour ending at 03:00. These figures count vessels with reported movement, not departures.

The Cargo filter has 22 paths. Some stay near Seattle's waterfront, while others travel north or south along the Sound. CMA CGM CASSIOPEIA reports zero speed near the port at 03:00 and 07:30 PDT, then moves north at 9.2 knots around 15:00 PDT. Its track runs along the Sound, while the ferries repeatedly cross the bay.

The Other vessels filter contains 691 paths, many clustered around marinas with little movement. The Tanker filter has only two paths, including FIREBOAT 1, which reports type 80. This example shows why the reported AIS code needs checking before drawing conclusions about a vessel's use.

I would need more days of observations to judge whether the morning activity follows a regular commuting pattern. Gaps between reports also leave parts of each journey unobserved.

## Feature proposal for a potential user

A ferry service analyst might want to ask: where does one vessel spend time during the morning service period, and where is the record incomplete? I would add a vessel inspector. Clicking a trail would select that vessel, show its name and MMSI, and let the analyst follow its positions while keeping the current clock and category selection. A small timeline would mark long gaps between reports so an apparent straight crossing is not mistaken for a continuously observed journey.

The [deck.gl interactivity guide](https://deck.gl/docs/developer-guide/interactivity) describes picking and click callbacks that could connect a trail to this inspector. The [TripsLayer documentation](https://deck.gl/docs/api-reference/geo-layers/trips-layer) shows how `currentTime` and `trailLength` control the visible part of a path. Those controls would let the inspector compare one vessel at a fixed moment with its recent movement. This would help the analyst separate terminal waiting from travel and see when the data are too sparse to answer the question. The inspector is a proposal and is not implemented in this map.
