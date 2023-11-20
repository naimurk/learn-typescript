"use strict";
//1) array spread operator 
const arr1 = ["abul", "kevin",];
const arr2 = ["abul", "kevin",];
arr1.push(...arr2);
// 2) object spread operator
const obj = {
    name: "sayem",
    roll: 5
};
const objTwo = {
    name: "sayem",
    roll: 5
};
const objSpread = Object.assign(Object.assign({}, objTwo), obj);
// 3) rest operator
const restOperatorfunction = (...friends) => {
    friends.forEach((friend) => {
        console.log(friend);
        return [friend];
    });
};
restOperatorfunction("sayem", "anas");
// note : it is used bcz we can dynamically pass value when we call function
