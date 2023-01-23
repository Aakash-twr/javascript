// Recursion is a technique in which we solve a problem dividing it into smaller problems.
// It can be used in a situation where an operation depends on its previous results for getting the
// solution.


function recursive(num){
   if(num==0) return;
   console.log(num);
   recursive(num-1)
}

recursive(10);