var a=9;
var bgColor='black';
var lineColor='white';
var letterColor='white';

function preload(){
}

function setup(){
  createCanvas(windowWidth, windowHeight);

  background(bgColor);
  stroke(color(lineColor));
  strokeWeight(3);

  for (var y=0; y<height; y=y+(2*a)){
    for (var x=0; x<width; x=x+(2*a)){
      if (random()<0.5) {
        line(x, y+a, x+a, y);
        line(x+a, y+(2*a), x+(2*a), y+a);
      }
      else {
        line(x+a, y, x+(2*a), y+a);
        line(x, y+a, x+a, y+(2*a));
      }
    }
  }
}

function draw() {
  // ----***--- BUTTON - MODULE 1 ----***---
  b1 = createButton('MODULE 1');
  b1.position((width/2)-230,(height/2)-29);
  b1.size(150);
  b1.style('background-color', bgColor);
  b1.style('font-size', '15px');
  b1.style('font-weight', 'bold');
  b1.style('letter-spacing','2px');
  b1.style('color', letterColor);
  b1.style('padding', '15px');
  b1.style('border-style', 'solid');
  b1.style('border-width', '5px');
  b1.style('border-color', lineColor);
  b1.style('border-radius', '2px');

  b1.mousePressed(modOne);

  // ----***--- BUTTON - RANDOM! ----***---
  b2 = createButton('RANDOM!');
  b2.position((width/2)-75,(height/2)-29);
  b2.size(150);
  b2.style('background-color', bgColor);
  b2.style('font-size', '15px');
  b2.style('font-weight', 'bold');
  b2.style('letter-spacing','2px');
  b2.style('color', letterColor);
  b2.style('padding', '15px');
  b2.style('border-style', 'solid');
  b2.style('border-width', '5px');
  b2.style('border-color', lineColor);
  b2.style('border-radius', '2px');

  b2.mousePressed(modRan);

  // ----***--- BUTTON - MODULE 2 ----***---
  b3 = createButton('MODULE 2');
  b3.position((width/2)+80,(height/2)-29);
  b3.size(150);
  b3.style('background-color', bgColor);
  b3.style('font-size', '15px');
  b3.style('font-weight', 'bold');
  b3.style('letter-spacing','2px');
  b3.style('color', letterColor);
  b3.style('padding', '15px');
  b3.style('border-style', 'solid');
  b3.style('border-width', '5px');
  b3.style('border-color', lineColor);
  b3.style('border-radius', '2px');

  b3.mousePressed(modTwo);
}

function modOne(){
  background(bgColor);
  for (var y=0; y<height; y=y+(2*a)){
    for (var x=0; x<width; x=x+(2*a)){
        line(x, y+a, x+a, y);
        line(x+a, y+(2*a), x+(2*a), y+a);
    }
  }
}

function modRan(){
  background(bgColor);
  for (var y=0; y<height; y=y+(2*a)){
    for (var x=0; x<width; x=x+(2*a)){
      if (random()<0.5) {
        line(x, y+a, x+a, y);
        line(x+a, y+(2*a), x+(2*a), y+a);
      }
      else {
        line(x+a, y, x+(2*a), y+a);
        line(x, y+a, x+a, y+(2*a));
      }
    }
  }
}

function modTwo(){
  background(bgColor);
  for (var y=0; y<height; y=y+(2*a)){
    for (var x=0; x<width; x=x+(2*a)){
        line(x+a, y, x+(2*a), y+a);
        line(x, y+a, x+a, y+(2*a));
    }
  }
}
