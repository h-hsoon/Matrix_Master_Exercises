// exercise 1
// exercise 1.1
console.log("exercise 1.1");
var age = 27;
if (age >= 18){
    console.log("You are an adult and you can vote");
} else{
    console.log("You are not an adult and you cannot vote");
}

// exercise 1.2
// console.log("exercise 1.2");
// var user_name = prompt("Please enter your name: ");

// if (user_name === "john") {
//     document.body.innerHTML += "<h1>You are John</h1>";
    
// } else{
//     document.body.innerHTML += "<h1>You are not John</h1>";
// }

// exercise 2
// exercise 2.1
var sum;
function Sum(num1,num2) {
    sum = num1 + num2;
    return sum;
}
document.body.innerHTML += "<h1>"+Sum(4,5)+"</h1>";
console.log(Sum(1,2));
console.log(Sum(3,5));
console.log(Sum(4,8));
console.log(Sum(5,3));
console.log(Sum(6,9));


// exercise 2.2
function reverseString(str) {
    return str.split('').reverse().join('');
  }

  console.log(reverseString("hello"));

  
// exercise 3.1
var fruits = ["apple", "banana", "mango", "orange", "grape"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// exercise 3.2
function calculateAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum / numbers.length;
  }
  
 console.log(calculateAverage([1, 2, 3, 4, 5]));

// exercise 3.3
var numbers = [1, 2, 3, 4, 5];

let largestNumber = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largestNumber) {
    largestNumber = numbers[i];
  }
}

console.log(largestNumber);

// exercise 3.4
var words = ["hello", "world", "from", "javascript"];

let sentence = "";
for (let i = 0; i < words.length; i++) {
  sentence += words[i] + " ";
}

console.log(sentence);

// exercise 3.5
function checkName(names, name) {
    for (let i = 0; i < names.length; i++) {
      if (names[i] === name) {
        return true;
      }
    }
    return false;
  }
  
  var names = ["Alice", "Bob", "Charlie"];
  console.log(checkName(names, "Bob")); 
  console.log(checkName(names, "David")); 

// exercise 3.6
var evenNumbers = [];
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    evenNumbers.push(i);
  }
}

console.log(evenNumbers);

// exercise 4.1
var book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
  };
  
  console.log(`Title: ${book.title}`);
  console.log(`Author: ${book.author}`);
  console.log(`Year: ${book.year}`);

// exercise 4.2
const person = {
    name: "John Doe",
    age: 30,
    gender: "Male"
  };
  
  function printPersonInfo(person) {
    console.log(`Name: ${person.name}`);
    console.log(`Age: ${person.age}`);
    console.log(`Gender: ${person.gender}`);
  }
  
  printPersonInfo(person);

// exercise 5
var car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2015,
  
    start: function() {
        console.log(`The ${this.year} ${this.make} ${this.model} has started.`);
    },
  
    drive: function() {
        console.log(`You're driving the ${this.year} ${this.make} ${this.model}.`);
    }
  };
  
car.start();
car.drive();

// exercise 6
function displayAlert() {
    window.alert("Hello, world!");
  }

  function greetUser() {
var name = window.prompt("What is your name?");
if (name!== null) {
      window.alert(`Hello, ${name}!`);
}
 }