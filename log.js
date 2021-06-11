//This is the code for the giant water pellet
function Log(x, y) {
  this.x = x;
  this.y = y;
  this.r = 50;
  this.out = false;
  this.check = false;

  //Checks if the giant water pellet is out of bounds
  this.outOfBounds = function (boundary) {
    let bounded = dist(this.x, this.y, boundary.x, boundary.y);
    if (bounded < this.r + boundary.r) {
      return true;
    } else {
      return false;
    }
  };

  //Destroys the giant water pellet if out of bounds
  this.off = function () {
    this.out = true;
  };

  //Destroys the giant water pellet when it goes out of bounds
  this.oust = function () {
    if (this.y <= -10) {
      this.out = true;
    }
  };

  //Checks if an enemy collides with the giant water pellet
  this.hits = function (enemy) {
    let d = dist(this.x, this.y, enemy.x, enemy.y);
    if (d < this.r + enemy.r) {
      return true;
    } else {
      return false;
    }
  };

  //Allows the giant water pellet to move upwards
  this.move = function () {
    this.y = this.y - 5;
  };

  //Creates the giant water pellet
  this.show = function () {
    noStroke();
    fill("blue");
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  };
}
