//This is the code for the score increasing power up
function ScoreInc(x, y) {
  this.x = x;
  this.y = y;
  this.r = 5;
  this.speed = 0.5;

  //Checks if the player comes in contact with the power up
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

  //Allows the power ups to move downward
  this.move = function () {
    this.y = this.y + this.speed;
  };

  //Creates the power ups
  this.show = function () {
    noStroke();
    fill("blue");
    rect(this.x, this.y, this.r * 2, this.r * 2);
  };
}
