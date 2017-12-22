
function setup(){
	createCanvas(500, 300);

}

function draw() {
	let rectWidth = width;
	background(50);

	let H = hour();
	let M = minute();
	let S = second();
	let MS = millis	();


	textStyle(BOLD);
	textSize(60);
	
	let HScalar = H/24;
	stroke(255);
	fill(3,188,191);		// Hour
	rect(0, 0, width*HScalar, 100);
	noStroke();
	fill(255);
	text(H, 10, 75);

	let MScalar = M/60;
	stroke(255);
	fill(252,189,0);			// Minute
	rect(0, 100, width*MScalar, 100);
	noStroke();
	fill(255);
	text(M, 10, 175);

	let SScalar = S/60;
	stroke(255);
	fill(189,3,99);			// Second
	rect(0, 200, width*SScalar, 100);
	noStroke();
	fill(255);
	text(S, 10, 275);

	// text(H + ":" + M + ":" + S, 200, 200);
} 