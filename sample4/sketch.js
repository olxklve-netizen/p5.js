let color1, color2;

function setup() {
  createCanvas(550, 366); // 캔버스 사방 약간 줄임
  colorMode(HSB, 360, 100, 100);
  noStroke();

  color1 = color(200, 80, 100);
  color2 = color(50, 80, 100);
}

function draw() {
  background(255);

  // --- 사선 ---
  fill(lerpColor(color1, color2, (sin(frameCount * 0.02) + 1) / 2));
  quad(138, 0, 275, 0, 458, 550, 321, 550);

  fill(lerpColor(color2, color1, (cos(frameCount * 0.02) + 1) / 2));
  quad(0, 275, 550, 92, 550, 183, 0, 366);

  // --- 큰 원 ---
  fill(200, 80, 80);
  ellipse(275 + sin(frameCount * 0.01) * 18, 183, 183 + 9 * sin(frameCount * 0.02));

  fill(10, 80, 100);
  ellipse(248, 248 + cos(frameCount * 0.01) * 14, 118 + 7 * sin(frameCount * 0.015));

  fill(200, 50, 100);
  ellipse(303, 238, 85 + 5 * cos(frameCount * 0.02));

  fill(280, 80, 90);
  ellipse(366 + cos(frameCount * 0.01) * 14, 183, 73 + 4 * sin(frameCount * 0.015));

  // --- 작은 원 ---
  fill(0);
  ellipse(284, 183, 9 + 2 * sin(frameCount * 0.03));
  fill(120, 80, 100);
  ellipse(468, 92, 9 + 2 * cos(frameCount * 0.03));

  // --- 삼각형 ---
  fill(0 + frameCount % 360, 80, 100);
  triangle(92, 275, 183, 408, 275, 366);

  fill(60 + frameCount % 360, 80, 100);
  triangle(366, 18, 412, 92, 321, 92);

  // --- 과녁 원 ---
  for (let i = 64; i > 18; i -= 9) {
    fill((i * 3 + frameCount) % 360, 50, 100);
    ellipse(92, 92, i, i);
  }

  // --- 작은 원 2 ---
  fill(0 + frameCount % 360, 80, 100);
  ellipse(175, 275, 18 + 2 * sin(frameCount * 0.02));
  fill(0, 0, 100);
  ellipse(128, 408, 27 + 2 * cos(frameCount * 0.02));

  // --- 호 ---
  noFill();
  stroke(0);
  strokeWeight(1);
  arc(550, 366, 366, 366, radians(180), radians(90));
  arc(0, 0, 366, 366, radians(180), radians(90));
}

// 키를 누르면 7초 GIF 저장
function keyPressed() {
  if (key === 's' || key === 'S') {
    saveGif('animation7s', 5); // 7초 GIF 저장
  }
}
