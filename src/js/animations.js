/**
 * Sets up animations for the page
 */
export function setupAnimations() {
  // Check if IntersectionObserver is supported
  if ('IntersectionObserver' in window) {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const appearOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px'
    };
    
    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, appearOptions);
    
    // Initial setup for fade elements
    fadeElements.forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(30px)';
      element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      appearOnScroll.observe(element);
    });
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    });
  }
}