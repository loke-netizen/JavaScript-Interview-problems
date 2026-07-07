function products(arr) {
    let max = -Infinity
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let product = arr[i] * arr[j];
            if (max < product) {
                max = product
            }
        }

    }
    return max
}
console.log(products([1,3,4,5,6,6,6]));
