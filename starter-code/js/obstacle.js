function Obstacle() {
  this.y = 0;
  this.x = 0;
  this.speed = 0;
  //position Y, position X(random), this.speed
}
  // console.log(this);


Obstacle.prototype.generateObstacle = function() {
  this.y = $(".object").position().left;
  this.x = $(".object").position().top;
  $(".object").css({
    left: y = Math.floor((Math.random()*560)+78),
    top: x = -100
  });
};
