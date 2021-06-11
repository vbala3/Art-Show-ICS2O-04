# Art-Show-ICS2O-04
This is a video game I created for my computer science class. The game is a typical, fairly simple and straightforward shooter game. As such, some of the code is based off of other similar games such as the Space Invader's coding challenge done on the coding train. I used that as my base code and refactored it into my own creation. Below I have linked some of the previous versions of this game, each one marking the progress I have made to end up here. Note that these are all links to p5.js as that was where I created my video game. The final version is the last link, and it is playable on GitHub. <br />
______________________________________________________________________________________________________________________________ <br />
[Version 1:](https://editor.p5js.org/vbala3/sketches/MAaq9-ucX) Fairly simple, has a main character that can shoot, as well as some randomly spawning enemies and even a health bar, but there is no collision detection whatsoever. <br />
______________________________________________________________________________________________________________________________ <br />
[Version 2:](https://editor.p5js.org/vbala3/sketches/9WUVEYQWr) Changed up some of the colours to appear less bland but since there is still no collision detection, not much has changed. This is when I realized I had coded myself into a corner, as everything was essentially one big messy and confusing file. I realized that what I was doing was much too inefficient to work in the long run. <br />
______________________________________________________________________________________________________________________________ <br />
[Version 3:](https://editor.p5js.org/vbala3/sketches/m6SIpJ7Dp) As you can probably tell, I was having alot of trouble with the collision detection, so I ended up trying a diffrent approach entirely, using multiple diffrent files and classes instead of simply arrays. I changed the postion of everything and decided to make the enemies stationary to make testing easier as well. Unfortunately, still no success in the collision detection department... yet. <br />
______________________________________________________________________________________________________________________________ <br />
[Version 4:](https://editor.p5js.org/vbala3/sketches/oMZtio91y) I finally managed to get collsion detection to work... sort of. It is quite wonky, as the enemies need to be huge and the bullets do not appear to be touching the enemies when they collide. <br />
______________________________________________________________________________________________________________________________ <br />
[Version 5:](https://editor.p5js.org/vbala3/sketches/1_kFt0Iu1) In the end, I concluded that the reason it was not working was because the collison detection was getting called backwards, probably due to the enemies being positioned below the bullet. So, I ended up reversing the position of everything in this version, and would you look at that, it works! I also made the enemies move and made it so when they are hit the shrink. I even made it so your character takes damage if they are hit by an enemy. <br />
______________________________________________________________________________________________________________________________ <br />
[Version 6:](https://editor.p5js.org/vbala3/sketches/RwvhMe8k7) So, I had the base code mostly done in the last step, so I took a step back and decided to try my hand at making an opening scene. It did not go too well if this version is any indication, as I just could not figure out how to get the button I made to work. <br /
______________________________________________________________________________________________________________________________ <br />
[Version 7:](https://editor.p5js.org/vbala3/sketches/P6-1hbc0M) I ended up taking a break from making scenes to clear my mind, and instead worked on the actual gameplay oncemore. Unfortunately, I did not make much progress here either, simply made more enemies spawn at slightly random intervals. <br />
______________________________________________________________________________________________________________________________ <br />
[Version 8:](https://editor.p5js.org/vbala3/sketches/eSjSWUN0Y) I made a ton of progress in this version. As you can see, I learned that there is actually already a button function in p5.js, so I used that to move through the beginning scenes, and made the button look better with CSS. I also changed the background colour and made enemies spawn in much more spaced out random positions. I even added two diffrent difficulties, even if the only diffrence at this point is how many hits the enemies can take. Also added healing spots. <br />
______________________________________________________________________________________________________________________________ <br />
[Version 9:](https://editor.p5js.org/vbala3/sketches/W7u3jSfq_) I tried creating some power ups, but I did not go to well as the enemies stopped spawning completely. <br />
______________________________________________________________________________________________________________________________ <br />
[Version 10:](https://editor.p5js.org/vbala3/sketches/WwnWBuNVr) Managed to fix the power up issue, added another, more difficult, class of enemies, made the bullets get removed from the array once they go out of bounds and added a gameover screen. <br />
______________________________________________________________________________________________________________________________ <br />
[Final Version:](https://vbala3.github.io/Art-Show-ICS2O-04/) The final product of my game. There is still much more I wish to do and could do, but for now, I am quite happy with how it came out. Changes in this version are minor, mostly final touches and adding a winning screen. <br />
