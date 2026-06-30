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

// 26. Check if a number lies between 1 and 100.
let num = 50;

if (num >= 1 && num <= 100) {
    console.log("Number is between 1 and 100");
} else {
    console.log("Number is outside the range");
}

// 27. Determine if a user can log in (correct username and password).
let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
    console.log("Login Successful");
} else {
    console.log("Login Failed");
}

// 28. Check whether a person qualifies for a driving license (18+ and has ID).
let age = 20;
let hasID = true;

if (age >= 18 && hasID) {
    console.log("Qualifies for driving license");
} else {
    console.log("Does not qualify");
}

// 29. Determine whether a number is divisible by both 3 and 5.
let number = 30;

if (number % 3 === 0 && number % 5 === 0) {
    console.log("Divisible by both 3 and 5");
} else {
    console.log("Not divisible by both");
}

// 30. Check whether a year is a century year.
let year = 2000;

if (year % 100 === 0) {
    console.log("Century Year");
} else {
    console.log("Not a Century Year");
}

// 31. Print numbers from 1 to 10.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 32. Print numbers from 10 down to 1.
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// 33. Print all even numbers between 1 and 20.
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 34. Print the multiplication table of 5.
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

// 35. Calculate the sum of numbers from 1 to 100.
let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
}

console.log(sum);

// 36. Calculate the factorial of a number.
let factorial = 1;
let n = 5;

for (let i = 1; i <= n; i++) {
    factorial *= i;
}

console.log(factorial);

// 37. Count how many numbers are divisible by 3 between 1 and 50.
let count = 0;

for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0) {
        count++;
    }
}

console.log(count);

// 38. Print the first 10 multiples of 7.
for (let i = 1; i <= 10; i++) {
    console.log(7 * i);
}

// 39. Print a pattern:
/*
*
**
***
****
*****
*/

for (let i = 1; i <= 5; i++) {
    console.log("*".repeat(i));
}

// 40. Print all numbers between 1 and 100 that are divisible by both 3 and 5.
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
}

// 41. Print:
/*
11111
22222
33333
44444
55555
*/

for (let i = 1; i <= 5; i++) {
    let row = "";

    for (let j = 1; j <= 5; j++) {
        row += i;
    }

    console.log(row);
}

// 42. Print:
/*
*****
*****
*****
*****
*****
*/

for (let i = 1; i <= 5; i++) {
    let row = "";

    for (let j = 1; j <= 5; j++) {
        row += "*";
    }

    console.log(row);
}

// 43. Print:
/*
1
12
123
1234
12345
*/

for (let i = 1; i <= 5; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += j;
    }

    console.log(row);
}

// 44. Print:
/*
54321
5432
543
54
5
*/

for (let i = 5; i >= 1; i--) {
    let row = "";

    for (let j = 5; j >= 6 - i; j--) {
        row += j;
    }

    console.log(row);
}

// 45. Print a 5×5 multiplication table.

for (let i = 1; i <= 5; i++) {
    let row = "";

    for (let j = 1; j <= 5; j++) {
        row += (i * j) + "\t";
    }

    console.log(row);
}

// 46. Create an array of five fruits and print it.
let fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];
console.log(fruits);

// 47. Print the first element of an array.
console.log(fruits[0]);

// 48. Print the last element of an array.
console.log(fruits[fruits.length - 1]);

// 49. Loop through an array and print each item.
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// 50. Find the largest number in an array.
let numbers = [10, 25, 5, 90, 45];

let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}

//ForEach loops

// 1. Print every number
const numbers = [5, 10, 15, 20, 25];
numbers.forEach(n => console.log(n));

// 2. Print every name
const names = ["Alice", "Bob", "Charlie", "David"];
names.forEach(name => console.log(name));

// 3. Print each fruit in uppercase
const fruits = ["apple", "banana", "orange"];
fruits.forEach(fruit => console.log(fruit.toUpperCase()));
