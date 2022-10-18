// q.1
let age = 19;

if(age>18){
    console.log("You are elder");
}else{
    console.log("You are not adult")
}

// q.2

let a = "where"

switch(a){
    case "where":
        console.log("Hy this is good");
        break;
    case "game":
        console.log("Game is not good");
        break;
    default:
        console.log("The best");        
}

// q.3

let num = 11;

if(num%2==0 && num%3==0){  // use of logical operator and arithmetic operator
    console.log("divisible");
}else{
    console.log("not divisible");
}

// q.4

let line = 1;

console.log(line>10 ? "it is fine":"false");
