{
  //  1) normal  union with type alias and literal type
  type Developer = "frontend developer" | "backend developer";
  const aDeveloper: Developer = "backend developer";

  // 2) obj union with type alias and literal type
  type developerTypeObj = {
    name: string;
    developerDesignation: "frontend developer" | "backend developer";
    email?: string;
  };

  const obj: developerTypeObj = {
    name: "sayem",
    developerDesignation: "frontend developer",
  };

  const obj2: developerTypeObj = {
    name: "sayem",
    developerDesignation: "frontend developer",
    email: "sayem@example.com",
  };

  // 3)obj union with type alias and literal type
  type typeArray = string[] | number[];

  // 4) function union with type alias
  type UnionFunction =
    | ((a: number, b: number) => number)
    | ((a: string, b: string) => string | number);

  // 5) normal intersection with type alias and literal type
  type FullStactDeveloper = "frontend developer" & "backend developer";

  const aFullStactDeveloper: FullStactDeveloper =
    "fronted developer backed developer";

  // 6) intersection also  happen for object

  //   7) how to use intersection functions with type alias
}
