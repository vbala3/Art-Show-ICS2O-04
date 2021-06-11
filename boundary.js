//This is the code for the boundaries
function Boundary() {
  this.x = width / 2;
  this.y = -250;
  this.r = 200;

  //Creates the boundaries
  this.show = function () {
    fill(38, 178, 237);
    noStroke();
    rectMode(CENTER);
    rect(constrain(this.x, 25, 375), this.y - 25, this.r * 2, this.r * 2);
  };
}
