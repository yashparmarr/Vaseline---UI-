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


document.querySelectorAll('.product-hovering').forEach((item) => {
  item.addEventListener('mouseenter', () => {
      const hoverContainer = item.querySelector('.hover-product-container');
      hoverContainer.style.display = '';
  });

  item.addEventListener('mouseleave', () => {
      const hoverContainer = item.querySelector('.hover-product-container');
      hoverContainer.style.display = 'none';
  });
});