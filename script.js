const scrollers = document.querySelectorAll(".wander-partner-scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".wander-scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}
$(document).ready(function () {
  $(".wander-destination-slider").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: true,
    focusOnSelect: true,
    infinite: true,
    nextArrow: ".wander-next",
    prevArrow: ".wander-prev",
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          variableWidth: true,
        },
      },
    ],
  });
  $(".wander-feature-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    focusOnSelect: true,
    infinite: true,
    nextArrow: ".wander-feature-next",
    prevArrow: ".wander-feature-prev",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 748,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 580,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(".wander-feature-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    focusOnSelect: true,
    infinite: true,
    nextArrow: ".wander-feature-next",
    prevArrow: ".wander-feature-prev",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 748,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 580,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

// let mm = gsap.matchMedia();

// mm.add("(min-width:1024px)", () => {
//   ScrollTrigger.create({
//     trigger: ".wander-stack-section",
//     start: "top top",
//     end: "bottom top",
//     pin: ".stack-left-pin",
//     markers: true,
//     scurb: true,
//   });

//   const stacks = gsap.utils.toArray(".stack-div");

//   stacks.forEach((stack, index) => {
//     const tween = gsap.to(stack, {
//       scrollTrigger: {
//         trigger: stack,
//         start: () => `top bottom-=100`,
//         end: () => `top top+=40`,
//         scurb: true,
//         markers: true,
//         invalidateOnRefresh: true,
//       },
//       ease: "none",
//       scale: () => 1 - (stacks.length - index) * 0.025,
//     });
//   });

//   ScrollTrigger.create({
//     trigger: stack,
//     start: "top top",
//     pin: true,
//     pinSpacing: false,
//     markers: true,
//     id: "pin",
//     end: "max",
//     invalidateOnRefresh: true,
//   });
// });

$(document).ready(function () {
  // When the .btn-local is clicked
  $(".btn-local").click(function () {
    // Add 'active' class to .local-box and remove it from .region-box
    $(".local-box").addClass("active");
    $(".region-box").removeClass("active");

    // Show .dropdown-middle-box and hide .dropdown-middle-box-regional
    $(".dropdown-middle-box").show();
    $(".dropdown-middle-box-regional").hide();
  });

  // When the .btn-region is clicked
  $(".btn-region").click(function () {
    // Add 'active' class to .region-box and remove it from .local-box
    $(".region-box").addClass("active");
    $(".local-box").removeClass("active");

    // Hide .dropdown-middle-box and show .dropdown-middle-box-regional
    $(".dropdown-middle-box").hide();
    $(".dropdown-middle-box-regional").show();
  });

  $(".country-name-item").hover(function () {
    // Hide .dropdown-right-feature and show .dropdown-right-card
    $(".dropdown-right-feature").hide();
    $(".dropdown-right-card").show();
    $(".country-name-item").removeClass("hovered");
    $(this).addClass("hovered");
  });

  $(".regional-name-item").hover(function () {
    // Hide .dropdown-right-feature and show .dropdown-right-card-region
    $(".dropdown-right-feature").hide();
    $(".dropdown-right-card").hide();
    $(".dropdown-right-card-region").show();

    // Remove 'hovered' class from all .region-name-item
    $(".regional-name-item").removeClass("hovered");
    // Add 'hovered' class to the currently hovered item
    $(this).addClass("hovered");
  });

  $(".btn-local, .btn-region").click(function () {
    // Show .dropdown-right-feature and hide .dropdown-right-card
    $(".dropdown-right-feature").show();
    $(".dropdown-right-card").hide();
    $(".dropdown-right-card-region").hide();
    $(".country-name-item, .regional-name-item").removeClass("hovered");
  });

  $("#mainSearchInput").on("click", function () {
    $("#searchModal").modal("show");
  });

  $(".searchInputStyle").on("focus", function () {
    var $wrapper = $(this).closest(".search-input-wrapper");
    $wrapper.find(".search-popup").show(); // Show the popup in the same wrapper
  });

  $(".searchInputStyle").on("blur", function () {
    var $wrapper = $(this).closest(".search-input-wrapper");
    // Use setTimeout to allow click events within the popup before it hides
    setTimeout(function () {
      $wrapper.find(".search-popup").hide(); // Hide the popup in the same wrapper
    }, 100);
  });

  // Optional: Prevent the popup from hiding if it's clicked
  $(".search-popup").on("mousedown", function (event) {
    event.preventDefault(); // Prevent the blur event from firing
  });

  // product listing page js
  $(".plan-data-row .data-tag").on("click", function (event) {
    event.preventDefault(); // Prevent the default anchor behavior
    var type = $(this).data("type");

    if (type === "unlimited") {
      $(".unlimited-data-row").show();
    } else {
      $(".unlimited-data-row").hide();
    }

    $(".plan-data-row .data-tag").removeClass("active");
    $(this).addClass("active");
  });
  $(".plan-validity-row .validity-tag").on("click", function (event) {
    event.preventDefault(); // Prevent the default anchor behavior

    // Remove the active class from all validity tags
    $(".plan-validity-row .validity-tag").removeClass("active");

    // Add the active class to the clicked validity tag
    $(this).addClass("active");
  });

  // pdp slider
  $(".pdp-slider").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    focusOnSelect: true,
    infinite: true,
    nextArrow: ".wander-next",
    prevArrow: ".wander-prev",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: "unslick",
      },
    ],
  });

  $(".accordion-item").on("show.bs.collapse", function () {
    $(this).addClass("open");
  });

  $(".accordion-item").on("hide.bs.collapse", function () {
    $(this).removeClass("open");
  });

  // mobile list modal js

  $(".modal-iphone-btn").addClass("active");
  $(".mobile-list").show();
  $(".modal-android-category").hide();

  // Handle iPhone button click
  $(".modal-iphone-btn").click(function () {
    $(this).addClass("active");
    $(".modal-android-btn").removeClass("active");
    $(".modal-android-category").hide();
    $(".mobile-list").show();

    // Reset Android category state
    $(".modal-android-category li").removeClass("active").show();
  });

  // Handle Android button click
  $(".modal-android-btn").click(function () {
    $(this).addClass("active");
    $(".modal-iphone-btn").removeClass("active");
    $(".modal-android-category").show();
    $(".mobile-list").hide();
  });

  // Handle Android category item click
  $(".modal-android-category li").click(function () {
    $(".modal-android-category li").hide();
    $(this).show().addClass("active");
    $(".mobile-list").show();
  });
});
