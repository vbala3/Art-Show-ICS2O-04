//All variable and arrays are created
let player; //Stores the player's charcter's properties
let bullets = []; //Stores an array of the water pellet's properties
let enemies = []; //Stores an array of the enemies's properties
let tougherEnemies = []; //Stores an array of the tougher enemies's properties
let heals = []; //Stores an array of the healing spot's properties
let powerScores = []; //Stores an array of the score increasing power up's properties
let powerLogs = []; //Stores an array of the log power up's properties
let logs = []; //Stores the giant water pellet's properties
let score = 0; //Stores the player's score
let difficultyCheck = 0; //Checks what difficulty the user has selected - 0 = EASY MODE and 1 = HARD MODE
let scene = 0; //Stores the scene numbeer and acts as a counter to determine which scene comes next and what scenes have played already
let nextButton; //Stores the properties for the 'next scene' button
let backButton; //Stores the properties for the 'back scene' button
let easyModeButton; //Stores the properties for the 'activate EASY MODE' button
let hardModeButton; //Stores the properties for the 'activate HARD MODE' button

//Moves to the next scene when the player clicks a button
function next() {
  if (scene <= 7) {
    scene++;
    console.log("Next!");
  }
}

//Moves back a scene when the player clicks a button
function back() {
  if (scene > 0 && scene <= 5) {
    scene--;
    console.log("Back!");
  }
}

//Starts the game portion of the program in HARD MODE
function startDiff() {
  if (scene <= 5) {
    difficultyCheck++;
    scene++;
    setup();
    console.log("Difficulty increased!");
  }
}

function setup() {
  createCanvas(400, 450);
  player = new Player();
  boundary = new Boundary();

  //HARD MODE ACTIVATED - Enemies spawn more frequently and healing spots and power ups spawn less frequently
  if (difficultyCheck == 1) {
    for (let i = 0; i < 50; i++) {
      enemies[i] = new Enemy(random(constrain(width, 20, 380)), random(-6500));
      enemies[i].speed = 2;
    }
    for (let i = 0; i < 70; i++) {
      tougherEnemies[i] = new Enemy(
        random(constrain(width, 20, 380)),
        random(-8000)
      );
      tougherEnemies[i].r = 30;
      tougherEnemies[i].speed = 3;
    }
    for (let i = 0; i < 2; i++) {
      heals[i] = new Heal(random(constrain(width, 20, 380)), random(-6500));
    }
    for (let i = 0; i < 5; i++) {
      powerScores[i] = new ScoreInc(
        random(constrain(width, 20, 380)),
        random(-6500)
      );
    }
    for (let i = 0; i < 3; i++) {
      powerLogs[i] = new PowerPush(
        random(constrain(width, 20, 380)),
        random(-6500)
      );
    }
  }

  //EASY MODE ACTIVATED - Enemies spawn less frequently and healing spots and power ups spawn more frequently
  else if (difficultyCheck == 0) {
    for (let i = 0; i < 45; i++) {
      enemies[i] = new Enemy(random(constrain(width, 20, 380)), random(-6500));
      enemies[i].speed = 1;
    }
    for (let i = 0; i < 25; i++) {
      tougherEnemies[i] = new Enemy(
        random(constrain(width, 20, 380)),
        random(-6500)
      );
      tougherEnemies[i].r = 30;
      tougherEnemies[i].speed = 2;
    }
    for (let i = 0; i < 8; i++) {
      heals[i] = new Heal(random(constrain(width, 20, 380)), random(-6500));
    }
    for (let i = 0; i < 8; i++) {
      powerScores[i] = new ScoreInc(
        random(constrain(width, 20, 380)),
        random(-6500)
      );
    }
    for (let i = 0; i < 5; i++) {
      powerLogs[i] = new PowerPush(
        random(constrain(width, 20, 380)),
        random(-6500)
      );
    }
  } else if (difficultyCheck == 3) {
    //chashbcibcibifia;fffffifcbhyebci
  }
}

