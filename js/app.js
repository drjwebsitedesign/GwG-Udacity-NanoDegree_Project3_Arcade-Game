// APP.JS ..... JAVASCRIPT ES6.
/* CLICK THE GAME THEME BUTTON TO DISPLAY THE HIDDEN GAME THEME AND RULES. THE SETTIMEOUT        DYNAMICALLY HIDES THE TEXT XAGAIN AFTER 14 SECONDS. */
function showGameTheme(){     
    document.querySelector("#gameTheme").style.display = "contents";    
        setTimeout (() => {
            document.querySelector("#gameTheme").style.display = "none";
            },15000);            
};



/* THE METHODS NESTED INSIDE THIS "ENEMY" CLASS ARE: CONSTRUCTOR, TIME DELTA UPDATES,            COLLISION DETECTION, AND CANVAS RENDERING. */
class Enemy {
    constructor(x, y, speed){
        this.x=x;
        this.y=y;
        this.speed=speed;
        this.sprite="images/enemy-bug.png";
    }    
    update(dt){
    this.x += this.speed * dt;
    if(this.x > 505) {
        this.x=-25;
        this.speed=200 + Math.floor(Math.random() * 200);
    }        
    /* COLLISION DETECTION. */
    if(this.x + 75 > player.x && this.x < player.x + 75 && 
       this.y + 50 > player.y && this.y < player.y + 50) {
        
        loseLife();
        resetPlayer();
    }
  }
    render(){
    ctx.drawImage(Resources.get(
        this.sprite), 
        this.x, 
        this.y);
    }
};




/* THE METHODS NESTED INSIDE THIS PLAYER CLASS ARE: CONSTRUCTOR, DELTA TIME UPDATES, CANVAS RENDERING, COLLISION DETECTION, KEY CONTROLS, "WIN GAME/RESET" FUNCTIONS. */
class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;    
        this.sprite = "images/char-water-girl.png";
    }    
    update() {            
    }
    render() {ctx.drawImage(Resources.get(
        this.sprite), 
        this.x, 
        this.y);
    }    
    handleInput(key) {    
        if (key == "left" && this.x > 10) {this.x -= 101;}
        if (key == "right" && this.x < 405) {this.x += 101;}
        if (key == "up" && this.y > 0) {this.y -= 83;}
        if (key == "down" && this.y < 400) {this.y += 83;}
        // WIN GAME IF WATERGIRL MAKES IT HOME SAFELY.
        if (this.y > 400) {
            winGame();    
            resetGame();              
        }
    }    
};




/* Now instantiate your objects. Place all enemy objects in an array called allEnemies. */
const allEnemies = [new Enemy(0, 63, 200), 
                    new Enemy(0, 145, 50), 
                    new Enemy(0, 229, 333), 
                    new Enemy(0, 315, 75)];

/* Place the player object in a variable called player. */
const player = new Player(203, 0);
/* This listens for key presses and sends the keys to your Player.handleInput() method. */
document.addEventListener("keyup", function(e) {
    let allowedKeys = {
        37: "left",
        38: "up",
        39: "right",
        40: "down"
    };    player.handleInput(allowedKeys[e.keyCode]);
});




/* THE CONDITIONS BELOW CONTROL WHAT HAPPENS WHEN A PLAYER LOSES A LIFE. IT ALSO CONTROLS WHERE THE PLAYER IS RE-LOCATED AFTER A 'PLAYER RESET', OR, AFTER A 'GAME RESET'. */
let numLives = 5;
function loseLife(){
  if(numLives > 1){
        numLives -=1;      
        loseLifeMsg();        
  }else if(numLives === 1){
        loseGame();
        }
};
/* RESET PLAYER TO THE 'START GAME' LOCATION, BUT, DO NOT RESET THE NUMBER OF LIVES LOST. CONTINUE PLAYING GAME UNTIL THE PLAYER EITHER WINS OR SHE LOSES ALL 5 LIVES. */
function resetPlayer(){
    player.x = 203;
    player.y = 0;
};
/* START 'NEW GAME'. RESET PLAYER TO 'NEW GAME' LOCATION. ALSO, RESET NUMLIVES FROM 0 LIVES BACK TO 5 LIVES. RENDER THE TITLE OF THE GAME AGAIN. */
function resetGame(){
    gameTitle();
    numLives = 5;    
    resetPlayer();
};



