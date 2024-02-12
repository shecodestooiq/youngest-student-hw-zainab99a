function showYoungestStudent(students) { 
    for (var i = 0; i < students.length; i++) {
        if(students[i]['age']<25){
        console.log(`${students[i]['name']} is still youngest` )
      }
      else{
        console.log(`${students[i]['name']} is older` )
      }
    
    }
}
  
  showYoungestStudent([ 
    {name:"zainab",age:24},
    {name:"yousif",age:28},
    {name:"maryam",age:18},
    {name:"ali",age:25}])
module.exports = showYoungestStudent;