{
  // type interface
  //  like a type alias but not to use in primitive data types

  // 1) interface use in object
  interface userOne {
    name: string;
    age: number;
  }

  //   2) normal type alias
  type NormalTypeAlias = {
    name: string;
    age: number;
  };

  const user: userOne = {
    age: 5,
    name: "sayem",
  };

  //   3) type alias extend with interface
  type UerTwo = userOne & { role: string };
  const newUser: UerTwo = {
    age: 5,
    name: "sayem",
    role: "manager",
  };

  //   4) interface extend with type alias
  interface extendInterface extends NormalTypeAlias {
    role: string;
    companyName: "programming hero";
  }

  const userNew: extendInterface = {
    companyName: "programming hero",
    age: 5,
    name: "sayem",
    role: "manager",
  };

  // 5 ) type interface use in array
  interface arrInterface {
    [index: number]: string;
  }

  const arr: arrInterface[] = ["sayem", "programming hero"];

  //  6) type interface use in function
  interface functionInterface {
    (num1: number, num2: number): number;
  }

  const fun: functionInterface = (number1: number, number2: number) =>
    number1 * number2;
}
