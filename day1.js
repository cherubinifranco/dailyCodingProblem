/*
There's a staircase with N steps, and you can climb 1 or 2 steps at a time. 
Given N, write a function that returns the number of unique ways you can climb the staircase. The order of the steps matters.

For example, if N is 4, then there are 5 unique ways:

1, 1, 1, 1
2, 1, 1
1, 2, 1
1, 1, 2
2, 2

What if, instead of being able to climb 1 or 2 steps at a time, you could climb any number from a set of positive integers X? 
For example, if X = {1, 3, 5}, you could climb 1, 3, or 5 steps at a time. Generalize your function to take in X.

*/
const ways = [2,3,5];

let res = 0;
const stairCaseProblem = (steps, ways) => {
    ways.forEach(x=>{
        if(steps - x > 0){
            stairCaseProblem(steps - x);
        }
        if(steps - x == 0){
            res++
        }
    })
    return res;
}

console.log(stairCaseProblem(10, [2,3,5]))