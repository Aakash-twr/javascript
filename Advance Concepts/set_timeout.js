function x(){
    for(var i =0;i<5;i++){
        function close(x){
         setTimeout(()=>{
             console.log(x);
         },i*1000);
        }
        close(i);
     }
}
x();
// prints:
// 0
// 1
// 2
// 3
// 4