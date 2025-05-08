/**
 * Sets up mobile menu functionality
 */
export function setupMobileMenu() {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('.nav-items');
  const links = document.querySelectorAll('.nav-link');
  let isMenuOpen = false;
  
  // Create mobile menu
  const mobileMenu = document.createElement('div');
  mobileMenu.className = 'mobile-menu';
  mobileMenu.innerHTML = `
    <ul class="mobile-nav-items">
      <li class="mobile-nav-item"><a href="/about" class="mobile-nav-link">About</a></li>
      <li class="mobile-nav-item"><a href="#features" class="mobile-nav-link">Features</a></li>
      <li class="mobile-nav-item"><a href="#how-it-works" class="mobile-nav-link">How it Works</a></li>
    </ul>
  `;
  
  // Add styles for mobile menu
  const style = document.createElement('style');
  style.textContent = `
    .mobile-menu {
      position: fixed;
      top: 80px;
      right: -100%;
      width: 80%;
      max-width: 300px;
      height: calc(100vh - 80px);
      background-color: rgba(255, 179, 0, 0.95);
      backdrop-filter: blur(8px);
      z-index: 99;
      transition: right 0.3s ease;
      box-shadow: -5px 0 15px rgba(255, 179, 0, 0.1);
    }
    
    .mobile-menu.open {
      right: 0;
    }
    
    .mobile-nav-items {
      list-style: none;
      padding: 2rem;
    }
    
    .mobile-nav-item {
      margin-bottom: 1.5rem;
    }
    
    .mobile-nav-link {
      font-size: 1.25rem;
      font-weight: 500;
      color: white;
      text-decoration: none;
      display: block;
      padding: 0.5rem 0;
      transition: color 0.2s ease;
    }
    
    .mobile-nav-link:hover {
      color: #E94E4E;
    }
    
    body.menu-open {
      overflow: hidden;
    }
  `;
  
  document.head.appendChild(style);
  document.body.appendChild(mobileMenu);
  
  // Toggle menu
  toggle.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    
    if (isMenuOpen) {
      mobileMenu.classList.add('open');
      document.body.classList.add('menu-open');
    } else {
      mobileMenu.classList.remove('open');
      document.body.classList.remove('menu-open');
    }
  });
  
  // Close menu when clicking a link
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      document.body.classList.remove('menu-open');
      isMenuOpen = false;
    });
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (isMenuOpen && !mobileMenu.contains(e.target) && !toggle.contains(e.target)) {
      mobileMenu.classList.remove('open');
      document.body.classList.remove('menu-open');
      isMenuOpen = false;
    }
  });
}