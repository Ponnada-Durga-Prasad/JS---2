// Write a constructor function to create a Person object with a method that logs the name using this.

// Input: new Person("Alice")
// Expected Output: My name is Alice

class Persons {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return `My name is ${this.name}`;
  }
}

let Person = new Persons("Alice");

console.log(Person.getName());
