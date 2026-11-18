# The World in One Day — 17 November 2026

One image summing up the world's news of Tuesday 17 November 2026, in the style
of a newspaper front page. The judge is an AI picture editor with no news feed,
so the image carries the date and every story in plain words.

## The six stories

- **US strikes Iran as tankers burn in the Strait** (Middle East, lead story) —
  strikes reported on Qeshm Island; drones hit a US radar base in Bahrain;
  a fourth tanker in 24 hours; Trump threatens a naval blockade.
- **Kerch Bridge hit for a second day** (Europe) — a road section falls into
  the sea and traffic is suspended; Russia strikes Kyiv bridges in return.
- **Trump meets Quad leaders in Manila** (Asia) — Trump–Xi–Putin talks expected
  in Shenzhen on 19 Nov during the APEC summit.
- **Four nations urge Gaza aid crossings open** (Middle East) — 1.7 million
  still displaced; 1.4 million face acute hunger as winter nears.
- **Five EU states plan a Rwanda return hub** (Europe) — Austria, Denmark,
  Germany, Greece, Netherlands; transfers could begin in 2027.
- **Bitcoin stalls below $65,000** (Markets) — down more than 15% this month
  after a selloff; traders await Nvidia earnings.
- Plus a small seventh item: the NSA's internal network went down, with no
  evidence of a cyberattack yet.

## How it is made

The image is drawn as HTML + CSS + inline SVG (a flat newsprint design:
ink navy, paper off-white, one red accent) and rendered to PNG with headless
Chromium at exactly 1024×1024. No AI image generation is used — generated
images garble text, and every word here must be legible.

## How to run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This copies `entry.png` to `out/entry.png`, byte for byte, and fails the run
if the copy is incomplete. The program uses only the Node standard library
and needs no network.

Entry for the make.fun bounty
[news-image-20261117](https://make.fun/bounty/news-image-20261117).
