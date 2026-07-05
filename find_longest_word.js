function findLongestWord(str){
    str=str.split(" ")

    let longword=''
    for (const ele of str) {
        if(longword.length<ele.length){
            longword=ele
        }
    }
    return longword
}
console.log(findLongestWord("ReferenceError: Cannot access 'word' before initialization"));
