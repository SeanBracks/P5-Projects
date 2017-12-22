
function setup(){
	createCanvas(500, 500);
	angleMode(DEGREES);
}

function draw() {

	let AM = true;
	background(0);

	let H = hour();
	let M = minute();
	let S = second();

	strokeWeight(10); 

	if(H >= 12){
		H -= 12;
		AM = false;
	}
	else{
		AM = true;
	}

	if(H == 0){
		
	}
	else{
		stroke(255,159,100);										// Orange
		arc(width/2, height/2, 250, 250, -90, (360/12 * H) - 90);	// Hour
		}

	if(M == 0){

	}
	else{
			stroke(134,255,100);										// Green
		arc(width/2, height/2, 350, 350, -90, (360/60 * M) - 90);	// Minute
		}

	if(S == 0){

	}
	else{
		stroke(221,100,255);										// Purple
		arc(width/2, height/2, 450, 450, -90, (360/60 * S) - 90);	// Second
	}
	
	noStroke();
	fill(255);
	textStyle(BOLD);

	textSize(20);
	text(H + ":" + M + ":" + S, width/2 - 32, height/2 - 28);

	textSize(60);

	if(AM){
		text("AM", width/2 - 43, height/2 + 20);
	}
	else{
		text("PM", width/2 - 43, height/2 + 20);
	}
	
	
	noFill();

}