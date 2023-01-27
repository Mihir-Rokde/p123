difference=0
leftWristX=0
rightWristX=0

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(480,480);
    canvas.position(560,90);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
    }
    function modelLoaded(){
        console.log("poseNet is intialized");
    }
   
    function gotPoses(results){
    if(results.length>0)
    {
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=leftWristX-rightWristX;
        console.log("leftWristX="+leftWristX+',rightWristX='+rightWristX+'difference='+difference);
    }
    }
    function draw(){
        background("grey");
        document.getElementById("font_size").innerHTML="font size of the text will be ="+difference+"px";
        textSize(difference);
        fill("yellow");
        text("Mihir",50,400);
    }