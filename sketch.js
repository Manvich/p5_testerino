var boop;

function setup() {
  createCanvas(400, 400);
	boop = 0;
}

function draw() {
	background(220);
	for(var x = 0; x < 8; x++) {
		for (var y = 0; y < 8; y++) {
			var temp = 255 * x / 7;
			fill(temp);
			if ((x+y+boop)%2) {
				ellipse(x * 50 + 25,y * 50 + 25,50);
			} else {
				fill(255 - temp);
				rect(x * 50, y * 50, 50, 50);
			}
		}
	}
	fill(255);
	rect(185,185,30,30);
}

function mousePressed() {
	if (mouseX >= 185 && mouseX <= 215 && mouseY <= 215 && mouseY >= 185)
		boop = abs(boop - 1);
}