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

// const user = {
//   name: `Max`,
//   age: 34,
//   greet() {
//     console.log(`Hello!`);
//     console.log(this.age);
//   },
// };

// console.log(user.name);
// user.greet();

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log(`Hi!`);
//   }
// }

// const user1 = new User("Sui", 35);
// console.log(user1);
// user1.greet();

// const hobbies = ["Sports", "Cooking", "Reading"];
// console.log(hobbies[1]);

// hobbies.push("Working");

// const index = hobbies.findIndex((item) => {
//   return item === "Sports";
// });

// console.log(index);

// const editedHobbies = hobbies.map((item) => item + "!");
// console.log(editedHobbies);

// const [firstName, lastName] = ["Sei", "Taiko"];

// // const firstName = userNameData[0];
// // const lastName = userNameData[1];

// console.log(firstName);
// console.log(lastName);

// const { name: userName, age } = {
//   name: "Sei",
//   age: 34,
// };

// const hobbies = ["Sports", "Cooking"];
// const user = {
//   name: "sei",
//   age: 34,
// };

// const newHobbies = ["Reading"];

// const mergedHobbies = [...hobbies, newHobbies];
// console.log(mergedHobbies);

// const extendUser = {
//   isAdmin: true,
//   ...user,
// };
// console.log(extendUser);

// const password = prompt(`Your password`);

// if (password === "Hellow") {
//   console.log("Hellow works");
// } else if (password === "hello") {
//   console.log("Hellow works");
// } else {
//   console.log("Access not granted.");
// }

// const hobbies = ["Sports", "Cooking"];

// for (const hobby of hobbies) {
//   console.log(hobby);
// }

// const list = document.querySelector("ul");
// list.remove();

// function handleTimeout() {
//   console.log("Timed out!");
// }

// const handleTimeout2 = () => {
//   console.log("Timed out! ..agine!");
// };

// setTimeout(handleTimeout, 2000);
// setTimeout(handleTimeout2, 3000);
// setTimeout(() => {
//   console.log(`More timing out...`);
// }, 4000);

// function greeter(greetFn) {
//   greetFn();
// }

// greeter(() => console.log("Hi"));

// function init() {
//   function greet() {
//     console(`HI!`);
//   }
//   greet();
// }

// init();
