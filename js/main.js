
var IntervalID = setInterval(myTimer, 10 );
var t 		= 0;
var count 	= 0;
var left = [] ;
var newDiv,cpt2;
var cpt2 = 0;


function myTimer()
{
	if (count <=10)
	{
		left[count] = 0;
		newDiv			= document.createElement('div');
		document.body.appendChild(newDiv);
		newDiv.className 	= 'redSquare';
		newDiv.id			= count;
		newDiv.style.top = (count * 60+20)+'px';
		count ++;
	}
	if (t >= 400)
	{
		
		if (t %100 === 0)
			cpt2++;
		for (var i = 0; i < cpt2; i++)
			if (left[i]<window.innerWidth-100)
				document.getElementById(i).style.left = (left[i]+=1)+'px';
	}
	if (left[left.length]<window.innerWidth-100)
			clearInterval(IntervalID);
		t++;
}