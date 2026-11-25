// SESSION 1 - HANDS-ON PRACTICE SOLUTIONS

console.log("Welcome to Session 1 Practice Solutions!\n");

// 1. VARIABLES & DATA TYPES
console.log("--- 1. Variables & Data Types ---\n");

let studentName = "Ahmed";
const birthYear = 2005;
const currentYear = 2025;
let age = currentYear - birthYear;
let isStudent = true;

console.log("Name:", studentName, "- Type:", typeof studentName);
console.log("Birth Year:", birthYear, "- Type:", typeof birthYear);
console.log("Age:", age, "- Type:", typeof age);
console.log("Is Student:", isStudent, "- Type:", typeof isStudent);

// 2. BASIC OPERATORS
console.log("\n--- 2. Basic Operators ---\n");

let num1 = 20;
let num2 = 5;

let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;
let remainder = num1 % num2;

console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);
console.log("Remainder:", remainder);

let radius = 7;
const PI = 3.14159;
let area = PI * radius ** 2;
console.log("Circle area:", area);

// 3. IF/ELSE STATEMENTS
console.log("\n--- 3. If/Else Statements ---\n");

let number = -5;
if (number > 0) {
  console.log("Positive");
} else if (number < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

let examScore = 85;
if (examScore >= 90) {
  console.log("Grade: A");
} else if (examScore >= 80) {
  console.log("Grade: B");
} else if (examScore >= 70) {
  console.log("Grade: C");
} else if (examScore >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}

// 4. TYPE CONVERSION & COERCION
console.log("\n--- 4. Type Conversion & Coercion ---\n");

let strNum1 = "25";
let strNum2 = "10";
let convertedSum = Number(strNum1) + Number(strNum2);
console.log("Converted sum:", convertedSum);

console.log("5" + 5); // "55": number is converted to a string
console.log("10" - 5); // 5: subtraction converts strings to numbers
console.log("10" * "2"); // 20: multiplication converts strings to numbers

let userInput1 = "100";
let userInput2 = "50";
let total = userInput1 + userInput2;
console.log("Original concatenation:", total);

let correctTotal = Number(userInput1) + Number(userInput2);
console.log("Correct total:", correctTotal);

// 5. BOOLEAN LOGIC & OPERATORS
console.log("\n--- 5. Boolean Logic & Operators ---\n");

console.log(10 == "10"); // true
console.log(10 === "10"); // false
console.log(10 != "10"); // false
console.log(10 !== "10"); // true

// 6. STRINGS & STRING METHODS
console.log("\n--- 6. Strings & String Methods ---\n");

let message = "  Hello Backend World!  ";
console.log("Original:", message);
console.log("Uppercase:", message.toUpperCase());
console.log("Lowercase:", message.toLowerCase());
console.log("Trimmed:", message.trim());
console.log("Character at index 2:", message.charAt(2));

let text = "JavaScript is awesome, JavaScript is fun!";
console.log("Includes 'awesome':", text.includes("awesome"));
console.log("Index of 'JavaScript':", text.indexOf("JavaScript"));
console.log("Last index of 'JavaScript':", text.lastIndexOf("JavaScript"));

let fullName = "John Doe Smith";
let nameParts = fullName.split(" ");
let firstName = nameParts[0];
let lastName = nameParts[nameParts.length - 1];
console.log("First name:", firstName);
console.log("Last name:", lastName);

let sentence = "I love Python. Python is great!";
let newSentence = sentence.replaceAll("Python", "JavaScript");
console.log("New sentence:", newSentence);

let filename = "document.pdf";
let extension1 = filename.slice(filename.lastIndexOf(".") + 1);
let parts = filename.split(".");
let extension2 = parts[parts.length - 1];
console.log("Extension using slice:", extension1);
console.log("Extension using split:", extension2);

let email = "john.doe@example.com";
let username = email.slice(0, email.indexOf("@")).toLowerCase();
console.log("Username:", username);

// 7. TEMPLATE LITERALS
console.log("\n--- 7. Template Literals ---\n");

let personName = "Alice";
let personAge = 25;
let personCity = "Cairo";

console.log("Name: " + personName + ", Age: " + personAge + ", City: " + personCity);

let info = `Name: ${personName}, Age: ${personAge}, City: ${personCity}`;
console.log(info);

let itemName = "Laptop";
let price = 15000;
let quantity = 2;
let receiptTotal = price * quantity;

let receipt = `Receipt
Item: ${itemName}
Price: ${price} EGP
Quantity: ${quantity}
Total: ${receiptTotal} EGP`;
console.log(receipt);

// 8. FUNCTIONS
console.log("\n--- 8. Functions ---\n");

function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Ahmed"));

function add(a, b) {
  return a + b;
}
console.log("5 + 3 =", add(5, 3));

const multiply = (a, b) => a * b;
console.log("4 * 7 =", multiply(4, 7));

const square = (numberToSquare) => numberToSquare ** 2;
console.log("Square of 6:", square(6));

function calculateBMI(weight, height) {
  return weight / height ** 2;
}
console.log("BMI:", calculateBMI(70, 1.75));

function isEven(num) {
  return num % 2 === 0;
}

const isEvenArrow = (num) => num % 2 === 0;
console.log("Is 8 even?", isEven(8));
console.log("Is 7 even?", isEvenArrow(7));

// 9. ARRAYS
console.log("\n--- 9. Arrays ---\n");

let fruits = ["Apple", "Banana", "Orange"];
console.log("Fruits:", fruits);
console.log("First fruit:", fruits[0]);
console.log("Last fruit:", fruits[fruits.length - 1]);
console.log("Number of fruits:", fruits.length);

fruits.push("Mango");
fruits.unshift("Strawberry");
console.log("After adding:", fruits);

fruits.pop();
fruits.shift();
console.log("After removing:", fruits);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNumbers.push(numbers[i]);
  }
}
console.log("Even numbers:", evenNumbers);

