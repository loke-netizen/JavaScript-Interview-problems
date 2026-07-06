function romanToInt(roman){
    const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};
let num=0;
for(let i=0;i<roman.length;i++){
    if(romanMap[roman[i]]<romanMap[roman[i+1]]){
        num-=romanMap[roman[i]]
    }
    else{
       num+= romanMap[roman[i]]
    }
}
return num
}
console.log(romanToInt("XII"));