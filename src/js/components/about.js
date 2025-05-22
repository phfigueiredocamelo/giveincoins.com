/**
 * Renders the about page
 */
export function about() {
  return `
    <section class="about">
      <div class="container">
        <h1 class="page-title fade-in">About Give in Coins</h1>
        <div class="about-content fade-in delay-1">
          <p class="intro">
          Give in Coins enables cryptocurrency donations to social projects by combining familiar payment methods (Pix, credit card, etc.) with on-chain security: once the fiat amount is confirmed, our integration with authorized on-ramp providers instantly converts it to crypto and sends the funds directly to the project’s wallet, with no custody on our platform.
          <br>
          <br>
          We leverage a dedicated on-chain API to retrieve real-time blockchain data—allowing us to periodically sample selected project wallets, assess risk scores, detect suspicious patterns, and take preventive action as needed—thereby ensuring transparency and reducing fraud at no extra cost.
          <br>
          <br>
          Our merit-based reputation system rewards projects that demonstrate the highest percentage of fund utilization and generate positive community engagement (likes and AI-validated comments) with public badges and prioritized placement in the showcase, reinforcing accountability and efficiency.
          <br>
          <br>
          On the showcase, each project maintains a dynamic profile with updates, expense proofs, photos, and videos, allowing donors to follow the real impact of their contributions and engage directly with the community, strengthening bonds and encouraging constructive feedback.
          <br>
          <br>
          In full compliance with LGPD, we employ end-to-end encryption, role-based access controls, and regular security audits to ensure responsible data handling and reinforce the platform’s credibility as a trusted channel for driving social impact.
          </p>
          
          <h2>Our Mission</h2>
          <p>
            Our mission is to empower donors and social projects with a transparent, secure platform that converts every contribution into on-chain impact—directly transferring crypto to project wallets without custody. We democratize blockchain verification by leveraging periodic risk-score analyses via our on-chain API, safeguarding fund integrity and reinforcing trust. By celebrating efficient resource use and authentic community engagement with merit-based visibility, we inspire projects to maintain accountability and excellence. Guided by LGPD-compliant data protection and role-based security, we ensure every donation translates into tangible, lasting social change.
          </p>
          
          <p class="tagline">Get involved with a social project. Donate Crypto.</p>
        </div>
      </div>
    </section>
  `;
} 