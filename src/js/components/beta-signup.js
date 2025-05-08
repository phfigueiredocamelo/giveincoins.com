/**
 * Renders the beta signup section
 */
export function betaSignup() {
  return `
    <section class="beta-signup" id="get-started">
      <div class="container">
        <h2 class="section-title-beta-signup fade-in">Sign up for Beta</h2>
        <form action="https://formspree.io/f/meogadry" method="POST" class="beta-form" id="beta-form">
          <div class="form-group fade-in delay-1">
            <label for="email">Your email:</label>
            <input type="email" id="email" name="email" class="beta-input" placeholder="Enter your email to join beta" required>
          </div>
          <div class="form-group fade-in delay-2">
            <label for="message">Let us know:</label>
            <textarea id="message" name="message" class="beta-textarea" placeholder="Tell us why you're interested" required></textarea>
          </div>
          <button type="submit" class="btn beta-btn fade-in delay-3">Join Beta</button>
        </form>
      </div>
    </section>
  `;
}