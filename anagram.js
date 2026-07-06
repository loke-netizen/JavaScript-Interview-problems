function anagram(str1,str2){
    str1=str1.replace(/\s+/g,"").toLowerCase();
    str2=str2.replace(/\s+/g,"").toLowerCase();
    if(str1.length!==str2.length)return false;

    let frequencyMap1={}
    let frequencyMap2={}

    for (const ele of str1) {
        frequencyMap1[ele]=(frequencyMap1[ele]||0)+1// try live without()
    }
     for (const ele of str2) {
        frequencyMap2[ele]=(frequencyMap2[ele]||0)+1// try live without()
    }
    for (const key in frequencyMap1) {
       if( frequencyMap1[key]!==frequencyMap2[key]) return false
    }
    return true

}
console.log(anagram("civic","civic"));
console.log(anagram("silent","listen"));
console.log(anagram("hello","world"));
