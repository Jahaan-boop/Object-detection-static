Status="";
img="";
objects= [];

function preload(){
img = loadImage("Switch.webp");
}

function setup(){
canvas = createCanvas(800,600);
canvas.center();
objectdetector = ml5.objectDetector("cocossd",modelloaded);
document.getElementById("status").innerHTML="Status: Awaiting Detection";
}

function modelloaded(){
console.log('modelloaded');
Status=true;
objectdetector.detect(img,gotResults);
}

function gotResults(error, results){
if(error){
console.log(error);
}
console.log(results);
objects = results;
}

function draw(){
    image(img,0,0,800,600);
    if(Status != ""){
    for(i = 0; i < objects.length; i++){
    document.getElementById("status").innerHTML="Status: Detection Completed";

    fill("red");
    percent = floor(objects[i].confidence * 100);
    text(objects[i].label + " " + percent + "%", objects[i].x+20, objects[i].y+20);
    noFill();
    stroke("red");
    rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    document.getElementById("detected").innerHTML="There are 1 objects in the image and cocossd has detected 1"
        }
    }
}