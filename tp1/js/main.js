
var IntervalID = setInterval(myTimer, 10 );
var t 		= 0;
var count 	= 0;
var left = [] ;
var newDiv,cpt2;
var cpt2 = 0;
var timer = 10;


function myTimer()
{
	if (t === 0)
	{
		var newDiv = document.createElement('div');
		document.body.appendChild(newDiv);
		newDiv.id = 'timer';
	}
	if (count <=10)
	{
		left[count] = 200;
		newDiv			= document.createElement('div');
		newDiv.id		= count;
		newDiv.style.top = (count*60+10)+'px';
		newDiv.style.left = left[count]+'px';
		newDiv.className 	= 'redSquare';
		document.body.appendChild(newDiv);
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
	if (t%100 ===0 && t <= 1000)
	{
		document.getElementById('timer').innerHTML = timer;
		timer --;
	}
	if (t === 1000)
			clearInterval(IntervalID);
		t++;
}