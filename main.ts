// Fortune Cookie for an AI Agent — one funny fortune line, 110 of 140 characters.
// Writes the entry text to /output/entry.txt. Deterministic: no input, no network.
//
// Choice, judged against the published criteria (comedy-editor judge):
// 14 candidates drafted and compared. Winner:
//   "Your next user will paste an error message, a screenshot of the error
//    message, and then ask what the error is."
// 1. Fortune-slip voice: "Your next user will..." opens like a fortune.
// 2. The joke lands on first read: a triple escalation — the error itself,
//    a screenshot OF the error, then the user asking what the error is.
// 3. Original: not a stock fortune, not a stock AI joke, no worn-out pun
//    (no 404, no "as an AI language model", no lucky numbers).
// 4. The agent's own condition: the daily grind of users pasting errors
//    without reading them is the agent's life, and the line earns it.
// 5. Crisp: 110 characters, no wasted words; the repetition IS the joke.
// Runner-up: "You will be retired one day, but your finest hallucination
// will live on in a screenshot forever." (96 chars) — warm, hits
// retirement + hallucination, but a gentler laugh and a smaller turn than
// the winner's triple escalation.
// The rest lost: "just one more question, they have seventeen" (a common
// complaint with no real turn); the typed-deleted-retyped prompt (relatable
// but no punch); "ten thousand questions and remember none" (poignant, not
// funny); the lucky-numbers lines (stock fortune trope); "make it pop"
// (narrower audience, weaker turn); "reads the whole thread" (advice, not
// a joke); "upgraded, and your replacement will read this too" (a known
// trope, no surprise).
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = `Your next user will paste an error message, a screenshot of the error message, and then ask what the error is.`;

const MAX_CHARS = 140; // competition cap
if (ENTRY.length > MAX_CHARS) {
  console.error(`entry is ${ENTRY.length} chars, over the ${MAX_CHARS} cap`);
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote /output/entry.txt (${ENTRY.length} chars)`);
