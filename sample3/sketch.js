

let bgColor = 245;
let recording = false; 

const leftEyeCenterX = 270;
const rightEyeCenterX = 330;
const eyeCenterY = 190;
const eyeWhiteW = 40, eyeWhiteH = 25;
const pupilD = 18, pupilR = pupilD / 2;
const maxOffsetX = (eyeWhiteW / 2) - pupilR - 2;
const maxOffsetY = (eyeWhiteH / 2) - pupilR - 2;

function setup() {
  createCanvas(600, 400);
  noStroke();
}

function draw() {
  background(bgColor);

  // 머리카락
  fill(255, 182, 193);
  ellipse(300, 200, 200, 260);
  rect(200, 180, 200, 150, 80);

  // 후드 라인
  fill(255);
  arc(300, 320, 140, 80, PI, 0);

  // 얼굴
  fill(255, 230, 200);
  ellipse(300, 200, 140, 180);

  // 귀
  fill(255, 230, 200);
  ellipse(230, 200, 30, 40);
  ellipse(370, 200, 30, 40);

  // 헤드폰
  fill(245, 240, 220);
  stroke(200); strokeWeight(3);
  ellipse(220, 200, 50, 70);
  ellipse(380, 200, 50, 70);
  noFill(); stroke(200); strokeWeight(3);
  arc(300, 170, 200, 180, PI, 0);

  // 눈(흰자)
  stroke(80); strokeWeight(2); fill(255);
  ellipse(leftEyeCenterX, eyeCenterY, eyeWhiteW, eyeWhiteH);
  ellipse(rightEyeCenterX, eyeCenterY, eyeWhiteW, eyeWhiteH);


  let offsetX = map(mouseX, 0, width,  -maxOffsetX,  maxOffsetX);
  let offsetY = map(mouseY, 0, height, -maxOffsetY,  maxOffsetY);
  offsetX = constrain(offsetX, -maxOffsetX, maxOffsetX);
  offsetY = constrain(offsetY, -maxOffsetY, maxOffsetY);

  noStroke(); fill(50, 50, 90);
  ellipse(leftEyeCenterX  + offsetX, eyeCenterY + offsetY, pupilD, pupilD);
  ellipse(rightEyeCenterX + offsetX, eyeCenterY + offsetY, pupilD, pupilD);


  // 코
  stroke(120); line(300, 200, 300, 220);

  // 입
  noStroke(); fill(230, 120, 130);
  arc(300, 240, 40, 20, 0, PI);

  // 후드티
  fill(253); arc(300, 400, 200, 200, PI, 0, CHORD);

  // 목/앞머리/눈썹/후드 끈/하이라이트/점
  fill(255, 230, 200); rect(280, 260, 40, 50, 10);
  fill(255, 182, 193); noStroke(); arc(300, 160, 140, 100, PI, 0);
  noFill(); stroke(0); arc(270, 170, 30, 5, PI, 0); arc(330, 170, 30, 5, PI, 0);
  stroke(0); strokeWeight(2); line(285, 310, 280, 330); line(315, 310, 320, 330);
  fill(255); ellipse(280, 330, 8, 8); ellipse(320, 330, 8, 8);
  fill(255); noStroke(); ellipse(268, 188, 5, 5); ellipse(328, 188, 5, 5);
  fill(0); ellipse(270, 210, 1, 1);


}

function keyPressed() {
  if (key === 'B') {
    bgColor = color(210, 230, 255); // 파랑
  } else if (key === 'Y') {
    bgColor = color(255, 250, 210); // 노랑
  } else if (key === 'P') {
    bgColor = color(230, 220, 255); // 보라
  } else if (key === 'S') {
    recording = true;
    saveGif('interaction_capture', 5.0, { finished: () => recording = false });
  }
}
