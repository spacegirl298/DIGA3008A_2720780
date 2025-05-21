document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".image-container img");

  images.forEach((img) => {
    img.addEventListener("click", () => {
      const overlay = document.createElement("div");
      overlay.classList.add("img-overlay");

      const enlargedImg = document.createElement("img");
      enlargedImg.src = img.dataset.full || img.src;
      enlargedImg.alt = img.alt;
      enlargedImg.classList.add("enlarged-img");

      const descriptionText = img.dataset.description || img.alt;
      const firstSentenceMatch = descriptionText.match(/.*?[.?!](\s|$)/); // find first full sentence
      const firstSentence = firstSentenceMatch ? firstSentenceMatch[0] : descriptionText;
      const remainingText = descriptionText.replace(firstSentence, "");

      const description = document.createElement("div");
      description.classList.add("lightbox-text");

      const heading = document.createElement("h3");
      heading.classList.add("lightbox-heading");
      heading.textContent = firstSentence.trim();

      const paragraph = document.createElement("p");
      paragraph.classList.add("lightbox-paragraph");
      paragraph.textContent = remainingText.trim();

      description.appendChild(heading);
      if (remainingText.trim()) {
        description.appendChild(paragraph);
      }

      const contentWrapper = document.createElement("div");
      contentWrapper.classList.add("lightbox-wrapper");
      contentWrapper.appendChild(enlargedImg);
      contentWrapper.appendChild(description);

      overlay.appendChild(contentWrapper);
      document.body.appendChild(overlay);

      overlay.addEventListener("click", () => {
        document.body.removeChild(overlay);
      });
    });
  });
});
