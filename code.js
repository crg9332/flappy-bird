// Lots of hardcoded stuff here cause the game needed to have an ending with a win screen for the project.
var a = 2;
var x = 50;
var y = 140;
var f;
var d;
var g = 1;
var b1;
var f1;
var b2;
var b3;
var b4;

setScreen("home");
setBars();

onEvent("start","click",function(){
  setPosition("bird", 50, 140, 32, 24);
  setBars();
  g = 1;
  y = 140;
  setScreen("game");
});

onEvent("game", "keypress", function(){
  hideElement("info");
  playSound("assets/flap.mp3", false);
  jump();
});

onEvent("retry", "click", function(){
  setScreen("home");
  showElement("info");
});

onEvent("again", "click", function(){
  setScreen("home");
  showElement("info");
});

function fall(){
  a = 2;
  f = 1;
  timedLoop(16, function(){
    y += (a/4);
    setPosition("bird", x, y, 32, 24);
    bars(g);
    g += 1;
    a += 0.5*f;
    d = getYPosition("bird");
    if (d > 460) {
      stopTimedLoop();
      setScreen("lose");
    }
    var z = getXPosition("finish");
    if (z == -20) {
      stopTimedLoop();
      setScreen("win");
    }
  });
}

function jump(){
  var count2 = 0;
  a = 0;
  var b = 40;
  f = 0;
  timedLoop(16, function(){
    y += -(b/5);
    setPosition("bird", 50, y, 32, 24);
    bars(g);
    b -= 3;
    count2 += 1;
    if (count2 == 13){
      a = 2;
      stopTimedLoop();
      fall();
    }
  });
}

function bars(u) {
  setPosition("bar", 60 - u, 275, 285, 185);
  setPosition("bar2", 180 - u, 365, 285, 185);
  setPosition("ex1", 180 - u, -40, 285, 185);
  setPosition("bar3", 300 - u, 230, 285, 185);
  setPosition("ex2", 300 - u, 290, 285, 185);
  setPosition("bar4", 420 - u, 400, 285, 185);
  setPosition("ex3", 420 - u, 0, 285, 185);
  setPosition("barup", 60 - u, -10, 285, 185);
  setPosition("barup2", 180 - u, 80, 285, 185);
  setPosition("barup3", 300 - u, -55, 285, 185);
  setPosition("barup4", 420 - u, 115, 285, 185);
  setPosition("finish", 600 - u, -25, 100, 500);
  b1 = getXPosition("bar");
  f1 = getYPosition("bird");
  b2 = getXPosition("bar2");
  b3 = getXPosition("bar3");
  b4 = getXPosition("bar4");
  boundries(b1,172,255);
  boundries(b2,260,340);
  boundries(b3,120,210);
  boundries(b4,290,380);
}

function setBars() {
  setPosition("bar", 60, 275, 285, 185);
  setPosition("bar2", 180, 365, 285, 185);
  setPosition("ex1", 180, -40, 285, 185);
  setPosition("bar3", 300, 150, 285, 185);
  setPosition("ex2", 300, 290, 285, 185);
  setPosition("bar4", 420, 400, 285, 185);
  setPosition("ex3", 420, 0, 285, 185);
  setPosition("barup", 60, -10, 285, 185);
  setPosition("barup2", 180, 80, 285, 185);
  setPosition("barup3", 300, -55, 285, 185);
  setPosition("barup4", 420, 115, 285, 185);
  setPosition("finish", 600, -25, 100, 500);
}

function boundries(bar,y1,y2) {
  if (bar < -48) {
    if (bar > -100) {
      if (f1 < y1){
        setScreen("lose");
        stopTimedLoop();
        a = 2;
      }
      if (f1 > y2){
        setScreen("lose");
        stopTimedLoop();
        a = 2;
      }
    }
  }
}
//127.5 pxl to first part of bar
//157.5 pxl to second part of bar
//187.5 start x position of start of bar
//60 start x position of bar image
//105 pixels from bird to start of bar

//og numbers < -58 and > -98
//new numbers < -45 and > -78
//new new numbers < -45 and > -100
// Bar os 33 pixels wide 