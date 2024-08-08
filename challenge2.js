console.log("challenge2.js running");

let img = document.getElementByClass("fine");
console.log(img);

img.addeventlistener("mouseon", function(event){
  console.log("on image");
  img = "not-fine.gif"
});

img.addeventlistener("mouseoff", function(event){
  console.log("off image");
  img = "fine.gif"
});