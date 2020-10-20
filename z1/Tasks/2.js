function setup() {
    createCanvas(800, 600);
    noLoop();
}

function draw() {
    //noprotect
    
    background(100);

    let shadeOfGray;
    let tmp = 256 / width;

    for (let x = 0; x < width; x++) {
        shadeOfGray = color(tmp * x);
        for (let y = 0; y < height; y++) {
            set(x, y, shadeOfGray);
        }
    }
    
    updatePixels();
}