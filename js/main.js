document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const navbar = document.querySelector(".navbar");
  const scrollTopButton = document.querySelector(".scroll-top");
  const fadeElements = document.querySelectorAll(".fade-in");

  // Sticky nav state
  if (navbar) {
    const toggleNavShadow = () => {
      if (window.scrollY > 24) {
        body.classList.add("is-scrolled");
      } else {
        body.classList.remove("is-scrolled");
      }
    };

    toggleNavShadow();
    window.addEventListener("scroll", toggleNavShadow, { passive: true });
  }

  // Scroll to top button
  if (scrollTopButton) {
    const toggleScrollTopVisibility = () => {
      if (window.scrollY > window.innerHeight * 0.5) {
        scrollTopButton.classList.add("visible");
      } else {
        scrollTopButton.classList.remove("visible");
      }
    };

    toggleScrollTopVisibility();
    window.addEventListener("scroll", toggleScrollTopVisibility, { passive: true });

    scrollTopButton.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Fade in animations
  if (fadeElements.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    fadeElements.forEach((element) => observer.observe(element));
  }
});
