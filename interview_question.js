// 1.  let a = []
// let b = []

// console.log(a==b);  false
// console.log(a===b);  false

// 2. let a = []
// let b = a;
// console.log(a==b); true
// console.log(a===b); true

// 3.console.log(typeof NaN);  number

// 4.let data = 10 - -10
// console.log(data);   20

// 5.let data = {name:'Farmer'}
// console.log(delete data.name); // true  used for deleting property not obj

// 6.let data = [1,2,3,4]
// let [y] = data;

// console.log(y);  1

// 7.let data = {name:'Far'}
// let {name} = data
// console.log(name);

// 8.let data = {name:'Harry'}
// let info = {id:1}

// 9.let newData = {
//     ...data,
//     ...info
// }
// console.log(newData);

// 10.let result = null || false || ''
// console.log(result);  last value ''

// 11.JSON.parse()
// Parses JSON to javascript values


// 12.let name = 'sam'

// function getName(){
//     console.log(name);  // sam without let inside
//     let name = 'temp'   // throws error
// }

// getName()

//13. function getSum(a,b,c){
//     return a+b+c
// }
// console.log(getSum(...[1,2,3]));

//14. let a = 2;
// setTimeout(()=>{
//    console.log(a);
// },0)
// a=100;

// 15. let a =1;
// let b =1;
// let c = 2;
// console.log(a===b===--c);  false

//16. console.log([[[[]]]]);  // nested array


// 17. for(let i=0;i<3;i++){
//     setTimeout(()=>{
//      console.log(i);
//     },1)
// }
// var - 3 3 3 // let - 0 1 2

// 18. console.log(+true);   1
//   console.log(typeof +true);  number

//  19. let data = 'small'
// let obj = {
//     small:'size'
// }
// console.log(obj[data]);
// console.log(obj["small"]);
// console.log(obj.small);
// console.log(obj.data);  // undefined

// 20.function getNum(a,b){
//     console.log(a+b);
// }

// getNum(1,'2') //12

// 21. console.log(typeof []);  //object

// 22.const sum = eval("10*10+5")

// console.log(sum);  105

//23. let person = {name:'Jack'}
// let member = [person]
// person=null
// console.log(member);  as it is





