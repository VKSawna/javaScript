const username = new Object();
username.Name = {
  firstname: "Alice",
  lastname: "Johnson"
}
username.age = 28;

// console.log(username);
// console.log(username.Name.firstname);

// console.log({...username, ...username.Name});



let obj1 = {1:'a', 2:'b', 3:'c'};
let obj2 = {4:'d', 5:'e', 6:'f'};
// let obj3 = {obj1,obj2};
// console.log(obj3);
let obj3 = Object.assign({}, obj1, obj2); //assign method
console.log(obj3);
let obj4 = {...obj1, ...obj2}; //spread operator
console.log(obj4);