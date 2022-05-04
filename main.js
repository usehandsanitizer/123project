noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.postion(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);


}

function draw(){
  background('#969A97');

  textSize(difference);
  fill('#F90093');
  stroke('#F90093');
  text("Aarna",50,400);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!');
  }

  function gotPoses(results){
    if(results.length > 0)
    {
      console.log(results);}
      leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);
    }
 
  