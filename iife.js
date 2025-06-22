// This is an Immediately Invoked Function Expression (IIFE)
// It is a function that runs as soon as it is defined.
// It is often used to create a private scope and avoid polluting the global namespace.


(function greeting() // Name IIFE
{
    console.log("Hello, World!");
})(); // Output: Hello, World!

(() => {
  console.log("Hello World! from an IIFE");
  
})()