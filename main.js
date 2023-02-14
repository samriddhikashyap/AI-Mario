function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav");
	marip_coin = loadSound("coin.wav");
	gameover = loadSound("gameover.wav");
	mario_die = loadSound("mariodie.wav");
	mario_kick = loadSound("kick.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	instializeInSetup(mario);


	video = createCapture(VIDEO);
	video.size(800, 400);
	video.parent("game_console")

	poseNet = ml5.poseNet( video , modelLoaded );
	poseNet.on("pose",gotPoses);
}


function modelLoaded(results){
	console.log("medal loaded!!!");
}

function gotPoses(){
if(results.length > 0){
	noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
	console.log("noseX = " + noseX+ "noseY = "+ noseY);
}


}
function draw() {
	game()
}






