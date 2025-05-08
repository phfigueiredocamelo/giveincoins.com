/**
 * Renders the header component
 */
export function header() {
  return `
    <header class="header">
      <div class="container">
        <a href="/">
        <div class="logo">
          <div class="logo-icon">
            <img src="/logo.png" alt="Give in Coins Logo">
          </div>
          GIVE IN COINS
        </div>
        </a>

        <nav class="nav">
          <ul class="nav-items">
            <li class="nav-item"><a href="/about" class="nav-link">About</a></li>
            <li class="nav-item"><a href="/#features" class="nav-link">Features</a></li>
            <li class="nav-item"><a href="/#how-it-works" class="nav-link">How it Works</a></li>
          </ul>
          <div class="nav-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M21 21L16.65 16.65" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="mobile-menu-toggle">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M3 6H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M3 18H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </nav>
      </div>
    </header>
  `;
}