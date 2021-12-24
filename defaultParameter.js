function myFunction(x, y=10 ) {
    return x+y;
}
// myFunction(5);
console.log("The value -> " + myFunction(5))


const urFunc= (name,age=20) => {
    return `Hi ${name} Your age is ${age} years old`
}
console.log(urFunc('Ross',16)); //If you remove 16 it will take deafult value 20
