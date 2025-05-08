/**
 * Renders the terms of use page
 */
export function termsOfUse() {
  return `
    <section class="terms-of-use">
      <div class="container">
        <h1 class="page-title fade-in">Terms of Use - Give in Coins</h1>
        <div class="terms-content fade-in delay-1">
          <p class="last-updated"><strong>Version 1.1 &ndash; Last updated:</strong> May 5, 2025</p>
          <p class="data-controller"><strong>Maintained by:</strong> Sangue Dev (CNPJ 50.556.215/0001-61)</p>

          <h2>1. Acceptance of Terms</h2>
          <p>By accessing or using the Give in Coins platform, you agree to these Terms of Use and our Privacy Policy. If you do not agree, please do not use the platform.</p>

          <h2>2. Platform Overview</h2>
          <p>Give in Coins enables cryptocurrency donations to verified projects using traditional payment methods such as Pix, credit card, and bank transfers. The conversion from fiat currency to crypto assets is performed by third-party on-ramp providers, directly between the user and the provider.</p>

          <h2>3. Registration and Verification (KYC/KYB)</h2>
          <h3>3.1 User Registration</h3>
          <ul>
            <li>Personal data and identity documents (KYC)</li>
            <li>Business data, if applicable (KYB)</li>
            <li>Selfie or proof of life</li>
            <li>Valid email address</li>
          </ul>
          <h3>3.2 Document Acceptance Policy</h3>
          <p>We accept documents in Portuguese, English, Spanish, French (standardized official documents), and German (national and corporate standard documents). Documents in other languages require a sworn translation into English or Portuguese. Documents from sanctioned or high-risk jurisdictions are not accepted.</p>

          <h2>4. Donation Process</h2>
          <ul>
            <li>Select a verified project</li>
            <li>Specify the donation amount and desired cryptocurrency</li>
            <li>Make payment in local currency via an integrated provider</li>
            <li>The platform selects the best on-ramp provider</li>
            <li>Crypto assets are sent directly to the project's wallet (no custody by Give in Coins)</li>
          </ul>

          <h2>5. Fees</h2>
          <ul>
            <li>Fixed platform fee of 10%, capped at U$8 per transaction</li>
            <li>On-ramp providers may charge additional fees, disclosed before payment completion</li>
          </ul>

          <h2>6. Responsibilities and Limitations</h2>
          <h3>6.1 Projects</h3>
          <p>All projects undergo curation, identity verification, and on-chain risk analysis. We are not responsible for how beneficiary projects use the donated funds.</p>
          <h3>6.2 Payment Providers</h3>
          <p>We facilitate the user experience and orchestrate providers; conversion and transfer of crypto assets are the responsibility of the selected on-ramp provider.</p>
          <h3>6.3 Users</h3>
          <p>Users must provide accurate information and comply with local cryptocurrency laws. Illegal or fraudulent use will result in immediate account suspension and reporting to authorities.</p>

          <h2>7. Sanctions and Restrictions</h2>
          <p>We do not serve users, entities, or projects in countries under international sanctions or listed by the UN, FATF, OFAC, or EU. Attempted circumvention of these rules may be tracked and reported.</p>

          <h2>8. Account Termination</h2>
          <p>Users may request account termination at any time. We may retain records for up to 5 years for legal and regulatory purposes.</p>

          <h2>9. Changes to Terms</h2>
          <p>These Terms may be updated periodically. Significant changes will be communicated via email or site notice. Continued use implies acceptance of the updated Terms.</p>

          <h2>10. Governing Law and Jurisdiction</h2>
          <p>These Terms are governed by the laws of the Federative Republic of Brazil. Disputes will be resolved in the courts of São Paulo, SP, unless otherwise required by law.</p>

          <h2>11. Contact</h2>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:paulo@sanguedev.com">paulo@sanguedev.com</a></li>
            <li><strong>Address:</strong> Sangue Dev (CNPJ 50.556.215/0001-61)</li>
          </ul>
        </div>
      </div>
    </section>
  `;
}
