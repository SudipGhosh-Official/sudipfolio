let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

// Toggle Menu

menuIcon.onclick = () => {
  menuIcon.classList.toggle("active");
  navbar.classList.toggle("active");
};

// Scroll Sections Active Link

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");

        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  // Sticky Navbar

  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  // Auto close navbar on scroll

  menuIcon.classList.remove("active");
  navbar.classList.remove("active");
};

// Close Menu When Clicking Nav Links

navLinks.forEach((link) => {
  link.onclick = () => {
    menuIcon.classList.remove("active");
    navbar.classList.remove("active");
  };
});

// Close Menu When Clicking Outside

document.addEventListener("click", (e) => {
  if (
    !menuIcon.contains(e.target) &&
    !navbar.contains(e.target)
  ) {
    menuIcon.classList.remove("active");
    navbar.classList.remove("active");
  }
});





// IMAGE POPUP

const popupLinks = document.querySelectorAll(".project-popup");
const imagePopup = document.getElementById("imagePopup");
const popupImage = document.getElementById("popupImage");
const closeBtn = document.querySelector(".close-btn");

// OPEN POPUP

popupLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const imageSrc = link.getAttribute("data-img");

    popupImage.src = imageSrc;

    imagePopup.classList.add("active");

    // SHOW CLOSE BUTTON
    closeBtn.style.display = "block";

    // PREVENT BODY SCROLL
    document.body.style.overflow = "hidden";
  });
});

// CLOSE POPUP BUTTON

closeBtn.addEventListener("click", () => {
  imagePopup.classList.remove("active");

  // HIDE CLOSE BUTTON
  closeBtn.style.display = "none";

  // ENABLE BODY SCROLL
  document.body.style.overflow = "auto";
});

// CLOSE WHEN CLICKING OUTSIDE IMAGE

imagePopup.addEventListener("click", (e) => {
  if (e.target !== popupImage) {
    imagePopup.classList.remove("active");

    closeBtn.style.display = "none";

    document.body.style.overflow = "auto";
  }
});




 // scroll reveal

ScrollReveal({
  // reset: true,
  distance: '60px',
  duration: 2000,
  delay: 300
});


ScrollReveal().reveal('.home-content, .heading .tech-text h3', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img, .tech-text p', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });



 // typed js
 const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Website Designer', 'React Developer', 'Web Application Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1500,
    loop: true
 });
  
