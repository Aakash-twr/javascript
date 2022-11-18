console.log('Start');

const sub = new Promise((resolve,reject)=>{
    let b = true;
    if(b) resolve('Good')
    else reject(new Error('Not Good'));
})
console.log(sub)
sub.then((res)=>console.log(res)).catch((err)=>console.log(err))

console.log('End')