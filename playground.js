function outer(){
    const a = 10;
    function inner(){
        console.log(a);
    }
    function innerNext(){
        console.log('next',a);
    }
    return {
        inner,
        innerNext
    }
}

const x = outer().inner;
const z = outer().innerNext;
x();
z();