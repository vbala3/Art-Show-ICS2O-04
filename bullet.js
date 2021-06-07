//This is the code for the water pellets your character shoots
function Bullet(x, y) {
  this.x = x;
  this.y = y;
  this.r = 7;
  this.rid = false;

  //Destroys the bullet upon making contact with anything
  this.oust = function () {
    this.rid = true;
  };

  
  //Checks if the bullet has collided with an enemy
  this.hits = function (enemy) {
    let d = dist(this.x, this.y, enemy.x, enemy.y);
    if (d < this.r + enemy.r) {
      return true;
    } else {
      return false;
    }
  };
  
  //Checks if the bullet has collided with a healing spot
  this.regen = function (heal) {
    let d = dist(this.x, this.y, heal.x, heal.y);
    if (d < this.r + heal.r) {
      return true;
    } else {
      return false;
    }
  };

  //Allows the bullets to move
  this.move = function () {
    this.y = this.y - 5;
  };

  //Creates the bullet
  this.show = function () {
    noStroke();
    fill(150, 0, 255);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  };
}
