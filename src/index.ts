import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>String Calculator</h1>
<div>
  <p>Create a function add that takes a String and returns a String:</p>
  <pre>String add(String number)</pre>
  <ul>
    <li>The method can take n separated by comma, and returns their sum.</li>
    <li>An empty string will return “0”.</li>
    <li>Example of inputs: <code>"", "1", "1.1,2.2"</code>.</li>
    <li>Negative numbers should be allowed</li>
    <li>Don’t allow the input to end in a separator.</li>
  </ul>
</div>`;

console.clear();
console.log("turing.com - Coding Dojo #4: TypeScript");
console.log("---------------------------");
console.log();

/* Write the coding solution here */
const add = (n: string): string => {

  if (n === "") {
    return "0";
  }

  // if (n[n.length - 1] === ",") {
  //   return ;
  //   //n.slice(0, n.length - 1);
  // }

  if (n[n.length - 1] === ",") {
    return "Error";
  }

 let sum:number  =0;
  console.log(n);

  //let x:string = "";
  // Declarative JavaScript breaks
  const array_of_numbers: Array<string>  =  n.split(",") //.filter((x) => !isNaN(x)).map(x => +x);
  let i:string;

  for (i of array_of_numbers) {
    if(!isNaN(Number(i)))
    {
      sum += +i;
    }
  };
  return "" + sum;
}


//   console.log(add("2.5"))
// const subtract = (n: string): string => {
//   /*  
//     if (n === "") {
//       return 0;
//     }
//     */
//     if (n[n.length - 1] === ",") {
//       return "Error";
//       //n.slice(0, n.length - 1);
//     }
  
//     console.log(n);
//     const array_of_numbers: Array<string> = n.split(",");
//     let sub:number = 0;
//     let i: string;
//     for (i of array_of_numbers) {
//       sub -= Number(i);
//     }
//     return "" + sub;
// };

console.log(add("1,2"));
//console.log(subtract("1,1,-5,0.5"));
}

//A variant with only string methods

//Steps
//1.Turn String to Array 
//2. Turn Array of strings to numbers
//3. Add all the numbers within the Array

// let string = "1,2,3"

function addPG(string) {
  let array = string.split(",")
  let arrOfNum = array.map(strings => {
      return Number(strings);
  });
  let sum = arrOfNum.reduce((partialSum, a) => partialSum + a, 0);
  return String(sum)
  }
  
  console.log(addPG("0.5,49.5,-50,1000"))