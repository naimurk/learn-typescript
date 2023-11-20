{
  // conditional types=> a type will depend on another type with condition

  // 1)
  type a = number;
  type b = string;

  type cWithCondition = a extends null ? true : false;
  type dWithCondition = a extends null
    ? true
    : b extends undefined
    ? undefined
    : any;

  //    2) generic types with condition
  type sheikh = {
    name: string;
    car: string;
    plane: string;
    bike: string;
  };

  type GenericType<T> = T extends keyof sheikh ? true : false;

  type hasbike = GenericType<"bike">;
}
