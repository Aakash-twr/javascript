const promise = new Promise((resolve,reject)=>{
    console.log('first');
    setTimeout(()=>{
       console.log('second');
    },2000)
})   // It will execute anyhow If promise is defined, it will get executed


// Observable is similar to Promises but it will not start executing until its not subscribed ot triggered
// by a subscriber