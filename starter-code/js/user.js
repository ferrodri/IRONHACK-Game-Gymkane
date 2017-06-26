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
        left: this.y -= 20 //left//
      });
    }else if(event.keyCode == 83 && this.y<638) {
      $("#first-user").css({
        left: this.y += 20 //right//
      });
    }
  });
};

User.prototype.secondUser = function() {
  $(document).on('keydown', function() {
    this.z = $("#second-user").position().left;
    if (event.keyCode == 37 && this.z>78) {
      $("#second-user").css({
        left: this.z -= 20 //left//
      });
    }else if(event.keyCode == 39 && this.z<638) {
      $("#second-user").css({
        left: this.z += 20 //right//
      });
    }
  });
};
// 
// User.protoype.user = function() {
//
// }
