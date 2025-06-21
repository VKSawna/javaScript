let userfirstname=["John", "Jane", "Doe"];
let userlastname=["Smith", "Doe", "Johnson"];
userfirstname= userfirstname+" " + userlastname;
console.log(typeof userfirstname);
// console.log(username[1]);
console.log(userfirstname.length);

 const username =[...userfirstname.concat(...userlastname)];
console.log(username);