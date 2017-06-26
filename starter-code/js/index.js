var user = new User();
var game = new Game();

function Game() {

}

Game.prototype.renderGame = function() {
  user.startPosition();
  this.renderFirstUser();
  this.renderSecondUser();
  this.createObstacles(4500, 0);
  var that = this;
  setTimeout(function () {
    that.moveObstacle(60);
  }, 3500);

};

Game.prototype.renderFirstUser = function() {
  user.firstUser();
};

Game.prototype.renderSecondUser = function() {
  user.secondUser();
};

Game.prototype.createObstacles = function(speedBoard, obstacleId) {
  var createObstaclesInterval = setInterval(function(){
    obstacleId++;
    var obstacle = new Obstacle(obstacleId);
  },speedBoard);
};

Game.prototype.moveObstacle = function(speedObstacles) {
  var moveObstaclesInterval = setInterval(function() {
    // var obstacleArray = $(".object");
    var obstacleArray = document.querySelectorAll(".object");
    for(i=0;i<obstacleArray.length;i++){
      var selector = obstacleArray[i].id.toString();
      var x = $("#"+selector).position().top;
      $("#"+selector).css({top: x+=10});
    }

    // var arrObstacles = [].slice.call(obstacleArray);
    // arrObstacles.forEach(function(elem){
    //   console.log(elem)
    //   // elem.css({top: })
    // })
    // if (that.x < 960) {
    //   $(".object").css({
    //     top: that.x += 0.5
    //   });
    // } else if (that.x >= 960) {
    //   $(".object").hide();
    // }
  }, speedObstacles);
};

game.renderGame();
