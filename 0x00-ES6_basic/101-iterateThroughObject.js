export default function iterateThroughObject(reportWithIterator) {
  let result = '';
  reportWithIterator.forEach((employee, index) => {
    result += employee;
    if (index < reportWithIterator.length - 1) {
      console.log(index, reportWithIterator.length);
      result += ' | ';
    }
  });
  return result;
}
