/*------------------------------------------------------------------
 *


 -------------------------------------------------------------------*/
//display on hover box //

$(".display-on-hover-box-container a.display-on-hover-box-items").on(
  "mouseenter",
  function () {
    $(".tab-content-hover").hide();
    $(
      ".display-on-hover-box-container a.display-on-hover-box-items"
    ).removeClass("ctive-clod-sr");
    $(this).addClass("ctive-clod-sr");
    var selected_tab = $(this).attr("href");
    $(selected_tab).stop().fadeIn();
    return false;
  }
);

$(".display-on-hover-box-items").on({
  mouseenter: function () {
    $(this).addClass("active");
    $(".display-on-hover-box-items").addClass("itsnot");
  },

  mouseleave: function () {
    $(".display-on-hover-box-items").removeClass("itsnot");
    $(this).removeClass("active");
  },
});

// page loeader //
(function () {
  $(".preloader").delay(1300).fadeOut("fast");
})();

// tooltips //
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

// Retail & B2B corporate //

$("#monthly-yearly-chenge a").on("click", function () {
  $(this).addClass("active").siblings().removeClass("active");

  if (jQuery(".monthly-price").hasClass("active")) {
    $(".second-pricing-table-price").addClass("monthly");
    $(".second-pricing-table-price").removeClass("yearly");
  }

  if (jQuery(".yearli-price").hasClass("active")) {
    $(".second-pricing-table-price").addClass("yearly");
    $(".second-pricing-table-price").removeClass("monthly");
  }
});

// fixed header navbar layout //
$(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 40) {
      $(".fixed-header-layout").addClass("top-header-fixed");
    } else {
      $(".fixed-header-layout").removeClass("top-header-fixed");
    }
  });
});

//-- responsive menu swipe -- //
if (document.documentElement.clientWidth < 768) {
  $(function () {
    $("body").swipe({
      swipe: function (event, direction) {
        if (direction == "left" && !$("#offcanvas-menu-home").hasClass("in")) {
          $("#offcanvas-menu-home").addClass("in");
          $(".offcanvas-toggle.menu-btn-span-bar").addClass("is-open");
          $("body").addClass("offcanvas-stop-scrolling");
        }

        if (direction == "left") {
          $("#offcanvas-menu-home").removeClass("in");
          $("body").removeClass("offcanvas-stop-scrolling");
          $(".offcanvas-toggle.menu-btn-span-bar").removeClass("is-open");
        }
      },
      threshold: 100,
      excludedElements:
        "label,pre , button, input, select, textarea, table,.owl-carousel,.carousel-main,.flickity-enabled",
    });
  });
}

//-- Button top -- //
// $(document).ready(function () {
//   $("body").append(
//     '<div id="toTop" class="btn"><span class="fa fa-chevron-up"></span></div>'
//   );
//   $(window).scroll(function () {
//     if ($(this).scrollTop() != 0) {
//       $("#toTop").fadeIn();
//     } else {
//       $("#toTop").fadeOut();
//     }
//   });
//   $("#toTop").click(function () {
//     $("html, body").animate(
//       {
//         scrollTop: 0,
//       },
//       10
//     );
//     return false;
//   });
// });

// video model //
$(document).ready(function () {
  var ifcontactformexist = document.getElementById("videomodal");
  if (ifcontactformexist) {
    var $videoSrc;
    $(".video-btn").on("click", function () {
      $videoSrc = $(this).data("src");
    });
    $("#videomodal").on("shown.bs.modal", function (e) {
      $("#video").attr(
        "src",
        $videoSrc + "?rel=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1"
      );
    });
    $("#videomodal").on("hide.bs.modal", function (e) {
      $("#video").attr("src", $videoSrc);
    });
  }
});

jQuery("#nuhost-filter-list li a").on("click", function () {
  $(this).addClass("filter-item-open");
  $(".nuhost-filter-list-container").addClass("nuhost-filter-min-height");
  $("#" + this.id + "-content")
    .delay(200)
    .fadeIn(300);
});

