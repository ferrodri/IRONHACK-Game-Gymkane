function Obstacle(id, road) {
  this.y = this.generateObstacle();//aqui generateObstacle
  this.x = -80;
  this.aleas = Math.floor(Math.random() * 6);
  this.background = ['url("./images/rocket.png")','url("./images/ice.jpg")','url("./images/road.png")','url("./images/stairs.png")','url("./images/mud.jpg")','url("./images/stop.jpg")'];
  this.backgroundClass = ["rocket", "ice", "blackroad", "stairs", "mud", "stop"];
  this.addObstacle(id, road);
}

Obstacle.prototype.generateObstacle = function() {
return Math.floor((Math.random() * 520) + 78);
};

Obstacle.prototype.addObstacle = function(id, road) {
  var newObstacle = $("<div></div>").addClass("object").attr('id', 'obstacle'+id).addClass(this.backgroundClass[this.aleas]).css({
    //background-image con url
    // clase de esa image
    "background": this.background[this.aleas],
    "background-size": "cover",
    top: this.x,
    left: this.y
  });
  $(road).append(newObstacle);
};
