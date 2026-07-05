function nonRepeatStr(str) {
    str = str.toLowerCase()
    let counts = {}
    for (const ele of str) {
        counts[ele] = (counts[ele] || 0) + 1
    }
    for (const ele of str) {
        if (counts[ele] === 1) return ele

    }
    return ""
}
console.log(nonRepeatStr("llaok"));
