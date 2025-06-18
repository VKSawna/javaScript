const firstname = "Varinder"
const lastname = "Kaur"

console.log("my name is",`${firstname} ${lastname}`)


console.log("my name is",`${firstname.toUpperCase()} ${lastname.toUpperCase()}`)
//  Uppercase the string


console.log("my name is",`${firstname.toLocaleLowerCase()} ${lastname.toLowerCase()}`)
//  Lowercase the string


const str1 = "My Email Address is Varindersawna01@gmail.com"

const str2 = "           hello          "


// trim the string
console.log("trimmed string is", str2.trim())

console.log(str1.split(" "))
// split the string into an array

// lenth of the string

console.log(`length of ${firstname} is`, firstname.length)

// Index of a character in the string
console.log(`index of 'r' in ${firstname} is`, firstname.indexOf("r"))


// position of a character in the string
console.log(`position of '4' in ${firstname} is`, firstname.charAt(4))

//concatination two Strings

console.log(firstname.concat(" ",lastname))


const username = new String("varinder sawna")
console.log(username)

const u ="abc\uD800def"
// console.log(u.toWellFormed());