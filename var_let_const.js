// var //
// Redeclaration is allowed with var.
//You can declare the same variable multiple times using var in the same scope. 
var num = 7489302
var num = 7489302
num = 809256716
console.log(num)

// let //
//Redeclaration is not allowed with let. 
// It will throw an error if you try to redeclare a variable using let in the same scope.
let num1 = 74256
num1 = 809256716 
// reassignment is allowed with let.
num1 = 864738
console.log(num1)

// const // constant value it can't br changed

const num2 = 7489302
// num2 = 809256716 // This will throw an error because reassignment is not allowed with const.
console.log(num2)
