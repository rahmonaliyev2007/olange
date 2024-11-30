const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 5) { 
    navbar.classList.add('scrolled'); 


  } else {
    navbar.classList.remove('scrolled');
  }
});

function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}