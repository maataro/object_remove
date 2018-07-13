let bubbles = [];

function setup() {
	createCanvas(600, 400);
	// for (let i = 0; i < 10; i++) {
	// 	bubbles[i] = new Bubble(width / 2, height / 2, random(20, 50));
	// }

}

function draw() {
	background(0);
	for (let elt of bubbles) {
		elt.move();
		elt.show();
		if (elt.contains(mouseX, mouseY)) {
			elt.changeColor(255);
		} else {
			elt.changeColor(0);
		}
	}

}

class Bubble {
	constructor(x, y, r) {
		this.x = x;
		this.y = y;
		this.r = r;
		this.col = color(0);
	}

	move() {
		this.x = this.x + random(-4, 4);
		this.y = this.y + random(-4, 4);

	}

	show() {
		stroke(255);
		fill(this.col);
		ellipse(this.x, this.y, this.r);
	}

	contains(xPos, yPos) {
		let d = dist(this.x, this.y, xPos, yPos);
		if (d < this.r) {
			return true;
		} else {
			return false;
		}
	}

	changeColor(col) {
		this.col = col;
	}
}

function mousePressed() {
	for (let i = bubbles.length - 1; i >= 0; i--) {
		if (bubbles[i].contains(mouseX, mouseY)) {
			bubbles.splice(i, 1);
		}
	}
}

function mouseDragged() {
	let r = random(20, 50);
	let b = new Bubble(mouseX, mouseY, r);
	bubbles.push(b);

	if (bubbles.length > 10) {
		bubbles.splice(0, 1);
	}
}