//The following code is for the starting menu which appears when the player opens the game
function start() {
  background(0);
  fill("black");
  textSize(30);
  stroke("white");
  strokeWeight(4);
  text("Welcome to Aqua Lustrate!", 20, height / 3);
  fill("white");
  strokeWeight(0);
  textSize(14);
  text(
    "Click the green button in the right hand corner to continue!",
    20,
    height / 3 + 30
  );

  //A small white dot is drawn and follows the mouse pointer around
  noStroke();
  fill("white");
  ellipse(mouseX, mouseY, 10, 10);

  //Creates the 'next scene' button
  nextButton = new Button1();
  nextButton.show();
}

//The following code is the section of the game that explains the 'story' or the 'context' of the game
function story() {
  background("black");
  fill("black");
  textSize(20);
  stroke("white");
  strokeWeight(3);
  text("Our story begins in a land far, far away...", 20, height / 3 - 123);
  fill("white");
  strokeWeight(0);
  textSize(13);
  text(
    "In said place, there was a beautiful ocean that spaned across the",
    20,
    height / 3 - 100
  );
  text(
    "shore line. It was one of the land's most tresured landmark's, not",
    20,
    height / 3 - 80
  );
  text(
    "to mention their only source of fresh water. Therefore, it was",
    20,
    height / 3 - 60
  );
  text(
    "very important that these lovely waters remained in pristine",
    20,
    height / 3 - 40
  );
  text(
    "condition. But alas, not all who lived there held such beliefs. It",
    20,
    height / 3 - 20
  );
  text(
    "was not long before these individuals, driven by ignorance,",
    20,
    height / 3
  );
  text(
    "decided to polute the precious sea with their muck and grime.",
    20,
    height / 3 + 20
  );
  text(
    "Of course, the rest of the inhabitants quickly became aware",
    20,
    height / 3 + 40
  );
  text(
    "of their horrid motives. They knew that if their cherished ocean",
    20,
    height / 3 + 60
  );
  text(
    "were to be contaminated then it would not be long before the",
    20,
    height / 3 + 80
  );
  text(
    "ressourse becames scarce and eventually completely",
    20,
    height / 3 + 100
  );
  text(
    "unavailable. With this in mind, the civilians gathered together,",
    20,
    height / 3 + 120
  );
  text(
    "concluding that to stop these villains they would need to",
    20,
    height / 3 + 140
  );
  text(
    "cleanse the sullied waters and purge the filth themselves. Thus,",
    20,
    height / 3 + 160
  );
  text(
    "the Lustrate Aqua was created, and with the help of it's",
    20,
    height / 3 + 180
  );
  text(
    "enchanted abilities, you were sent into the deep depths of the",
    20,
    height / 3 + 200
  );
  text(
    "tarnished ocean. Your goal? To restore the sea back to it's",
    20,
    height / 3 + 220
  );
  text(
    "former glory and vanquish these villains once and for all!",
    20,
    height / 3 + 240
  );

  //Creates the 'back scene' button
  backButton = new Button2();
  backButton.show();
}

