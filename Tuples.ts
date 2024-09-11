// tuples is all about restricting index of elements and order

let user: (string | number)[] = ["hello", 333, "lsjle"];

// we can add number at any index and so  the string

let tUser: [string, number, boolean];

tUser = ["hello", 333, false]; // we cannot change the order like first number cannot be a number

// tUser = [44, "hello", false]; // error

type strUser = [number, boolean];

const tupleUser: strUser = [44, true];

// tupleUser[1] = "ken";
// tupleUser.push("hel");
// console.log(strUser); // here what weird thing happens
