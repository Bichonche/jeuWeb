var redSquare, left, main, delay, now;

left = 0;

var intervalMain = setInterval(main, 16);

redSquare = document.createElement('div');
redSquare.id = '1';
redSquare.className = 'redSquare';
document.body.appendChild(redSquare);
function main()
{
    if (left < 400)
        redSquare.style.left = (left += 10) + 'px';
}

function affichage()
{
    now = new Date();
    delay = 
}

requestAnimationFrame(affichage);