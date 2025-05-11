// ***** Type interFace : The compiler automatic by initiating the value knows whitch type is it.
// let tech = "TypeScript";
// If i put number it take error
// tech = 12;
// let number = 12;
// let bool = true;
// console.log(typeof tech);
// console.log(typeof number);
// console.log(typeof bool);
// ***** Type : any it is a every type it means you can put every thing you want in this type  it is awful should'nt use it*/
// let title: any = "English";
// title = 12;
// title = true;
// console.log(title);
// ***** Functions : we identify the parameter type that function take*/
// function addOne(num: number) {
//   return num + 1;
// }
// const res = addOne(5);
// /* It will be error 8/
// const res = addOne("jawd");
// console.log(res);
// ***** Arrow Funtions : in Arrow Functions if we put more or less argument it will be error
// const double = (x: number, y: number) => x * y;
// console.log(double(20, 10));
// Error
// console.log(double(20));
// Error
// console.log(double(20, 30, 10));
// ***** Default parameter : we can put default value for our functions parameter
// function Name(myName: string = "Jawad") {
//   return `My Name is ${myName}`;
// }
// console.log(Name());
// console.log(Name("Ali"));
// ***** Annotating the return value of a Function
// function double1(x: number): number {
//   return x * x;
// it will be error
// return "Jawad";
// }
// **** Arrow Function
// const double1 = (x: number): number => x * x;
// ****** void : we can use in function type to do not return anything
// function voidCheck(fatherName: string): void {
// it has error
// return fatherName;
//   console.log(fatherName);
// }
// voidCheck("Jalil Ahmad");
// ***** Arrays : we can specifie in two way the array type  1: type[] and 2:Array<type>
// const names: string[] = ["Jawad", "Mojtaba", "Jamshid"];
// it will be error
// const names: string[] = ["Jawad", "Mojtaba", "Jamshid",true,20];
// names.push("Adel");
// It will be error
// names.push(22)
// names.map((name) => console.log(name));
// ***** MultiDimensioanl Array : in this type we just pust more square bracket
// const names: string[][] = [["Jawad", "Mojtaba", "Jamshid"]];
// const number: number[][][] = [
//   [
//     [1, 2],
//     [3, 2],
//   ],
//   [[2, 2]],
// ];
// console.log(names);
// console.log(number);
// ***** Objects : in this you first make a object for the types and in the other hand you should set the values in that order
// const person: { firstName: string; lastName: string; age: number } = {
//   lastName: "Sadiq",
//   firstName: "Jawad",
//   age: 22,
// };
// console.log(person);
// ***** Create Object with function return
// function person(): { firstName: string; lastName: string; age: number } {
//   return {
//     lastName: "Sadiq",
//     firstName: "Jawad",
//     age: 22,
//   };
// }
// console.log(person());
// ***** type : it is like variable declaring but it is type declaring
// type User = {
//   name: string;
//   lastName: string;
//   age: number;
// };
// function userInfo(user: User) {
//   return `My name is  ${user.name}, my last Name is ${user.lastName} and my age is ${user.age} `;
// }
// console.log(userInfo({ name: "jawad", lastName: "Sadiq", age: 22 }));
// ***** Optional Properties : in this type we can make a object propertie optional that user can put a value or not
// ***** Also we have readonly propertie that we can put a value just one time and it we can not cahnge it
// type User = {
//   name: string;
//   readonly lastName: string;
//   age?: number;
// };
// function userInfo(user: User) {
//   return `My name is  ${user.name}, my last Name is ${user.lastName} and my age is ${user.age} `;
// }
// console.log(userInfo({ name: "jawad", lastName: "Sadiq", age: 22 }));
// age === no value
// console.log(userInfo({ name: "jawad", lastName: "Sadiq" }));
// const user: User = {
//   name: "Jamil",
//   lastName: "Sadiq",
// };
// It has error because it is readonly
// user.lastName = "Ali";
// ***** Type intersection : in this kind we can combine two or more types
// type info = {
//   name: string;
//   last: string;
//   age: number;
// };
// type employ = {
//   job: string;
//   alive: boolean;
// };
// type companyEmploy = info & employ;
// const aliInfo: companyEmploy = {
//   name: "ALI",
//   last: "Ahmadi",
//   age: 25,
//   job: "Officer",
//   alive: true,
// };
// console.log(aliInfo);
// ***** Unions : in this type we can put mutiple type that user can have each one of them he want
// const password: string | number = 20;
// const pass: string | number | boolean = true;
// bu it is error
// const passw: string | number | boolean = [22];
// we can set for array mutiple types by union
// const passw: (number | string)[] = [22, "jawad"];
// ***** Litterals : in this kind ypu can specifi some specific values that a varibale can have
// let number: 50 | 20 | 10 | 30;
// number = 50;
// error because it is not in ltterals
// number = 5;
// we can do both in one step
// let color: "green" | "red" | "blue" = "green";
// console.log(number);
// ***** Tuples : it is a type array that in that format you can set your array it should in the same order
// const myTuples: [string, number, boolean] = ["Jawad", 22, true];
// we can do destructuring also
// const [myName, age, sleep] = myTuples;
// console.log(
//   `my name is ${myName},I am ${age} years old and now I am ${
//     sleep ? "sleep" : "awake"
//   }`
// );
// ***** Enum : These are use to specifi named constants
// enum constantColors {
//   Red = "red",
//   Blue = "blue",
//   Green = "green",
//   Yellow = "yellow",
// }
// const currentColor = constantColors.Red;
// console.log(`The current Color is ${currentColor}`);
// ***** Classes in typescript
// class Person {
//   myName: string;
//   age: number;
//   constructor(myName: string, age: number) {
//     this.myName = myName;
//     this.age = age;
//   }
// }
// const person = new Person("Jawad", 22);
// console.log(person);
// ***** Access Modifiers in Typescript
// class Human {
//   public firstName: string;
//   protected age: number;
//   private lastName: string;
//   constructor(firstName: string, lastName: string, age: number) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }
//   We can access to three in here
//   getName(): string {
//     return `${this.firstName} ${this.lastName} and ${this.age}`;
//   }
// }
// const person = new Human("Jawad", "Sadiq", 22);
// We can not access to private field in here it is error
// console.log(person.lastName);
// also we can not access to protected in here
// console.log(person.age);
// console.log(person.getName());
// class Person extends Human {
//   constructor(first: string, last: string, age: number) {
//     super(first, last, age);
//   }
// }
//   we can access to protexted here in its subclass
// const person2 = new Person("Jamil", "Sadiq", 26);
// ***** SETTERS AND GETTERS
// class Human {
//   private lastName: string;
//   get getMyLastName(): string {
//     return this.lastName;
//   }
//   set setMyLastName(value: string) {
//     this.lastName = value;
//   }
// }
// const person = new Human();
// person.setMyLastName = "jawad";
// console.log(person.getMyLastName);
// ***** Interface : we use interface to make a structure that all the others that use this for thier type
// *****  must do the same structure we use Interface for object,functions and classes
// ** For Objects
// interface myObjectType {
//   myName: string;
//   myLastName: string;
//   myAge: number;
// }
// const jawad: myObjectType = {
//   myName: "Jawad",
//   myLastName: "Sadiq",
//   myAge: 22,
// };
// const ali: myObjectType = {
//   myName: "Ali",
//   myLastName: "Amiri",
//   myAge: 24,
// };
// ** For Functions
// interface myFunctionType {
//   (myName: string, myLastName: string, myAge: number): string;
// }
// const myInfo: myFunctionType = (name, lastName, age) =>
//   `My name is ${name} and my lastName is ${lastName} I am ${age} years old `;
// console.log(myInfo("Jawad", "Sadiq", 22));
// ** For classes
// interface Vehicle {
//   start(): void;
//   stop(): void;
// }
// class Car implements Vehicle {
//   start(): void {
//     console.log("The Car Start");
//   }
//   stop(): void {
//     console.log("The Car Stop");
//   }
// }
// const myCar = new Car();
// myCar.start();
// myCar.stop();
// ***** Decleration Merging : we can change the declerations in a interface by using same name of that interface
// interface Vehicle {
//   start(): void;
//   brand: string;
// }
// interface Vehicle {
//   stop(): void;
//   model: number;
//   name: string;
// }
// class Car implements Vehicle {
//   name: "Crolla";
//   brand: "BMW";
//   model: 2020;
//   start(): void {
//     console.log(`The car start`);
//   }
//   stop(): void {
//     console.log("The car stop");
//   }
//   info() {
//     console.log(
//       `its name is ${this.name} its brand is ${this.brand} and its model is ${this.model}`
//     );
//   }
// }
// const myCar = new Car();
// myCar.info();
// myCar.start();
// myCar.stop();
// ***** Generics : in this type we can make reusable functions and classes instead of making  function for each type
// ***** sepraitly we can specify one function that when call he choose the type of the function
function printInfo(para) {
    return para;
}
console.log(printInfo(22));
console.log(printInfo("Jawad"));
console.log(printInfo(true));
function filterArray(array, codition) {
    return array.filter((num) => codition(num));
}
const regularArray = [1, 2, 3, 6, 10, 13, 11, 20];
const regularStrings = ["apple", "banana", "Orange", "watermelon"];
const evenNumbers = filterArray(regularArray, (num) => num % 2 === 0);
const shorStrings = filterArray(regularStrings, (str) => str.length < 6);
console.log(evenNumbers);
console.log(shorStrings);
const fruitsArray = [
    { name: "Apple", color: "red" },
    { name: "Orange", color: "orange" },
    { name: "banana", color: "yellow" },
];
const redFruits = filterArray(fruitsArray, ({ color }) => color === "red");
console.log(redFruits);
function reversePair(value1, value2) {
    return [value2, value1];
}
console.log(reversePair(22, "Jawad"));
class Box {
    constructor(initialContent) {
        this.content = initialContent;
    }
    getContent() {
        return this.content;
    }
    setContent(newContent) {
        this.content = newContent;
    }
}
const stringBox = new Box("Fruits");
const numberBox = new Box(20);
console.log(stringBox.getContent());
stringBox.setContent("Drinks");
console.log(stringBox.getContent());
console.log(numberBox.getContent());
numberBox.setContent(30);
console.log(numberBox.getContent());
