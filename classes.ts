// ts supports class-based object-oriented programming

// create Student class with constructor and some public fields
// use of public on arguments to the constructor is shorthand that allows us to auto create properties with that name

class Student {
  fullName: string;
  constructor(public firstName, public middleInitial, public lastName) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person : Person) {
  return person.firstName + " " + person.lastName;
}

var user = new Student("thing", "s", "face");

document.body.innerHTML = greeter(user);
