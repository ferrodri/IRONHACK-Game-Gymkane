var numberWinner = 0;
var r1 = new Road(740, 780, 0, 50, 37, 39, 3, "first"); //(width, height, x, y, leftKey, rightKey, obstaclesNum, roadName)
var r2 = new Road(740, 780, 810, 50, 65, 83, 3, "second");

setInterval(function() {
  r1.updateObstacles(r1.yObstacleSpeed);
}, 1000 * 0.2);

setInterval(function() {
  r2.updateObstacles(r2.yObstacleSpeed);
}, 1000 * 0.2);

// var soundGame = new Audio ("./sounds/france.mp3");
// soundGame.play();
