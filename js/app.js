// APP.JS ..... ES6 JAVASCRIPT.

let numLives = 5;

// THE PLAYER CAN CLICK THE GAME THEME BUTTON TO DISPLAY ITS HIDDEN TEXT AND READ THE GAME'S THEME AND RULES. THE TEXT WILL BE DYNAMICALLY HIDDEN AGAIN AFTER 14 SECONDS(SETTIMEOUT).
function GameThemeBtn(){     
    document.getElementById("gameTheme").style.display = "contents";    
        setTimeout (function() {
            document.getElementById("gameTheme").style.display = "none";
            },14000);            
}; 




//THE ENEMY IN THIS GAME THEME ARE THE LANDBUGS.
//THE METHODS NESTED INSIDE THIS "ENEMY" CLASS ARE: THE CONSTRUCTOR, THE TIME DELTA UPDATES, THE COLLISION DETECTION, AND THE CANVAS RENDERING,
class Enemy {
    constructor(x, y, speed){
        this.x=x;
        this.y=y;
        this.speed=speed;
        this.sprite='images/enemy-bug.png';
    }
    
    update(dt){
        this.x += this.speed * dt;
        if(this.x > 505) {
            this.x=-25;
            this.speed=150 + Math.floor(Math.random() * 222);
        }
        
        //collision detection.
        if(this.x + 75 > player.x && 
           this.x < player.x + 75 && 
           this.y + 50 > player.y && 
           this.y < player.y + 50)
        {
            loseLife();
            resetPlayer();
        }
    }
    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
};





//THE PLAYER IN THIS GAME THEME IS WATERGIRL.
//THE METHODS NESTED INSIDE THIS "PLAYER" CLASS ARE: THE CONSTRUCTOR, THE DELTA TIME UPDATES, THE CANVAS RENDERING, COLLISION DETECTION, THE KEY CONTROLS, THE "WIN GAME/RESET" FUNCTIONS. 
class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;    
        this.sprite = 'images/char-water-girl.png';
    }    
        update() {            
        }
        render() {ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
        }    
        handleInput(key) {    
            if (key == 'left' && this.x > 10) {
              this.x -= 101;
            }
            if (key == 'right' && this.x < 405) {
              this.x += 101;
            }
            if (key == 'up' && this.y > 0) {
              this.y -= 83;
            }
            if (key == 'down' && this.y < 400) {
              this.y += 83;
            }

            // WIN GAME, ONLY IF WATERGIRL MAKES IT HOME SAFELY.
            if (this.y > 400) {
                winGame();    
                resetGame();              
            }
      }    
};




// Now instantiate your objects. Place all enemy objects in an array called allEnemies
const allEnemies = [new Enemy(0, 63, 200), new Enemy(0, 145, 60), new Enemy(0, 229, 60), new Enemy(0, 315, 300)];

// Place the player object in a variable called player
const player = new Player(203, 0);

// This listens for key presses and sends the keys to your Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };    player.handleInput(allowedKeys[e.keyCode]);
});




// THE CONDITIONS BELOW CONTROL WHAT HAPPENS WHEN A PLAYER LOSES A LIFE. IT ALSO CONTROLS WHERE THE PLAYER IS RE-LOCATED AFTER A 'PLAYER RESET', OR, AFTER A 'GAME RESET'. 
function loseLife(){
  if(numLives > 1){
        numLives -=1;      
        loseLifeMsg();  
      
  }else if(numLives === 1){
        loseGame();
        }
};
// RESET THE LOCATION OF THE PLAYER TO THE 'START GAME' LOCATION, BUT, DO NOT RESET THE NUMBER OF LIVES LOST. CONTINUE PLAYING THE GAME UNTIL THE PLAYER EITHER WINS OR LOSES ALL 5 LIVES.
function resetPlayer(){
    player.x = 203;
    player.y = 0;
};
// START A 'NEW GAME'. RESET THE LOCATION OF THE PLAYER TO THE 'NEW GAME' LOCATION. ALSO, RESET NUMLIVES FROM 0 LIVES BACK TO 5 LIVES. AND RENDER THE TITLE OF THE GAME AGAIN.
function resetGame(){
    resetPlayer();
    numLives = 5; 
    gameTitle();
};




// BELOW ARE 4 CONDITIONS: 'LOSE A LIFE', 'LOSE A GAME', 'WIN A GAME, AND HIDE/SHOW THE GAME TITLE !!!'. THE PLAYER WILL RECEIVE A MESSAGE, DYNAMICALLY-GENERATED, FOR EACH CONDITION. THE IDEA IS TO MAKE THE GAME AS FAST-PACED, "HANDS-FREE", AND ENJOYABLE AS POSSIBLE FOR THE PLAYERS. I ACCOMPLISH THIS BY USING THE 'SET TIMEOUT METHOD' TO DYNAMICALLY HIDE/SHOW EACH INNERHTML MESSAGE. THIS WAY, THE PLAYER DOES NOT HAVE TO STOP PLAYING TO "CLICK & CLOSE" SO MANY 'MESSAGE-BEARING' MODALS. ALSO, THE PLAYER DOES NOT HAVE TO MAKE NUMEROUS EXTRA 'HAND MOVEMENTS' (FROM THE KEYBOARD TO THE MOUSE AND THEN BACK TO THE KEYBOARD)! LESS WORK TIME ... MORE PLAY TIME.

//DYNAMICALLY HIDE THE GAME TITLE DURING THE GAME TO REMOVE DISTRACTIONS. SHOW TITLE AGAIN AT THE BEGINNING OF EACH NEW GAME.
function gameTitle(){
    document.getElementById("gameTitle").innerHTML = ""; 
        setTimeout(function(){
            document.getElementById("gameTitle").innerHTML = "Please help waterGirl make it home safely!"; 
        },1500);
};

// DYNAMICALLY SEND MESSAGE TO THE PLAYER EACH TIME SHE LOSE A LIFE WHEN COLLIDING WITH A LANDBUG. ALSO COUNTDOWN HOW MANY LIVES SHE HAS LEFT BEFORE THE GAME IS OVER.
function loseLifeMsg(){    
    document.getElementById("gameTitle").innerHTML = "<span style='color:orangered'>waterGirl, you Only Have " +numLives+ " Lives left!</span>";    
        setTimeout(function(){            
        document.getElementById("gameTitle").innerHTML = "";            
        },750);
                    resetPlayer();
};

// DYNAMICALLY SEND THE PLAYER A MESSAGE EACH TIME SHE LOSE A GAME. THEN RESET THE GAME.
function loseGame(){     
    document.getElementById("loseGameMsg").style.display = "contents";    
        setTimeout(function(){            
        document.getElementById("loseGameMsg").style.display = "none";            
        },1200);
                    resetGame();
};

// DYNAMICALLY SEND THE PLAYER A MESSAGE EACH TIME SHE WIN A GAME. THEN RESET THE GAME.
function winGame(){
    document.getElementById("winGameMsg").style.display="contents";                   
        setTimeout(function(){
        document.getElementById("winGameMsg").style.display="none";
        },1200);  
                    resetGame();
};