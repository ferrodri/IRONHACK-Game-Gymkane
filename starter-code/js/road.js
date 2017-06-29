function Road(width, height, x, y, leftKey, rightKey, obstaclesNum, roadName) {
  this.width = width;
  this.height = height;
  this.roadName = "road" + roadName;
  this.x = x;
  this.y = y + 80; //después de esto iría un this.RoadEL pero lo metemos en renderRoad() porque es lo primero que llamamos
  this.renderRoad(roadName);
  this.biker = null;
  this.createBike(leftKey, rightKey);
  this.obstacles = [];
  this.obstacleLoopCreator(obstaclesNum);
  this.yObstacleSpeed = height / 22;
}

Road.prototype.renderRoad = function() {
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
      "animation": "animatedBackground 2s linear infinite" //linkear esta velocidad!
    });
  $("#game").append(this.roadEL);
  var x = this.roadEL.position().left;
  var y = this.roadEL.position().top;
  this.roadEL.css({
    left: x = this.x,
    top: y = this.y
  });
};

Road.prototype.createBike = function(leftKey, rightKey) {
  var bike = new Bike(this.width, this.height, leftKey, rightKey);
  this.roadEL.append(bike.element);
  this.biker = bike;
};

Road.prototype.updateObstacles = function(obstacleSpeed) {
  this.obstacles.forEach(function(e) {
    e.move(obstacleSpeed);
  });
  this.collision();
};

Road.prototype.obstacleLoopCreator = function(obstaclesNum) {
  var that = this;
  var intervalCreator = setInterval(function() {
    if (that.obstacles.length < obstaclesNum) {
      that.createObstacles();
    } else if ((that.obstacles.length === obstaclesNum) && (that.obstacles[obstaclesNum-1].y > (that.biker.y + that.biker.height))) {
      clearInterval(intervalCreator);
      console.log("you win"); //meter css you win aqui
    }
  }, 1500);
};

Road.prototype.createObstacles = function() {
  var obstacle = new Obstacle(this.width, this.height, this);
  this.roadEL.append(obstacle.element);
  this.obstacles.push(obstacle);
};

Road.prototype.collision = function() {
  for (var i = 0; i < this.obstacles.length; i++) {
    if (((this.obstacles[i].y + this.obstacles[i].height) >= this.biker.y) && ((this.obstacles[i].y + this.obstacles[i].height) <= (this.biker.y + this.obstacles[i].height)) && (this.obstacles[i].x >= (this.biker.x - this.obstacles[i].width)) && ((this.obstacles[i].x) < (this.biker.x + this.biker.width))) {
      switch (this.obstacles[i].element.attr("class")) {
        case "rocket":
          this.obstacles[i].element.remove();
          this.yObstacleSpeed = this.height / 8.8;
          var soundRocket = new Audio("./sounds/rocket.mp3");
          soundRocket.play();
          break;
        case "ice":
          this.yObstacleSpeed = this.height / 11;
          this.obstacles[i].element.remove();
          var soundIce = new Audio("./sounds/ice.mp3");
          soundIce.play();
          break;
        case "blackroad":
          this.yObstacleSpeed = this.height / 17.6;
          this.obstacles[i].element.remove();
          var soundRoad = new Audio("./sounds/road.mp3");
          soundRoad.play();
          break;
        case "stairs":
          this.yObstacleSpeed = this.height / 22;
          this.obstacles[i].element.remove();
          var soundStairs = new Audio("./sounds/stairs.mp3");
          soundStairs.play();
          break;
        case "mud":
          this.yObstacleSpeed = this.height / 44;
          this.obstacles[i].element.remove();
          var soundMud = new Audio("./sounds/mud.mp3");
          soundMud.play();
          break;
        case "stop":
          this.yObstacleSpeed = this.height / 88;
          this.obstacles[i].element.remove();
          var soundStop = new Audio("./sounds/stop.mp3");
          soundStop.play();
          break;
      }
    } else if (this.obstacles[i].y > (this.biker.y + this.biker.height)) {
      this.obstacles[i].element.remove();
    }
  }
};
