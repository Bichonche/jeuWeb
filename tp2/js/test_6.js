window.requestAnimationFrame = window.requestAnimationFrame || 	window.mozRequestAnimationFrame ||
                        window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
var xCoin,yCoin,x,y;    
var canvas = document.getElementById("animatedElem");
var i = 0; //compteur de sprites
var ctx = canvas.getContext("2d");
var image = new Image();
var shapes = [];
var rotation = 20; //On modifie la vitesse de rotation ici
image.src = "coin-sprite-animation.png";
image.onload = requestAnimationFrame(step);
setInterval(step,1000/rotation-1000/60);
function step()
{
    if(i>=10)
        i=0;
    coin(0,0);
    //requestAnimationFrame(step);

    i++;

}
function coin(xCoin,yCoin)
{
    ctx.clearRect(xCoin,yCoin,100,100);
    ctx.drawImage(image,100*i,0,100,100,xCoin,yCoin,100,100);
}