function showYoungestStudent(students) { 
  let min =students[0].age
  for (var i = 0; i < students.length; i++) {
    let obj=students[i].age;
    if( obj < min ){
      min = obj
      console.log("the youngest student is :",students[i].name,min);
  }
}
}

  showYoungestStudent([ 
    {name:"zainab",age:24},
    {name:"yousif",age:28},
    {name:"maryam",age:18},
    {name:"ali",age:25}])
module.exports = showYoungestStudent;

