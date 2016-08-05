// type annotation are lightweight ways to record the intended contract of the function or variable
// this shows we want greeeter function to be called with a single string parameter
function greeter(person) {
    return "Hello " + person;
}
var user = "jane person";
document.body.innerHTML = greeter(user);
