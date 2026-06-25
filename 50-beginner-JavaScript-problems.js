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


// 16. Determine whether a number is positive or negative.
let num = -5;

if (num >= 0) {
    console.log("Positive");
} else {
    console.log("Negative");
}

// 17. Determine whether a number is even or odd.
let evenOdd = 7;

if (evenOdd % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// 18. Compare two numbers and print the larger one.
let x = 20;
let y = 15;

if (x > y) {
    console.log(x);
} else {
    console.log(y);
}

// 19. Check whether a person is eligible to vote (18+).
let votingAge = 20;

if (votingAge >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible");
}

// 20. Determine whether a student passed (50 or above).
let mark = 65;

if (mark >= 50) {
    console.log("Passed");
} else {
    console.log("Failed");
}

// 21. Check whether a year is a leap year.
let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("Leap Year");
} else {
    console.log("Not Leap Year");
}

// 22. Determine whether a number is divisible by 5.
let divisible = 25;

if (divisible % 5 === 0) {
    console.log("Divisible by 5");
} else {
    console.log("Not divisible by 5");
}

// 23. Assign grades.
let score = 85;

if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else if (score >= 70) {
    console.log("C");
} else {
    console.log("Fail");
}

// 24. Check whether a character is a vowel.
let character = "a";

if ("aeiouAEIOU".includes(character)) {
    console.log("Vowel");
} else {
    console.log("Not a vowel");
}

// 25. Determine whether three sides can form a triangle.
let side1 = 5;
let side2 = 6;
let side3 = 7;

if (
    side1 + side2 > side3 &&
    side1 + side3 > side2 &&
    side2 + side3 > side1
) {
    console.log("Triangle can be formed");
} else {
    console.log("Triangle cannot be formed");
}
