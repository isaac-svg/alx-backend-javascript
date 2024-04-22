export default function createEmployeesObject(departmentName, employees) {
  const temp = {};
  temp[departmentName] = employees;
  return temp;
}
