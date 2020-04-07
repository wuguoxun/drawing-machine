function setup() {
  createCanvas(400, 400);
  background(220);

}

function draw() {

if(mouseIsPressed == true){
  stroke(map(mouseX,0,600,0,255,true));
  line(mouseX,mouseY,pmouseX,pmouseY);
}


}
