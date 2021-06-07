//This is the code for the common enemy
function Enemy(x, y) {
  this.x = x;
  this.y = y;
  this.r = 20;
  this.dec = 20;
  this.speed = 1;
  this.rid = false;

  //Destroys the enemy when hit enough times completely and increases the score
  this.oust = function () {
    if (this.r <= 0) {
      this.rid = true;
    }
  };

  //Lowers the enemies size and health points 
  this.shrink = function () {
    if (this.r <= 0) {
      return false;
    } else {
      this.r = this.r - this.dec;
    }
  };

  //Checks if the player's character has collided with the enemy
  this.hits = function (player) {
    let d = dist(this.x, this.y, player.x, player.y);
    if (
      (this.r !== 0 && d < this.r + player.bodyR) ||
      (this.r !== 0 && d < this.r + player.headR)
    ) {
      return true;
    } else {
      return false;
    }
  };

  //Allows the enemy to move downwards
  this.move = function () {
    this.y = this.y + this.speed;
  };

  //Creates the enemy
  this.show = function () {
    noStroke();
    fill("purple");
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  };
}
