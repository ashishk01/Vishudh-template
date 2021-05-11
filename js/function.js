var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var boxes = document.getElementsByClassName("box");

btn1.addEventListener("click", function () {
  for (let i = 0; i < boxes.length; i++) {
    console.log(boxes[i]);
    boxes[i].style.display = "none";
  }
  box1.style.display = "block";
});

btn2.addEventListener("click", function () {
  for (let i = 0; i < boxes.length; i++) {
    console.log(boxes[i]);
    boxes[i].style.display = "none";
  }
  box2.style.display = "block";
});

btn3.addEventListener("click", function () {
  for (let i = 0; i < boxes.length; i++) {
    console.log(boxes[i]);
    boxes[i].style.display = "none";
  }
  box3.style.display = "block";
});