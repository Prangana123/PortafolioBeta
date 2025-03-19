// DOM Elements
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const toggleIcon = themeToggle.querySelector('i');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');
const animatedElements = document.querySelectorAll('.card, .skill-item, h2, .lead, .profile-image');
const contactForm = document.getElementById('contactForm');

// Add animation classes for scroll effects
animatedElements.forEach(element => {
  element.classList.add('animate-on-scroll');
});

// Check for saved theme preference or default to light
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
  toggleIcon.classList.replace('fa-moon', 'fa-sun');
}

// Theme toggle event listener
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  // Update icon
  if (body.classList.contains('dark-mode')) {
    toggleIcon.classList.replace('fa-moon', 'fa-sun');
    localStorage.setItem('theme', 'dark');
  } else {
    toggleIcon.classList.replace('fa-sun', 'fa-moon');
    localStorage.setItem('theme', 'light');
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Active link highlighting on scroll
function highlightActiveLink() {
  let current = '';
  let scrollPosition = window.pageYOffset + 100;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 90;
    const sectionHeight = section.clientHeight;
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });
