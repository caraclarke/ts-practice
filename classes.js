// ts supports class-based object-oriented programming
// create Student class with constructor and some public fields
// use of public on arguments to the constructor is shorthand that allows us to auto create properties with that name
var Student = (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return person.firstName + " " + person.lastName;
}
var user = new Student("thing", "s", "face");
document.body.innerHTML = greeter(user);
