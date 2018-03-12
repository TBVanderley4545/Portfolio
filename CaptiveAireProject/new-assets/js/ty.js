$(document).ready(function () {

  // Variable for the image load
  let primaryPageImage = document.getElementsByClassName("imac-monitoring")[0];

  // Thermometer variables
  let thermometerIcon = document.getElementById("thermometer-icon-container");
  let thermometerFill = document.getElementsByClassName("thermometer-fill")[0];

  // Tachometer variables
  let tachometerIcon = document.getElementById("tachometer-icon-container");
  let tachometerNeedle = document.getElementsByClassName("tachometer-needle")[0];

  // Ventilation variables
  let ventilationIcon = document.getElementById("ventilation-icon-container");
  let ventilationFumes1 = document.getElementsByClassName("ventilation-fumes")[0];
  let ventilationFumes2 = document.getElementsByClassName("ventilation-fumes")[1];
  let ventilationFumes3 = document.getElementsByClassName("ventilation-fumes")[2];

  // Light variables
  let lightIcon = document.getElementById("light-icon-container");
  let lightBeams = document.getElementsByClassName("light-beam");

  // This code is being used to transition in the primary image
  if(!primaryPageImage.classList.contains("loaded")) {
    primaryPageImage.classList.add("loaded");
  }


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
  tachometerIcon.addEventListener("mouseover", function () {
    if (!tachometerNeedle.classList.contains("tachometer-needle-active")) {
      tachometerNeedle.classList.add("tachometer-needle-active");
    }
  });

  tachometerIcon.addEventListener("mouseout", function () {
    if (tachometerNeedle.classList.contains("tachometer-needle-active")) {
      tachometerNeedle.classList.remove("tachometer-needle-active");
    }
  });


  // This code is being use to target the Ventilation Fumes animation.
  ventilationIcon.addEventListener("mouseover", function () {
    if (!ventilationFumes1.classList.contains("ventilation-fumes-active-1")) {
      ventilationFumes1.classList.add("ventilation-fumes-active-1");
    }

    if (!ventilationFumes2.classList.contains("ventilation-fumes-active-2")) {
      ventilationFumes2.classList.add("ventilation-fumes-active-2");
    }

    if (!ventilationFumes3.classList.contains("ventilation-fumes-active-3")) {
      ventilationFumes3.classList.add("ventilation-fumes-active-3");
    }
  });

  ventilationIcon.addEventListener("mouseout", function () {
    if (ventilationFumes1.classList.contains("ventilation-fumes-active-1")) {
      ventilationFumes1.classList.remove("ventilation-fumes-active-1");
    }

    if (ventilationFumes2.classList.contains("ventilation-fumes-active-2")) {
      ventilationFumes2.classList.remove("ventilation-fumes-active-2");
    }

    if (ventilationFumes3.classList.contains("ventilation-fumes-active-3")) {
      ventilationFumes3.classList.remove("ventilation-fumes-active-3");
    }
  });

  // This code is being use to target the light animation.
  lightIcon.addEventListener("mouseover", function () {
    for (var i = 0; i < lightBeams.length; i++) {
      if (!lightBeams[i].classList.contains("light-beam-active")) {
        lightBeams[i].classList.add("light-beam-active");
      }
    }
  });

  lightIcon.addEventListener("mouseout", function () {
    for (var i = 0; i < lightBeams.length; i++) {
      if (lightBeams[i].classList.contains("light-beam-active")) {
        lightBeams[i].classList.remove("light-beam-active");
      }
    }
  });
});
