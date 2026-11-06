//Declared Global variable
let genderType = "female"

//Create a function
function printGender() {

    //Declared Function scoped variable
    let color = "brown"

    //Check whether genderType starts with "female"
    if (genderType.startsWith("female")) {

        //Declare variables inside if block
        var age = 30
        let color = "pink"
        console.log(color)
    }

    //Print age outside if block
    console.log(age)

    // Print function-level color
    console.log(color)
}

//Call the function
printGender()
console.log(genderType)

//Change genderType to male
genderType = "male"
printGender();
console.log("Updated:", genderType);

