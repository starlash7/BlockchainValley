// import { apiKey, abc } from "./util.js";
// //import apiKey from "./util.js";
// import * as util from "./util.js";
// // util.js 에서 제공하는 모든것을 한번에 그롭화해서 import

// console.log(apiKey);

// const userMessage = "Hello World!";

// console.log(userMessage);
// console.log(userMessage);

// function creatGreeting(userName, message) {
//   //   console.log(userName);
//   //   console.log(message);
//   return "Hi, I am" + userName + ". " + message;
// }

// const greeting1 = creatGreeting("Max");
// console.log(greeting1);

// const greeting2 = creatGreeting("Sei", "Hello!, what's up?");
// console.log(greeting2);

// export default (userName, message) => {
//   console.log("Hello");
//   return userName + message;
// };

const user = {
  name: `Max`,
  age: 34,
  greet() {
    console.log(`Hello!`);
    console.log(this.age);
  },
};

console.log(user.name);
user.greet();

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi!`);
  }
}

const user1 = new User("Sui", 35);
console.log(user1);
user1.greet();
