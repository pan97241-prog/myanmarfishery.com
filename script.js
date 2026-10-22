// script.js - vanilla interactions for Myanmar Open Golf site

document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('site-header');
  const hamburger = document.getElementById('hamburger');
  const navList = document.querySelector('.nav-list');

  // Toggle sticky header background on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Hamburger menu toggle for mobile
  hamburger.addEventListener('click', () => {
    navList.classList.toggle('show');
    // Update aria-expanded for accessibility
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', (!expanded).toString());
  });

  // Close mobile menu when a link is clicked
  navList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (navList.classList.contains('show')) {
        navList.classList.remove('show');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  });
});
