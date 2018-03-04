$(document).ready(function () {
  // This is to display the remaining days on the main page.
  $(".date-counter").text(calculateDays());

  // This code is used to get the total number of days left.
  function calculateDays() {
    var millisecondsInADay = 86400000;

    var currentDate = $.now();
    var weddingDate = new Date('6/30/2018').getTime();

    var interval = weddingDate - currentDate;

    var days = Math.floor(interval / millisecondsInADay);

    return days;
  }

  // This is used to get the initial height of the expandable sections.
  $('.expanded-content').each(function () {
    $(this).attr("element-height", $(this).outerHeight(true));
    $(this).css({
      height: 0,
      visibility: "visible"
    });
  });

  // This is used to handle the nav being clicked.
  $('.section-title').click(function (e) {
    var expandableSection = $(this).closest('.expandable-section');
    var expandableContent = expandableSection.find('.expanded-content');
    var icon = $(this).find('.icon-container');

    if (expandableContent.height() > 0) {
      closeContent(expandableContent);
      icon.removeClass('rotated');
    } else {
      expandContent(expandableContent);
      icon.addClass('rotated');
    }
  });

  // Need to grab this initial width to prevent bug on mobile that treats a scroll as a resize.
  let initialWidth = $(window).width();
  let newOrientationWidth = 0;

  $(window).resize(function () {

    let newWidth = $(window).width();

    if (initialWidth !== newWidth && newOrientationWidth !== newWidth) {
      $('.section-title .icon-container').removeClass('rotated');

      $('.expanded-content').each(function () {
        $(this).css({
          height: 'auto',
          visibility: 'hidden'
        });
      });

      // This is used to get the initial height of the expandable sections.
      $('.expanded-content').each(function () {
        $(this).attr("element-height", $(this).outerHeight(true));
        $(this).css({
          height: 0,
          visibility: "visible"
        });
      });
    }
  });

  $(window).orientationchange(function() {
    newOrientationWidth = $(window).width();

    $('.section-title .icon-container').removeClass('rotated');

    $('.expanded-content').each(function () {
      $(this).css({
        height: 'auto',
        visibility: 'hidden'
      });
    });

    // This is used to get the initial height of the expandable sections.
    $('.expanded-content').each(function () {
      $(this).attr("element-height", $(this).outerHeight(true));
      $(this).css({
        height: 0,
        visibility: "visible"
      });
    });
  });

  /********************
  HELPER FUNCTIONS
  ********************/
  function expandContent(expandableContent) {
    expandableContent.stop().animate({
      height: parseInt(expandableContent.attr('element-height'))
    }, 400);
  }

  function closeContent(expandableContent) {
    expandableContent.stop().animate({
      height: 0
    }, 400);
  }
});
