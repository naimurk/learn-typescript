"use strict";
// 1) generic constraints of type script
const consTraints = (param) => {
    return Object.assign(Object.assign({}, param), { companyNmae: "sayem" });
};
consTraints({ id: 24234, type: "student", name: "sayem" });
