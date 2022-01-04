var num=parseInt(prompt("Enter the Number :"));
var even=[];
for(var i=1;i<=num;i=i+1){
    if(i%2===0){
      even.push(i)
    }
}
alert("Even numbers between 0 and "+num+" : "+even);
