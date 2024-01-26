status = "";
desk_img = "";
objects = [];

function preload()
{
    desk_img = loadImage('desk.jpg');
}

function setup()
{
    canvas = createCanvas(630, 400);
    canvas.position(315, 200);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(desk_img, gotResult);
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
    image(desk_img, 0, 0, 640, 420)
        fill('#385482');
        text("desk", 45, 75);
        noFill();
        stroke('#385482');
        rect(30, 60, 600, 380)
}