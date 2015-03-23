var animFrame = window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            window.oRequestAnimationFrame      ||
            window.msRequestAnimationFrame     ||
            null;

//Canvas
var divArena;
var canArena;
var conArena;
var arenaWidth = 500;
var arenaHeight = 300;

//Background
var imgBackground;
var xBackgroundOffset = 0;
var xBackgroundSpeed = 1;
var backgroundWidth = 1782;
var backgroundHeight = 600;


//Others
var i = 0;
var projectiles = [];
var iProjectile = 0;

///////////////////////////////////
//Keys
var keys = {
    UP: 	38,
    DOWN: 	40,
    SPACE: 	32,
    ENTER: 	13
};

var keyStatus = {};

function keyDownHandler(event) {
    "use strict"; 
    var keycode = event.keyCode, 
        key; 
    for (key in keys) {
        if (keys[key] === keycode) {
            keyStatus[keycode] = true;
            event.preventDefault();
        }
    }
}
function keyUpHandler(event) {
   var keycode = event.keyCode,
            key;
    for (key in keys) 
        if (keys[key] == keycode) {
            keyStatus[keycode] = false;
        }
        
    }
///////////////////////////////////



/////////////////////////////////
// Hero Player
var imgPlayer 		= new Image();
imgPlayer.src 		= "./assets/Ship/player.png";
var imgProjectile	= new Image();
imgProjectile.src	= "./assets/Ship/fireballs.png";
var projectileImgHeight= 16;
var projectileImgWidth = 16;
var xPlayer 		= 20;
var yPlayerSpeed 	= 10;
var yPlayer 		= 100;
var playerHeight 	= 15;
var playerWidth 	= 32;
var playerImgHeight = 29;
var playerImgWidth 	= 64;
/////////////////////////////////



function updateScene() {
    "use strict"; 
    xBackgroundOffset = (xBackgroundOffset - xBackgroundSpeed) % backgroundWidth;
}
function updateItems() {
    "use strict"; 
    clearItems();
    
    var keycode;
    for (keycode in keyStatus) {
            if(keyStatus[keycode] == true){
                if(keycode == keys.UP) {
                	if (yPlayer > 0) { 
                    	yPlayer -= yPlayerSpeed;   
                    }
                }
                if(keycode == keys.DOWN) { 
                	if (yPlayer < arenaHeight - playerImgHeight) {
                    	yPlayer += yPlayerSpeed;
                    }   
                } 
                if(keycode == keys.SPACE ) { 
                    shootProjectile();
                }             
            }
        keyStatus[keycode] = false;
    }
}
function drawScene() {
    "use strict"; 
    canArena.style.backgroundPosition = xBackgroundOffset + "px 0px" ;
}
function drawItems() {
	if (i > 3) {i = 0;}
    "use strict"; 
    conArena.drawImage(imgPlayer, 0, playerImgHeight*i, playerImgWidth, playerImgHeight , xPlayer, yPlayer, playerWidth, playerHeight);

    //requestAnimationFrame(drawItems, 1000);
    for (var cpt = 0 ; cpt < projectiles.length ; cpt ++) {
    	projectiles[cpt][0] += 10;
    	if (projectiles[cpt][0] >10) {projectiles.splice(cpt, 0);}
    	conArena.drawImage(imgProjectile, projectileImgHeight * i + 4, 0, projectileImgWidth, projectileImgHeight, projectiles[cpt][0], projectiles[cpt][1], 10, 10);	
   	}
   	i++;
}
function clearItems() {
    "use strict"; 
    conArena.clearRect(xPlayer,yPlayer,playerWidth,playerHeight);
    for (var cpt = 0 ; cpt < projectiles.length ; cpt ++) {
    	conArena.clearRect(projectiles[cpt][0], projectiles[cpt][1], projectileImgWidth, projectileImgHeight);
   	}
}

function updateGame() {
    "use strict"; 
    updateScene();
    updateItems();
}

function drawGame() {
    "use strict"; 
    drawScene();
    drawItems();    
}

function shootProjectile() {
	var xProjectile, yProjectile;
	xProjectile = xPlayer + playerWidth;
	yProjectile = yPlayer + playerHeight/2;
	projectiles.push([xProjectile, yProjectile]);
	/*for (var cptTmp = 0 ; cptTmp < projectiles.length ; cptTmp ++ ) {
		projectiles[cptTmp][0] += 10;
	}
	*/	
}
////////////////////////////
//Main Loop

function mainloop () {
    "use strict"; 
    updateGame();
    drawGame();
}

function recursiveAnim () {
    "use strict"; 
    mainloop();
    animFrame( recursiveAnim );
}
 
function init() {
    "use strict";
    divArena = document.getElementById("arena");
    canArena = document.createElement("canvas");
    canArena.setAttribute("id", "canArena");
    conArena = canArena.getContext("2d");
    canArena.setAttribute("height",arenaHeight);
    canArena.setAttribute("width",arenaWidth);
    divArena.appendChild(canArena);
 
    
window.addEventListener("keydown", keyDownHandler, false);
window.addEventListener("keyup", keyUpHandler, false);
    
    animFrame( recursiveAnim );
    
}

window.addEventListener("load", init, false);
