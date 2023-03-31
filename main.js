objects = [];
video = "";
status = "";

function preload(){

video = createVideo("video.mp4");
video.hide();
}
function setup(){
canvas = createCanvas(300,300);
canvas.position(480,100);
}
function start(){
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("label1").innerHTML = "Status : Objects are getting detected";

}
function modelLoaded(){
    console.log("Model is loaded!");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0); 
}
function gotResults(error,results){
    if (error){
        console.log(error);

    }
    console.log(results);
    objects = results;


}
function draw(){
    image(video,0,0,300,300);
    if (status !=""){
objectDetector.detect(video,gotResults);
  for(i = 0; i<objects.length;i++){
document.getElementById("label1").innerHTML = "Status : Detecting Objects";
document.getElementById("label2").innerHTML = "Number of objects that are detected are "+ objects.length;

fill("red");
percent =floor(objects[i].confidence * 100);
text(objects[i].label + " " + percent + "%" ,objects[i].x + 15,objects[i].y + 15);
noFill();
stroke("red");
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);



  }

    }


}



