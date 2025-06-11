document.addEventListener("DOMContentLoaded", function () {
  const aboutLink = document.querySelector('a[href="#About-Me"]');
  
  if (aboutLink) {
    aboutLink.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector("#About-Me");
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  }
});