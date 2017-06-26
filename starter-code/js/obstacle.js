function Obstacle(id) {
  this.y = this.generateObstacle();//aqui generateObstacle
  this.x = 0;
  this.addObstacle(id);
}
// console.log(this);

Obstacle.prototype.addObstacle = function(id) {
  var newObstacle = $("<div></div>").addClass("object").attr('id', 'obstacle'+id).css({
    top: this.x,
    left: this.y
  });
  $("#first-road").append(newObstacle);
};

Obstacle.prototype.generateObstacle = function() {
return Math.floor((Math.random() * 560) + 78);
};
