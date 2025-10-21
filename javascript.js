const words = ["Học sinh", "Giáo viên", "Phụ huynh", "mọi người."];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const el = document.getElementById("typewriter");

function type() {
  const current = words[wordIndex];

  if (isDeleting) {
    el.textContent = current.substring(0, charIndex - 1);
    charIndex--;
  } else {
    el.textContent = current.substring(0, charIndex + 1);
    charIndex++;
  }

  let typeSpeed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === current.length) {
    typeSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    typeSpeed = 500;
  }

  setTimeout(type, typeSpeed);
}

type();

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  toggleButton.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    // Toggle the icon between "bars" and "xmark"
    const icon = toggleButton.querySelector("i");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");
  });
});
