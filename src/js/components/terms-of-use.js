/**
 * Renders the terms of use page
 */
export function termsOfUse() {
  return `
    <section class="terms-of-use">
      <div class="container">
        <h1 class="page-title fade-in">Terms of Use - Give in Coins</h1>
        <div class="terms-content fade-in delay-1">
          <p class="last-updated"><strong>Version 1.2 &ndash; Last updated:</strong> May 22, 2025</p>
          <p class="data-controller"><strong>Maintained by:</strong> Sangue Dev (CNPJ 50.556.215/0001-61)</p>

          <h2>1. Acceptance of Terms</h2>
          <p>By accessing or using the Give in Coins platform, you agree to these Terms of Use and our Privacy Policy. If you do not agree, please do not use the platform.</p>

          <h2>2. Platform Overview</h2>
          <p>
            Give in Coins is a secure, transparent platform that empowers donors to support social projects with cryptocurrency via familiar payment methods (Pix, credit card, bank transfer). 
            After fiat payment, authorized on-ramp providers instantly convert funds to crypto and send them directly to project wallets—no custody by the platform. 
            We integrate a dedicated on-chain API to perform periodic risk-score analyses on selected wallets, detecting suspicious patterns and ensuring integrity at no extra cost. 
            Projects earn merit-based visibility by demonstrating efficient fund utilization and generating positive community engagement (AI-validated likes and comments), which translates into public badges and prioritized showcase placement. 
            The dynamic project profiles feature updates, expense proofs, photos, and videos, enabling donors to follow impact in real time and interact directly with beneficiaries. 
            Fully LGPD-compliant, we employ end-to-end encryption, role-based access controls, and regular security audits to protect personal data and reinforce trust, ensuring every donation delivers lasting social change.
          </p>

          <h2>3. Registration and Verification (KYC/KYB)</h2>
          <h3>3.1 User Registration</h3>
          <ul>
            <li>Personal data and identity documents (KYC)</li>
            <li>Business data, if applicable (KYB)</li>
            <li>Selfie or proof of life</li>
            <li>Valid email address</li>
            <li>Valid ongoing social project</li>
            <li>Valid institutional crypto-wallet address</li>
            <li>Valid social media accounts (optional but recommended)</li>
            <li>Acceptance of Terms of Use and Privacy Policy</li>
          </ul>
          <h3>3.2 Document Acceptance Policy</h3>
          <p>We accept documents in  brazilian Portuguese. Documents in other languages and from sanctioned or high-risk jurisdictions are not accepted.</p>

          <h2>4. How it works</h2>
          <h3>4.1 Donation Process</h3>
          <ul>
            <li>Select a verified project</li>
            <li>Specify the donation amount and desired cryptocurrency</li>
            <li>Make payment in local currency via an integrated provider</li>
            <li>Crypto assets are sent directly to the project's wallet (no custody by Give in Coins)</li>
          </ul>
          <h3>4.2 Fund Usage (Validation Process)</h3>
          <ul>
            <li>Projects can post and upload NF-e and NFS-e documents to the platform</li>
            <li>Documents are checked for validity and authenticity by the platform</li>
            <li>Documents that pass automated checks will be displayed on the project's page and documents that fail will be displayed but with a warning</li>
            <li>Users/donors can see the documents and validate the usage of the funds by themselves</li>
            <li>Amounts of fully validated documents (platform and donors) counts to the project's total validated amount and increase the project's rank position</li>
          </ul>
          <h3>4.3 Donor Engagement</h3>
          <ul>
            <li>Donors can comment on the project's posts. Comments are moderated by the platform with IA tools or human moderators to prevent spam and offensive content. Valid negative comments are allowed but it must affect the project's rank position.
            Valid positive comments are allowed and promotes the project rank position</li>
            <li>Donors can like the project's posts. Likes can also promote the project rank position</li>
            <li>Donors can share the project's posts. Share counts as a like and promotes the project rank position</li>
            <li>Donors can report posts and/or projects. Reports are reviewed by the platform and action is taken if necessary. If the report is valid, the post or project will be blocked from the platform immediately</li>
          </ul>

          <h2>5. Fees</h2>
          <ul>
            <li>Donation transactions do not incur additional fees</li>
          </ul>

          <h2>6. Responsibilities and Limitations</h2>
         
          <h3>6.1 Projects</h3>
          <p>
            All projects undergo curation, identity verification, and on-chain risk analysis. 
            We are not responsible for how beneficiary projects use the donated funds but we promote transparency and accountability by providing the necessary tools to the donors <strong>after automated checks</strong> on NF-e and NFS-e uploaded into the platform.
          </p>
          
          <h3>6.2 Payment Providers</h3>
          <p>We facilitate the user experience by redirecting to the on-ramp platform so the conversion and transfer of crypto assets are the responsibility of the selected on-ramp provider.</p>
          
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
