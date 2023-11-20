"use strict";
{
    // generic function
    // 1) return array with generic
    const normalFunGeneric = (param) => [param];
    const people1 = normalFunGeneric("bangladesh");
    const people2 = normalFunGeneric(1);
    // 2 tuple Array with generic function
    const tupleFunGeneric = (param1, Param2) => [
        param1,
        Param2,
    ];
    const people3 = tupleFunGeneric({ age: 3, name: "bangladesh" }, { age: 545, name: "Uganda" });
    //   3) tupleFunGeneric
    const FunGenericAttach = (param) => {
        const ourCourse = "programming hero";
        return Object.assign(Object.assign({}, param), { course: ourCourse });
    };
    FunGenericAttach({
        name: "farhan",
        phone: 23423,
    });
}
