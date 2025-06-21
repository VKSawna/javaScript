function helloWorld() {
    console.log("Hello, World!");
}
helloWorld();

function add(a, b) { //perameters
    console.log( a + b);
}
add(50,100); //arguments

function add2(a, b = 10) { //default value
    console.log(a + b);
}
add2(5); // 15


function sum(a, b, c) {
    return a + b + c; //return value
}
console.log(sum(1, 2, 3)); // 6


function sum2(...args) { //rest operator
    return args.reduce((acc, curr) => acc + curr, 0); //reduce method
}
console.log(sum2(1, 2, 3, 4, 5)); // 15