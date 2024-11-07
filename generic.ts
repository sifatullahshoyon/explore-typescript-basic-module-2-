{
  ///////////////////////// Start ////////////////

  // Generic Type

  // type GenericArray = Array<Number>;

  // type GenericArray<param> = Array<param>;

  type GenericArray<T> = Array<T>;

  // const rollNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

  // const rollNumbers: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8];

  const rollNumbers: GenericArray<number> = [1, 2, 3, 4, 5, 6, 7, 8];

  // const mentors: string[] = ['Mr.x' , 'Mr.y' , 'Mr.z' , ];

  // const mentors: Array<string> = ['Mr.x' , 'Mr.y' , 'Mr.z' , ];

  const mentors: GenericArray<string> = ["Mr.x", "Mr.y", "Mr.z"];

  // const boolArray: boolean[] = [true, false, false];

  // const boolArray: Array<boolean> = [true, false, false];

  const boolArray: GenericArray<boolean> = [true, false, false];

  // function
  const add = (x: number, y: number): number => x + y;

  add(10, 20);

  // array of objects:-
  // const users : GenericArray<object> = [ // GenericArray<object> this type is not recommended
  //         {
  //             name: 'sifat',
  //             age: 25
  //         },
  //         {
  //             name: 'shoyon',
  //             age: "23"
  //         }

  // ];

  interface User {
    name: string;
    age: number;
  }

  const users: GenericArray<User> = [
    // Declared specifically value is most preferable
    {
      name: "sifat",
      age: 25,
    },
    {
      name: "shoyon",
      age: 23,
    },
  ];

  // Generic Tuple

  type GenericTuple1<x, y> = [x, y];
  type GenericTuple2<x, y, z> = [x, y, z];

  const manus: GenericTuple1<string, string> = ["Mr.x", "Mr.y"];

  const userWithId: GenericTuple2<
    number,
    { name: string; email: string },
    boolean
  > = [2356, { name: "sifat", email: "a@gmail.com" }, true];

  ///////////////////////// End //////////////////////////
}
