const backToTopBtn = document.getElementById("back-to-top-btn");
backToTopBtn.style.display = "none";


window.addEventListener("scroll", () => {
  if (window.scrollY > 180) {
    backToTopBtn.style.display = "inline-flex";
  } else {
    backToTopBtn.style.display = "none";
  }
});


backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
