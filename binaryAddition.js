function binaryAddition(b1,b2){
    
    let maxi=Math.max(b1.length,b2.length)
    b1=String(b1).padStart(maxi,"0")
    b2=String(b2).padStart(maxi,"0")

    let carry=0;
    let res=""
    for(let i=maxi-1;i>=0;i--){
       let sum=parseInt(b1[i])+parseInt(b2[i])+carry;
        carry=Math.floor(sum/2);
        res=sum%2+res
    }
    if(carry){
        res=carry+res
    }
    return res
}
console.log(binaryAddition("110","100"));
