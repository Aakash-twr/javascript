// Array elements are send as arguments using (...arr) while function is invoked is known as spread operator

// Array elements which are received as parameters in the function suing (...arr) is known as rest operator



function func(...num){   // rest operator
    console.log(num[0]*num[1]);
}

const arr = [2,3];

func(...arr)  // spread operator