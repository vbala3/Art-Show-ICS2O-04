//This is the code for the character the player controls in the game
function Player() {
  this.x = width / 2;
  this.y = height - 90;
  this.headR = 10;
  this.bodyR = 25;
  this.health = 100;
  this.healthBarWidth = 150;
  this.healthBarX = 90;
  
  //Creates the player's character
  this.show = function () {
    fill(255);
    stroke('black');
    strokeWeight(1);
    rectMode(CENTER);
    rect(constrain(this.x, 25, 375), this.y - 25, this.headR * 2, this.headR * 2);
    ellipse(constrain(this.x, 25, 375), this.y, this.bodyR * 2, this.bodyR * 2);
  };

  //Allows the player's character to move
  this.move = function (dir) {
    this.x += dir * 5;
  };
}
