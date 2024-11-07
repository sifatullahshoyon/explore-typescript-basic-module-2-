{
  ///////////////////////// Start ////////////////

  // Mapped Types:-
  const arrOfNumbers: number[] = [1, 2, 3, 4];

  // const arrOfNumbers: string[] = ["1", "2", "3", "4"];

  const arrOfStrings: string[] = arrOfNumbers.map((str) => str.toString());

  // console.log(arrOfStrings);

  type TareaNumber = {
    height: number;
    widht: number;
  };

  type Theight = TareaNumber["height"]; // look up type

  // type TareaString = {
  //     height: string;
  //     width: string;
  // };

  // type TareaString = {
  //     [key in 'height' | 'width' ] : string;
  // };

  type TareaString = {
    [key in keyof TareaNumber]: string;
  };

  // mapped with generic

  // T => {height : string ; width: number};
  // key => ["height"];
  // key => ["width"];
  type TareaString1<T> = {
    // [key in keyof TareaNumber] : string;
    [key in keyof T]: T[key];
  };

  const area1: TareaString1<{ height: string; width: number }> = {
    height: "12",
    width: 65,
  };

  ///////////////////////// End //////////////////////////
}
