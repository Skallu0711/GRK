let col;

function setup() {
	createCanvas(800, 600);
	noLoop();
	col = color(255, 0, 144);
}

function draw() {
	background(100);
        
	for (let y = 0; y < height; y++) {
		for (let x = 0; x < width; x++) {
			set(x, y, col);
		}
	}
        
updatePixels();
}