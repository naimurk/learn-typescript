{
    // note purpose of the type alias 
    // by type alias we can create custom type then we can reuse the custom type when we need 

    // note : it basically use suppose we have two same object and we used same type the we can create a type alias then used two object


    //1) object type alias
    type Sameobj = {
        name: string,
        contactNo?: string,
        gender: string
    }

    const obj1:Sameobj = {
        gender: 'male',
        name: "mezba"
    }

    const obj12:Sameobj = {
        gender: 'male',
        name: "mezba",
        contactNo: "same"
    }

    //2) array type alias
    type Samearray = string[]
    
    const arr1:Samearray = ["name", "contact"]
    const arr2:Samearray = ["name", "contact"]
    // 3) normal variable type alias
    type Normal = string
    const userName:Normal = "userName"

    // 4) function type alias
    type FunctionAlias = (num:number, num2:number)=> number;

    const fun:FunctionAlias = (numm , numm2) => numm*numm2
}