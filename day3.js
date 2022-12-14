/*
Given an array of integers, return a new array such that each element at 
index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. 
If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division?
*/

const input = [3,2,1];

// const productAllNumbers = arr => arr.map(x=> arr.reduce((prev,curr)=> prev * curr, 1)/x);

const productAllNumbers = arr => {
    let result = [];
    for(let i in arr){
        let x = arr.shift();
        result.push(arr.reduce((prev, curr)=> prev*curr, 1));
        arr.push(x);
    }
    return result;
}

console.log(productAllNumbers(input));