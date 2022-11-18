// Javascript first execute the synchronous code then the asynchronous code.


// Async Await is a method by which we can use promises in a different way.
//

function func(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('resolve')
        },2000);
    })
}

const a = async()=>{
    try {
        const b = await func();
        console.log(b)
        console.log('last')
    } catch (error) {
       console.log(error);        
    }
}

a();