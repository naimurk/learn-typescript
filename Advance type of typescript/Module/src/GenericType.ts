{
  // generic type
  //  purpose of generic type => we can reusable with dynamically
  //   when you you 1 param in array  you can add more element in array but when you use 2 paras it behaves like tuple

  // 1) when you you 1 param you can add more element in array but when you use 2 paras it behaves like tuple
  type GenericType<T> = Array<T>;
  const arr: GenericType<string> = ["ball", "plane"];
  const arr2: GenericType<number> = [1, 2];
  console.log(arr, arr2);

  //   2 generic type use in  object
  const obj: GenericType<{ name: string; role: string; age: number }> = [
    { name: "sayem", role: "manager", age: 5 },
  ];

  //   3) generic tuple array

  type GenericTuple<x, y> = [x, y];
  const newArr: GenericTuple<number, { name: string; age: number }> = [
    5,

    { name: "sayem", age: 5 },
  ];

  //   when you you 1 param in array  you can add more element in array but when you use 2 paras it behaves like tuple

  //  4) you can also use obj
  type GenericTypeObj<T> = { name: T };
  const ad: GenericTypeObj<string> = {
    name: "sayem",
  };
}
