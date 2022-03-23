// TODO: Create a constructor function called 'Developer' that takes in 'name' and 'tech'
function Developer (name, tech) {
  this.name = name;
  this.tech = tech;
  // TODO: Include a method called 'introduction()' that introduces the Developer with their name and favorite tech
  this.introduction = function() {
      console.log(`My name is ${this.name} and my favorite tech is ${this.tech}.`);
  };
}

// TODO: Create a new object using the 'Developer' constructor

const person = new Developer("Ross", "React");

console.log(person);
// TODO: Call the 'introduction()' method on the new object
person.introduction();
