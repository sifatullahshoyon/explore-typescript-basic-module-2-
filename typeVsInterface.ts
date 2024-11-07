{
  ///////////////////////// Start ////////////////

  // Type Vs Interface

  // Type alias:-
  type User1 = {
    name: string;
    age: number;
  };

  // const user1 : User1 = {
  //     name : 'sifat',
  //     age : 23,
  // };

  const user1: User2 = {
    // type alias এর পরিবর্তে type interface ব্যবহার করলে ও কোন সমস্যা নেই।
    name: "sifat",
    age: 23,
  };

  type RollNumber1 = number; // type alias

  type UserWithRole1 = User1 & { role: string }; // added extra properties

  const user11: UserWithRole1 = {
    name: "sifat",
    age: 23,
    role: "Developer",
  };

  // Array
  type Roll2 = number[];

  const roll2: Roll2 = [1, 2, 3, 4];

  // Function
  type Add1 = (num1: number, num2: number) => number;

  const add1: Add1 = (num1, num2) => num1 + num2;

  // Type Interface
  interface User2 {
    name: string;
    age: number;
  }

  // const user2 : User2 = {
  //     name : "sifat",
  //     age : 23
  // };

  type RollNumber2 = {}; // type interface

  interface UserWithRole2 extends User2 {
    // extends Keyword
    role: string; // added extra properties
  }

  const user2: UserWithRole2 = {
    name: "sifat",
    age: 23,
    role: "Developer",
  };

  // Array
  interface Roll3 {
    [index: number]: number;
  }

  const roll3: Roll3 = [1, 2, 3, 4];

  // Function
  interface Add2 {
    (num1: number, num2: number): number;
  }
  const add2: Add2 = (num1, num2) => num1 + num2;

  ///////////////////////// End //////////////////////////
}
