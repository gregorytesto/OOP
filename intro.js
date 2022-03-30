// Class(Template) vs instance

// let animalTypes = ["cat", "dog", "turtle", "lion"];

// let pets = ["Deloba", "Scout", "Max"];

// pets vs animals?
// dog

// name
// length
// age

// Not dry
// Not Maintainable
// Not enforacable / Can't validate
// Time consuming

// Context

// this

// Function declaration vs arrow function
// - Hoisting
// - Context
// - Call, apply, bind

// function myFunc() {}

// const myFunc = () => {};

// let obj = {
// 	name: "Leo",
// 	type: "Lion",
// 	printNickname: function () {
// 		console.log(this);
// 		// console.log(this.name);
// 		// console.log(`${this.name} the ${this.type}`);
// 	},
// };
// obj.printNickname();

// let pets = [ // Current
// 	{
// 		firstName: "Deloba",
// 		type: "dog",
// 		size: "small",
//      color: "white",
// 		print: () => {
// 			console.log(`Name: Deloba, Type: dog, Size: small`);
// 		},
// 	},
// 	{
// 		name: "Scout",
// 		type: "dog",
// 		size: "small",
// 		print: () => {
// 			console.log(`Name: Scout, Type: dog, Size: small`);
// 		},
// 	},
// 	{
// 		name: "Maximian",
// 		type: "dog",
// 		size: "medium",
// 		print: () => {
// 			console.log(`Name: Max, Type: dog, Size: medium`);
// 		},
// 	},
// ];
// for (let pet of pets) {
// 	pet.print();
// }

// class Pet {
// 	constructor(name, type, size = "Medium") {
// 		this.name = name;
// 		this.type = type;
// 		this.size = size;
// 	}
// 	// Instance Method
// 	printNickname() {
// 		console.log(this.name + " the " + this.type);
// 	}
// 	// // class Method / static method
// 	// static bark() {
// 	// 	// Owned by the class
// 	// 	console.log("Woof woof");
// 	// }
// }
// let anthonysPet = new Pet("Scout", "Dog", "Small");

// let randomNum = Math.floor(Math.random() * 10);
// console.log(randomNum);

// let samanthasPet = new Pet("Deloba", "Dog", "Small");
// let gregsPet = new Pet("Max", "Dog", "Medium");

// let pets = [anthonysPet, samanthasPet, gregsPet];

// for (let pet of pets) {
// 	pet.printNickname();
// }

// let anthonysPet = new Pet("Scout", "Dog", "Small"); // Creating an instance
// console.log(anthonysPet);

// let samanthasPet = new Pet("Deloba", "Dog", "Small");
// samanthasPet.printNickname();

// class Array {
// 	constructor(length = 0) {}

// 	push(thingToAdd){

// 	}
// 	pop(){

// 	}
// }

// let numArr = [1, 2, 3];

// let numArr2 = new Array(5);
// numArr2.push(3);
// console.log(numArr2);

// Calculator that add, subtract

// Functional
let add = (num1, num2) => {
	return num1 + num2;
};
let sum = add(10, 20);
console.log(sum);

let subtract = (num1, num2) => {
	return num1 - num2;
};
let sub = subtract(20, 10);
console.log(sub);

// Object Oriented
class Calculator {
	constructor(num1, num2) {
		this.num1 = num1;
		this.num2 = num2;
	}
	// static pi = 3.14;

	add() {
		return this.num1 + this.num2;
	}
	static add(numberOne, numberTwo) {
		return numberOne + numberTwo;
	}
	subtract() {
		return this.num1 - this.num2;
	}
	static randomNum10() {
		return Math.floor(Math.random() * 10);
	}
}

let calculation = new Calculator(10, 20);
let result = calculation.add();
console.log(result);

let staticAdd = Calculator.add(30, 50);
console.log(staticAdd);

// let random = Calculator.randomNum10();
// console.log(random);
