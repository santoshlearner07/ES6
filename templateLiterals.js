/*
    Template Strings
*/

let myName = 'John';
let myRole = 'Software Developer';
console.log(`My name is ${myName} and I am a ${myRole}.`)


/*
    Tagged Templates multiple use with array
*/
function myTag(array, name, role){
    let str0 = array[0];
    let str1 = array[1];
    return `${str0}${myName}${str1}${myRole}`
}
console.log(myTag`My name is ${myName} and I am ${myRole}`);
