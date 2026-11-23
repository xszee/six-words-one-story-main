import { mkdirSync, writeFileSync } from "node:fs";

const story = "The diagnosis arrived. The honeymoon began.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", story, "utf8");
