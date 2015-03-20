    // Attention, cette implémentation utilise keyCode, dépréciée: utiliser pluôt la propriété key de l'objet keyboardEvent. 
        //https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key...
        //mais l'alternative proposée par MDN n'est pas reconnue par tous les navigateurs.
var canvas = document.createElement('CANVAS');
var i = 0;
var CurX, CurY;
  
canvas.id = 'gameZone';
canvas.setAttribute('width', '600');
canvas.setAttribute('height', '500');
canvas.setAttribute('tabindex', '0');
canvas.addEventListener('keydown', doKeyDown, true);
canvas.addEventListener('click', getCursorXY, true);
document.body.appendChild(canvas);

canvas_context = canvas.getContext("2d");
canvas_context.fillRect(100, 100, 50, 30);

var character = new Image();
character.src = './img/character.png';

var x = 100;
var y = 100;
canvas_context.drawImage(character, 128, 2 * 128, 128, 128, x, y, 100, 100);

function doKeyDown(e)
{ 
     e.preventDefault();
    //i > 3 ?0:i;
    if (i >3)
        i = 0;
    //====================
    //	THE down-arrow KEY
    //====================
    if (e.keyCode == 40) {
        clearCanvas();
            y = y + 10;
        canvas_context.drawImage(character,i*128, 2*128, 128, 128, x, y, 100, 100);
        i++;
    }

    //====================
    //	THE up-arrow KEY
    //====================
    if (e.keyCode == 38) {
        clearCanvas();
        y = y - 10;
        canvas_context.drawImage(character,i*128, 3*128, 128, 128, x, y, 100, 100);
        i++;
    }

    //====================
    //	THE left-arrow KEY
    //====================
    if (e.keyCode == 37) {
        clearCanvas();
        x = x - 10;
         canvas_context.drawImage(character,i*128, 0*128, 128, 128, x, y, 100, 100);
        i++;
    }

    //====================
    //	THE right-arrow KEY
    //====================
    if (e.keyCode == 39) {
        clearCanvas();
        x = x + 10;
         canvas_context.drawImage(character,i*128, 1*128, 128, 128, x, y, 100, 100);
        i++;

    }

    //Space is 32, Enter is 13, Tab is 9, esc is 27, backspace is 8... 
    // A to Z is 65 to 90

}

function clearCanvas() 
{
    canvas.width = canvas.width;
}

function getCursorXY(e) 
{   
    CurX = e.clientX;
    CurY = e.clientY;
    console.log('x : '+CurX+', y : '+CurY);
}

var myInterval = setInterval(moveCharacter,16);

function moveCharacter()
{   
        //setTimeout(null,100);
        if (i >3)
        i = 0;
        if ( x > CurX-64)
        {
            clearCanvas();
            x -= 1;
            canvas_context.drawImage(character,i*128, 0*128, 128, 128, x, y, 100, 100)  ;
            i++;
        }
        else
        {
            clearCanvas();
            x += 1;
            canvas_context.drawImage(character,i*128, 1*128, 128, 128, x, y, 100, 100);
            i++;   
        }
    
  
        if (i >3)
        i = 0;
        setTimeout(function()
        {
            if ( y > CurY-64)
            {
                clearCanvas();
                y -= 1;
                canvas_context.drawImage(character,i*128, 3*128, 128, 128, x, y, 100, 100);
                i++;
            }
            else
            {
                clearCanvas();
                 y += 1;
                canvas_context.drawImage(character,i*128, 2*128, 128, 128, x, y, 100, 100);
                i++;   
            }
        
        },100);   
    clearCanvas();
    canvas_context.drawImage(character,1*128, 2*128, 128, 128, x, y, 100, 100);
    requestAnimationFrame(moveCharacter);
}