
// looked up and mapped types


// 1) looked up 
type area = {
    height : number;
    width: string
}

type anotherArea = area["height"]


// 2) mapped types
type area2 =  {
    height: number;
    width: number;
}

type  MappedAreaToString = {
    [key in keyof area2]:string
}

// with generic mapped types and lookup types

type MappedWithGeneric <T> = {
    [key in keyof T]: T[key]
}

const obj:MappedWithGeneric<{height: string , width: number}> ={
    height: "1000",
    width : 1000,
}


