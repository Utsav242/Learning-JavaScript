// Write a program for even number in js.


const myarr=[1,2,3,4,5,6,7,8,9,10];

function evenNumber(number){
    let storeEven= [];
    for(let i=0; i<number.length; i++){
        if(number[i] % 2 ===0){
            storeEven.push(number[i])
        }
    }
    return storeEven;
}

console.log(evenNumber(myarr))