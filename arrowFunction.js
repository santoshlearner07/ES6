// // Arrow function 

// let getName = ((firstName,lastName)=> `${firstName} ${lastName}` );
// console.log(getName('John','Doe'));

let getName = ((firstName,lastName)=>{
    let myRole = 'Software Developer';
    return `My name is ${firstName} ${lastName} I am a ${myRole}`
});