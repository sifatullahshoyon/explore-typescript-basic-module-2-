{
  ///////////////////////// Start ////////////////

  // asynchronousTypescript

  // promise

  type Ttodo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };

  const getTodo = async (): Promise<Ttodo> => {
    const respone = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await respone.json();
    //    console.log(data);
    return data;
  };

  getTodo();

  type Tsomething = { something: string };

  // simulate
  const createPromise = (): Promise<Tsomething> => {
    return new Promise<Tsomething>((resolve, reject) => {
      const data: Tsomething = { something: "something" };
      if (data) {
        resolve(data);
      } else {
        reject("Failed to load data");
      }
    });
  };

  // calling create promise function

  const showData = async (): Promise<Tsomething> => {
    const data: Tsomething = await createPromise();
    // console.log(data);
    return data;
  };

  showData();

  ///////////////////////// End //////////////////////////
}
