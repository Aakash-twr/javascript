// Generators - These functions are meant to return an iterator.
// A function that behaves like an iterator.
// Single function whose execution is not continue
// Functions whose execution are controlled i,e pause/start



function* generatorFunc(){
    yield 'Hello'
    yield 1200
    yield 'After'
    yield 'World'
}

const obj = generatorFunc();

console.log(obj.next().value)
console.log(obj.next().value)
console.log(obj.next().value)
