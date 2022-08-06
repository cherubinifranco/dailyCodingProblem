const ways = [2,3,5];

let res = 0;
const stairCaseProblem = (steps) => {
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

console.log(stairCaseProblem(10))