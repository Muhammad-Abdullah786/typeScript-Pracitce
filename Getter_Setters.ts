// class getterUser {
//   constructor(
//     public email: string,
//     public name: string,
//     readonly city: string,
//     private usrId?: number,
//     private courseCount?: number
//   ) {
//     this.email = email;
//     this.name = name;
//     this.city = city;
//     this.usrId = usrId;
//   }

//   get getAnEmail(): string {
//     return `hello ${this.email}`;
//   }
//   get _courseCount(): string {
//     return `the cours count is ${this.courseCount}`;
//   }
//   set _courseCount(count: number) {
//     if (count === 0) {
//       throw new Error("course must never be 0");
//     }
//     this.courseCount = count;
//   }
// }

// const hello = new getterUser("email", "name", "city", 333);
// // hello.name

class Person {
  // private _age: number;

  constructor(private age: number) {
    this.age = age;
  }

  // Getter for age
  get _age(): number {
    return this.age + 2;
  }
}

const person = new Person(25);
console.log(person._age); // Outputs: 25 (invokes the getter method)
