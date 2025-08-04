// // function addNums(num1, num2) {
// //   console.log(num1 + num2);
// // }
// // addNums(0, 1);

// let counter = 0;
// let button = document.getElementsByClassName("large red button");

// function AddOne(onclick) {
//   counter++;
//   let output = document.getElementById("click");

//   console.log("hi");

//   console.log(counter);
//   return (output.innerHTML = counter);
// }
let input = document.getElementById("product");
let output = document.getElementById("output");
let productArray = [];

function addProduct() {
  const newProductValue = input.value;
  if (newProductValue === "") {
    return;
  }
  productArray.push(newProductValue);
  console.log(productArray);

  // Clear previous output to prevent duplicates
  output.innerHTML = "";

  // Use forEach to iterate over the entire array and append each item
  productArray.forEach((product) => {
    const p = document.createElement("p");
    p.textContent = product;
    output.append(p);
  });

  input.value = "";
}
