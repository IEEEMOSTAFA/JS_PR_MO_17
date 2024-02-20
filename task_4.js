let array1 = [1, 2, 3, 4, 5]; // Array containing numbers
let array2 = ['apple', 'banana', 'orange']; // Array containing strings

let nonArray1 = 10; // Non-array value (number)
let nonArray2 = 'Hello'; // Non-array value (string)
let nonArray3 = { name: 'John', age: 30 }; // Non-array value (object)


// testing::
console.log("Is array1 an array ?",Array.isArray(array1));
console.log("Is nonArray2 an array ?",Array.isArray(nonArray2));
console.log("Is nonArray3 an array ?",Array.isArray(nonArray3));
console.log("Is array2 an array ?",Array.isArray(array2));
if(Array.isArray(array1) == true){
    console.log("yes");
}
else{
    console.log("No");
}
// --------------test2------------
if(Array.isArray(nonArray3) == true){
    console.log("yes");
}
else{
    console.log("No");
}
