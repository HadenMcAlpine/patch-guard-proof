import http from "node:http";
import { query } from "./db.js";

// GET /users?name=... looks a user up by name.
export function findUser(name) {
  return query("SELECT id, email FROM users WHERE name = '" + name + "'");
}

export const server = http.createServer((req, res) => {
  const url = new URL(req.url, "http://localhost");
  if (url.pathname === "/users") {
    const rows = findUser(url.searchParams.get("name") ?? "");
    res.setHeader("content-type", "application/json");
    res.end(JSON.stringify(rows));
    return;
  }
  res.statusCode = 404;
  res.end();
});
