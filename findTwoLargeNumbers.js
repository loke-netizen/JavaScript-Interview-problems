function largeproduct(arr){
    let max1=-Infinity
    let max2=-Infinity
    let max1index;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max1){
            max1=arr[i]
            max1index=i
        }
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max2&&i!==max1index){
            max2=arr[i]
        }
    }
    return{ max1,max2}
}
console.log(largeproduct([1,2,3,4,5,6,6]));