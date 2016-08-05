// two types are compatible if their internal structures are compatible
// this allows us to implement an interfact just by having the shape the interface requires
// without specific implements clause
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = {
    firstName: "Jane",
    lastName: "Person"
};
document.body.innerHTML = greeter(user);
