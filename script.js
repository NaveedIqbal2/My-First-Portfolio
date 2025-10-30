// Back to Top Button for Naveed Iqbal Portfolio

// Create the button element
const backToTopBtn = document.createElement('button');
backToTopBtn.innerText = '↑ Top';
backToTopBtn.id = 'backToTop';

// Style the button
backToTopBtn.style.position = 'fixed';
backToTopBtn.style.bottom = '30px';
backToTopBtn.style.right = '30px';
backToTopBtn.style.padding = '10px 15px';
backToTopBtn.style.backgroundColor = '#0077ff';
backToTopBtn.style.color = 'white';
backToTopBtn.style.border = 'none';
backToTopBtn.style.borderRadius = '8px';
backToTopBtn.style.cursor = 'pointer';
backToTopBtn.style.fontSize = '16px';
backToTopBtn.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
backToTopBtn.style.transition = '0.3s ease';
backToTopBtn.style.display = 'none';
backToTopBtn.style.zIndex = '1000';

document.body.appendChild(backToTopBtn);

// Show button when user scrolls down 300px
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

// Smooth scroll to top on click
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Optional hover effect
backToTopBtn.addEventListener('mouseenter', () => {
  backToTopBtn.style.backgroundColor = '#005fcc';
});
backToTopBtn.addEventListener('mouseleave', () => {
  backToTopBtn.style.backgroundColor = '#0077ff';
});
