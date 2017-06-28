function Road(width, height, x, y, roadName) {
  this.width = width;
  this.height = height;
  this.roadName = "road" + roadName;
  this.x = x;
  this.y = y + 80; //después de esto iría un this.RoadEL pero lo metemos en renderRoad() porque es lo primero que llamamos
  this.renderRoad(roadName);
  this.createBike();
  this.obstacles = [];
  this.obstacleLoopCreator();
}

Road.prototype.renderRoad = function() {
  this.roadEL = $("<div>")
    .attr("id", this.roadName)
    .css({
      "width": this.width  + "px",
      "height": this.height + "px",
      "background-image": 'url("./images/dirt-road.jpg")',
      "background-size": "cover",
      "position": "absolute",
      "display": "inline-block",
      "float": "left",
      "clear": "left",
      "border": "2px black solid",
      "overflow": "hidden"
    });
  $("#game").append(this.roadEL);
  var x = this.roadEL.position().left;
  var y = this.roadEL.position().top;
  this.roadEL.css({
    left: x = this.x,
    top: y = this.y
  });
};

Road.prototype.createBike = function(){
  var bike = new Bike(this.width, this.height);
  this.roadEL.append(bike.element);
};

Road.prototype.updateObstacles = function(){
    this.obstacles.forEach(function(e){
      e.move();
    });
};

Road.prototype.obstacleLoopCreator = function() {
  var that = this;
  var intervalCreator = setInterval(function() {
    that.createObstacles();
  }, 1500);
};

Road.prototype.createObstacles = function() {
  var obstacle = new Obstacle(this.width, this.height, this);
  this.roadEL.append(obstacle.element);
  this.obstacles.push(obstacle);
};
