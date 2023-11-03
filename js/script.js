////////////////////////////////////////////////////////
// REFS

const refs = {
  headerEl: document.querySelector(".header"),
  headerBtnEl: document.querySelector(".button-mobile-nav"),
  navLinks: document.querySelectorAll(".nav-link"),
  yearSpanEl: document.querySelector(".current-year"),
  sectionHeroEl: document.querySelector(".hero-section"),
};

console.log(refs.navLinks);

////////////////////////////////////////////////////////
// MAKE MOBILE NAVIGATION WORK
refs.headerBtnEl.addEventListener("click", function () {
  document.body.classList.toggle("nav-open");
});

////////////////////////////////////////////////////////
// CLOSE MOBILE NAVIGATION

refs.navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    if (window.screen.width <= 752) {
      refs.headerEl.classList.toggle("nav-open");
    }
  });
});

////////////////////////////////////////////////////////
// STICKY HEADER

const obs = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];

    if (!ent.isIntersecting) {
      console.log();
      document.body.classList.add("sticky");
      // refs.sectionHeroEl.paddingTop = "150px";
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

obs.observe(refs.sectionHeroEl);

////////////////////////////////////////////////////////
//SET CURRENT YEAR

const currentYear = new Date().getFullYear();
refs.yearSpanEl.textContent = currentYear;
