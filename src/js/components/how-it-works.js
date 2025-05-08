/**
 * Renders the how it works section
 */
export function howItWorks() {
  return `
    <section class="how-it-works" id="how-it-works">
      <div class="container">
        <h2 class="section-title-how-it-works fade-in">How It Works</h2>
        <div class="steps">
          <div class="step fade-in delay-1">
            <div class="step-icon">
              <img src="/verified.png" alt="Verified Project symbol">
              <div class="step-arrow">→</div>
            </div>
            <h3 class="step-title">Choose a project</h3>
          </div>
          
          <div class="step fade-in delay-2">
            <div class="step-icon">
              <img src="/invest.png" alt="Donate to a project symbol">
              <div class="step-arrow">→</div>
            </div>
            <h3 class="step-title">Enter an amount</h3>
          </div>
          
          <div class="step fade-in delay-3">
            <div class="step-icon">
              <img src="/sent.png" alt="Send crypto symbol">
            </div>
            <h3 class="step-title">Crypto is sent</h3>
          </div>
        </div>
      </div>
    </section>
  `;
}