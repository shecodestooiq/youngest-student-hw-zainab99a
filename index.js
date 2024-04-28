let students = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 2 },
  { name: 'Charlie', age: 21 },
];
function showYoungestStudent(students) { 
  if(students.length === 0){
    console.log("No students provided");
    return;
  }
  //store the first value of array in empty var to compeare
  let age = students[0].age;
  let name = students[0].name;
  for (var i = 1; i < students.length; i++) {
    //this var take all of array elements to compeare it with min variable
    let obj=students[i];
    if( obj.age < age ){
      age = obj.age;
      name=obj.name;
     
}}
console.log("the youngest student is :" + name);

}


showYoungestStudent(students);
module.exports = showYoungestStudent;

