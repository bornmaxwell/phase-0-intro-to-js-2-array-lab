// Write your solution here!
// Step 1: Define the initial array
let cats = ["Milo", "Otis", "Garfield"];

// Step 2: Define the function that appends a cat to the end of the array destructively
function destructivelyAppendCat(name) {
    cats.push(name);  // This will modify the original cats array
}

// Destructive Functions
function destructivelyPrependCat(name) {
    cats.unshift(name);  // Adds to the front, modifying the original array
}

function destructivelyRemoveLastCat() {
    cats.pop();  // Removes the last cat from the array
}

function destructivelyRemoveFirstCat() {
    cats.shift();  // Removes the first cat from the array
}

// Non-Destructive Functions
function appendCat(name) {
    return [...cats, name];  // Creates a new array with the new cat at the end
}

function prependCat(name) {
    return [name, ...cats];  // Creates a new array with the new cat at the beginning
}

function removeLastCat() {
    return cats.slice(0, cats.length - 1);  // Returns a new array without the last cat
}

function removeFirstCat() {
    return cats.slice(1);  // Returns a new array without the first cat
}