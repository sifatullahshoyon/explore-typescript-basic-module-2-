{
  ///////////////////////// Start ////////////////

  // utility Types:-
  // Pick

  type Tperson = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  type TnameAge = Pick<Tperson, "name" | "age">;

  // Omit
  type TcontactInfo = Omit<Tperson, "name" | "age">;

  // Required
  type TpersonRequired = Required<Tperson>;

  // Partial
  type TpersonPartial = Partial<Tperson>;

  // Readonly
  type TpersonalReadonly = Readonly<Tperson>;

  // Record
  type TmyObj = {
    a: string;
    b: string;
  };

  const obj1: TmyObj = {
    a: "aa",
    b: "bb",
    // c: "cc", // Object literal may only specify known properties, and 'c' does not exist in type 'TmyObj'
  };

  type TmyObj2 = Record<string, string>;

  const emptyObj: Record<string, unknown> = {};

  const obj2: TmyObj2 = {
    a: "aa",
    b: "bb",
    c: "cc",
  };

  type TemptyObj = Record<string, unknown>;

  const emptyObj2: TemptyObj = {
    a: "aa",
    b: "bb",
    c: true,
    d: "dd",
    e: 688,
  };

  ///////////////////////// End //////////////////////////
}
