var obj1 ={
    "name":"Person1",
    "age":5
};

var obj2 ={
    "age":5,
    "name":"Person1"
    
};
var comparisionString = "Not Equal";
if(Object.keys(obj1).length === Object.keys(obj2).length){
    for (key in obj1){
        if(obj1[key] === obj2[key]){
            comparisionString = "Equal";
            continue;
        } else {
            comparisionString = "Not Equal";
            break;
        }
    }
} else {
    comparisionString = "Not Equal";
}
console.log("Objects are " + comparisionString);