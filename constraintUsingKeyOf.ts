{
  ///////////////////////// Start ////////////////

  // Generic Gonstraint with keyof operator

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bikes" | "car" | "ship"; // Manually

  type Owner2 = keyof Vehicle; // using keyof operator

  const person1: Owner = "bikes";

  const person2: Owner2 = "ship";
  // console.log(person2);

  // const getPropertyValue = (obj : object , key : string) => {
  //     return obj[key];
  // }; // use  basic

  // const getPropertyValue = <X, Y extends 'name' | 'age' | 'address'> (obj : X , key : Y) => {
  //     return obj[key];
  // }; use union operator

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  // object exm:
  const user = {
    name: "sifat",
    age: 64,
    address: "dhk",
  };

  const car = { model: "Toyota 100", year: 200 };

  const result1 = getPropertyValue(user, "age");
  const result2 = getPropertyValue(car, "year");

  // obj[key]

  ///////////////////////// End //////////////////////////
}
