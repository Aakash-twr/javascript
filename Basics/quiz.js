

function quiz(b){
    let a = Math.random();
    if(b==a){
        console.log("you won")
    }else if(b<a){
        console.log("you are less");
    }else{
        console.log("you are greater")
    }
    console.log("Here is the number",a);
}

quiz(0)