function openProjectNav() {
  document.getElementById("projectPageSidebar").classList.add("active");
}

function closeProjectNav() {
  document.getElementById("projectPageSidebar").classList.remove("active");
}

function getStarted() {
  window.location.href = "/contact.html";
}

function aboutUs() {
  window.location.href = "/about.html";
}

const navbar = document.getElementById("navbar");
const scrollPoint = 200; // Change color after scrolling 200px

window.addEventListener("scroll", () => {
  const screenWidth = window.innerWidth;

  if (window.scrollY > scrollPoint && screenWidth > 800) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
