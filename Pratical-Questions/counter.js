// Write a function for counter ---leet code.

function counterFun(){
    let count =0;
    return()=>{
        count++;
        console.log(count)
     
    }
  
}
let counter = counterFun();
counter();
counter();
counter();
