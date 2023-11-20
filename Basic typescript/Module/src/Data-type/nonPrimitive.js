"use strict";
// ____________array ---------------
// 1) implicit array
let arr = [1, "hello"];
arr.push(5);
arr.push("valo");
arr.push("hello kemon acho");
// console.log(arr)
// note : this is string , and number array of implicit you don't need order maintain and you can push unlimited element inside the
// 2)string Array
let stringArray = ["hello", "kemon"];
// 3) number Array
let numberArray = [1, 343, 34, 343];
// 4 Tuple array
let tupleArray = [1, "hello"];
let mixedArray = [1, "hello", true];
// note : tuple provide us to much strict , it allow us how much element can set in your array and what order you have to follow
// 5) union Array
let unionArray = [1, 344, 343, 343, "hello", "34", 53];
// note : y dont need to main length of element and no need to main order just maintain type what you have declared
// 6) literal Array
let literalArray = ["sayem", "sayem", "sayem", "sayem"];
// note: literal type means when a value behave like a type
// 7)  literal and tuple arrays
let literalAndTubpleArray = ["sayem", "nahid"];
// ____________array end  ---------------
// -----------------object -----------------
// 1)implicit object type
const user = {
    firstName: "John",
    age: 16,
    address: "aman bazar",
};
// 2) explicit object type
let data = {
    name: "John",
    address: "aman bazar",
    age: 16,
    company: "z tech",
};
// 3 readonly object type
let readonly = {
    name: "John",
    address: "aman bazar",
    age: 16,
    company: "programming hero",
};
// note : where you use readonly then you can not modified the value of the property after declaration of the value of the property
// 4 ) literal object
let literalObj = {
    name: "john",
    company: "programming hero",
};
// note : where you use literal  you can not modify when you are declaring value of the property and also you can not modify after declaration of the value of the property that is the different between literal and readonly
