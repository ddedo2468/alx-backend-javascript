export default function updateStudentGradeByCity(arr, city, newGrades) {
  return arr.filter((item) => (item.city === city))
    .map((item) => {
      const student = newGrades.find((item) => (item.studentId === item.id));
      const grade = student ? student.grade : 'N/A';
      return { ...item, grade };
    });
}
