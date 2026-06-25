// VARIABLES AND DATA TYPES

// 1. Declare a variable called name and store your name in it.
const name = "Josh";
console.log(name);

// 2. Store your age in a variable and print it.
const age = 20;
console.log(age);

// 3. Create variables for length and width and calculate the area of a rectangle.
const length = 10;
const width = 5;
const area = length * width;
console.log(area);

// 4. Store two numbers and print their sum.
const num1 = 15;
const num2 = 25;
console.log(num1 + num2);

// 5. Store your favorite color and print a sentence using it.
const favoriteColor = "Black";
console.log(`My favorite color is ${favoriteColor}`);

// 6. Create variables for first name and last name and combine them.
const firstName = "Joshua";
const lastName = "Mabharani";
console.log(firstName + " " + lastName);

// 7. Find the remainder when 17 is divided by 3.
console.log(17 % 3);

// 8. Convert a string "25" into a number.
const str = "25";
const number = Number(str);
console.log(number);

// 9. Swap the values of two variables.
let a = 10;
let b = 20;

[a, b] = [b, a];

console.log(a);
console.log(b)


// 10. Calculate the average of three numbers.
const n1 = 10;
const n2 = 20;
const n3 = 30;

const average = (n1 + n2 + n3) / 3;
console.log(average);

// 11. Ask the user for their name and greet them.
let userName = prompt("Enter your name:");
console.log("Hello " + userName);

// 12. Ask for two numbers and display their sum.
let number1 = Number(prompt("Enter first number:"));
let number2 = Number(prompt("Enter second number:"));
console.log(number1 + number2);

// 13. Ask for a person's age and display it.
let userAge = prompt("Enter your age:");
console.log("Your age is " + userAge);

// 14. Ask for a temperature in Celsius and convert it to Fahrenheit.
let celsius = Number(prompt("Enter Celsius temperature:"));
let fahrenheit = (celsius * 9/5) + 32;
console.log(fahrenheit);

// 15. Ask for a number and display its square.
let squareNum = Number(prompt("Enter a number:"));
console.log(squareNum ** 2);