jQuery(".filter-content-close").on("click", function () {
  $(this).addClass("filter-item-open");
  $(".nuhost-filter-list-container").removeClass("nuhost-filter-min-height");
  $(".filter-content-box").delay(200).fadeOut(300);
});

//-- animated scroll -- //
$(document).on("click", 'a[href^="#"]', function (event) {
  if ($(this).hasClass("animated-link")) {
    event.preventDefault();
    var nav_height = 110;
    if ($($.attr(this, "href")).offset()) {
      $("html, body").animate(
        {
          scrollTop: $($.attr(this, "href")).offset().top - nav_height,
        },
        500
      );
    }
  }
});

//-- contact form height for mobile devices -- //
$(document).ready(function () {
  var ifcontactformexist = document.getElementById("ajax-contact");
  if (ifcontactformexist) {
    var offsetHeight = document.getElementById("ajax-contact").offsetHeight;
    document.getElementById("mobile-form-contact-height").style.height =
      offsetHeight + "px";
  }
});

//-- import loop files -- //
$(function () {
  var includes = $("[data-include]");
  jQuery.each(includes, function () {
    var file = "loop-templates/" + $(this).data("include") + ".html";
    $(this).load(file);
  });
});

// // tabs slider product & Events
// const btnLeft = document.querySelector(".left-btn");
// const btnRight = document.querySelector(".right-btn");
// const tabMenu = document.querySelector(".tab-menu");

// const IconVisibility = () => {
//   let scrollLeftValue = Math.ceil(tabMenu.scrollLeft);
//   let scrollableWidth = tabMenu.scrollWidth - tabMenu.clientWidth;

//   btnLeft.style.display = scrollLeftValue > 0 ? "block" : "none";
//   btnRight.style.display = scrollableWidth > scrollLeftValue ? "block" : "none";
// };

// btnRight.addEventListener("click", () => {
//   tabMenu.scrollLeft += 150;
//   setTimeout(() => IconVisibility(), 50);
// });

// btnLeft.addEventListener("click", () => {
//   tabMenu.scrollLeft -= 150;
//   setTimeout(() => IconVisibility(), 50);
// });

// window.onload = function () {
//   btnRight.style.display =
//     tabMenu.scrollWidth > tabMenu.clientWidth ||
//     tabMenu.scrollWidth >= window.innerWidth
//       ? "block"
//       : "none";
//   btnLeft.style.display =
//     tabMenu.scrollWidth >= window.innerWidth ? "" : "none";
// };
// window.onresize = function () {
//   btnRight.style.display =
//     tabMenu.scrollWidth > tabMenu.clientWidth ||
//     tabMenu.scrollWidth >= window.innerWidth
//       ? "block"
//       : "none";
//   btnLeft.style.display =
//     tabMenu.scrollWidth >= window.innerWidth ? "" : "none";

//   let scrollLeftValue = Math.round(tabMenu.scrollLeft);
//   btnLeft.style.display = scrollLeftValue > 0 ? "block" : "none";
// };

// // batas

// let activeDrag = false;

// tabMenu.addEventListener("mousemove", (drag) => {
//   if (!activeDrag) return;
//   tabMenu.scrollLeft -= drag.movementX;
// });

// document.addEventListener("mouseup", () => {
//   activeDrag = false;
//   IconVisibility();
//   tabMenu.classList.remove("dragging");
// });

// tabMenu.addEventListener("mousedown", () => {
//   activeDrag = true;
// });

// // view content card
// const tabs = document.querySelectorAll(".tab");
// const tabBtns = document.querySelectorAll(".tab-btn");

// const tab_Nav = function (tabBtnclick) {
//   tabBtns.forEach((tabBtn) => {
//     tabBtn.classList.remove("active");
//   });

//   tabs.forEach((tab) => {
//     tab.classList.remove("active");
//   });

//   tabBtns[tabBtnclick].classList.add("active");
//   tabs[tabBtnclick].classList.add("active");
// };

// tabBtns.forEach((tabBtn, i) => {
//   tabBtn.addEventListener("click", () => {
//     tab_Nav(i);
//   });
// });
