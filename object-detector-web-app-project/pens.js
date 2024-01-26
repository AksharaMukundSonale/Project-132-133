status = "";
pens_img = "";
objects = [];

function preload()
{
    pens_img = loadImage('pens.jpg');
}

function setup()
{
    canvas = createCanvas(630, 400);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(pens_img, gotResult);
}

function gotResult()
{
    if(error){
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function draw()
{
    image(pens_img, 0, 0, 640, 420)
    fill('#385482');
    text("pens", 45, 75);
    noFill();
    stroke('#385482');
    rect(30, 60, 600, 380)
}