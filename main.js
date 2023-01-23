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
    function draw(){
        background("grey");
    }
    function gotPoses(results){
    if(results.length>0)
    {
        console.log(results);
    }
    }