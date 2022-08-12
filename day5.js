/*
Given an array of integers, find the first missing positive integer in linear time and constant space. 
In other words, find the lowest positive integer that does not exist in the array. 
The array can contain duplicates and negative numbers as well.
For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.


*/



const firstMissingPositive = (str) =>{
    let newStr = str.filter(x=> x >= 0).sort((a,b)=> a-b);
    console.log(newStr);
    let curr = 0;
    
    for(let i = 0; i < newStr.length; i++){
        
        if(newStr[i] > curr){
            return curr;
        }
        if(newStr[i] == curr){
            curr++;
        }
    }
    return curr
}

/*
This part contains the test to see the results
The results are displayed in the console
*/


let test = [];

for(let i = 0; i < 15; i++){
    test.push(Math.floor(10*Math.random(0,100)));
}


console.log(firstMissingPositive(test));