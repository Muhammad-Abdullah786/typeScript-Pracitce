// assume we have a class

class protectPerson {
  // private _age: number;

  constructor(protected age: number) {
    this.age = age;
  }

  get _age(): number {
    return this.age + 2;
  }
}

// i want to extend it like add more features so ....

class SubPerson extends protectPerson {
  isFamily: boolean = true;
  courseChange() {
    return (this.age = 44);
  }
}
// we need to use protected its just like private
