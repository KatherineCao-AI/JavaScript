// ----- Helper random function (runs ONCE) -----
function random(min, max) {
  return Math.random() * (max - min) + min;
}

// ----- Shapes (created ONCE) -----
var shapes = [
  {
    type: "rect",
    x: 100,
    y: 100,
    w: 60,
    h: 40,
    dx: random(-2, 2),
    dy: random(-2, 2)
  },
  {
    type: "ellipse",
    x: 300,
    y: 150,
    rx: 30,
    ry: 20,
    dx: random(-2, 2),
    dy: random(-2, 2)
  },
  {
    type: "arc",
    x: 200,
    y: 250,
    r: 30,
    dx: random(-2, 2),
    dy: random(-2, 2)
  }
];

// ----- Regular polygon -----
function drawPolygon(x, y, sides, radius) {
  beginShape();
  for (var i = 0; i < sides; i++) {
    var angle = 360 / sides * i;
    var px = x + cos(angle) * radius;
    var py = y + sin(angle) * radius;
    vertex(px, py);
  }
  endShape(CLOSE);
}

// ----- Animation loop (runs MANY times) -----
function draw() {
  background("white");

  for (var i = 0; i < shapes.length; i++) {
    var s = shapes[i];

    // Move
    s.x += s.dx; //  s.x = s.x  + s.dx
    s.y += s.dy;

    // Bounce off edges
    if (s.x < 0 || s.x > width) s.dx *= -1;  // s.dx = s.dx*( -1);
    if (s.y < 0 || s.y > height) s.dy *= -1;

    stroke("black");
    noFill();

    if (s.type === "rect") {
      rect(s.x, s.y, s.w, s.h);
    }

    if (s.type === "ellipse") {
      ellipse(s.x, s.y, s.rx * 2, s.ry * 2);
    }

    if (s.type === "arc") {
      arc(s.x, s.y, s.r * 2, s.r * 2, 0, 180);
    }
  }

  // Polygon example
  drawPolygon(400, 200, 6, 30);
}
