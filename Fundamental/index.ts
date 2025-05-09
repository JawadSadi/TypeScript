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

const password: string | number = 20;
const pass: string | number | boolean = true;
// bu it is error
const passw: string | number | boolean = [22];
