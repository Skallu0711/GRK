function setup() 
{
    createCanvas(800, 600);
    noLoop();
}

function draw() 
{
    //noprotect
    
    background(100);

    let scale = 2;
    let z = width;
    let halfWidth = width / 2;
    let halfHeight = height / 2;

    let dx;
    let dy;
    
    let dHalf = sqrt(halfWidth * halfWidth + halfHeight * halfHeight);

    for (let x = 0; x < width; x++, z--)
    {
        dx = x - halfWidth;
        
        for (let y = 0; y < height; y++) 
	{
            dy = y - halfHeight;
            let d = sqrt(dx * dx + dy * dy) * scale;
            let circleColor = color((dHalf - d) / dHalf * 255, (d / dHalf) * 255, 255 * max(0, y - z) / width);
            set(x, y, circleColor);
        }
    }

    updatePixels();
}