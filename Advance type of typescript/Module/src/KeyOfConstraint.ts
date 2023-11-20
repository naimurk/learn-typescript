{
  // key of generic constraint
  type vehicle = {
    name: string;
    price: number;
  };

  const obj = {
    name: "name",
  };

  type vehicleType = "name" | "price";
  //   note :same mean line no 15

  type keyofConstraint = keyof vehicle;
  // note : you cant write object after keyof

  //   2) an0ther uses of keyof

  const getObjectKeyValue = <T, Y extends keyof T>(obj: T, key: Y) => {
    return obj[key];
  };

  // interface UserOne {
  //   name: string;
  //   roll: number;
  // }

  // const userOne: UserOne = {
  //   name: "userOne",
  //   roll: 123,
  // };

  getObjectKeyValue({ name: "sayem", roll: "14" }, "name");
  getObjectKeyValue<{ name: string; roll: string }, "name" | "roll">(
    { name: "sayem", roll: "14" },
    "name"
  );
  //
}
