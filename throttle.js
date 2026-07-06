function throttle(fn,delay){
    let lastTime=0
    return function (...args){
        let newTime=new Date().getTime();
        if(newTime-lastTime>=delay){
            lastTime=newTime; 
            fn.apply(this,args)
        }
    }
}
function resize(){
    console.log("resized on :",new Date().toLocaleTimeString());
    
}
throttle(resize,2500)
window.addEventListener("resize",throttle(resize,2500))