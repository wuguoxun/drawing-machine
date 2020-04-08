let array = [];
let backgroundColor = 200;

function setup() {
  createCanvas(600, 600);
  background(backgroundColor);

  strokeWeight(5);
  noFill();


}

function draw() {

  if (mouseIsPressed == true) {
    // stroke(map(mouseX, 0, 600, 0, 255, true));
    // line(mouseX, mouseY, pmouseX, pmouseY);
    backgroundColor -= 3;
    background(backgroundColor);
    array.push([mouseX, mouseY]);
    beginShape();
    for (let i = 0; i < array.length; i++) {
      // line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
      curveVertex(array[i][0], array[i][1]);
    }
    endShape();
  }
}

function keyTyped() {

  if (key === 's') {
    saveCanvas('drawing', 'png');
  } else if (key === 'd') {
    background(255);

    beginShape();
    for (let i = 0; i < array.length; i++) {
      // line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
      curveVertex(array[i][0], array[i][1]);
    }
    endShape();

  }

  return false;
}

function mousePressed() {

  array = [];
  backgroundColor = 200;
}
