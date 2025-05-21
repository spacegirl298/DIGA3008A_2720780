document.addEventListener("DOMContentLoaded", () => 
{
  const images = document.querySelectorAll("figure img");

  images.forEach(img => {
    img.addEventListener("click", () => {
      const overlay = document.createElement("div");
      overlay.classList.add("img-overlay");

      const enlargedImg = document.createElement("img");
      enlargedImg.src = img.src;
      enlargedImg.alt = img.alt;
      enlargedImg.classList.add("enlarged-img");

      overlay.appendChild(enlargedImg);
      document.body.appendChild(overlay);

      overlay.addEventListener("click", () => {
        document.body.removeChild(overlay);
      });
    });
  });
});