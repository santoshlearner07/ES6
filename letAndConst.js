// let changed in block doesnot chng outside block 

let x =10;
if(x==10){
    let x = 20;
    console.log(x)
}
console.log(x)

// var changed outside the block

var a = 10;
if (a==10){
    var a = 20;
    console.log(a)
}
console.log(a)


// const obj = {'firstName':'John'};
// const obj.firstName = 'Toad';  // to chng the value of name
// console.log(firstName)

let addNumbers = (...numbers) => {
    let result = 0;
    numbers.forEach(num=> result += num);
    return result
}
console.log(addNumbers(1,2,3))