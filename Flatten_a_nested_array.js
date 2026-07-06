function falttenArray(arr) {

    let newarr = []
    for (const ele of arr) {
        if (Array.isArray(ele)) {
            newarr = newarr.concat(falttenArray(ele))
        }
        else{
            newarr.push(ele)
        }
    }
    return newarr
}
console.log(falttenArray([1, [2, 3], [4]]));
