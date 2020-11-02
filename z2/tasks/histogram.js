let canvasSize = 512;
let imageSize = 256;
let img;
let pd;

function preload() 
{
    img = loadImage('https://i.postimg.cc/MK670DKC/astronaut.png'); // image url
}

function setup() 
{
    createCanvas(canvasSize, canvasSize);
    img.resize(imageSize, imageSize);
    img.filter("gray");

    pd = pixelDensity();

    img.loadPixels();

    let histogram = generateData(img);

    for (let i = 0; i < imageSize; i++) 
    {
        const y = map(histogram[i], 0, max(histogram), imageSize, 0);
        line(i, y, i, imageSize);
    }

    image(img, 0, imageSize);
}

function generateData(srcImg) 
{
    let pixels = new Array(imageSize);
    pixels.fill(0);

    for (let x = 0; x < srcImg.width; x++) 
    {
        for (let y = 0; y < srcImg.height; y++) 
        {
            for (let dx = 0; dx < pd; dx++) 
            {
                for (let dy = 0; dy < pd; dy++) 
                {
                    let pos = 4 * ((y * pd + dy) * srcImg.width * pd + (x * pd + dx));

                    const r = srcImg.pixels[pos];

                    pixels[r]++;
                }
            }
        }
    }

    //Todo: fix this ;/
    pixels[0] = 0;

    return pixels;
}
