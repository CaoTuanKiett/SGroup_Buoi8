

function fibonaci() {

    let num = document.getElementById("txtFibo").value ;

    let a = 1, b = 0, temp = 1;
  
    while(num >= 0) {
      temp = a;
      a = a + b;
      b = temp;
      num --;
    }
    alert(b);
  }



const maxchan = () => {
    let nums = document.getElementById("txtMaxChan").value ;
    let xmax = -1;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] % 2 == 0 && nums[i] > xmax ){
            xmax = nums[i];
        }
    }
    alert(xmax) 
}



















