var c = 0;
var n=parseInt(prompt("Enter the number:"));
for(var i=2;i<=n;i=i+1){
    if (n%i==0){
        c=c+1;
    }
    else{
        c==0;
        break;
    }
}
if (c==0){
    
    alert(n+ " is a Prime Number");
}
else{
    alert(n+" is not a Prime Number");
}
