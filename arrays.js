const arr = [101,102,56,75,95,426]
const newArray = [1, 2, 3, 4, 5];
console.log(newArray);
console.log(newArray.length)
console.log(newArray[0]);

console.log(arr[0]);
console.log(arr + newArray);

const newArr = arr.concat(newArray);
console.log(newArr);

arr.push(123)
console.log(arr);

newArray.pop();
console.log(newArray);
console.log(arr.reverse())
console.log(arr.sort((a, b) => a - b)); 

console.log(arr.toString());

console.log(arr);
arr.shift()
console.log(arr);


arr.unshift(500)
console.log(arr);


console.log(arr.slice(1, 4)); // Slicing from index 1 to 3
// console.log(arr.splice(1, 2)); // Splicing from index 1, removing

console.log(arr);

console.log(arr.indexOf(75)); // Finding index of 75
console.log(arr.includes(75)); // Checking if 75 is in the array