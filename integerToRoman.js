function intToRoman(num) {
    let romanMap  = [
        { symbol: "M", value: 1000 },
        { symbol: "CM", value: 900 },
        { symbol: "D", value: 500 },
        { symbol: "CD", value: 400 },
        { symbol: "C", value: 100 },
        { symbol: "XC", value: 90 },
        { symbol: "L", value: 50 },
        { symbol: "XL", value: 40 },
        { symbol: "X", value: 10 },
        { symbol: "IX", value: 9 },
        { symbol: "V", value: 5 },
        { symbol: "IV", value: 4 },
        { symbol: "I", value: 1 }
    ];
    let roman = '';
    for (const ele of romanMap) {
        const {symbol,value}=ele;
        while(num>=value){
            num-=value;
            roman+=symbol
            if (num===0)return roman
        }
    }
    return roman

}
console.log(intToRoman(58));
