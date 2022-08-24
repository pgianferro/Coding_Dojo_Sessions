//A variant with only string methods

//Steps
//1.Turn String to Array
//2. Turn Array of strings to numbers
//3. Add all the numbers within the Array

// let string = "1,2,3"

function addPG(string) {
  let array = string.split(",");
  let arrOfNum = array.map((strings) => {
    return Number(strings);
  });
  let sum = arrOfNum.reduce((partialSum, a) => partialSum + a, 0);
  return String(sum);
}

console.log(addPG("0.5,49.5,-50,1000"));