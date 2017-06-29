function Road(width, height, x, y, leftKey, rightKey, roadName) {
  this.width = width;
  this.height = height;
  this.roadName = "road" + roadName;
  this.x = x;
  this.y = y + 80; //después de esto iría un this.RoadEL pero lo metemos en renderRoad() porque es lo primero que llamamos
  this.renderRoad(roadName);
  this.biker = null;
  this.createBike(leftKey, rightKey);
  this.obstacles = [];
  this.obstacleLoopCreator();
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

Road.prototype.obstacleLoopCreator = function() {
  var that = this;
  var intervalCreator = setInterval(function() {
    if(that.obstacles.length<10){
      that.createObstacles();
    } else if(that.obstacles.length===10){ //&& ($("#" + this.roadName + " :last").hasClass("bike"))
    console.log("you win");
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
          this.yObstacleSpeed = this.height/8.8;
          break;
        case "ice":
          this.yObstacleSpeed = this.height/11;
          this.obstacles[i].element.remove();
          break;
        case "blackroad":
          this.yObstacleSpeed = this.height/17.6;
          this.obstacles[i].element.remove();
          break;
        case "stairs":
          this.yObstacleSpeed = this.height/22;
          this.obstacles[i].element.remove();
          break;
        case "mud":
          this.yObstacleSpeed = this.height/44;
          this.obstacles[i].element.remove();
          break;
        case "stop":
          this.yObstacleSpeed = this.height/88;
          this.obstacles[i].element.remove();
          break;
      }
    } else if (this.obstacles[i].y > (this.biker.y + this.biker.height)) {
      this.obstacles[i].element.remove();
      // this.obstacles.shift();
    }
  }
};
