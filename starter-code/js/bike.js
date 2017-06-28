function Bike(roadWidth, roadHeight) {
  this.width = roadWidth / 5;
  this.height = roadHeight / 7;
  this.x = roadWidth / 2 - this.width / 2;
  this.y = roadHeight - this.height;
  this.element = this.startPosition();
  this.move();
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
    console.log('hello');
  return newBike;
};

Bike.prototype.move = function() {
  var that = this;

  $(document).on('keydown', function() {
    if ((event.keyCode === 37) && (that.x > that.width * 5 / 9)) {
        that.element.css({
          "transition": "left 0.1s linear",
          "left": that.x -= 20 //left//
        });
    } else if ((event.keyCode === 39) && (that.x < (that.width * 5 - (that.width * 5 / 9) - that.width)))  {
      that.element.css({
        "transition": "left 0.1s linear",
        "left": that.x += 20 //right//
      });
    }
  });
};

// User.prototype.firstUser = function() {
//   $(document).on('keydown', function() {
//     this.y = $("#first-user").position().left;
//     if (event.keyCode == 65 && this.y>78) {
//       $("#first-user").css({
//         "transition": "left 0.1s linear", //importante!! cada 0.2s te va a llevar a tu left de manera lineal, es decir, si tu pulsas la tecla para left 10 veces en 0,2s hará esa transicion entre 0 y 200px//
//         left: this.y -= 40 //left//
//       });
//     }else if(event.keyCode == 83 && this.y<598) {
//       $("#first-user").css({
//         "transition": "left 0.1s linear",
//         left: this.y += 40 //right//
//       });
//     }
//   });
// };
//
// User.prototype.secondUser = function() {
//   $(document).on('keydown', function() {
//     this.z = $("#second-user").position().left;
//     if (event.keyCode == 37 && this.z>78) {
//       $("#second-user").css({
//         "transition": "left 0.1s linear",
//         left: this.z -= 40 //left//
//       });
//     }else if(event.keyCode == 39 && this.z<598) {
//       $("#second-user").css({
//         "transition": "left 0.1s linear",
//         left: this.z += 40 //right//
//       });
//     }
//   });
// };
