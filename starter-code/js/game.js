var numberWinner = 0;
var r1 = new Road(740, 780, 0, 50, 20, "first"); //(width, height, x, y, leftKey, rightKey, obstaclesNum, roadName)
var r2 = new Road(740, 780, 810, 50, 20, "second");

var keys = {};

$(document).keydown(function(e){
  keys[e.keyCode] = true;
}).keyup(function(e){
  delete keys[e.keyCode];
});

setInterval(function() {
  r1.updateObstacles(r1.yObstacleSpeed);
  r1.updateBike(37, 39);
}, 1000 * 0.1);

setInterval(function() {
  r2.updateObstacles(r2.yObstacleSpeed);
  r2.updateBike(65, 83);
}, 1000 * 0.1);

var soundGame = new Audio ("./sounds/france.mp3");
soundGame.play();
