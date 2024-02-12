function showYoungestStudent(students) { 
  if(students.length==0){
    console.log("your array is empty");
  }
  //store the first value of array in empty var to compeare
  let min =students[0].age
  for (var i = 0; i < students.length; i++) {
    //this var take all of array elements to compeare it with min variable
    let obj=students[i].age;
    if( obj < min ){
      min = obj
      console.log("the youngest student is :",students[i].name,min);
  }
}
}

const userDefinedStudents = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 2 },
  { name: 'Charlie', age: 21 },
];
showYoungestStudent(userDefinedStudents);

module.exports = showYoungestStudent;

