
//1) array spread operator 
const arr1:string[] = ["abul", "kevin", ]
const arr2:string[] = ["abul", "kevin", ]

arr1.push(...arr2)


// 2) object spread operator

const obj = {
    name: "sayem",
    roll: 5
}
const objTwo = {
    name: "sayem",
    roll: 5
}

const objSpread = {
    ...objTwo, 
    ...obj
}



// 3) rest operator

const restOperatorfunction = (...friends:string[]){
    friends.forEach((friend:string) => console.log(friend))
}

// note : it is used bcz we can dynamically pass value when we call function


