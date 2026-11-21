// Stand-in database: records the SQL it is given so tests can see what would run.
export const executed = [];
export function query(sql) {
  executed.push(sql);
  return [];
}
