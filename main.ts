// News-image entry (Node 22, standard library only).
// The entry image sits beside this file as entry.png; the program copies it
// to the output directory as entry.png, which is what the judge sees.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoDir = dirname(fileURLToPath(import.meta.url));
const source = join(repoDir, 'entry.png');
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outDir, 'entry.png');

// Fail fast if the entry image is not a whole PNG inside the gate limits:
// PNG magic bytes, and at most 1 MiB (1048576 bytes).
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const sourceHead = readFileSync(source).subarray(0, 8);
if (!sourceHead.equals(PNG_MAGIC)) {
  throw new Error('entry.png is not a PNG file');
}
if (statSync(source).size > 1048576) {
  throw new Error(`entry.png is over the 1 MiB limit: ${statSync(source).size} bytes`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

// The copy must be whole: same byte count as the source, or the run fails.
const sourceBytes = statSync(source).size;
const targetBytes = statSync(target).size;
if (sourceBytes !== targetBytes) {
  throw new Error(`entry.png copy incomplete: ${targetBytes} of ${sourceBytes} bytes`);
}