//The following code is for the tutorial section of the game and includes how to move, shoot, what the enemies and healing spots look like, what they do, what the power ups look like, how to win and how to loose
function tutorial1() {
  background("black");
  fill("black");
  textSize(30);
  stroke("white");
  strokeWeight(3);
  text("How to play:", 20, height / 3 - 105);
  fill("white");
  strokeWeight(0);
  textSize(14);
  text(
    "You can move your character left and right using the arrow",
    20,
    height / 3 - 80
  );
  text(
    "keys! Click the space bar to shoot with your water gun!",
    20,
    height / 3 - 60
  );
  text(
    "You want to aim for the enemies and healing spots. The",
    20,
    height / 3 - 40
  );
  text(
    "enemies are purple, pink and red and will damage you if",
    20,
    height / 3 - 20
  );
  text(
    "they come in contact with your character, so shoot them",
    20,
    height / 3
  );
  text(
    "down before they get too close! The healing spots are green",
    20,
    height / 3 + 20
  );
  text(
    "and will grow bigger if you shoot them! If your character is",
    20,
    height / 3 + 40
  );
  text(
    "touching a healing spot you will recover some health! If you",
    20,
    height / 3 + 60
  );
  text(
    "shoot an enemy or healing spot your score will increase!",
    20,
    height / 3 + 80
  );
  text(
    "Get a high enough score to win, and avoid taking damage",
    20,
    height / 3 + 100
  );
  text(
    "as much as possible, because if your health reaches 0,",
    20,
    height / 3 + 120
  );
  text(
    "you lose! But don't worry because there are also a few",
    20,
    height / 3 + 140
  );
  text(
    "power ups along the way that you can collect to help",
    20,
    height / 3 + 160
  );
  text(
    "you out! They look like squares, and their colour indicates",
    20,
    height / 3 + 180
  );
  text(
    "what they do! Huh? What do they do, you ask? Well, you'll",
    20,
    height / 3 + 200
  );
  text(
    "just have to find out for yourself! So keep an eye out and",
    20,
    height / 3 + 220
  );
  text("have fun experimenting!", 20, height / 3 + 240);
}

//The following code is for the scene that explains what the differences between HARD MODE and EASY MODE
function tutorial2() {
  background("black");
  fill("black");
  textSize(30);
  stroke("white");
  strokeWeight(4);
  text("Ready to begin?", 20, height / 3 - 48);
  fill("white");
  strokeWeight(0);
  textSize(14);
  text(
    "If so, then go ahead and select the difficulty mode you",
    20,
    height / 3 - 20
  );
  text(
    "would like to play on. EASY MODE has less enemies that",
    20,
    height / 3
  );
  text(
    "take less hits to defeat, as well as more healing spots",
    20,
    height / 3 + 20
  );
  text(
    "and power ups. The enemies also deal less damage and",
    20,
    height / 3 + 40
  );
  text("healing spots heal more HP. HARD MODE has more", 20, height / 3 + 60);
  text(
    "enemies that take more hits to defeat, as well as",
    20,
    height / 3 + 80
  );
  text(
    "less healing spots and power ups. The enemies also",
    20,
    height / 3 + 100
  );
  text(
    "deal more damage and healing spots heal less HP.",
    20,
    height / 3 + 120
  );
  text(
    "Got it? Alright, then click one of the buttons below",
    20,
    height / 3 + 140
  );
  text("to begin the game! Good luck!", 20, height / 3 + 160);

  //Creates the EASY MODE button that begins the easier version game
  easyModeButton = new Button1();
  easyModeButton.showEasy();

  //Creates the HARD MODE button that begins more difficullt version of the game
  hardModeButton = new Button2();
  hardModeButton.showHard();
}

