document.querySelectorAll('.menu-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const url = link.getAttribute('href');
    if (url) {
      window.location.href = url;
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".menu-link");
  const mainContent = document.querySelector("main");


  if (mainContent) {
    mainContent.style.opacity = "1";
  }

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const href = this.getAttribute("href");

      if (mainContent) {
        mainContent.style.transition = "opacity 0.5s ease";
        mainContent.style.opacity = "0";

       
        mainContent.addEventListener("transitionend", function handler() {
          mainContent.removeEventListener("transitionend", handler);
          window.location.href = href;
        }, { once: true });
      } else {
        window.location.href = href;
      }
    });
  });
});
