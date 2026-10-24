let studentArr = [
  "KAYode",
  "gaBRiel",
  "lateeF",
  "Bad Guy",
  "mIcheal",
  "Ruka",
  "TEACHER",
  "MERCY",
  "PAUl",
  "bUSola",
  "TOheeB",
  "MOJEEd",
];
console.log(studentArr);
const lowerCasedStudentName = studentArr.map((student) =>
  student.toLowerCase(),
);
console.log(lowerCasedStudentName);
for (let i = 0; i < lowerCasedStudentName.length; i++) {
  if (
    lowerCasedStudentName[i] === lowerCasedStudentName[3] ||
    lowerCasedStudentName[i] === lowerCasedStudentName[6]
  ) {
    console.log(`${lowerCasedStudentName[i]} is not a real student`);
  } else {
    console.log(`${lowerCasedStudentName[i]} is a real student`);
  }
}
