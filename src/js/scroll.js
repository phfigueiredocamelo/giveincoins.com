/**
 * Sets up scroll effect for the header
 */
export function setupScrollEffect() {
  const header = document.querySelector('.header');
  
  // Function to check scroll position and add/remove class
  const checkScroll = () => {
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  
  // Initial check
  checkScroll();
  
  // Add scroll event listener
  window.addEventListener('scroll', checkScroll);
  
  // Add smooth scrolling for anchor links
  const navLinks = document.querySelectorAll('a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Skip if it's just "#"
      if (href === '#') return;
      
      e.preventDefault();
      
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Offset for header
          behavior: 'smooth'
        });
      }
    });
  });
}