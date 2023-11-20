// 1) generic constraints of type script
const consTraints = <T extends { id: number; type: "student" }>(param: T) => {
  return {
    ...param,
    companyNmae: "sayem",
  };
};

interface userOne {
  id: number;
  type: "student";
  name: string;
}
consTraints<userOne>({ id: 24234, type: "student", name: "sayem" });
