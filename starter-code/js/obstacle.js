function Obstacle(id, road) {
  this.y = this.generateObstacle();//aqui generateObstacle
  this.x = -80;
  this.background = ['url("./images/rocket.png")','url("./images/ice.jpg")','url("./images/road.png")','url("./images/stairs.png")','url("./images/mud.jpg")','url("./images/stop.jpg")'];
  this.addObstacle(id, road);
  this.assignClass();
}

Obstacle.prototype.assignClass = function(){
  var classes = ["rocket", "ice", "blackroad", "stairs", "mud", "stop"];
  var randomClass = Math.floor(Math.random() * classes.length);
  this.obstacleClass = classes[randomClass];
};

Obstacle.prototype.generateObstacle = function() {
return Math.floor((Math.random() * 520) + 78);
};

Obstacle.prototype.addObstacle = function(id, road) {
  var newObstacle = $("<div>")
                      .addClass("object")
                      .attr('id', 'obstacle'+id)
                      .addClass(this.obstacleClass).css({
                        //background-image con url
                        // clase de esa image
                        "background": this.background[this.aleas],
                        "background-size": "cover",
                        top: this.x,
                        left: this.y
                      });
  $(road).append(newObstacle);
};
