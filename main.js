
function fibonaciii(num){
    let a;
    if (num<=1) return 1;
    return a = fibonaciii(num - 1) + fibonaciii(num -2);
    
}

console.log(fibonaciii(7))



const maxchan = (nums) => {
    let xmax = -1;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] % 2 == 0 && nums[i] > xmax ){
            xmax = nums[i];
        }
    }
    return xmax
}

console.log(maxchan([0,2,3,4,7,8])) 





















