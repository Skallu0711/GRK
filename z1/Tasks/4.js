let skyHeight = 400;
let grassCords = [];

let houseHeight = 180;
let houseWidth = 220;

let roofHeight = 500;

function setup() {
    createCanvas(800, 600);
    noLoop();
}

function draw() {
    //noprotect
    
    background(100);

    for (let i = 0; i < 1000; i++) {
        let x = floor(random(0, width));
        let y = floor(random(skyHeight, height));
        let randomColor = color(floor(random(0, 255)), floor(random(0, 255)), floor(random(0, 255)));

        if (!grassCords.includes(x)) {
            grassCords[x] = [];
        }

        grassCords[x][y] = randomColor;
    }

    for (let x = 0, xr = width; x < width; x++, xr--) {
        for (let y = 0, k = 1, j = height * 2; y < height; y++, k += 2, j -= 2) {
            let targetColor;

            if (y < skyHeight) {
                targetColor = color(0, 0, 255);

                if (y < skyHeight + houseHeight && y > skyHeight - houseHeight) {
                    if (x > width / 2 - houseWidth && x < width / 2 + houseWidth) {
                        targetColor = color(79, 29, 7);
                    }
                } else if (y < skyHeight + houseHeight + roofHeight && y > skyHeight - houseHeight - roofHeight) {
                    if ((x <= width / 2 && k > height - x) || (x > width / 2 && j < xr + height)) {
                            targetColor = color(255, 0, 0);
                    }
                }
            } else {
                if (grassCords[x] !== undefined && grassCords[x][y] !== undefined) {
                    targetColor = grassCords[x][y];
                } else {
                    targetColor = color(0, 255, 0);
                }
            }

            set(x, y, targetColor);
        }
    }

    updatePixels();
}