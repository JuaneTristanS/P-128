song1 ="";
song2 ="";

xcord =0;
ycord =0;

function preload() {
    song1 = loadSound("l_theme.mp3");
    song2 = loadSound("lights_theme.mp3");
}

function setup() {
    canvas = createCanvas(600, 450);
    canvas.position(300, 160)

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);

    poseNet.on('pose', gotResults);
}


function modelLoaded() {
    console.log("Model has been initialised")
}

function gotResults(results) {

    if (results.length > 0) {
        console.log(results);

        leftwristX = results[0].pose.leftWrist.x;
        leftwristY = results[0].pose.leftWrist.y;

        rightwristX = results[0].pose.rightWrist.x;
        rightwristY = results[0].pose.rightWrist.y;

        console.log("left wrist x = " + leftwristX + " left wrist y = " + leftwristY + " right wrist x = " + rightwristX + "right wrist y = " + rightwristY);

        song1.play();
    }
}

function draw() {
    image(video, 0, 0, 600, 500);
}
