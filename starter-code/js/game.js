var r1 = new Road(840, 880, 50, 30, "first"); //(width,height, x, y, roadName)
// var r2 = new Road(200,180,300,50,"second");

setInterval(function () {
  r1.updateObstacles();
},1000/30);
