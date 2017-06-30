function Obstacle(roadWidth, roadHeight, road) {
  this.x = Math.floor((Math.random() * (roadWidth / 11) * 11 * 6.4 / 9) + (roadWidth / 11) * 11 / 9);    //limitbike2 -limitbike1) + limitbike1)
  this.y = -(roadHeight / 11);
  this.width = roadWidth / 11;
  this.height = roadHeight / 11;
  this.road = road;
  this.element = this.createObstacle();
}

Obstacle.prototype.createObstacle = function() {
  var classes = ["rocket", "ice", "blackroad", "stairs", "mud", "stop"];
  var background = ['rocket.png', 'ice.jpg', 'road.png', 'stairs.png', 'mud.jpg', 'stop.jpg'];
  var random = Math.floor(Math.random() * classes.length);
  var newObstacle = $("<div>")
    .addClass(classes[random])
    .css({
      "left": this.x,
      "top": this.y,
      "width": this.width,
      "height": this.height,
      "transition": "top " + "0.2s" + " linear", //igual a tiempo setInterval game
      "background-size": "cover",
      "background-image": 'url("./images/' +background[random] + '")',
      "position": "absolute",
      "z-index": "1"
    });
  obstaclesCounter -= 0.5;
  return newObstacle;
};

Obstacle.prototype.move = function(obstacleSpeed) {
  this.y += obstacleSpeed;
  this.element.css({
    top:this.y,
    left:this.x
  });
};
