export default function createIteratorObject(report) {
  const Emps = [];
  for (const department of Object.keys(report.Emps)) {
    Emps.push(...report.Emps[department]);
  }
  return Emps;
}
