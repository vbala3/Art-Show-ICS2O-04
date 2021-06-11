//This is the code for the score increasing power up
function ScoreInc(x, y) {
  this.x = x;
  this.y = y;
  this.r = 20;
  this.speed = 2;
  this.rid = false;
  this.out = false;

  //Destroys the power up upon making contact with the player or going out of bounds
  this.oust = function () {
    if (this.r <= 0) {
      this.rid = true;
    } else if (this.y >= 400 + this.r) {
      this.out = true;
    }
  };

  //Checks if the player comes in contact with the power up
  this.hits = function(player) {
    let d = dist(this.x, this.y, player.x, player.y);
    if (
      (d < this.r + player.bodyR) ||
      (d < this.r + player.headR)
    ) {
      return true;
    } else {
      return false;
    }
  };

  //Allows the power ups to move downward
  this.move = function () {
    this.y = this.y + this.speed;
  };

  //Creates the power ups
  this.show = function () {
    noStroke();
    fill("orange");
    rect(this.x, this.y, this.r * 2, this.r * 2);
  };
}