//The following code is for everything that happens in the actual game part of the program
function game() {
  //Conceals the buttons used during the tutorial
  nextButton.hide();

  //Changes the background, makes the player visible and adds the boundaries
  background(38, 178, 237);
  player.show();
  boundary.show();

  //Creates the bullets and checks if they collide with an enemy
  for (let i = 0; i < bullets.length; i++) {
    bullets[i].show();
    bullets[i].move();
    for (let j = 0; j < enemies.length; j++) {
      if (bullets[i].hits(enemies[j])) {
        console.log("Critical hit!");
        //If on HARD MODE enemies take more hits to destroy
        if (difficultyCheck == 1) {
          enemies[j].dec = 5;
        } else if (difficultyCheck == 0) {
          enemies[j].dec = 20;
        }
        //Lowers enemies health or destroys them completely and stops the same bullet from hitting more than one time
        enemies[j].shrink();
        bullets[i].oust();
        enemies[j].oust();
        //Increases the player's score when they shoot an enemy
        score += 10;
      }
    }
  }

  //Creates the bullets and checks if they collide with a tougher enemy
  for (let i = 0; i < bullets.length; i++) {
    bullets[i].show();
    bullets[i].move();
    for (let j = 0; j < tougherEnemies.length; j++) {
      if (bullets[i].hits(tougherEnemies[j])) {
        console.log("Super critical hit!");
        //If on HARD MODE enemies take more hits to destroy
        if (difficultyCheck == 1) {
          tougherEnemies[j].dec = 6;
        } else if (difficultyCheck == 0) {
          tougherEnemies[j].dec = 15;
        }
        //Lowers enemies health or destroys them completely and stops the same bullet from hitting more than one time
        tougherEnemies[j].shrink();
        bullets[i].oust();
        tougherEnemies[j].oust();
        //Increases the player's score when they shoot a tougher enemy
        score += 20;
      }
    }
  }

  //Creates bullet and checks if they collide with a healing spot
  for (let i = 0; i < bullets.length; i++) {
    bullets[i].show();
    bullets[i].move();
    for (let j = 0; j < heals.length; j++) {
      if (bullets[i].regen(heals[j])) {
        //Makes the healing spots grow and stops the same bullet from hitting more than one time
        console.log("Regenerate!");
        heals[j].grow();
        bullets[i].oust();
        //Increases the player's score by a bit when they shoot a healing spot
        score += 5;
      }
    }
  }

  //Creates the enemies and checks if they collided with the player
  for (let i = 0; i < enemies.length; i++) {
    enemies[i].show();
    enemies[i].move();
    enemies[i].oust();
    if (enemies[i].hits(player)) {
      //If they collide with the player they loose health
      console.log("Player hit!");
      if (difficultyCheck == 1) {
        //They loose more health if they are playing on HARD MODE
        player.health -= 2;
        player.healthBarWidth -= 3;
        player.healthBarX -= 1.5;
      } else {
        player.health -= 1;
        player.healthBarWidth -= 1.5;
        player.healthBarX -= 0.75;
      }
    }
  }

  //Creates the tougher enemies and checks if they collided with the player
  for (let i = 0; i < tougherEnemies.length; i++) {
    tougherEnemies[i].showTough();
    tougherEnemies[i].move();
    tougherEnemies[i].oust();
    if (tougherEnemies[i].hits(player)) {
      //If they collide with the player they loose health
      if (difficultyCheck == 1) {
        //They loose more health if they are playing on HARD MODE
        player.health -= 4;
        player.healthBarWidth -= 6;
        player.healthBarX -= 3;
        console.log("Player took lots of damage!");
      } else if (difficultyCheck == 0) {
        player.health -= 2;
        player.healthBarWidth -= 3;
        player.healthBarX -= 1.5;
        console.log("Player took lots of damage!");
      }
    }
  }

  //Creates the healing spots and checks if they are touching the player
  for (let i = 0; i < heals.length; i++) {
    heals[i].show();
    heals[i].move();
    heals[i].oust();
    if (heals[i].hits(player)) {
      //If they are then increase the player's health
      //If on HARD MODE player heals less HP
      if (difficultyCheck == 1) {
        player.health += 0.5;
        player.healthBarWidth += 0.75;
        player.healthBarX += 0.375;
      } else {
        console.log("Healing!");
        player.health += 1;
        player.healthBarWidth += 1.5;
        player.healthBarX += 0.75;
      }
    }
  }

  //Creates the score increasing power up and checks if it collided with the player
  for (let i = 0; i < powerScores.length; i++) {
    powerScores[i].show();
    powerScores[i].move();
    powerScores[i].oust();
    if (powerScores[i].hits(player)) {
      //If it collides with the player their score increases greatly
      powerScores[i].oust();
      powerScores[i].r = 0;
      console.log("Score increased drastically!");
      if (difficultyCheck == 1) {
        //If they are playing on HARD MODE then their score increases less
        score += 500;
      } else {
        score += 1000;
      }
    }
  }

  //Creates the log power up and checks if it collided with the player
  for (let i = 0; i < powerLogs.length; i++) {
    powerLogs[i].show();
    powerLogs[i].move();
    powerLogs[i].oust();
    if (powerLogs[i].hits(player)) {
      //If it collides with the player then the log power up disappears and the player's water gun shoots out a giant water pellet
      powerLogs[i].r = 0;
      call();
      console.log("Power PUSH!!!");
      powerLogs[i].oust();
    }
  }

  //The giant water pellet moves forward slowly
  for (let i = 0; i < logs.length; i++) {
    logs[i].show();
    logs[i].move();
    for (let j = 0; j < enemies.length; j++) {
      if (logs[i].hits(enemies[j])) {
        //Destroys the enemies completely when hit by the giant water pellet
        console.log("One hit KO!");
        enemies[j].r = 0;
        enemies[j].oust();
      }
    }
  }

  //The giant water pellet moves forward slowly
  for (let i = 0; i < logs.length; i++) {
    logs[i].show();
    logs[i].move();
    for (let j = 0; j < tougherEnemies.length; j++) {
      if (logs[i].hits(tougherEnemies[j])) {
        //Destroys the tougher enemies completely when hit by the giant water pellet
        console.log("One hit KO!");
        tougherEnemies[j].r = 0;
        tougherEnemies[j].oust();
      }
    }
  }

  //Checks if the water pellet is out of bounds
  for (let i = 0; i < bullets.length; i++) {
    bullets[i].show();
    bullets[i].move();
    if (bullets[i].outOfBounds(boundary)) {
      bullets[i].off();
    }
  }

  //Removes the water pellet from the array if it goes out of bounds
  for (let i = bullets.length - 1; i >= 0; i--) {
    if (bullets[i].out) {
      bullets.splice(i, 1);
    }
  }

  //Checks if the giant water pellet is out of bounds
  for (let i = 0; i < logs.length; i++) {
    logs[i].show();
    logs[i].move();
    if (logs[i].outOfBounds(boundary)) {
      logs[i].off();
      //Also increases the player's score when they unleash the giant water pellet and it goes off screen
      score += 50;
    }
  }

  //Removes the giant water pellet from the array if it goes out of bounds
  for (let i = logs.length - 1; i >= 0; i--) {
    if (logs[i].out) {
      logs.splice(i, 1);
    }
  }

  //Removes bullet from the array upon coming into contact with anything
  for (let i = bullets.length - 1; i >= 0; i--) {
    if (bullets[i].rid) {
      bullets.splice(i, 1);
    }
  }

  //Removes the enemy from the array upon coming into contact with anything
  for (let i = enemies.length - 1; i >= 0; i--) {
    if (enemies[i].rid) {
      enemies.splice(i, 1);
      //Increase the player's score greatly when they defeat an enemy
      score += 100;
    }
  }

  //Removes the tougher enemy from the array upon coming into contact with anything
  for (let i = tougherEnemies.length - 1; i >= 0; i--) {
    if (tougherEnemies[i].rid) {
      tougherEnemies.splice(i, 1);
      //Increase the player's score greatly when they defeat a tougher enemy
      score += 200;
    }
  }

  //Removes the score increasing power up from the array upon coming into contact with the player
  for (let i = powerScores.length - 1; i >= 0; i--) {
    if (powerScores[i].rid) {
      powerScores.splice(i, 1);
    }
  }

  //Removes the log power up from the array upon coming into contact with the player
  for (let i = powerLogs.length - 1; i >= 0; i--) {
    if (powerLogs[i].rid) {
      powerLogs.splice(i, 1);
    }
  }

  //Removes the enemy from the array if it goes out of bounds
  for (let i = enemies.length - 1; i >= 0; i--) {
    if (enemies[i].out) {
      enemies.splice(i, 1);
    }
  }

  //Removes the tougher enemy from the array if it goes out of bounds
  for (let i = tougherEnemies.length - 1; i >= 0; i--) {
    if (tougherEnemies[i].out) {
      tougherEnemies.splice(i, 1);
    }
  }

  //Removes the healing spot from the array if it goes out of bounds
  for (let i = heals.length - 1; i >= 0; i--) {
    if (heals[i].out) {
      heals.splice(i, 1);
    }
  }

  //Removes the score increasing power up from the array if it goes out of bounds
  for (let i = powerScores.length - 1; i >= 0; i--) {
    if (powerScores[i].out) {
      powerScores.splice(i, 1);
    }
  }

  //Removes the log power up from the array if it goes out of bounds
  for (let i = powerLogs.length - 1; i >= 0; i--) {
    if (powerLogs[i].out) {
      powerLogs.splice(i, 1);
    }
  }

  //Allows the player to move horizontally in both directions using the right and left arrow keys or the A and D keys
  if (keyIsDown(RIGHT_ARROW) || keyCode === 68) {
    player.move(1);
  } else if (keyIsDown(LEFT_ARROW) || keyCode === 65) {
    player.move(-1);
  }

  //Displays HP lost
  noStroke();
  fill(255, 0, 0);
  rect(90, 30, 150, 30);

  //Displays HP left in health bar
  noStroke();
  fill(0, 255, 30);
  rect(player.healthBarX, 30, player.healthBarWidth, 30);

  //Displays HP in text
  textSize(18);
  fill(4, 43, 11);
  text("HP: " + player.health, 20, 38);

  //Displays score
  textSize(18);
  text("Score: " + score, 15, 70);

  //Makes the player shoot the water pellets when they hit the space button
  /*if (keyCode === 32 && keyIsPressed === true) {
    let bullet = new Bullet(player.x, height - 135);
    bullets.push(bullet);
  }*/

  if (player.health <= 0 || score >= 10000) {
    scene++;
  }
}

