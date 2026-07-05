//using set
function removeDuplicate(arr){
  let res=  new Set(arr)
  return [...res]
}
//using indexOf
function removeDuplicate(arr){
  let res=  arr.filter((ele,index)=>arr.indexOf(ele)===index)
  return res
}
// using reduce method
function removeDuplicate(arr){
  let res=  arr.reduce((pre,cur)=>(pre.includes(cur))?pre:[...pre,cur],[])
  return res
}
console.log(removeDuplicate([1,1,2,3,4,4,5,5,6]));
