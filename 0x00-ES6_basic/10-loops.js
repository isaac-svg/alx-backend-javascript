export default function appendToEachArrayValue(array, appendString) {
  const tempArray = [];
  console.log(array);
  for (const value of array) {
    tempArray.push(`${appendString + value}`);
  }

  return tempArray;
}
