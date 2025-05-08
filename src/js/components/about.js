/**
 * Renders the about page
 */
export function about() {
  return `
    <section class="about">
      <div class="container">
        <h1 class="page-title fade-in">About Give in Coins</h1>
        <div class="about-content fade-in delay-1">
          <p class="intro">Give in Coins is a platform that connects donors worldwide with verified social impact projects, enabling crypto donations using traditional payment methods like Pix, credit cards, and other local or global options.</p>
          
          <h2>Our Mission</h2>
          <p>We bridge the gap between fiat and crypto: donors pay in their local currency, choose the desired cryptocurrency, and the digital assets are sent directly to the project's wallet — with no custody or intermediaries involved.</p>
          
          <h2>What Sets Us Apart</h2>
          <p>Our key advantage lies in project curation and smart transaction orchestration. Each initiative undergoes editorial and technical review, including:</p>
          <ul>
            <li>KYC/KYB verification</li>
            <li>Impact validation</li>
            <li>On-chain risk checks to block wallets linked to fraud or sanctions</li>
            <li>Integration with multiple on-ramp providers</li>
            <li>Automatic selection of the best rates and lowest fees</li>
          </ul>
          
          <h2>Simple & Transparent Pricing</h2>
          <p>With a flat, transparent fee of just 10% (capped at U$8), Give in Coins offers the easiest, most accessible, and secure way to donate crypto — even if you don't own any.</p>
          
          <p class="tagline">Donating in crypto has never been easier.</p>
        </div>
      </div>
    </section>
  `;
} 