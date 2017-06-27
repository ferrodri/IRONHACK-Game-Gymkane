function User() {
  this.y = 0;
  this.z = 0;
}

User.prototype.startPosition = function() {
  this.y = $("#first-user").position().left;
  this.z = $("#second-user").position().left;
  $("#first-user").css({
    left: this.y = 358 //center position//
  });
  $("#second-user").css({
    left: this.z = 358 //center position//
  });
};

User.prototype.firstUser = function() {
  $(document).on('keydown', function() {
    this.y = $("#first-user").position().left;
    if (event.keyCode == 65 && this.y>78) {
      $("#first-user").css({
        "transition": "left 0.1s linear", //importante!! cada 0.2s te va a llevar a tu left de manera lineal, es decir, si tu pulsas la tecla para left 10 veces en 0,2s hará esa transicion entre 0 y 200px//
        left: this.y -= 40 //left//
      });
    }else if(event.keyCode == 83 && this.y<598) {
      $("#first-user").css({
        "transition": "left 0.1s linear",
        left: this.y += 40 //right//
      });
    }
  });
};

User.prototype.secondUser = function() {
  $(document).on('keydown', function() {
    this.z = $("#second-user").position().left;
    if (event.keyCode == 37 && this.z>78) {
      $("#second-user").css({
        "transition": "left 0.1s linear",
        left: this.z -= 40 //left//
      });
    }else if(event.keyCode == 39 && this.z<598) {
      $("#second-user").css({
        "transition": "left 0.1s linear",
        left: this.z += 40 //right//
      });
    }
  });
};
//
// User.protoype.user = function() {
//
// }
