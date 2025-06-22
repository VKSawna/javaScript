// This code demonstrates the concept of variable scopes in JavaScript.
/*const a = 5;  //global scope
let b = 10;
var c = 15;

function printValues()
{
  
  console.log(`a: ${a}, b: ${b}, c: ${c} `);
  
}
 printValues(); // Output: a: 5, b: 10, c: 15
*/



//         local scope


function printnumbers()
{
  let x = 20; // local scope
  var y = 30; // function scope
  const z = 40; // block scope

  console.log(`x: ${x}, y: ${y}, z: ${z}`); // Output: x: 20, y: 30, z: 40
}

printnumbers(); // Output: x: 20, y: 30, z: 40

// console.log(x);
// console.log(y);
// console.log(z); 

