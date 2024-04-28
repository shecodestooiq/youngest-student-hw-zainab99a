function showYoungestStudent(students) {
  if (students.length === 0) {
    console.log("No students provided.");
    return;
  }

  let age = students[0].age;
  let name = students[0].name;

  for (var i = 1; i < students.length; i++) {
    if (students[i].age < age) {
      age = students[i].age;
      name = students[i].name;
    }
  }

  console.log(name);
}

module.exports = showYoungestStudent;