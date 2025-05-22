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
function toggleDrawer() {
  const drawer = document.getElementById('drawerOverlay');
  const toggleButton = document.getElementById('drawerToggle');
  
  drawer.classList.toggle('open');
  
  if (drawer.classList.contains('open')) {
    toggleButton.innerHTML = '◀';
  } else {
    toggleButton.innerHTML = '▶';
  }
}


function toggleDrawer() {
  const drawer = document.getElementById('drawerOverlay');
  drawer.classList.toggle('open');
 
}

document.addEventListener('click', function(event) {
  const drawer = document.getElementById('drawerOverlay');
  const toggleButton = document.getElementById('drawerToggle');
  
  if (!drawer.contains(event.target) && event.target !== toggleButton) {
    drawer.classList.remove('open');
  }
});







