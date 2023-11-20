{
  // some important utilities
  type person = {
    name: string;
    role: string;
    contactNo: number;
    email?: string;
    age: number;
  };

  // 1 ) pick type => just pick
  type PickType = Pick<person, "age" | "email">;

  // 2) omit type => what key remove from the specific type
  type omitType = Omit<person, "name" | "role" | "age">;

  // 3) require type =>
  type requireType = Required<person>;

  // 5) partial type => optional all key
  type partialType = Partial<person>;

  //   6) readonly type =>
  type readonlyType = Readonly<person>;

  //   7) Record type
  type RecordType = Record<string, string>;
  const obj: RecordType = {
    name: "persone",
    age: "12",
  };

  type RecordType2 = Record<string, unknown>;
  let obj2: RecordType2 = {};
  obj2.name = "persone";
  obj2.age = 12;
}
