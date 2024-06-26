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
