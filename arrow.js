const userName = {
  firstName: "John",
  lastName: "Doe",
  age: 30
}


const addTwo = function()
{
 console.log("This is a function");
 
}
addTwo();


// Arrow function 

const addtwo = () =>
{
 console.log("This is an arrow function");
}
addtwo();

const add = () => //explicit return
{
  return 5 + 10;
}

console.log(add()); // Output: 15


const addNumbers = (a, b) => (a + b); // implicit return
console.log(addNumbers(5, 10)); // Output: 15

const name = () => ({ userName: userName.firstName})
console.log(name()); // Output: { username: undefined }





/******************* this keyword *******************/


const person ={
  firstName: "Jane",
  lastName: "Doe",
  age: 25,
  fullName: function() {
    return `${this.firstName} ${this.lastName}`;
  }
}
console.log(person.fullName()); // Output: Jane Doe
person.firstName = "Alice";
console.log(person.fullName()); // Output: Alice Doe

console.log(this) // Output: Window (or global object)  



const message = function() {
   let msg ="Hello, World!";
  console.log(this.msg)
  
}
message();
