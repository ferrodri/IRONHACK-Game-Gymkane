var user = new User();
var game = new Game();
var firstRoad = "#first-road ";
var secondRoad = "#second-road ";
// var backgroundClass = ["rocket", "ice", "blackroad", "stairs", "mud", "stop"];
// preguntar duda si puedo poner background-class aquí para así acceder desde dos prototypes
//importante lo de arriba
function Game() {

}

Game.prototype.renderGame = function() {
  this.x = 0;
  user.startPosition();
  this.renderFirstUser();
  this.renderSecondUser();
  this.createObstacles(secondRoad, 1500, 0);
  // this.createObstacles(firstRoad, 2500, 0);
  var that = this;
  setTimeout(function() {
    that.moveObstacle(secondRoad, 60);
    that.obstacleHit(secondRoad);
    // that.moveObstacle(firstRoad, 30);
  }, 1500);
  // setInterval(function(){that.obstacleHit(secondRoad);},30);
};
//importante lo de arriba
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

this.obstacleHit(); //¿por qué no sale??????

  }, speedBoard);
};

Game.prototype.moveObstacle = function(road, speedObstacles) {
  var moveObstaclesInterval = setInterval(function() {
    // var obstacleArray = $(".object");
    var obstacleArray = document.querySelectorAll(road + ".object");
    for (i = 0; i < obstacleArray.length; i++) {
      var selector = obstacleArray[i].id.toString();
      x = $(road + "#" + selector).position().top;
      $(road + "#" + selector).css({
        top: x += 10
      });
    }
  }, speedObstacles);
};

Game.prototype.obstacleHit = function (road) {
  var object = ($(road + (".object")));
  if(object.hasClass("rocket")){
    console.log("rocket");
  }else if(object.hasClass("ice")){
    console.log("ice");
  }else if(object.hasClass("blackroad")){
    console.log("blackroad");
  }else if(object.hasClass("stairs")){
    console.log("stairs");
  }else if(object.hasClass("mud")){
    console.log("mud");
  }else if(object.hasClass("stop")){
    console.log("stop");
  }
};

game.renderGame();
