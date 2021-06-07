//This is the code for the 'back scene' button and HARD MODE button in my program
function Button2() {
  this.x = 5;
  this.y = 405;
  
  //Create variable that stores the button colour property
    let col = color(166, 8, 53);

  this.show = function () {
    //Creates the button with CSS styles to make it appear more aestitically pleasing
    button = createButton("Back");
    button.style("font-size", "20px");
    button.style("font-family", "Lucida Handwriting");
    button.style("color", "white");
    button.style("border-style", "double");
    button.style("border-color", "red");
    button.style("border-width", "4px");
    button.style("background-color", col);
    button.style("padding-right", "15px");
    button.position(this.x, this.y);

    //Allows the button to call the 'back scene' function when clicked
    button.mousePressed(back);
  };
  
  this.showHard = function () {
    //Creates the button with CSS styles to make it appear more aestitically pleasing
    button = createButton("HARD MODE");
    button.style("font-size", "20px");
    button.style("font-family", "Lucida Handwriting");
    button.style("color", "white");
    button.style("border-style", "double");
    button.style("border-color", "red");
    button.style("border-width", "4px");
    button.style("background-color", col);
    button.style("padding-right", "15px");
    button.position(this.x, this.y);

    //Allows the button to call the 'next scene' function when clicked and triggers the hard version of the game
    button.mousePressed(startDiff);
  };
}
