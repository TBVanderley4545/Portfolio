$(document).ready(function () {

  let thermometerIcon = document.getElementById("thermometer-icon");

  thermometerIcon.addEventListener("mouseover", function() {
    let thermometerFill = document.getElementsByClassName("thermometer-fill");

    thermometerFill.classList.add("thermometer-fill-active");
  });

  // This code is being used to target the thermometer icon animation.
  $('#thermometer-icon').hover(
    function () {
      if (!$('.thermometer-fill').hasClass('thermometer-fill-active')) {
        $('.thermometer-fill').addClass('thermometer-fill-active')
      }
    },
    function () {
      if ($('.thermometer-fill').hasClass('thermometer-fill-active')) {
        $('.thermometer-fill').removeClass('thermometer-fill-active');
      }
    }
  );

  /********************
  HELPER FUNCTIONS
  ********************/

});
