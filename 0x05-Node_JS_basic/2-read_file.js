const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.trim().split('\n');

    lines.shift();

    const studentCount = {};
    let totalStudents = 0;

    for (const line of lines) {
      if (line.trim().length === 0) continue; // Skip empty lines
      const [firstname, lastname, age, field] = line.split(',');

      if (!studentCount[field]) {
        studentCount[field] = [];
      }

      studentCount[field].push(firstname);
      totalStudents++;
    }

    console.log(`Number of students: ${totalStudents}`);

    for (const field in studentCount) {
      const students = studentCount[field];
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }

  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

