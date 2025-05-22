/**
 * Renders the how it works section
 */
export function howItWorks() {
  return `
    <section class="how-it-works" id="how-it-works">
      <div class="container">
        <h2 class="section-title-how-it-works fade-in">How it Works</h2>
        <div class="steps">
          <div class="step fade-in delay-1">
            <div class="step-icon">
              <img src="/showcase.png" alt="Showcase symbol">
              <div class="step-arrow">→</div>
            </div>
            <h3 class="step-title">Navigate through Showcase and/or access a project page link</h3>
          </div>
          <div class="step fade-in delay-1">
            <div class="step-icon">
              <img src="/verified2.png" alt="Verified Project symbol">
              <div class="step-arrow">→</div>
            </div>
            <h3 class="step-title">Choose the project you want to donate to. Make sure to check project's reputation and reviews</h3>
          </div>
          
          <div class="step fade-in delay-2">
            <div class="step-icon">
              <img src="/money.png" alt="Money symbol">
              <div class="step-arrow">→</div>
            </div>
            <h3 class="step-title">Enter an amount and select the payment method. You can choose between credit card, Pix, and more</h3>
          </div>
          
          <div class="step fade-in delay-3">
            <div class="step-icon">
              <img src="/sent2.png" alt="Paper plane symbol">
            </div>
            <h3 class="step-title">Crypto is sent to the project's wallet without interference (no custody)</h3>
          </div>

          <div class="step fade-in delay-3">
            <div class="step-icon">
              <img src="/investigate.png" alt="Investigate symbol">
            </div>
            <h3 class="step-title">Once a donor: Eventualy checks for project's uploaded proofs of donation usage by yourself</h3>
          </div>

          <div class="step fade-in delay-3">
            <div class="step-icon">
              <img src="/comment.png" alt="Comment symbol">
            </div>
            <h3 class="step-title">Once a donor: Interact with the project's posts and comments as you want</h3>
          </div>
        </div>
      </div>
    </section>
  `;
}