//hamburger menu toggle

const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile--nav");

hamburger.addEventListener("click", function () {
  this.classList.toggle("is-active");
  mobileNav.classList.toggle("is-active");
});

//scroll events
const headerSticky = document.querySelector("#header--sticky");
window.addEventListener("scroll", (e) => {
  const scrollTop = window.scrollY;
  // console.log(scrollTop);
  if (scrollTop < 340) {
    headerSticky.classList.remove("sticky-scroll");
  } else {
    headerSticky.classList.add("sticky-scroll");
  }
  // console.log(e.target);
});
// TOP Menu Sticky
// $(window).on("scroll", function () {
//   var scroll = $(window).scrollTop();
//   if (scroll < 400) {
//     $("#sticky-header").removeClass("sticky");
//     $("#back-top").fadeIn(500);
//   } else {
//     $("#sticky-header").addClass("sticky");
//     $("#back-top").fadeIn(500);
//   }
// });

// * about accordion functionality
const accordionTitles = document.querySelectorAll(".about__accordion--title");
const accordionContents = document.querySelectorAll(".about__accordion--contents ");

// for (let i = 0; i < accordionTitles.length; i++) {
//   accordionTitles[i].addEventListener("click", function (e) {
//     for (let k = 0; k < accordionContents.length; k++) {
//       accordionContents[k].classList.toggle("accordion-active");
//     }
//   });
// }

for (let i = 0; i < accordionTitles.length; i++) {
  accordionTitles[i].addEventListener("click", function () {
    this.classList.toggle("accordion-active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
