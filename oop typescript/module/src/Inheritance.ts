{
  // inheritance
  class student {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    getSleep (numberOfhours: number){
        console.log(`${this.name} sleeping ${numberOfhours}`)
    }
  }

 const Newstudent = new student("Student", 30)
 Newstudent.getSleep(30)
}
