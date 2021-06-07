//This is the code for the healing spots
function Heal(x, y) {
  this.x = x;
  this.y = y;
  this.r = 5;
  this.speed = 0.5;

  //Makes the healing spots grow to a certain size when hit by a water pellet
  this.grow = function () {
    if (this.r >= 30) {
      return false;
    } else {
      this.r = this.r + 2.5;
    }
  };

  //Checks if the player is touching a healing spot
  this.hits = function (player) {
    let d = dist(this.x, this.y, player.x, player.y);
    if (
      (player.health < 100 && this.r !== 0 && d < this.r + player.bodyR) ||
      (player.health < 100 && this.r !== 0 && d < this.r + player.headR)
    ) {
      return true;
    } else {
      return false;
    }
  };

  //Allows the healing spots to move downward
  this.move = function () {
    this.y = this.y + this.speed;
  };

  //Creates the healing spots
  this.show = function () {
    noStroke();
    fill("green");
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  };
}
