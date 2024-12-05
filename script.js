const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;



themeToggle.addEventListener('click', () => {
  const currentTheme = root.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  root.setAttribute('data-theme', newTheme);
  themeToggle.textContent =
    newTheme === 'light' ? '☀️' : '🌙';
});

const roles = [
  'Software QA Engineer💻',
  'Problem Solver⚙️',
  'Test Automation Enthusiast 🧑‍💻',
  'SE Undergraduate 🧑‍🎓',
];
let currentIndex = 0;

function typeEffect() {
  const typingElement = document.getElementById('typing');
  typingElement.textContent = roles[currentIndex];
  currentIndex = (currentIndex + 1) % roles.length;
}

// Change text every 3 seconds (match with CSS animation duration)
setInterval(typeEffect, 2500);
typeEffect(); // Initial call to set the first role

const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

// Toggle menu visibility when the hamburger button is clicked
menuBtn.addEventListener('click', (event) => {
  mobileMenu.classList.toggle('hidden');
  mobileMenu.classList.toggle('flex');
  event.stopPropagation(); // Prevent click event from propagating to the document
});

// Close the menu when clicking outside of it
document.addEventListener('click', (event) => {
  if (
    !mobileMenu.classList.contains('hidden') &&
    !mobileMenu.contains(event.target)
  ) {
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('flex');
  }
});

// ------- Up scroll button---------

// Get the button
const scrollUpButton = document.getElementById('scrollUp');

// Show the button when scrolling down
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    scrollUpButton.classList.remove('hidden');
  } else {
    scrollUpButton.classList.add('hidden');
  }
});

// Smooth scroll to top
scrollUpButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});


