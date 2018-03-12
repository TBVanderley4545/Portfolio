$(document).ready(function () {

  // This code is being used to target the thermometer icon animation.
  $('.thermometer-icon').hover(
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
