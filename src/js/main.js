import { renderApp } from './app.js';
import { setupScrollEffect } from './scroll.js';
import { setupMobileMenu } from './mobile-menu.js';
import { setupBetaSignup } from './beta-signup.js';
import { setupAnimations } from './animations.js';

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  // Render the app
  renderApp();
  
  // Setup scroll effects
  setupScrollEffect();
  
  // Setup mobile menu
  setupMobileMenu();
  
  // Setup beta signup form
  setupBetaSignup();
  
  // Setup animations
  setupAnimations();
});