/*
    * BELOW ARE 4 CONDITIONS: 'LOSE A LIFE', 'LOSE A GAME', 'WIN A GAME, AND HIDE/SHOW THE GAME TITLE !!!'. THE PLAYER WILL RECEIVE A MESSAGE (DYNAMICALLY-GENERATED) FOR EACH CONDITION. 
    * THE IDEA IS TO MAKE THE GAME AS FAST-PACED, "HANDS-FREE", AND ENJOYABLE AS POSSIBLE FOR THE PLAYERS. I ACCOMPLISH THIS BY USING THE 'SET TIMEOUT METHOD' TO DYNAMICALLY HIDE/SHOW EACH INNERHTML MESSAGE. THIS WAY, THE PLAYER DOES NOT HAVE TO STOP PLAYING TO "CLICK & CLOSE" SO MANY 'MESSAGE-BEARING' MODALS. 
    * ALSO, THE PLAYER DOES NOT HAVE TO MAKE NUMEROUS EXTRA 'HAND MOVEMENTS' (FROM THE KEYBOARD TO THE MOUSE AND THEN BACK TO THE KEYBOARD)! LESS WORK TIME ... MORE PLAY TIME.
    * EACH SETTIMEOUT USES THE "es6 querySelector and ES6 FAT ARROW" SYNTAX INSTEAD OF THE ES5 STANDARD "document.getElementById and anonymous function()" SYNTAX.
*/

/*  DYNAMICALLY HIDE THE GAME TITLE DURING THE GAME TO REMOVE DISTRACTIONS TO THE PLAYERS. SHOW THE TITLE AGAIN AT THE BEGINNING OF EACH NEW GAME. */
function gameTitle(){
    document.querySelector("#gameTitle").innerHTML = ""; 
        setTimeout(() => {
            document.querySelector("#gameTitle").innerHTML = "Please help waterGirl make it home safely!"; 
        },1500);
};
/* DYNAMICALLY SEND MESSAGE TO THE PLAYER EACH TIME SHE LOSE A LIFE WHEN COLLIDING WITH A LANDBUG. ALSO COUNTDOWN HOW MANY LIVES SHE HAS LEFT BEFORE THE GAME IS OVER. */
function loseLifeMsg(){ 
    
    /* THIS FUNCTION USES THE ES6 TEMPLATE LITERAL (INSTEAD OF CONCATENATION) TO PASS THE 'numLives' VARIABLE INTO THE INNERHTML OUTPUT */
    document.querySelector("#gameTitle").innerHTML = `<span style='color:orangered'>waterGirl, you Only Have ${numLives} Lives left!</span>`;    
        setTimeout(() => {            
        document.querySelector("#gameTitle").innerHTML = "";            
        },750);
                    resetPlayer();
};
/* DYNAMICALLY SEND THE PLAYER A MESSAGE EACH TIME SHE LOSE A GAME. THEN RESET THE GAME. */
function loseGame(){     
    document.querySelector("#loseGameMsg").style.display = "contents";    
        setTimeout(() => {            
        document.querySelector("#loseGameMsg").style.display = "none";            
        },1200);
                    resetGame();
};
/* DYNAMICALLY SEND THE PLAYER A MESSAGE EACH TIME SHE WIN A GAME. THEN RESET THE GAME. */
function winGame(){
    document.querySelector("#winGameMsg").style.display="contents";                   
        setTimeout(() => {
        document.querySelector("#winGameMsg").style.display="none";
        },1200);  
                    resetGame();
};