var numberWinner = 0;
var obstaclesNum = 20;
var obstaclesCounter = obstaclesNum;

$("#start").click(function() {

  $("#initial-container").remove();

  var r1 = new Road(700, 740, 20, 50, "Fernando", "first"); //(width, height, x, y, leftKey, rightKey, playerName, roadName)
  var r2 = new Road(700, 740, 761, 50, "Andrei", "second");

  setInterval(function() {
    r1.updateObstacles(r1.yObstacleSpeed);
    r1.updateBike(65, 83);
  }, 1000 * 0.1);

  setInterval(function() {
    r2.updateObstacles(r2.yObstacleSpeed);
    r2.updateBike(37, 39);
  }, 1000 * 0.1);

  var soundGame = new Audio("./sounds/france.mp3");
  soundGame.play();

});


var keys = {};

$(document).keydown(function(e) {
  keys[e.keyCode] = true;
}).keyup(function(e) {
  delete keys[e.keyCode];
});
