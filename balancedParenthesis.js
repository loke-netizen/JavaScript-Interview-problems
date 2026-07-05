function balancedParenthesisOrNot(str){
    let stack=[]
    for (const ele of str) {
        if(ele==="("){
            stack.push(ele)
        }
        else if(ele===")"){
            if (stack.length===0) return false;
            stack.pop()
        }
    }
    return stack.length===0

}
console.log(balancedParenthesisOrNot("(()))(("));
console.log(balancedParenthesisOrNot("(())"));
