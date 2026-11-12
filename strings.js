//1.Escape sequence
let message = 'It\'s little bite tricky'
console.log(message)

let message2 = "It's little bite \"tricky\""
console.log(message2)

let message3 = 'I\'m dhivya \n I complected my bachelor\'s degree in 2026' 
console.log(message3)

//2.Concatination using + operator

let firstName = 'Dhivya'
let lastName = 'Devanathan'
let fullName = firstName + " " + lastName
console.log(fullName)

//concat() next method
let fullname2 = firstName.concat(" ",lastName)
console.log(fullname2)

//template literal ${}
let fullname3 = `${firstName} ${lastName}`
console.log(fullname3)

//3. length property
let msg = 'I am learning JavaScript'
console.log(msg.length)

//4.charAt() method
let msg2 = 'I am learning JavaScript'
console.log(msg2.charAt(5))

//5. indexOf() method
let word = 'I am learning JavaScript'
console.log(word.indexOf('JavaScript'))

//6. substring() method
let word2 = 'JavaScript'
console.log(word2.substring(4,10))

//7. slice()
let word3 = 'JavaScript'
console.log(word3.slice(-6))