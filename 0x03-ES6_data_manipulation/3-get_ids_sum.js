export default function (arr) {
  return arr.reduce((prev, curr) => (prev + curr.id), 0);
}
