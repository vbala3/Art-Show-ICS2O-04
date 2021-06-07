//This is the code for the 'next scene' button and EASY MODE button in my program
function Button1() {
  this.x = 315;
  this.y = 405;
  
  //Create variable that stores the button colour property
    let col = color(0, 194, 39);

  this.show = function () {
    //Creates the button with CSS styles to make it appear more aestitically pleasing
    button = createButton("Next");
    button.style("font-size", "20px");
    button.style("font-family", "Lucida Handwriting");
    button.style("color", "white");
    button.style("border-style", "double");
    button.style("border-color", "green");
    button.style("border-width", "4px");
    button.style("background-color", col);
    button.style("padding-right", "15px");
    button.position(this.x, this.y);

    //Allows the button to call the 'next scene' function when clicked
    button.mousePressed(next);
  };
  
  this.showEasy = function () {
    //Creates the button with CSS styles to make it appear more aestitically pleasing
    button = createButton("EASY MODE");
    button.style("font-size", "20px");
    button.style("font-family", "Lucida Handwriting");
    button.style("color", "white");
    button.style("border-style", "double");
    button.style("border-color", "green");
    button.style("border-width", "4px");
    button.style("background-color", col);
    button.style("padding-right", "15px");
    button.position(this.x - 73, this.y);

    //Allows the button to call the 'next scene' function when clicked and triggers the easier version of the game
    button.mousePressed(next);
  };

  //Code that 'hides' the button from the players view and makes it no longer functional
  this.hide = function () {
    let colCover = color(250, 250, 250);
    button = createButton("0");
    button.style("font-size", "37px");
    button.style("color", colCover);
    button.style("border-style", "none");
    button.style("background-color", colCover);
    button.style("padding-right", "374px");
    button.position(0, this.y);
  };
}
