{
  ///////////////////////// Start ////////////////

  // Conditional types

  type a1 = number;
  type b1 = undefined;

  type x = a1 extends null ? true : false;

  type y = a1 extends null ? true : b1 extends undefined ? undefined : any;

  type Tsheikh = {
    bike: string;
    car: string;
    ship: string;
  };

  // car ache kina | bike ache kina | ship ache kina
  // type checkVehicle<T> = T extends 'bike' | 'car' | 'ship' ? true : false; // manually check

  // keyof Tsheikh 'bike' | 'car' | 'ship'
  type checkVehicle<T> = T extends keyof Tsheikh ? true : false; // checking of keyof operator with generic

  type hasCar = checkVehicle<"car">; // true

  type hasTractor = checkVehicle<"tractor">; // false

  ///////////////////////// End //////////////////////////
}