// 10. OBJECTS
console.log("\n--- 10. Objects ---\n");

let student = {
  name: "Ahmed",
  age: 20,
  major: "Computer Science",
  gpa: 3.5
};

console.log("Student:", student);
console.log("Name:", student.name);
console.log("GPA:", student.gpa);

student.gpa = 3.8;
student.major = "Software Engineering";
console.log("Updated student:", student);

let book = {
  title: "Clean Code",
  author: "Robert Martin",
  pages: 464,
  isRead: true,
  getSummary() {
    return `"${this.title}" by ${this.author}, ${this.pages} pages. Read: ${this.isRead}`;
  }
};
console.log(book.getSummary());

// 11. LOOPS
console.log("\n--- 11. Loops ---\n");

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

let colors = ["Red", "Green", "Blue", "Yellow"];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

let countdown = 5;
while (countdown > 0) {
  console.log(countdown);
  countdown--;
}
console.log("Blast off! 🚀");

let sumToHundred = 0;
for (let i = 1; i <= 100; i++) {
  sumToHundred += i;
}
console.log("Sum of 1 to 100:", sumToHundred);

for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// FINAL MEGA CHALLENGE
console.log("\n--- 🏆 FINAL MEGA CHALLENGE ---\n");

let students = [
  { name: "Sara", age: 21, grade: 88 },
  { name: "Omar", age: 20, grade: 92 }
];

function addStudent(name, age, grade) {
  students.push({ name, age, grade });
}

function calculateAverageGrade() {
  if (students.length === 0) {
    return 0;
  }

  let gradeSum = 0;
  for (let i = 0; i < students.length; i++) {
    gradeSum += students[i].grade;
  }
  return gradeSum / students.length;
}

function findTopStudent() {
  if (students.length === 0) {
    return null;
  }

  let topStudent = students[0];
  for (let i = 1; i < students.length; i++) {
    if (students[i].grade > topStudent.grade) {
      topStudent = students[i];
    }
  }
  return topStudent;
}

function displayAllStudents() {
  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    console.log(`${student.name} - Age: ${student.age} - Grade: ${student.grade}`);
  }
}

addStudent("Nour", 22, 95);
console.log("Average grade:", calculateAverageGrade());
console.log("Top student:", findTopStudent());
displayAllStudents();

console.log("\n🎉 Great job completing the practice exercises!");
console.log("Keep practicing and experimenting with the code!");
