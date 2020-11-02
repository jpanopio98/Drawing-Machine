const PHI = (Math.sqrt(5) +2) /2;

function setup() {
	let w = min(windowWidth, windowHeight);
	createCanvas(w,w);
	noStroke();
	fill(250,150,200);
}

function draw() {
	background(0);
	var n = mouseX;
	var start = sq((max(min(1-mouseY/height, 0.9), 0.1)-0.1)/0.8*sqrt(n));
	var angle = 0;
	for(var i = start; i < n; i++) {
		var radius = sqrt(i/n*sq(min(width,height)/2));
		var x = cos(angle) * radius +width/2;
		var y = sin(angle) * radius +height/2;
		var dotSize = pow((n - i)/sq(n), .33)*150;
		rect(x,y, dotSize,dotSize);
    ellipse(x,y, dotSize* 2,dotSize* 2);
		angle += TAU * PHI;
		angle = angle % TAU;
	}
}

//makes the drawing full screen after clicking
function mousePressed() {
  if (mouseX > 0 && mouseX < windowWidth && mouseY > 0 && mouseY < windowHeight) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
