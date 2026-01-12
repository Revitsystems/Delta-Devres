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

const form = document.getElementById("form");
const submitBtn = form.querySelector('button[type="submit"]');

/*=============================*/
/*=== FORM SUBMISSION LOGIC===*/
/*=============================*/

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  formData.append("access_key", "e7475b74-1436-470e-af7e-fb86d6737788");

  const originalText = submitBtn.textContent;

  submitBtn.textContent = "Sending...";
  submitBtn.disabled = true;

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (response.ok) {
      alert("Success! Your message has been sent.");
      form.reset();
    } else {
      alert("Error: " + data.message);
    }
  } catch (error) {
    alert("Something went wrong. Please try again.");
  } finally {
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }
});
