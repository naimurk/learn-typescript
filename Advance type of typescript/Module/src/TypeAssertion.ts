{
  // type assertions/typeNarrowing=> we know better type declarations than typescript
  // typescript will believe you it can't check what type it is

  //   1) any type
  let anything: any = "naimur";
  anything = "sayem";

  //   note : anything variable do not show any method bcz it don't what type it is

  // 2) type assertion use
  let sayem: any;
  sayem = [1, 24, 3434];
  (sayem as number).toFixed(2);
  //  then you can say it will be string then it show string method

  //2)  assertion use in function
  const kgToGram = (value: string | number): number | undefined | string => {
    if (typeof value === "number") {
      const convertVaue = value * 1000;
      return convertVaue;
    } else if (typeof value === "string") {
      const convertVaue = parseFloat(value) * 1000;
      return convertVaue;
    }
  };

  const result = kgToGram('1000') as number;
  //   note: the function will be receive number and string , when i call the function we can specifically say that it will be number or string and typescript not to checkt it whether it number or string

  //  3) assertion use in type alias
  type Assertion = {
    message: string;
    number: number;
  };
  try {
  } catch (error) {
    console.log(error as Assertion);
  }

  //   note : so you can also use assertion with type alias
}
