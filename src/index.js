//CHALLENGE
// String Calculator
// Create a function add that takes a String and returns a String:

// String add(String number)
// The method can take n separated by comma, and returns their sum.
// An empty string will return “0”.
// Example of inputs: "", "1", "1.1,2.2".
// Negative numbers should be allowed
// Don’t allow the input to end in a separator.

//SOLUTION
//A variant with only string methods

//Steps
//1.Turn String to Array
//2. Turn Array of strings to numbers
//3. Add all the numbers within the Array

function addPG(string) {
  let array = string.split(",");
  let arrOfNum = array.map((strings) => {
    if (isNaN(strings)) {
      return 0;
    } else {return Number(strings)}
  });
  let sum = arrOfNum.reduce((partialSum, a) => partialSum + a, 0);
  return String(sum);
}

console.log(addPG("a,49.5,-50,100,Vamos Racing"));
console.log(addPG("Racing tiene, 45, puntos"));