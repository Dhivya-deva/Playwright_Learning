//Array in JavaScript
let fruits = ['apple', 'banana', 'orange']
console.log(fruits)

//push() method
fruits.push('grape')
console.log(fruits)

//pop() method
fruits.pop()
console.log(fruits)

// unshift() add elemennts at beginning of the array
fruits.unshift('mango')
console.log(fruits)

// shift() remove elements from the beginning of the array
fruits.shift()
console.log(fruits)

//slice() method
let veg=['carrot', 'broccoli', 'spinach', 'cabbage']
let slicedVeg = veg.slice(1,4)
console.log(slicedVeg)

//splice() method
let veg2=['carrot', 'broccoli', 'spinach', 'cabbage']
veg2.splice(1,2,'tomato','onion')
console.log(veg2)