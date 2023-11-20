{
  // generic function

  // 1) return array with generic
  const normalFunGeneric = <T>(param: T): T[] => [param];
  const people1 = normalFunGeneric<string>("bangladesh");
  const people2 = normalFunGeneric<number>(1);

  // 2 tuple Array with generic function
  const tupleFunGeneric = <T, X>(param1: T, Param2: X):[T,X]=> [
    param1,
    Param2,
  ];

  interface UserOne {
    name: string;
    age: number;
  }

  interface UserTwo {
    name: string;
    age: number;
  }
  const people3 = tupleFunGeneric<UserOne, UserTwo>(
    { age: 3, name: "bangladesh" },
    { age: 545, name: "Uganda" }
  );

  //   3) tupleFunGeneric
  const FunGenericAttach = <T>(param: T):T => {
    const ourCourse: string = "programming hero";
    return {
      ...param,
      course: ourCourse,
    };
  };
  FunGenericAttach<{ name: string; phone: number }>({
    name: "farhan",
    phone: 23423,
  });
}




  