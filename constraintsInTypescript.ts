{
  ///////////////////////// Start ////////////////

  // Constraints

  const addCourseToStudent = <T extends IstudentInfo>(student: T) => {
    const courser = "Next Level Courser";
    return {
      ...student,
      courser,
    };
  };

  // Type Declared
  interface IstudentInfo {
    id: number;
    name: string;
    email: string;
    devType?: string;
  }

  const student1 = addCourseToStudent({
    id: 1,
    name: "student1",
    email: "studnet1@gmail.com",
    devType: "level 1 developer",
  });
  const student2 = addCourseToStudent({
    id: 2,
    name: "student2",
    email: "studnet2@gmail.com",
    devType: "next level developer developer",
  });
  const student3 = addCourseToStudent({
    id: 3,
    name: "student3",
    email: "studnet3@gmail.com",
  });

  const student4 = addCourseToStudent({
    id: 4,
    name: "student4",
    email: "studnet4@gmail.com",
    devType: "python developer",
  });

  ///////////////////////// End //////////////////////////
}
