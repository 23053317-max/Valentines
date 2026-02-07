// 🔧 CHANGE THIS WHEN SHARING WITH HER
const TEST_MODE = true; // true = unlock all days for testing

function unlock(page, day) {

  if (TEST_MODE) {
    window.location.href = page;
    return;
  }

  const today = new Date();
  const month = today.getMonth() + 1; // Feb = 2
  const date = today.getDate();

  if (month === 2 && date >= day) {
    window.location.href = page;
  } else {
    alert("⏳ This day will unlock soon for you Ruchi 💖");
  }
}
function openMemories() {
  window.location.href = "memories.html";
}
// COUNTDOWN TIMER
const targetDate = new Date("Feb 14, 2026 00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const diff = targetDate - now;

  if (diff <= 0) {
    document.querySelectorAll(".countdown").forEach(el => {
      el.innerHTML = "💖 Happy Valentine’s Day 💖";
    });
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

  document.querySelectorAll(".countdown").forEach(el => {
    el.innerHTML = `⏳ ${days} days ${hours} hours till Valentine 💞`;
  });
}

setInterval(updateCountdown, 1000);
updateCountdown();

// FLOATING HEARTS
setInterval(() => {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "💗";
  heart.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}, 500);
const dayDates = {
  rose: "Feb 7, 2026 00:00:00",
  propose: "Feb 8, 2026 00:00:00",
  chocolate: "Feb 9, 2026 00:00:00",
  teddy: "Feb 10, 2026 00:00:00",
  promise: "Feb 11, 2026 00:00:00",
  hug: "Feb 12, 2026 00:00:00",
  kiss: "Feb 13, 2026 00:00:00",
  valentine: "Feb 14, 2026 00:00:00"
};

function updateCountdowns() {
  document.querySelectorAll(".countdown").forEach(el => {
    const day = el.dataset.day;
    if (!dayDates[day]) return;

    const target = new Date(dayDates[day]).getTime();
    const now = new Date().getTime();
    const diff = target - now;

    if (diff <= 0) {
      el.innerHTML = "💖 Today is our special day 💖";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

    el.innerHTML = `⏳ ${days} days ${hours} hours left 💞`;
  });
}

updateCountdowns();
setInterval(updateCountdowns, 1000);

/* FLOATING HEARTS */
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "💗";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 10 + 18 + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 600);

