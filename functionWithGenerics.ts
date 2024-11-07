{
  ///////////////////////// Start ////////////////

  // Function with generics:

  const createArray = (params: string): string[] => {
    return [params];
  };

  const createArrayWithGenerics = <T>(params: T): T[] => {
    return [params];
  };

  const res1 = createArray("Bangladesh");
  const res2 = createArrayWithGenerics<string>("programming hero");
  // const res3 = createArrayWithGenerics<object>({id : 1 , name: 'sifat'}); // it not preferable

  // const res3 = createArrayWithGenerics<{id : number; name: string}>({id : 1 , name: 'sifat'}); // it not preferable

  type User = { id: number; name: string }; // Type Aliases & Type Interface You can use any type you want

  const res3 = createArrayWithGenerics<User>({ id: 1, name: "sifat" }); // This Way is perfect

  // console.log(res3);

  // create Array With Tuple:-
  const createArrayWithTuple = <T, Q>(params1: T, params2: Q): [T, Q] => {
    return [params1, params2];
  };

  const res11 = createArrayWithTuple<string, number>("Bangladesh", 653);
  const res22 = createArrayWithGenerics<string>("programming hero");
  // const res3 = createArrayWithGenerics<object>({id : 1 , name: 'sifat'}); // it not preferable

  // const res3 = createArrayWithGenerics<{id : number; name: string}>({id : 1 , name: 'sifat'}); // it not preferable

  type User1 = { id: number; name: string }; // Type Aliases & Type Interface You can use any type you want

  const res33 = createArrayWithTuple<string, { id: number; name: string }>(
    "Hello Generics",
    { id: 1, name: "sifat" }
  ); // This Way is perfect

  // console.log(res33);

  const addCourseToStudent = <T>(student: T) => {
    const courser = "Next Level Courser";
    return {
      ...student,
      courser,
    };
  };

  // Type Declared
  interface IstudentInfo {
    name: string;
    email: string;
    devType?: string;
  }

  const student1 = addCourseToStudent<IstudentInfo>({
    name: "student1",
    email: "studnet1@gmail.com",
    devType: "level 1 developer",
  });
  const student2 = addCourseToStudent<IstudentInfo>({
    name: "student2",
    email: "studnet2@gmail.com",
    devType: "next level developer developer",
  });
  const student3 = addCourseToStudent<IstudentInfo>({
    name: "student3",
    email: "studnet3@gmail.com",
  });

  ///////////////////////// End //////////////////////////
}
