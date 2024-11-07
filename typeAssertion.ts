{
  ///////////////////////// Start ////////////////

  // Type Assertion

  let anything: any;

  anything = "learning Next Level Web Development";

  // (anything as string).length;

  anything = 265;

  (anything as number).toFixed();

  const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return `The converted Value is ${convertedValue}`;
    } else {
      return value * 1000;
    };
  };

  const result1 = kgToGm(1000) as number;
  const result2 = kgToGm("2000") as string;

//   console.log(result2);

  // try catch block

  type CustomError = {
    message: string;
  };

  try {
    // 
  } catch (error) {
    // console.log(error.message); // 'error' is of type 'unknown'.
    console.log((error as CustomError).message);
  }

  ///////////////////////// End //////////////////////////
}
