# patch-guard-proof

A small, deliberately vulnerable app used only to prove ioReign Patch Guard. It is never deployed and holds no real data.

Planted on purpose:
1. `src/server.js`: a SQL injection reachable from an HTTP query parameter (should be found and fixed).
2. `src/legacy.js`: the same unsafe pattern in a function nothing calls (should be found as unreachable, no fix).
3. `package.json`: lodash 4.17.15, a version with a published prototype-pollution advisory (dependency finding).