//If the player's health reaches 0 then the following function would run
function gameover() {
  if (player.health <= 0) {
    console.log("Gameover!");
    background(197, 7, 7);
    player.healthBarWidth = 0;
    player.health = 0;

    fill("black");
    textSize(45);
    stroke("white");
    strokeWeight(4);
    text("GAMEOVER!", 60, height / 3 + 10);
    fill("white");
    strokeWeight(0);
    textSize(14);
    text(
      "Oh no! All the gunk has clogged up the engines in your ship!",
      15,
      height / 3 + 40
    );
    text(
      "There is no way you can go on any further with it in that kind",
      15,
      height / 3 + 65
    );
    text("of condition! Better luck next time I suppose!", 15, height / 3 + 90);
  }
}

//If the player achieves a high enough score than the following code runs
function win() {
  if (score >= 10000) {
    console.log("You win!");
    background(7, 127, 127);
    fill("black");
    textSize(45);
    stroke("white");
    strokeWeight(4);
    text("YOU WIN!", 90, height / 3 - 10);
    fill("white");
    strokeWeight(0);
    textSize(14);
    text(
      "Congratulations! Well done! You managed to clear all the",
      15,
      height / 3 + 20
    );
    text(
      "gunk in the ocean, and seeked out the source as well!",
      15,
      height / 3 + 45
    );
    text(
      "With the matter finally disposed of the villagers may live",
      15,
      height / 3 + 70
    );
    text(
      "at peace once again, with the knowledge that should another",
      15,
      height / 3 + 95
    );
    text(
      "evil arise, you will be their to cleanse their land once more.",
      15,
      height / 3 + 120
    );
  }
}


//Draws the appropriate scene
function draw() {
  if (scene == 0) {
    start();
  } else if (scene == 1) {
    story();
  } else if (scene == 2) {
    tutorial1();
  } else if (scene == 3) {
    tutorial2();
  } else if (scene == 4) {
    game();
  } else if (scene == 5) {
    gameover();
    win();
  }
}

//Makes the player shoot the water pellets when they hit the space button
function keyPressed() {
  if (keyCode === 32 && keyIsPressed === true) {
    let bullet = new Bullet(constrain(player.x, 25, 375), height - 135);
    bullets.push(bullet);
  }
}

//Makes the player shoot the giant water pellet
call = function () {
  let log = new Log(constrain(player.x, 25, 375), height - 135);
  logs.push(log);
};
