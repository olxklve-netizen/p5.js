function setup() {
  createCanvas(600, 400);
  background(240);
  noLoop();
}

function draw() {
  // 배경
  background(245);

  // 머리카락 (밝은 애쉬브라운 단발)
  fill(255, 182, 193); // 애쉬브라운 톤
  noStroke();
  ellipse(300, 200, 200, 260); // 전체 머리
  rect(200, 180, 200, 150, 80); // 단발 아래쪽 부분
  
  // 후드 라인
  fill(255);
  noStroke();
  arc(300, 320, 140, 80, PI, 0);

  // 얼굴 (조금 긴 얼굴)
  fill(255, 230, 200); // 피부톤
  ellipse(300, 200, 140, 180);

  // 귀
  fill(255, 230, 200);
  ellipse(230, 200, 30, 40);
  ellipse(370, 200, 30, 40);

  // 헤드폰 (아이보리색)
  fill(245, 240, 220);
  stroke(200);
  strokeWeight(3);
  ellipse(220, 200, 50, 70);
  ellipse(380, 200, 50, 70);
  
  // 헤드밴드
  noFill();
  arc(300, 170, 200, 180, PI, 0);

  // 눈 (쌍꺼풀 + 큰 눈)
  stroke(80);
  strokeWeight(2);
  fill(255);
  ellipse(270, 190, 40, 25);
  ellipse(330, 190, 40, 25);

  // 눈동자
  fill(50, 50, 90);
  ellipse(270, 190, 18, 18);
  ellipse(330, 190, 18, 18);

  // 쌍꺼풀 (윗선)
  noFill();
  stroke(120);
  strokeWeight(1);
  arc(270, 185, 40, 15, PI, 0);
  arc(330, 185, 40, 15, PI, 0);

  // 코
  stroke(120);
  line(300, 200, 300, 220);

  // 입
  fill(230, 120, 130);
  noStroke();
  arc(300, 240, 40, 20, 0, PI);

  // 후드티 
  fill(255);
  noStroke();
  strokeWeight(1.5);
  arc(300, 400, 200, 200, PI, 0, CHORD);

  // 목
  fill(255, 230, 200);
  noStroke();
  rect(280, 260, 40, 50, 10);

  // 앞머리
  fill(255, 182, 193);
  noStroke();
  arc(300, 160, 140, 100, PI, 0);

  // 눈썹
  noFill();
  stroke(0);
  arc(270, 170, 30, 5, PI, 0);
  arc(330, 170, 30, 5, PI, 0);

  // 후드 끈
  stroke(0);
  strokeWeight(2);
  line(285, 310, 280, 330);
  line(315, 310, 320, 330);
  fill(255);
  ellipse(280, 330, 8, 8);
  ellipse(320, 330, 8, 8);

  // 하이라이트
  fill(255);
  ellipse(268, 188, 5, 5);
  ellipse(328, 188, 5, 5);

  // 점
  fill(0);
  ellipse(270, 210, 1, 1);
}
