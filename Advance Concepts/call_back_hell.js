// CallBack function - The function which is called after sometime and allow us to do async operations

const cart = ['shoes','pants','kurt'];

// Callback hell - Callback functions nested one above another creates a pyramid like structure.


function thing1(callback){
    callback();
}
function thing2(callback){
    callback();
}
function thing3(callback){
    callback();
}


thing1(()=>{
    thing2(()=>{
        thing3(()=>{
            console.log('Done')
        })
    })
})

// Inversion of Control - Problem occur when we deal with multiple callbacks and we lose control over our program.

