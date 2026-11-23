import { mkdirSync, writeFileSync } from "node:fs";

// A complete story in exactly six words.
// Six words, one twist: bad news, then a new beginning.
const story = "The diagnosis arrived. The honeymoon began.";

const outputDir = "/output";
const outputFile = `${outputDir}/entry.txt`;

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputFile, story, "utf8");
