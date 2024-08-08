console.log("challenge3.js running");

let input1 = document.querySelector("#step1")
console.log(input1)
let p1 = document.querySelector("step1Text")
console.log(p1)

input1.addEventListener("keydown", function(event){
  if (input1.value === "Select elements"){
    p1.textContent = "Correct!"
  } else {
    p1 = "Not quite..."
  }
})

// Set up the other two steps to work correctly as well!

