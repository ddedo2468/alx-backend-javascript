interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
};

const firstStudent: Student = {
  firstName: "Abdullah",
  lastName: "Mosbah",
  age: 21,
  location: "Egypt",
};

const secondStudent: Student = {
  firstName: "Aya",
  lastName: "Tarek",
  age: 21,
  location: "Egypt",
};

const studentsList: Student[] = [firstStudent, secondStudent];

const table = document.createElement("table");
const tableBody = document.createElement("tbody");

table.appendChild(tableBody);

studentsList.forEach((student: Student): void => {
  const tableRow = document.createElement('tr');
  const tableDataForName = document.createElement('td')
  const tableDataForLocation = document.createElement('td')

  tableDataForName.textContent = student.firstName;
  tableDataForLocation.textContent = student.location;

  tableRow.append(tableDataForName);
  tableRow.append(tableDataForLocation);
  tableBody.append(tableRow);
});

document.body.appendChild(table);
