var user = new User();
var obstacle = new Obstacle();
var game = new Game();

function Game() {

}

Game.prototype.renderGame = function() {
  user.startPosition();
  this.renderFirstUser();
  this.renderSecondUser();
};

Game.prototype.renderFirstUser = function() {
  user.firstUser();
};

Game.prototype.renderSecondUser = function() {
  user.secondUser();
};

Game.prototype.createObstacles = function() {
  //intervalID cada 2000 milisegundos, que llame al constructor new Obstacle
};

game.renderGame();
obstacle.generateObstacle();
