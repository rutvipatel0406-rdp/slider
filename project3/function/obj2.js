let student={
    name:"Rutvi",
    designation:"intern"
}
console.log(student);

for(let key in student)
{
    console.log(`${key}=>${student[key]}`)
}