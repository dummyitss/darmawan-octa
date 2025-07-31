setInterval(() => {
  slides[index].classList.remove("active");
  slides[index].style.zIndex = 0;

  index = (index + 1) % slides.length;

  slides[index].classList.add("active");
  slides[index].style.zIndex = 1;
}, parseInt(container.dataset.delay) || 3000);




