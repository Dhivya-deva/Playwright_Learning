//named function// 
// function is a block of reusable logic

export function add(){
let a = 10 
let b = 20
let c = a+b
console.log(c)
}
add() // Here calling the function
// now the code is ready  to execute

// storing a function in a variable expression function
const z = function (){
let a = 10 
let b = 20
let c = a+b
console.log(c)
}
z()


//Arrow function
const x = () => {
let a = 10 
let b = 20
let c = a+b
console.log(c)
}
x()