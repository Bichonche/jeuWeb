window.requestAnimationFrame = window.requestAnimationFrame || 	window.mozRequestAnimationFrame ||
                        window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    var canvas = document.getElementById("animatedElem");
    var i = 0; //compteur de sprites
    var ctx = canvas.getContext("2d");
    var image = new Image();
    var shapes = [];
    var rotation = 10; //On modifie la vitesse de rotation ici
    image.src = "coin-sprite-animation.png";
    image.onload = requestAnimationFrame(step);

    function step()
    {
        if(i>=10)
            i=0;
        ctx.clearRect(0,0,100,100);
        ctx.drawImage(image,100*i,0,100,100,0,0,100,100);
        ctx.strokeStyle = "#7FFF00";
        ctx.strokeRect(0,0,100,100); //Obtenir un cadre vert pour la pièce
        i++;
        setTimeout(function()
        {
            requestAnimationFrame(step);
        },1000/rotation-1000/60)

    }
	
	image.onload = requestAnimationFrame(step);	