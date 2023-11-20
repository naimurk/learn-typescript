"use strict";
{
    const obj = {
        name: "name",
    };
    // note : you cant write object after keyof
    //   2) an0ther uses of keyof
    const getObjectKeyValue = (obj, key) => {
        return obj[key];
    };
    const userOne = {
        name: "userOne",
        roll: 123,
    };
    getObjectKeyValue(userOne, "name");
}
