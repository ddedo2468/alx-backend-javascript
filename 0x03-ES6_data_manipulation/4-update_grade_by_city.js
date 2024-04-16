export default function updateStudentGradeByCity(arr, city, newGrades) {
  return arr.filter((student) => student.city === city)
    .map((student) => {
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
      const grade = gradeObj ? gradeObj.grade : 'N/A';
      return { ...student, grade };
    });
}
