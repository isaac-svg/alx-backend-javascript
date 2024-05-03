interface Student{
    firstName: string,
    lastName: string,
    age: number,
    location: string,
}

const student1: Student = {
    firstName: 'Isaac',
    lastName: 'Sakyi',
    age:20,
    location: 'Kumasi'
}
const student2: Student = {
    firstName: 'John',
    lastName: 'Peters',
    age:20,
    location: 'USA'
}

const studentsList: Student[] =[student1, student2]

const table = document.querySelector("#studentsTableBody") as HTMLTableElement
console.log(table)
studentsList.forEach(student=>{
    console.log(student)
    const row = document.createElement('tr')
    const firstnamecell = document.createElement('td');
    firstnamecell.textContent = student.firstName
    const locationcell = document.createElement('td');
    locationcell.textContent = student.location
    row.append(locationcell, firstnamecell)
    table.append(row)

})