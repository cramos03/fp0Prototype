var pen = "black";
let button;
let slider;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  button = createButton('Save Art');
  button.position(10, windowHeight - 50);
  button.mousePressed(saveArt);  button.size(85, 25);
  button.style("font-family", "Helvetica");
  button.style("font-size", "15px");
}
function draw() {
  if (mouseIsPressed) {
    stroke(pen);
    line(mouseX, mouseY, pmouseX, pmouseY);
}
  stroke("black")
  strokeWeight(5);
  fill("red");
  ellipse(50, 50, 40);
  fill("white");
  ellipse(50, 100, 40);
}
function mousePressed() {
  if (mouseX > 30 && mouseX < 70 && mouseY > 30 && mouseY < 70) {
    pen = "red";
}
  if (mouseX > 30 && mouseX < 70 && mouseY > 80 && mouseY < 120) {
    pen = "white";
}
}
function saveArt() {
  saveCanvas('mycanvas',"png");
}