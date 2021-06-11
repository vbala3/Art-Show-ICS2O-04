//This is the code for the water pellets your character shoots
function Bullet(x, y) {
  this.x = x;
  this.y = y;
  this.r = 7;
  this.rid = false;
  this.out = false;

  //Checks if the water pellet is out of bounds
  this.outOfBounds = function (boundary) {
    let bounded = dist(this.x, this.y, boundary.x, boundary.y);
    if (bounded < this.r + boundary.r) {
      return true;
    } else {
      return false;
    }
  };

  //Destroys the water pellet if out of bounds
  this.off = function () {
    this.out = true;
  };
  
  //Destroys the water pellet upon making contact with an enemy
  this.oust = function () {
    this.rid = true;
  };

  //Checks if the water pellet has collided with an enemy
  this.hits = function (enemy) {
    let d = dist(this.x, this.y, enemy.x, enemy.y);
    if (d < this.r + enemy.r) {
      return true;
    } else {
      return false;
    }
  };
  
  //Checks if the water pellet has collided with a healing spot
  this.regen = function (heal) {
    let d = dist(this.x, this.y, heal.x, heal.y);
    if (d < this.r + heal.r) {
      return true;
    } else {
      return false;
    }
  };

  //Allows the water pellets to move
  this.move = function () {
    this.y = this.y - 5;
  };

  //Creates the water pellets
  this.show = function () {
    noStroke();
    fill(150, 0, 255);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  };
}
