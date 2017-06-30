function Bike(roadWidth, roadHeight) {
  this.width = roadWidth / 5;
  this.height = roadHeight / 7;
  this.x = roadWidth / 2 - this.width / 2;
  this.y = roadHeight - this.height;
  this.element = this.startPosition();
  // this.move(leftKey, rightKey);
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
    if ((keys[leftKey]) && (this.x > this.width * 5 / 9)) {
        this.element.css({
          "transition": "left 0.1s linear",
          "left": this.x -= this.width * 5 / 21 //left//
        });
    } else if ((keys[rightKey]) && (this.x < (this.width * 5 - (this.width * 5 / 9) - this.width)))  {
      this.element.css({
        "transition": "left 0.1s linear",
        "left": this.x += this.width * 5 / 21 //right//
      });
    }
};
