
var canvas = fabric.canvas("mc");
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	fabric.image.fromURL(get_image, function (img) {
		block_image_object = img;

		block_image_object.scaleToWidth(block_image_width);
		block_image_object.scaleToHeight(block_image_height);
		block_image_object.set({
			top: block_y,
			left: block_x
		});
		canvas.add(block_image_object)
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82')
	{
		new_image("r");
		console.log("r");
	}
	if(keyPressed == '71')
	{
		block_x = 200;
		new_image("g");
		console.log("g");
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		new_image("y");
		console.log("y");
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		new_image("p");
		console.log("p");
	}
	if(keyPressed == '66')
	{
		block_x = 700;
		new_image("b");
		console.log("b");
	}
	
}

