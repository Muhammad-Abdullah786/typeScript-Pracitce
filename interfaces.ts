// type agr = {
//   cuponName: string;
//   value: number;
// };         /// like this i put this type in getcupon  as a pram

interface MyUser {
  readonly dbId: number;
  email: string;
  userId: number;
  googleToken?: string;
  //   startTrial: () => string; // function that return string
  startTrial(): string; // another way of doing same thing
  getCupon(cuponName: string, value: number): string;
}

let abdullah: MyUser = {
  dbId: 4433,
  userId: 4422,
  email: "a@a.com",
  githubToken: "hello",
  startTrial: () => {
    return "hello";
  },
  getCupon: (name: "333", val: 33) => {
    // ok i cannot put type init
    return `hello  with `;
  },
};
abdullah.email = "hello@hello.com";

///                    interfaces are modifiabel

interface MyUser {
  // add new things
  githubToken: string;
}

// adding new role like admin  in User interface
interface Admin extends MyUser {
  role: "leader" | "tester" | "useless";
}

let head: Admin = {
  role: "useless",
  dbId: 4433,
  userId: 4422,
  email: "a@a.com",
  githubToken: "hello",
  startTrial: () => {
    return "hello";
  },
  getCupon: (name: "333", val: 33) => {
    return `hello  with `;
  },
};
