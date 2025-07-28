// function addNums(num1, num2) {
//   console.log(num1 + num2);
// }
// addNums(0, 1);

let counter = 0;
let button = document.getElementsByClassName("large red button");

function AddOne(onclick) {
  counter++;
  let output = document.getElementById("click");

  console.log("hi");

  console.log(counter);
  return (output.innerHTML = counter);
}
