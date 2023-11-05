"use strict";
{
    // type assertions/typeNarrowing=> we know better type declarations than typescript
    // typescript will believe you it can't check what type it is
    //   1) any type
    let anything = "naimur";
    anything = "sayem";
    //   note : anything variable do not show any method bcz it don't what type it is
    // 2) type assertion use
    let sayem;
    sayem = [1, 24, 3434];
    sayem.toFixed(2);
    //  then you can say it will be string then it show string method
    //2)  assertion use in function
    const kgToGram = (value) => {
        if (typeof value === "number") {
            const convertVaue = value * 1000;
            return convertVaue;
        }
        else if (typeof value === "string") {
            const convertVaue = parseFloat(value) * 1000;
            return convertVaue;
        }
    };
    const result = kgToGram("1000");
    try {
    }
    catch (error) {
        console.log(error);
    }
    //   note : so you can also use assertion with type alias
}
