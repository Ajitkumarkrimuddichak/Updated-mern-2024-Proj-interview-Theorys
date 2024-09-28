let a: null = null;
let b: number = 123;
let c: number = 123.456;
let d: string = "Ajit";
let e: undefined = undefined;
let f: boolean = true;
let g: number = 0b111001; // Binary
let h: number = 0o436; // Octal
let i: number = 0xadf0d; // Hexa-Decimal
let v_name = new Number("value");
var var_name = new String("string");
let str: string;
/*console.log(str);// Prints undefined
//str = null;// Assigning 'null' to variable
console.log(str);*/

/*
// Interface for Array
interface ForList {
    [index:number]: string
}
let newArray: ForList = ["Interface", "for", "Array"];
console.log(newArray);*/

/*class Person {
    constructor(public name: string, public age: number) {}
    greet(): void {
        console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old.`);
    }
}
const john = new Person('Rahul', 22);
john.greet();
*/

/*enum CarName {
    Honda,
    Toyota,
    Alto,
    Swift,
}
console.log(CarName);
console.log("Value of Alto is : "+ CarName.Alto);*/

/*let arrTuple: [number, string, number, string] = [501, "welcome", 505, "Mohan"];
console.log(arrTuple);*/

//What is any type, and when to use it in TypeScript ?
/*var New_Array : any[]=[1,"data1"];
New_Array.push("data2");
New_Array.push(2)
New_Array.push("data3");
New_Array.push(3)
console.log(New_Array)*/

/* 
//How to Create an Object in TypeScript?
(1) Object Literals
let Employee_details = {
    Empname: "John",
    EmpSection: "field"
}
console.log("Employee Name is:" + 
    Employee_details.Empname + " Employee's section is:"  + Employee_details.EmpSection
);

(2)Constructor Method
function Employee(Employee_fn, Employee_ln, Employee_age) {
    this.fn = Employee_fn;
    this.ln = Employee_ln;
    this.age = Employee_age;
 }
 var p1 = new Employee("Raviteja", "Velamuri", 24);
 console.log("Name: " + p1.fn + " " + p1.ln);
 console.log("Age: " + p1.age);
 
(3) Passing Objects as Function Parameters
let employee = {
    firstname: " Raviteja ",
    lastname: " Velamuri ",  
}
function display( obj: { 
    firstname:String,lastname:String
}) : void {  
    console.log("Name is"+obj.firstname+" "+"lastname is"+" "+obj.lastname);
}  
display(employee);

(4)Using Object.create() method
let personPrototype = {
    greet() {
        return `Hello, my name is ${this.name}.`;
    }
};
let person = Object.create(personPrototype);
person.name = "Pankaj";
person.age = 20;
person.gender = "male";
console.log(person);
console.log(person.greet());

(5)Using Classes
class Person {
    name: string;
    age: number;
    gender: string;
    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    greet() {
        return `Hello, my name is ${this.name}.`;
    }
}
let person = new Person("Pankaj", 20, "male");
console.log(person);
console.log(person.greet()); */

/*
// Following function returns the addition of it's two parameters
function addTwo(a: number, b: number): number {
    return a + b;
}
console.log(addTwo(4, 8)); 

(or)
function sum(...nums: number[]): number {
    return nums.reduce((acc, val) => acc + val, 0);
}
console.log(sum(1, 2, 3, 4, 5));
console.log(sum(10, 20)); 
console.log(sum(100));
console.log(sum()); 

//How to achieve function overloading in TypeScript ?

function addData(data1 : string, data2 : string) : string; 
function addData(data1 : number, data2 : number): number; 
function addData(data1 : any, data2 : any){ 
	return data1+ data2; 
} 
console.log(addData("Hello ", "GeeksforGeeks")); 
console.log(addData(20, 30));

(or)
class Data 
{ 
	public displayData(data: string): number; 
	public displayData(data: number): string; 
	public displayData(data : any): any 
	{ 
		if (typeof(data) === 'number') 
			return data.toString(); 
		if (typeof(data) === 'string') 
			return data.length; 
	} 
} 
let object = new Data(); 
console.log("Result is : " + object.displayData(123456)); 
let stringData = "GeeksforGeeks"; 
console.log("Length of String " + stringData + " is : " + object.displayData(stringData)); 

(or) Arrow function 
let getName = (name: string): string => {
    return name;
};
console.log(getName("GeeksforGeeks"));

(or)
let formatData = (id: number, name: string, values: number[]): string => {
    return `${id} - ${name} - ${values.join(", ")}`;
};
console.log(formatData(1, "ABC", [10, 20, 30]));   
console.log(formatData(2, "APPLE", [50, 20, 30]));
console.log(formatData(3, "MANGO", [70, 90, 80])); 




*/


