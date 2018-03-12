$(document).ready(function () {

  // let thermometerIcon = document.getElementById("thermometer-icon-container");
  // let thermometerFill = document.getElementsByClassName("thermometer-fill")[0];


  // // This code is being used to target the thermometer icon animation.
  // thermometerIcon.addEventListener("mouseover", function () {

  //   if (!thermometerFill.classList.contains("thermometer-fill-active")) {
  //     thermometerFill.classList.add("thermometer-fill-active");
  //   }
  // });

  // thermometerIcon.addEventListener("mouseout", function () {
  //   if (thermometerFill.classList.contains("thermometer-fill-active")) {
  //     thermometerFill.classList.remove("thermometer-fill-active");
  //   }
  // });

  $("#thermometer-icon-container").hover(function() {
    if(!$(".thermometer-fill").hasClass("thermometer-fill-active")) {
      $(".thermometer-fill").addClass("thermometer-fill-active");
    }
  }, function() {
    if($(".thermometer-fill").hasClass("thermometer-fill-active")) {
      $(".thermometer-fill").removeClass("thermometer-fill-active");
    }  });


  /********************
  HELPER FUNCTIONS
  ********************/

});
