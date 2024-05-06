// Write a function to check largest number in array.

const myarr = [1,2,3,4,5,63,2,4,67,89,12];

function largestNumber(number){
    let storeLargest = myarr[0]; // Initialize max with the first element of the array
    for(let i=0; i<number.length; i++){
        if(number[i]>storeLargest){
            storeLargest=(number[i])
        }
    }
    return storeLargest;
}

console.log(largestNumber(myarr))