document.addEventListener("DOMContentLoaded", function () {
  const aboutLink = document.querySelector('a[href="#About-Me"]');

  aboutLink.addEventListener("click", function (e) {
    e.preventDefault(); 
    const target = document.querySelector("#About-Me");
    target.scrollIntoView({
      behavior: "smooth"
    });
  });
});