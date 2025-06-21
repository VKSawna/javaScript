const mysym = Symbol("key1")

const jsuser = {
    firstName: "John",
    lastName: "Doe",
    [mysym]: "Hello",
    full_name: "John Doe",
    age: 30,
    hobbies: ["reading", "gaming", "coding"],
    isloggedIn: false,
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
}
console.log(jsuser.firstName)
console.log(jsuser.lastName)
console.log(jsuser.age)
console.log(jsuser.getFullName())
console.log(jsuser.hobbies[1])
console.log(jsuser.isloggedIn)

console.log(jsuser["firstName"]);
// console.log(jsuser["full_name"]);
console.log(jsuser.full_name);


console.log(typeof mysym); // Accessing the symbol property



const jsuser2 = {}
jsuser2.firstName = "Jane";
jsuser2.lastName = "Smith";
jsuser2.age = 25;
jsuser2.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
} 
console.log(jsuser2);

Object.freeze(jsuser2);
jsuser2.age =29;

console.log(jsuser2.age); // Will still print 25 because the object is frozen
