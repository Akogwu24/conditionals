//Program to determine who is older between a girl and a boy
const ageOfBoy = 25;
const ageOfGirl = 21;

if (ageOfBoy == ageOfGirl) {
  console.log("the boy and the girl are of the same Age");
} else if (ageOfBoy > ageOfGirl) {
  console.log("the boy is older than the girl");
} else {
  console.log("the girl os older than the boy");
}

//program to determine the color of a boars
const boardColor = "black";
if (boardColor != "white") {
  //!== also does the same in this case
  console.log("the board color is black");
} else {
  console.log("the board color is white");
}

//x is a variable that contains the data type of 5
var x = 5;

//increment
console.log("for variable  x++ where x=5");
console.log(x);
console.log(x++);
console.log(x++);
console.log(x++);
console.log(x);

console.log("");
console.log("for variable ++y where y=5");
console.log("");
//Decrement
var y = 5;
console.log(y);
console.log(++y);
console.log(++y);
console.log(++y);
console.log(y);

console.log(" ");
console.log("array manipulation begibs here");
console.log(" ");
//arrays
const array = [22, "Banana", "Orange", "Apple", "Mango", 3, "SUA"];
console.log(array);

//pop to remove the last item in the array
const arrayPoped = array.pop();
console.log(arrayPoped);

//push adds item to the end of the array
array.push("samsung");
console.log(array);

//reversed array
const reversedArray = array.reverse();
console.log(reversedArray);

//conberts to non-arrays
console.log(array.toString("-"));

//adds to items from the begining
array.unshift("man o war");
console.log(array);

//remove item from the beginig
array.shift();
console.log(array);
