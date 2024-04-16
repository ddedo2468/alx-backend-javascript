export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const dv = new DataView(buffer);
  try {
    dv.setInt8(position, value);
  } catch (error) {
    throw Error('Position outside range');
  }
  return dv;
}
