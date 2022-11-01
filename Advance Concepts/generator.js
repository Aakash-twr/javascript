// Generators - These functions are meant to return an iterator.
// A function that behaves like an iterator.
// Single function whose execution is not continue


function* generatorFunc(){
    yield 'Hello'
    yield 'World'
}

const obj = generatorFunc();

for(let x of obj){
    console.log(x)
}