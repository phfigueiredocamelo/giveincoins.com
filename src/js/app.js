import { header } from './components/header.js';
import { hero } from './components/hero.js';
import { features } from './components/features.js';
import { howItWorks } from './components/how-it-works.js';
import { betaSignup } from './components/beta-signup.js';
import { footer } from './components/footer.js';
import { privacyPolicy } from './components/privacy-policy.js';
import { termsOfUse } from './components/terms-of-use.js';
import { about } from './components/about.js';
/**
 * Renders the entire application
 */
export function renderApp() {
  const app = document.getElementById('app');
  const path = window.location.pathname;
  console.log(path);
  // Always render header
  app.innerHTML = header();
  
  // Render content based on path
  if (path === '/privacy-policy') {
    app.innerHTML += `
      <main>
        ${privacyPolicy()}
      </main>
    `;
  } else if (path === '/terms-of-use') {
    app.innerHTML += `
      <main>
        ${termsOfUse()}
      </main>
    `;
  } else if (path === '/about') {
    app.innerHTML += `
      <main>
        ${about()}
      </main>
    `;
  } else {
    app.innerHTML += `
      <main>
        ${hero()}
        ${features()}
        ${howItWorks()}
        ${betaSignup()}
      </main>
    `;
  }
  
  // Always render footer
  app.innerHTML += footer();
}