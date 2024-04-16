/* eslint-disable */
export default function updateStudentGradeByCity(students, city, nGrades) {
  return students.filter((s) => s.location === city).map((s) => {
    const matchingGrade = nGrades.find((grade) => grade.studentId === s.id && grade.grade);
    if (matchingGrade) {
      s.grade = matchingGrade.grade;
    } else {
      s.grade = 'N/A';
    }
    return s;
  });
}
