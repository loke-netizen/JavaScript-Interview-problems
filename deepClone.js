function deepClone(object) {
    if (typeof object !== "object" || object === null) return object;

    if (Array.isArray(object)) {
        let arrCopy = []
        for (let i = 0; i < object.length; i++) {
            arrCopy[i] = deepClone(object[i])
        }
        return arrCopy
    }
    let objCopy = {}
    for (const ele in object) {
        if (Object.hasOwn(object, ele)) {
            objCopy[ele] = deepClone(object[ele])
        }
    }
    return objCopy;
}
let object = {
    nme: "loke",
    age: 20,
    city: { town: "thanjavur" },
    vehicle: ["bike"]
}
const Clone = deepClone(object)
console.log(object);
console.log(Clone);
object.age = "twenty"
Clone.vehicle.pop()
console.log(object);
console.log(Clone);

// let object = {
//     nme: "loke",
//     age: 20,
//     city: { town: "thanjavur" },
//     vehicle: ["bike"]
// }
// let newobj={...object}//shallow copy
// let newobj2=JSON.parse(JSON.stringify(object))//deep copy