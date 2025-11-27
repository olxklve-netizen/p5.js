function setup() {
  createCanvas(600, 400);
  background(255);
  noLoop();

  noStroke();
  fill(200, 230, 255); // 파란 사선
  quad(150, 0, 300, 0, 500, 600, 350, 600);

  fill(255, 255, 150); // 노란 사선
  quad(0, 300, 600, 100, 600, 200, 0, 400);

  // 큰 원들
  noStroke();
  fill(200, 150, 200);
  ellipse(300, 200, 200);

  fill(255, 120, 0);
  ellipse(270, 270, 130);

  fill(100, 200, 255);
  ellipse(330, 260, 90);

  fill(180, 50, 200);
  ellipse(400, 200, 80);

  // 작은 원
  fill(0);
  ellipse(310, 200, 10);
  fill(0,255,50);
  ellipse(510, 100, 10);

  // 선들
  stroke(0);
  strokeWeight(2);
  line(100, 400, 500, 200);

  strokeWeight(1);
  line(150, 100, 450, 500);
  line(100, 200, 400, 450);
  line(500, 100, 200, 500);

  // 교차 선
  strokeWeight(0.5);
  line(200, 200, 360, 360);
  line(350, 240, 240, 350);

  // 삼각형 
  noStroke();
  fill(255, 100, 100);
  triangle(100, 300, 200, 450, 300, 400);
  fill(255, 255, 0);
  triangle(400, 20, 450, 100, 350, 100);


  // 과녁형 원
  fill(230);
  ellipse(100, 100, 70, 70);
  fill(200);
  ellipse(100, 100, 60, 60);
  fill(150);
  ellipse(100, 100, 50, 50);
  fill(100);
  ellipse(100, 100, 40, 40);
  fill(255);
  ellipse(100, 100, 30, 30);

  //작은 원 2
  noStroke();
  fill(255, 0, 0);
  ellipse(190, 300, 20);

  fill(255, 255, 255);
  stroke(0);
  strokeWeight(1);
  ellipse(140, 450, 30);

  fill(0);
  noStroke();
  ellipse(460, 440, 8);
  fill(0);
  noStroke();
  ellipse(40, 40, 8);
  fill(255, 204, 0);
  ellipse(480, 500, 10);
  
  //호
  noFill();
  stroke(0);
  strokeWeight(1);
  arc(600, 400, 400, 400, radians(180), radians(90) );
  arc(0, 0, 400, 400, radians(180), radians(90) );
}

