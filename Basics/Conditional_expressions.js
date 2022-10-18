// Conditional Operator  - Execution of particular set of code based on a condition fulfilled.

let a =4;
// If-Else statement
if(a>10){
    console.log("True")
}else{
    console.log("false")
}
// If-Else , Else-if statements
if(a<0){
    console.log("negative")
}else if(a<5){
    console.log("positive")
}else{
    console.log("else part")
}
console.log("Done")


// switch statements

const exp = "Apple";

switch(exp){
    case "Apple":
        console.log("Apple hai")
        break;
    case "papaya":
        console.log("Papaya hai");
        break
    default:
        console.log("sorry");
        break        
}

// Ternary operator

let ab = 12;
let cd = 18;

console.log(ab>cd ? "true":"false"); // ternary operator