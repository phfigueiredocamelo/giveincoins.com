/**
 * Renders the footer component
 */
export function footer() {
  return `
    <footer class="footer">
      <div class="container">
        <div class="footer-links">
          <a href="/privacy-policy" class="footer-link">Privacy Policy</a>
          <a href="/terms-of-use" class="footer-link">Terms of Use</a>
        </div>
        <p class="copyright">© ${new Date().getFullYear()} Give in Coins. All rights reserved.</p>
      </div>
    </footer>
  `;
}