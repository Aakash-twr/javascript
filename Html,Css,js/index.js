// let a = document.getElementById('head')
// a.style.color='red';

// let b = document.title;
// document.write(b);

// let c = document.body.style
// // c.background='yellow'

// let a = document.body.childNodes;
// let d = Array.from(a);
// console.log(d)


// let c = document.body.hasChildNodes();
// console.log(c)


// let b = document.body;
// console.log(b.firstElementChild); // element navigation


// console.log(b.nextElementSibling)

// document.getElementById('first').innerText='Hello Good Morning';


function updateText(id){
    return function(content){
        document.querySelector("#"+id).textContent=content;
    }
}

const changeContent = updateText('heading');

changeContent('My Boy Here is your Father')

const obj = {
    name:'Watson'
}

const strObj = JSON.stringify(obj);

localStorage.setItem('Key',strObj)

console.log(JSON.parse(strObj))

