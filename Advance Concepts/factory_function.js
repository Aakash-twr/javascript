// A factory function is just a function that creates the objects and return them.


function inner(name){
    function innerNext(){
        console.log(name);
    }
    return {
        innerNext
    }
}

const a = inner('Farmer');
a.innerNext();