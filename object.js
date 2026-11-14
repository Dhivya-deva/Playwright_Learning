// Objects
const std_details = {
    name: "Sri",
    age: 23,
    grade: "A"
}
console.log(std_details.name)

//Set stores only unique values

let numbers = [3,6,9,9,2,2,0]
let uniquenum = new Set(numbers)
console.log(uniquenum)

// map 
// set(), get(), has(), delete(), clear()

//Set() method
let stu_details = new Map()
console.log(stu_details)

stu_details.set("sri", 2748)
stu_details.set("sai", 74628)
console.log(stu_details)

//get 
console.log(stu_details.get("sri"))

//has()
console.log(stu_details.has("sai"))

//delete()
stu_details.delete("sai")
console.log(std_details)

//clear()
stu_details.clear()
console.log(std_details)