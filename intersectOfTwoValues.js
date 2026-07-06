function intersect(arr1,arr2){
    arr1=new Set(arr1)
    let res= arr2.filter(ele=>arr1.has(ele))
   return [...new Set(res)]
}
console.log(intersect([1,2,3,4,4],[1,4,4,5,6,6]));
