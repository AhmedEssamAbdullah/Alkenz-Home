// jQuery Method

$(function () {
  ("use strict");
  // Adjust Slider Height

  var winHeight = $(window).height(),
    upperHeight = $(".upper-bar").innerHeight(),
    navbarHeight = $(".navbar").innerHeight();
  $(".slider, .carousel-item").height(winHeight - (upperHeight + navbarHeight));

  //Featured work shuffle

  $(".featured-work ul li").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");

    if ($(this).data("class") === "all") {
      $(".shuffle-images .col-md ").css("opacity", 1);
    } else {
      $(".shuffle-images .col-md ").css("opacity", ".08");
      $($(this).data("class")).parent().css("opacity", 1);
    }
  });
});

// javaScript Method

// let upperBar = document.querySelector(".upper-bar"),
//   navBar = document.querySelector(".navbar"),
//   slider = document.querySelector(".slider,.carousel-item"),
//   winH = window.innerHeight,
//   sliderH = winH - (upperBar.offsetHeight + navBar.offsetHeight);
// slider.style.height = `${sliderH}px`;

// document.querySelector(".carousel-item").style.height = `${sliderH}px`;

// let cur_item = document.querySelectorAll(".carousel-item");
// let array = Array.from(cur_item);

// array.forEach((element) => {
//   element.style.height = `${sliderH}px`;
// });

//Featured work shuffle

// let li = document.getElementsByTagName("li");
// for (let i = 0; i < li.length; i++) {
//   li[i].onclick = (e) => {
//     let n = 0;
//     while (n < li.length) {
//       li[n++].className = "";
//     }
//   };
// }
