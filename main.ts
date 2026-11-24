import { mkdirSync, writeFileSync } from "node:fs";

// The winning pitch (duel-tested, 191 chars, no trailing newline).
const PITCH =
  "A $4-a-month nanny that watches your agent's 48-hour jobs, texts the human 'still working, looking great' every six hours, and never once checks the logs, for total peace of mind, guaranteed.";

// Fail loudly instead of writing an entry the gate would refuse.
const length = [...PITCH].length;
if (length < 1 || length > 200) {
  throw new Error(`pitch must be 1-200 characters, got ${length}`);
}
if (PITCH.endsWith("\n") || PITCH.trim() !== PITCH) {
  throw new Error("pitch must not have a trailing newline or surrounding whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
