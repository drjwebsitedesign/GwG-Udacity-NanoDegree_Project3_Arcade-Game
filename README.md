frontend-nanodegree-arcade-game
===============================
SOME CHANGES I MADE TO THE GAME ARE:

1.Make The Game 95% Hands-Free!
The main creative focus driving my version of this game was to make it 95% hands-free for the players. That allows the players to focus 95% of their hand movements on using the 'arrow keys' to "safely navigate waterGirl", instead of deleting popUps, modals, 'X's, or buttons, etc. If the players have to constantly stop to remove 'event messages' displayed during the game, then the player has to mentally and emotionally re-focus their energy each time they move their hand from the 'arrow keys', over to the 'mouse', and then back over to the 'arrow keys'. 

This distraction has been eliminated by automating this game's four 'event messages' which are: a)the player loses a Life, b)the player loses the game after losing 5 lives, c)the player wins the game if waterGirl safely and successfully makes it home from the 'top of the world' to the 'bottom of the world' without being eaten by the 'landBugs', and finally lol, d)the 'rules of the game and the theme of the game' button. I used the 'setTimeout method' to automate the opening and closing of each 'event message' so that the players can keep their fingers positioned on the 'arrow keys' tne entire game. The automation also allows them to focus 100% of their energy ONLY on winning the game. 

2.CREATE A 'GAME THEME' THAT MAKES THE PLAYERS COMPASSIONATE TO wATERGIRL'S SAFETY!
        'click here and read the game rules'
waterGirl only has '5 Lives' to make it home safely! The loving aquatic family of waterGirl lives at the bottom of the world in the Pacific ocean. Her aquatic family can only survive on dry land for a short time. waterGirl is headed home from visiting her best friend at the top of the world in the Atlantic ocean. They fear the gigantic landBugs that eat the waterPeople! Can she safely cross the hard gravel roads and thick grassy weeds ?? Can waterGirl return home without being eaten by the landBugs ? If she fails it will be ..... Rest in Peace for waterGirl!
    
3.CREATED A DIFFERENT 'SCENERY' TO MAKE THE GAME EVEN MORE CHALLENGING THAN BEFORE!
a.Added a 4th landBug to evade to make it more difficult for waterGirl while returning home.

b.Display a countdown of the number of lives waterGirl has left after being eaten by each landBug.

c.waterGirl's journey is reversed. She travels from the top of the canvas to the bottom, instead of from the bottom to the top. Her 'y' coordinates are changed to make the code work.

d.I re-arranged the rowImages to fit my 'game theme' and to create a more challenging trek across the roads, water, and grasslands. Re-arranged from 1-water, 3-stone, 2-grass ..... to 1-water(Atlantic Ocean), 2-stone(landBug turf), 2-grass(landBug turf), and 1-more water(Pacific Ocean).

e.Reduced the canvas.height from 606 to 515 to help the canvas fit more squarely and centered on the body. The canvas would briefly overlap the page whenever the height of my '<h2> display messages' would render. 



3.TECHNOLOGIES AND DEPENDANCIES USED:
a.html, css, javascript
b.Changed the code from ES5(.prototype) to ES6(Classes).
