// // Arrow function 

// let getName = ((firstName,lastName)=> `${firstName} ${lastName}` );
// console.log(getName('John','Doe'));

let getName = ((firstName,lastName)=>{
    let myRole = 'Software Developer';
    return `My name is ${firstName} ${lastName} I am a ${myRole}`
});

// arrow function with return keyword

const myFunc = name =>  {
    return `Hi ${name}`;
}
console.log(myFunc('Joey'))

// arrow function without return keyword

const urFunc = Name => `Hi ${Name}`;
console.log(urFunc('Ross'))

// arrow function with map keyword

const myArr = ['Ross','Joey','Monica','Phoebe'];

let arr = myArr.map(item => item);
console.log(`Array printed with map ${arr}`)