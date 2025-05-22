/**
 * Renders the features section
 */
export function features() {
  return `
    <section class="features" id="features">
      <div class="container">
        <h2 class="section-title-features fade-in">Features</h2>
        <div class="features-grid">
          <div class="feature fade-in delay-3">
            <h3 class="feature-title">Donation</h3>
            <p class="feature-description">The platform supports donations in multiple ways, including credit card, Pix, and more. It uses a secure and transparent payment gateway that converts fiat (real money) to crypto and sends to the wallet without custody.</p>
          </div>
          

          <div class="feature fade-in delay-1">
            <h3 class="feature-title">Verified Projects</h3>
            <p class="feature-description">Editorial review, KYC/KYB verification and on-chain risk assessment to ensure the project is legitimate and safe to donate to.</p>
          </div>
          
          
          <div class="feature fade-in delay-2">
            <h3 class="feature-title">Verified Donations Usage</h3>
            <p class="feature-description">Automated validation of NF-e and NFS-e values and gives the opportunity to the donor to validate it too.</p>
          </div>
          
          <div class="feature fade-in delay-2">
            <h3 class="feature-title">Organic Ranking</h3>
            <p class="feature-description">Projects can earn highlights and badges to increase visibility by donor's positive interactions and proving donations usage.</p>
          </div>
          

          <div class="feature fade-in delay-3">
            <h3 class="feature-title">Showcase your projects</h3>
            <p class="feature-description">Aligned to Organic Ranking,Showcase exposes your projects to a wider audience, increasing visibility and donations.</p>
          </div>

          <div class="feature fade-in delay-3">
            <h3 class="feature-title">Personalized Project's Page</h3>
            <p class="feature-description">Each project has a personalized page that can be shared with donors to increase visibility and donations.</p>
          </div>
          
        </div>
      </div>
    </section>
  `;
}