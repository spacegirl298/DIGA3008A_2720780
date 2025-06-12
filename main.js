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

function setTimeBasedMode() {
  //gets South African time
  const now = new Date();
  const saTime = new Date(
    now.getTime() + (now.getTimezoneOffset() + 120) * 60000
  );
  const hours = saTime.getHours();

  //checks day time from 6 am to 6pm
  const isDayTime = hours >= 6 && hours < 18;

  if (isDayTime) {
    document.body.classList.add("light-mode");
  } else {
    document.body.classList.remove("light-mode");
  }
}
document.addEventListener("DOMContentLoaded", setTimeBasedMode);
setInterval(setTimeBasedMode, 60000);

function updateSAClock() {
  const options = {
    timeZone: "Africa/Johannesburg",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };

  const dateOptions = {
    timeZone: "Africa/Johannesburg",
    weekday: "short",
    day: "numeric",
    month: "short",
  };

  const now = new Date();

  try {
    const timeString = now.toLocaleTimeString("en-ZA", options);
    const dateString = now.toLocaleDateString("en-ZA", dateOptions);
    document.getElementById(
      "sa-clock"
    ).textContent = `${dateString} | ${timeString}`;
  } catch (e) {
    console.error("Error updating clock:", e);

    document.getElementById("sa-clock").textContent = now.toString();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  updateSAClock();

  setInterval(updateSAClock, 1000);
});
