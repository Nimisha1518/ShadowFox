
const toggleBtn = document.getElementById("darkModeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  
  
  if (document.body.classList.contains("dark")) {
    toggleBtn.textContent = "☀️";
  } else {
    toggleBtn.textContent = "🌙";
  }
});


window.addEventListener("scroll", () => {
  document.querySelectorAll(".feature-card, .product-showcase, .testimonial")
    .forEach(el => {
      const pos = el.getBoundingClientRect().top;
      if (pos < window.innerHeight - 100) {
        el.classList.add("visible");
      }
    });
});


document.querySelectorAll(".feature-card, .product-showcase, .testimonial")
  .forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.8s ease";
  });


document.addEventListener("scroll", () => {
  document.querySelectorAll(".feature-card, .product-showcase, .testimonial")
    .forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight - 100) {
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
      }
    });
});
