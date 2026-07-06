function missingNumber(arr){
    if(arr.length===0)return null
    let n=arr.length+1
    let totalUsingFormula=n*(n+1)/2
    let manual=arr.reduce((pre,cur)=>pre+cur,0)
    return totalUsingFormula-manual
}
let array=[1,2,3,4,6]
console.log(missingNumber(array));
