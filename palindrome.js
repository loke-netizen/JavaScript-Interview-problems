function palindrome(str){
    str=str.toLowerCase();
    let reverse=str.split("").reverse().join("")
    return reverse===str
}
console.log(palindrome("madam"));
