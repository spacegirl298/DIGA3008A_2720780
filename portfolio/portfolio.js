document.addEventListener("DOMContentLoaded", () => {
  const imageContainers = document.querySelectorAll(".image-container");
  let currentIndex = 0;
  let currentSectionImages = [];

  function showLightbox(index, sectionImages) {
    const img = sectionImages[index];
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

    const link = img.parentElement.querySelector("a");
    if (link) {
      const lightboxLink = document.createElement("a");
      lightboxLink.href = link.href;
      lightboxLink.textContent = link.textContent;
      lightboxLink.target = "_blank";
      lightboxLink.classList.add("lightbox-link");
      description.appendChild(lightboxLink);
    }

    // Navigation buttons
    const navButtons = document.createElement("div");
    navButtons.classList.add("lightbox-nav");

    const prevButton = document.createElement("button");
    prevButton.innerHTML = "&lt;";
    prevButton.classList.add("lightbox-nav-button", "lightbox-nav-prev");
    prevButton.addEventListener("click", (e) => {
      e.stopPropagation();
      const newIndex = (index - 1 + sectionImages.length) % sectionImages.length;
      document.body.removeChild(overlay);
      showLightbox(newIndex, sectionImages);
    });

    const nextButton = document.createElement("button");
    nextButton.innerHTML = "&gt;";
    nextButton.classList.add("lightbox-nav-button", "lightbox-nav-next");
    nextButton.addEventListener("click", (e) => {
      e.stopPropagation();
      const newIndex = (index + 1) % sectionImages.length;
      document.body.removeChild(overlay);
      showLightbox(newIndex, sectionImages);
    });

    navButtons.appendChild(prevButton);
    navButtons.appendChild(nextButton);

    const contentWrapper = document.createElement("div");
    contentWrapper.classList.add("lightbox-wrapper");
    contentWrapper.appendChild(enlargedImg);
    contentWrapper.appendChild(navButtons);
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

    // Keyboard navigation
    document.addEventListener("keydown", function handleKeyDown(e) {
      if (e.key === "ArrowLeft") {
        const newIndex = (index - 1 + sectionImages.length) % sectionImages.length;
        document.body.removeChild(overlay);
        showLightbox(newIndex, sectionImages);
      } else if (e.key === "ArrowRight") {
        const newIndex = (index + 1) % sectionImages.length;
        document.body.removeChild(overlay);
        showLightbox(newIndex, sectionImages);
      } else if (e.key === "Escape") {
        document.body.removeChild(overlay);
        document.body.classList.remove("no-scroll");
        document.removeEventListener("keydown", handleKeyDown);
      }
    });
  }

  imageContainers.forEach((container, index) => {
    const img = container.querySelector("img");
    if (!img) return;

    img.addEventListener("click", () => {
      const section = container.closest(".image-row");
      const sectionImages = Array.from(section.querySelectorAll(".image-container img"));
      const clickedIndex = sectionImages.indexOf(img);
      
      showLightbox(clickedIndex, sectionImages);
    });
  });

  // Cursor effect for games section
  document.querySelectorAll('.games-section img').forEach(img => {
    img.addEventListener('mouseenter', () => {
      img.style.cursor = "url('./images/gameCursor.png'), auto";
    });
    img.addEventListener('mouseleave', () => {
      img.style.cursor = "auto";
    });
  });
});