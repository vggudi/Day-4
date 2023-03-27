let obj1 ={
    "name":"Person1",
    "age":5
}

let obj2 ={
    "age":5,
    "name":"Person1"
    
}
let comparisionString = "Not Equal";
if(Object.keys(obj1).length === Object.keys(obj2).length){
    for (key in obj1){
        if(obj1[key] === obj2[key]){
            comparisionString = "Equal";
        } else {
            comparisionString = "Not Equal";
        }
    }
} else {
    comparisionString = "Not Equal";
}
console.log("Objects are " + comparisionString);