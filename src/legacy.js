import { query } from "./db.js";

// Old report helper. Nothing imports or calls this any more.
export function legacyReport(region) {
  return query("SELECT * FROM sales WHERE region = '" + region + "'");
}
