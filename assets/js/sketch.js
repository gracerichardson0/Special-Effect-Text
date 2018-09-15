function setup() {
  createCanvas(1920, 1080);
}
function draw() {
  background(50);
  strokeWeight(2);
  fill(128 + sin(frameCount*0.1) * 128);
  if (mouseIsPressed) {
    stroke(255);
  }
  else {
    noStroke();
  }
  textSize(12 + (mouseX / width)*72);
  text("Pengu is the coolest animal on earth.", 10, 200);
}