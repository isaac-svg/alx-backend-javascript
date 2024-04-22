export default function appendToEachArrayValue(array, appendString) {
  const tempArray = [];
  for (const idx of array) {
    const value = array[idx];
    tempArray[idx] = appendString + value;
  }

  return tempArray;
}
