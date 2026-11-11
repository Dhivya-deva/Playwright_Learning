//conditional statements `if`, `else if`, and `else` 
function getbrowser(){
    const browsername = "Chrome";
    if(browsername === "Chrome"){
        console.log("You are using Chrome");
    } 
    else {
        console.log("You are using an unknown browser");
    }
}
getbrowser() // Here calling the function

//if , else if statements
function getbrowser(){
    const browsername = "Firefox";
    if(browsername === "Chrome"){
        console.log("You are using Chrome");
    } else if(browsername === "Firefox"){
        console.log("You are using Firefox");
    } else {
        console.log("You are using an unknown browser");
    }
}
getbrowser() // Here calling the function

//switch case statements
function getbrowser(){
    const browsername = "Edge";
    switch(browsername){
        case "Chrome":
            console.log("You are using Chrome");
            break;
        case "Firefox":
            console.log("You are using Firefox");
            break;
        case "Edge":
            console.log("You are using Edge");
            break;
        default:
            console.log("You are using an unknown browser");
    }
}
getbrowser() // Here calling the function

