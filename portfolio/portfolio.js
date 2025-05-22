document.addEventListener("DOMContentLoaded", () => {
  const imageContainers = document.querySelectorAll(".image-container");

  imageContainers.forEach((container) => {
    const img = container.querySelector("img");
    if (!img) return;

    img.addEventListener("click", () => {
      const overlay = document.createElement("div");
      overlay.classList.add("img-overlay");

      const enlargedImg = document.createElement("img");
      enlargedImg.src = img.dataset.full || img.src;
      enlargedImg.alt = img.alt;
      enlargedImg.classList.add("enlarged-img");

      const descriptionText = img.dataset.description || img.alt;
      const firstSentenceMatch = descriptionText.match(/.*?[.?!](\s|$)/);
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

      // Find the link in the container
      const link = container.querySelector("a");
      if (link) {
        const lightboxLink = document.createElement("a");
        lightboxLink.href = link.href;
        lightboxLink.textContent = link.textContent;
        lightboxLink.target = "_blank";
        lightboxLink.classList.add("lightbox-link");
        description.appendChild(lightboxLink);
      }

      const contentWrapper = document.createElement("div");
      contentWrapper.classList.add("lightbox-wrapper");
      contentWrapper.appendChild(enlargedImg);
      contentWrapper.appendChild(description);

      overlay.appendChild(contentWrapper);
      document.body.appendChild(overlay);
      document.body.classList.add("no-scroll");

      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
          document.body.removeChild(overlay);
          document.body.classList.remove("no-scroll");
        }
      });
    });
  });

  // Game cursor functionality
  document.querySelectorAll('.games-section img').forEach(img => {
    img.addEventListener('mouseenter', () => {
      img.style.cursor = "url('./images/gameCursor.png'), auto";
    });
    img.addEventListener('mouseleave', () => {
      img.style.cursor = "auto";
    });
  });
});