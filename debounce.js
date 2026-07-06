function debounce(fn,delay){
    let timeId;
    return function(...args){
        if(timeId){
            clearTimeout(timeId)
        }
        timeId=setTimeout(()=>{
            fn.apply(this,args)
        },delay)
    }
}
function research(query){
    console.log(`searching for ${query}`);
    
}
const debounceResesarch=debounce(research,2500)
debounceResesarch("he")
debounceResesarch("hell")
debounceResesarch("hello")