document.addEventListener("DOMContentLoaded", function () {
  const backToTopBtn = document.getElementById("backToTopBtn");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });

  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
window.addEventListener("load", () => {
  const hash = window.location.hash;
  if (hash) {
    const target = document.querySelector(hash);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth" });
      }, 100); 
    }
  }
});

function toggleImagesForLightMode(isLightMode) {
  const imagesToToggle = [
    { selector: '.active img', lightSrc: './homeImages/activeImgLight.png', darkSrc: './homeImages/activeImg.png' },
    { selector: '.navline', lightSrc: './homeImages/navBarLight.png', darkSrc: './homeImages/navBar.png' },
    { selector: '.footerline', lightSrc: './homeImages/footerBarLight.png', darkSrc: './homeImages/footerBar.png' },
    { selector: '.vcard img', lightSrc: './homeImages/titleLight.png', darkSrc: './homeImages/title.png' },
    // Add more images as needed
  ];

  imagesToToggle.forEach(img => {
    const element = document.querySelector(img.selector);
    if (element) {
      element.src = isLightMode ? img.lightSrc : img.darkSrc;
    }
  });
}


function setTimeBasedMode() {
  //gets South African time
  const now = new Date();
  const saTime = new Date(now.getTime() + (now.getTimezoneOffset() + 120) * 60000);
  const hours = saTime.getHours();

//checks day time from 6 am to 6pm
  const isDayTime = hours >= 6 && hours < 18;

  if (isDayTime) {
    document.body.classList.add('light-mode');
  } else {
    document.body.classList.remove('light-mode');
  }
}
document.addEventListener('DOMContentLoaded', setTimeBasedMode);
setInterval(setTimeBasedMode, 60000);

