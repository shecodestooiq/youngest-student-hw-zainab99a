let students =[
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 2 },
  { name: 'Charlie', age: 21 },
];

function showYoungestStudent(student) {
  if(students.length === 0){
      console.log("No students provided.");
      return;
    }
    let age = student[0].age; 
    let name = student[0].name;
    for (var i = 1; i < student.length; i++) {
      if (student[i].age < age) {
        age = student[i].age;
        name = student[i].name
      }
    }
  
    console.log(name);
  }
  showYoungestStudent(students)
 
module.exports = showYoungestStudent;
