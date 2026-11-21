import test from "node:test";
import assert from "node:assert/strict";
import { findUser } from "../src/server.js";
import { executed } from "../src/db.js";

test("findUser queries by name", () => {
  findUser("ada");
  assert.ok(executed.at(-1).includes("ada"));
});
