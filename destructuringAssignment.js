// Destructuring array

// let myName, myRole;
// let array = ['John','Software Developer'];
// [myName,myRole] = array;
// console.log(myName,myRole)

// Destructuring object

let myName, myRole;
let object = {myName:'John',myRole:'SoftWare'};
({myName,myRole} = object)
console.log(myName,myRole)

const contacts = {
    name:'John',
    familyName:'Grey',
    age: 20
}
let {name,familyName,age} = contacts;
console.log(name)
console.log(familyName)
console.log(age)
console.log(`${name} ${familyName} ${age}`)
console.log("Details -> "+contacts)
