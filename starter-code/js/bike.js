function Bike(roadWidth, roadHeight, leftKey, rightKey) {
  this.width = roadWidth / 5;
  this.height = roadHeight / 7;
  this.x = roadWidth / 2 - this.width / 2;
  this.y = roadHeight - this.height;
  this.element = this.startPosition();
  this.move(leftKey, rightKey);
}

Bike.prototype.startPosition = function() {
  var newBike = $("<div>")
    .addClass("bike")
    .css({
      "width": this.width,
      "height": this.height,
      "left": this.x,
      "top": this.y,
      "background-size": "cover",
      "background-image": 'url("./images/biker.png")',
      "position": "absolute",
      "z-index": "2"
    });
  return newBike;
};

Bike.prototype.move = function(leftKey, rightKey) {
  var that = this;
  $(document).on('keydown', function() {
    if ((event.keyCode === leftKey) && (that.x > that.width * 5 / 9)) {
        that.element.css({
          "transition": "left 0.1s linear",
          "left": that.x -= that.width * 5 / 21 //left//
        });
    } else if ((event.keyCode === rightKey) && (that.x < (that.width * 5 - (that.width * 5 / 9) - that.width)))  {
      that.element.css({
        "transition": "left 0.1s linear",
        "left": that.x += that.width * 5 / 21 //right//
      });
    }
  });
};
