function chrCounts(str){
    str=str.toLowerCase();
    let counts={}
    for (const ele of str) {
        counts[ ele]=(counts[ele]||0)+1
    }
    return counts
}
let word="branch 'main' set up to track 'origin/main'"
console.log(chrCounts(word));
