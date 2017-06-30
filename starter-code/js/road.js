function Road(width, height, x, y, playerName, roadName) {
  this.width = width;
  this.height = height;
  this.playerName = playerName;
  this.roadName = "road" + roadName;
  this.x = x;
  this.y = y + 80; //después de esto iría un this.RoadEL pero lo metemos en renderRoad() porque es lo primero que llamamos
  this.yObstacleSpeed = height / 22;
  this.backgroundSpeed = this.yObstacleSpeed * 0.03;
  this.renderRoad(this.backgroundSpeed);
  this.biker = null;
  this.createBike();
  this.obstacles = [];
  this.obstacleLoopCreator(obstaclesNum);
  this.roadEL.append(this.obstaclesCounterCreator(this.playerName));
  this.winner = this.winnerShow();
}

Road.prototype.renderSpeedRoad = function(backgroundSpeed) {
  this.roadEL.css({
    "animation": "animatedBackground " + backgroundSpeed + "s linear infinite"
  });
};

Road.prototype.renderRoad = function(backgroundSpeed) {
  this.roadEL = $("<div>")
    .attr("id", this.roadName)
    .css({
      "width": this.width + "px",
      "height": this.height + "px",
      "background-image": 'url("./images/dirt-road.jpg")',
      "background-size": "100% 50%",
      "position": "absolute",
      "display": "inline-block",
      "float": "left",
      "clear": "left",
      "border": "2px black solid",
      "overflow": "hidden",
      "animation": "animatedBackground " + backgroundSpeed + "s linear infinite"
    });
  $("#game").append(this.roadEL);
  var x = this.roadEL.position().left;
  var y = this.roadEL.position().top;
  this.roadEL.css({
    left: x = this.x,
    top: y = this.y
  });
};

Road.prototype.createBike = function() {
  var bike = new Bike(this.width, this.height);
  this.roadEL.append(bike.element);
  this.biker = bike;
};

Road.prototype.updateBike = function(leftKey, rightKey) {
  this.biker.move(leftKey, rightKey);
};

Road.prototype.updateObstacles = function(obstacleSpeed) {
  this.obstacles.forEach(function(e) {
    e.move(obstacleSpeed);
  });
  this.collision(obstaclesNum);
};

Road.prototype.obstacleLoopCreator = function(obstaclesNum) {
  var that = this;
  var intervalCreator = setInterval(function() {
    if (that.obstacles.length < obstaclesNum) {
      that.createObstacles();
    } else if ((that.obstacles[i].y > (that.biker.y + that.biker.height))) {
      obstaclesCounter ++;
    } else if ((that.obstacles.length === obstaclesNum) && (that.obstacles[obstaclesNum - 1].y > (that.biker.y + that.biker.height))) {
      clearInterval(intervalCreator);
      that.roadEL.append(that.winner);
      numberWinner ++;
      if(numberWinner === 1) {
      that.winner.text( "You are the winner!" );
    }else if(numberWinner > 1){
      that.winner.text( "You are the loser, buhh!" );
    }
    }
  }, 1500);
};

Road.prototype.createObstacles = function() {
  var obstacle = new Obstacle(this.width, this.height, this);
  this.roadEL.append(obstacle.element);
  this.obstacles.push(obstacle);
};

Road.prototype.collision = function(obstaclesNum) {
  for (var i = 0; i < this.obstacles.length; i++) {
    if (((this.obstacles[i].y + this.obstacles[i].height) >= this.biker.y) && ((this.obstacles[i].y + this.obstacles[i].height) <= (this.biker.y + this.obstacles[i].height)) && (this.obstacles[i].x >= (this.biker.x - this.obstacles[i].width)) && ((this.obstacles[i].x) < (this.biker.x + this.biker.width))) {
      switch (this.obstacles[i].element.attr("class")) {
        case "rocket":
          this.obstacles[i].element.remove();
          this.yObstacleSpeed = this.height / 8.8;
          this.renderSpeedRoad(this.backgroundSpeed);
          var soundRocket = new Audio("./sounds/rocket.mp3");
          soundRocket.play();
          break;
        case "ice":
          this.yObstacleSpeed = this.height / 11;
          this.obstacles[i].element.remove();
          this.renderSpeedRoad(this.backgroundSpeed);
          var soundIce = new Audio("./sounds/ice.mp3");
          soundIce.play();
          break;
        case "blackroad":
          this.yObstacleSpeed = this.height / 17.6;
          this.obstacles[i].element.remove();
          this.renderSpeedRoad(this.backgroundSpeed);
          var soundRoad = new Audio("./sounds/road.mp3");
          soundRoad.play();
          break;
        case "stairs":
          this.yObstacleSpeed = this.height / 22;
          this.obstacles[i].element.remove();
          this.renderSpeedRoad(this.backgroundSpeed);
          var soundStairs = new Audio("./sounds/stairs.mp3");
          soundStairs.play();
          break;
        case "mud":
          this.yObstacleSpeed = this.height / 44;
          this.obstacles[i].element.remove();
          this.renderSpeedRoad(this.backgroundSpeed);
          var soundMud = new Audio("./sounds/mud.mp3");
          soundMud.play();
          break;
        case "stop":
          this.yObstacleSpeed = this.height / 88;
          this.obstacles[i].element.remove();
          this.renderSpeedRoad(this.backgroundSpeed);
          var soundStop = new Audio("./sounds/stop.mp3");
          soundStop.play();
          break;
      }
    }
  } $("#" + this.playerName).empty();
    $("#" + this.playerName).append(obstaclesCounter + " of " + obstaclesNum);
    $("#" + this.playerName).append("<br>");
    $("#" + this.playerName).append("left");
    $("#" + this.playerName).append("<br>");
    $("#" + this.playerName).append("to win");
};

Road.prototype.obstaclesCounterCreator = function (playerName) {
  var totalNumberObstacles = $("<div>")
    .attr("id", playerName)
    .css({
      "left": 0,
      "top": 0,
      "width": this.width / 6,
      "height": this.height / 6,
      "background-color": "white",
      "position": "absolute",
      "border": "3px black solid",
      "border-radius": this.width / 12,
      "font-size": this.height / 45,
      "box-sizing": "border-box",
      "font-family": "Frijole",
      "text-align": "center",
      "display": "block",
      "padding-top": this.height / 25,
      "z-index": "3",
    });
  return totalNumberObstacles;

};

Road.prototype.winnerShow = function() {
  var winner = $("<div>")
    .addClass("winner")
    .css({
      "left": this.width / 3,
      "top": this.height / 3,
      "width": this.width / 3,
      "height": this.height / 3,
      "background-color": "yellow",
      "position": "absolute",
      "border": "5px orange solid",
      "border-radius": this.width / 4,
      "font-size": this.height / 50,
      "box-sizing": "border-box",
      "font-family": "Frijole",
      "text-align": "center",
      "padding-top": this.height / 8.5
    });
  return winner;
};
