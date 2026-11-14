//basic callback
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}
function message() {
    console.log("Welcome to JavaScript");
}
greet("Dhivya", message);

//using arrow function
function add(a, b, callback) {
    let result = a + b;
    callback(result);
}
add(10, 20, (value) => {
    console.log(value);
});

