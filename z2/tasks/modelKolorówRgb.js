let canvasSize = 512;
let imageSize = 256;
let img;
let imgArr = {};
let pd;

function preload()
{
    img = loadImage('https://i.postimg.cc/MK670DKC/astronaut.png'); // image url
    imgArr.r = createImage(imageSize, imageSize);
    imgArr.g = createImage(imageSize, imageSize);
    imgArr.b = createImage(imageSize, imageSize);
    imgArr.rgb = createImage(imageSize, imageSize);
}

function setup() 
{
    createCanvas(canvasSize, canvasSize);
    img.resize(imageSize, imageSize);

    pd = pixelDensity();

    img.loadPixels();
    imgArr.r.loadPixels();
    imgArr.g.loadPixels();
    imgArr.b.loadPixels();

    imgArr.r = copyImg(img, imgArr.r, true, false, false, true);
    imgArr.g = copyImg(img, imgArr.g, false, true, false, true);
    imgArr.b = copyImg(img, imgArr.b, false, false, true, true);

    imgArr.r.updatePixels();
    imgArr.g.updatePixels();
    imgArr.b.updatePixels();

    imgArr.rgb.blend(imgArr.r, 0, 0, 256, 256, 0, 0, 256, 256, ADD);
    imgArr.rgb.blend(imgArr.g, 0, 0, 256, 256, 0, 0, 256, 256, ADD);
    imgArr.rgb.blend(imgArr.b, 0, 0, 256, 256, 0, 0, 256, 256, ADD);

    image(imgArr.r, 0, 0);
    image(imgArr.g, imageSize, 0);
    image(imgArr.b, 0, imageSize);
    image(imgArr.rgb, imageSize, imageSize);
}

function copyImg(srcImg, destImg, r, g, b, a) 
{
    for (let x = 0; x < srcImg.width; x++) 
    {
        for (let y = 0; y < srcImg.height; y++) 
        {
            for (let dx = 0; dx < pd; dx++) 
            {
                for (let dy = 0; dy < pd; dy++) 
                {
                    let pos = 4 * ((y * pd + dy) * srcImg.width * pd + (x * pd + dx));

                    if (r)
                        destImg.pixels[pos] = srcImg.pixels[pos];

                    if (g)
                        destImg.pixels[pos + 1] = srcImg.pixels[pos + 1];

                    if (b)
                        destImg.pixels[pos + 2] = srcImg.pixels[pos + 2];

                    if (a)
                        destImg.pixels[pos + 3] = srcImg.pixels[pos + 3];
                }
            }
        }
    }

    return destImg;
}
