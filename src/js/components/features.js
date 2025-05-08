/**
 * Renders the features section
 */
export function features() {
  return `
    <section class="features" id="features">
      <div class="container">
        <h2 class="section-title-features fade-in">Features</h2>
        <div class="features-grid">
          <div class="feature fade-in delay-1">
            <div class="feature-icon">
              <img src="/verified.png" alt="Verified Project symbol">
            </div>
            <h3 class="feature-title">Verified Projects</h3>
            <p class="feature-description">Editorial review, KYC/KYB verification and on-chain risk assessment.</p>
          </div>
          
          <div class="feature fade-in delay-2">
            <div class="feature-icon">
              <img src="/branch.png" alt="Smart Orchestration symbol">
            </div>
            <h3 class="feature-title">Smart Orchestration</h3>
            <p class="feature-description">Automatically select the best provider based on rates, fees, availability and risk.</p>
          </div>
          
          <div class="feature fade-in delay-3">
            <div class="feature-icon">
              <img src="/creditcard.png" alt="Credit Card symbol">
            </div>
            <h3 class="feature-title">Global Payments</h3>
            <p class="feature-description">Support local methods like Pix, bank transfer, credit card and more.</p>
          </div>
        </div>
      </div>
    </section>
  `;
}