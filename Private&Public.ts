class User {
  email: string;
  name: string;
  role: "guest" | "user" | "admin";
  private readonly city: string;
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

class testingUser {
  constructor(
    private usrId: number,
    public email: string,
    public name: string,
    readonly city: string
  ) {
    this.email = email;
    this.name = name;
    this.city = city;
    this.usrId = usrId;
  }
}

// const newUser = new User("ab@ab.com", "ab");
// newUser;
