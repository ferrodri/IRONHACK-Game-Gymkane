var user = new User();
var game = new Game();
var firstRoad = "#first-road ";
var secondRoad = "#second-road ";

function Game() {

}

Game.prototype.renderGame = function() {
  user.startPosition();
  this.renderFirstUser();
  this.renderSecondUser();
  this.createObstacles(secondRoad, 1500, 0);
  // this.createObstacles(firstRoad, 2500, 0);
  var that = this;
  setTimeout(function() {
    that.moveObstacle(secondRoad, 60);
    // that.moveObstacle(firstRoad, 30);
  }, 1500);

};

Game.prototype.renderFirstUser = function() {
  user.firstUser();
};

Game.prototype.renderSecondUser = function() {
  user.secondUser();
};

Game.prototype.createObstacles = function(road, speedBoard, obstacleId) {
  var createObstaclesInterval = setInterval(function() {
    obstacleId++;
    var obstacle = new Obstacle(obstacleId, road);
  }, speedBoard);
};

Game.prototype.moveObstacle = function(road, speedObstacles) {
  var moveObstaclesInterval = setInterval(function() {
    // var obstacleArray = $(".object");
    var obstacleArray = document.querySelectorAll(road + ".object");
    for (i = 0; i < obstacleArray.length; i++) {
      var selector = obstacleArray[i].id.toString();
      var x = $(road + "#" + selector).position().top;
      $(road + "#" + selector).css({
        top: x += 10
      });
    }
  }, speedObstacles);
};

game.renderGame();
