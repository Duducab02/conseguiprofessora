canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

greencar_width = 75;
greencar_height = 100;

backgroundImage = "parkingLot.jpg";
greencarImage = "car2.png";

greencar_x = 5;
greencar_y = 225;

function add() {
	background_ImgTag = new Image();
	background_ImgTag.onload = uploadBackground
	background_ImgTag.src = backgroundImage

	greencar_ImgTag = new Image();
	greencar_ImgTag.onload = uploadGreencar	
	greencar_ImgTag.src = greencarImage;

}

function uploadBackground() {
	ctx.drawImage(background_ImgTag,  0,  0, canvas.width, canvas.height);

}

function uploadGreencar() {
	ctx.drawImage(greencar_ImgTag, greencar_x, greencar_y, greencar_width, greencar_height);

	
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y >=0)
	{
		greencar_y = greencar_y - 10;
		console.log("When the arrow is pressed,  x = " + greencar_x + " /  y = "  +greencar_y);
		uploadBackground();
		uploadGreencar();
	}

}

function down()
{
	if(greencar_y >=0)
	{
		greencar_y = greencar_y + 10;
		console.log("When the arrow is pressed,  x = " + greencar_x + " /  y = "  +greencar_y);
		uploadBackground();
		uploadGreencar();
	}
}

function left()
{
	if(greencar_x >=0)
	{
		greencar_x = greencar_x - 10;
		console.log("When the arrow is pressed,  x = " + greencar_x + " /  y = "  +greencar_y);
		uploadBackground();
		uploadGreencar();
	}
}

function right()
{
	if(greencar_x >=0)
	{
		greencar_x = greencar_x + 10;
		console.log("When the arrow is pressed,  x = " + greencar_x + " /  y = "  +greencar_y);
		uploadBackground();
		uploadGreencar();
	}
}
