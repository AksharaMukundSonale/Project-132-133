status = "";
bedroom_img = "";
objects= [];

function preload()
{
    bedroom_img = loadImage('bedroom.jpg');
}

function setup()
{
    canvas = createCanvas(630,400);
    canvas.position(315, 200);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(bedroom_img, gotResult);
}

function gotResult(results, error)
{
    if(error){
        console.error(error);
    }
    console.log(results);
    objects = results;
}

function draw()
{
    image(bedroom_img, 0, 0, 640, 420)
    fill('#385482');
    text("bedroom", 45, 75);
    noFill();
    stroke('#385482');
    rect(30, 60, 600, 380)
}