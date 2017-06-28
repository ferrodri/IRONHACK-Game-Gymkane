function Obstacle(roadWidth, roadHeight, road) {
  this.width = roadWidth / 11;
  this.height = roadHeight / 11;
  this.road = road;
  this.element = this.createObstacle();
  this.x = Math.floor((Math.random() * 600));
  this.y = -this.height;
  this.ySpeed = 100/30;
}

Obstacle.prototype.createObstacle = function() {
  var classes = ["rocket", "ice", "blackroad", "stairs", "mud", "stop"];
  var background = ['rocket.png', 'ice.jpg', 'road.png', 'stairs.png', 'mud.jpg', 'stop.jpg'];
  var random = Math.floor(Math.random() * classes.length);
  var newObstacle = $("<div>")
    .addClass(classes[random])
    .css({
      "left": this.x, //limitbike2 -limitbike1) + limitbike1)
      "top": this.y,
      "width": this.width,
      "height": this.height,
      "background-size": "cover",
      "background-image": 'url("./images/' +background[random] + '")',
      "position": "absolute",
      "z-index": "1"
    });
  return newObstacle;
};

Obstacle.prototype.move = function() {
  this.y += this.ySpeed;
  this.element.css({
    top:this.y,
    left:this.x
  });
};
