function palindrome(str){
    let frequencyMap={}
    for (const ele of str) {
        frequencyMap[ele]=(frequencyMap[ele]||0)+1
    }
    let oddValues=0
    for (const key in frequencyMap) {
        if(frequencyMap[key]%2===1){
            oddValues+=1
        }
    }
    return oddValues<=1
}
console.log(palindrome("loke"));
console.log(palindrome("civic"));
