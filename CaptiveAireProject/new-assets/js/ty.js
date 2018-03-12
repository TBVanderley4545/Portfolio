$(document).ready(function () {

  // Thermometer variables
  let thermometerIcon = document.getElementById("thermometer-icon-container");
  let thermometerFill = document.getElementsByClassName("thermometer-fill")[0];

  // Tachometer variables
  let tachometerIcon = document.getElementById("tachometer-icon-container");
  let tachometerNeedle = document.getElementsByClassName("tachometer-needle")[0];



  // This code is being used to target the thermometer icon animation.
  thermometerIcon.addEventListener("mouseover", function () {
    if (!thermometerFill.classList.contains("thermometer-fill-active")) {
      thermometerFill.classList.add("thermometer-fill-active");
    }
  });

  thermometerIcon.addEventListener("mouseout", function () {
    if (thermometerFill.classList.contains("thermometer-fill-active")) {
      thermometerFill.classList.remove("thermometer-fill-active");
    }
  });


  // This code is being use to target the tachometer animation.
  tachometerIcon.addEventListener("mouseover", function() {
    if (!tachometerNeedle.classList.contains("tachometer-needle-active")) {
      tachometerNeedle.classList.add("tachometer-needle-active");
    }
  });

  tachometerIcon.addEventListener("mouseout", function () {
    if (tachometerNeedle.classList.contains("tachometer-needle-active")) {
      tachometerNeedle.classList.remove("tachometer-needle-active");
    }
  });
});
