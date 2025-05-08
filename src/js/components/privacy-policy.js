/**
 * Renders the privacy policy page
 */
export function privacyPolicy() {
  return `
    <section class="privacy-policy">
      <div class="container">
        <h1 class="page-title fade-in">Privacy Policy - Give in Coins</h1>
        <div class="policy-content fade-in delay-1">
          <p class="last-updated"><strong>Version 1.1 &ndash; Last updated:</strong> May 5, 2025</p>
          <p class="data-controller"><strong>Data Controller:</strong> Sangue Dev (CNPJ 50.556.215/0001-61)</p>

          <p>Give in Coins values the privacy of its users and operates transparently in handling personal data. This Privacy Policy describes how we collect, use, share, and protect your personal data, including during identity verification (KYC) and business verification (KYB) processes, in accordance with applicable laws and regulations.</p>

          <h2>1. Personal Data Collected</h2>
          <h3>1.1 Personal Identification Data</h3>
          <ul>
            <li>Full name, identity document (ID card, driver’s license, passport), nationality, date of birth, address, selfie (proof of life)</li>
          </ul>
          <h3>1.2 Business Identification Data (KYB)</h3>
          <ul>
            <li>Company name, registration number (e.g. CNPJ, EIN, VAT ID), articles of association or equivalent, legal representative and their ID, company address, institutional crypto-wallet address</li>
          </ul>
          <h3>1.3 Technical Data</h3>
          <ul>
            <li>IP address, approximate location, browser, operating system, device type, access and transaction logs</li>
          </ul>

          <h2>2. Use of Data</h2>
          <ul>
            <li>Ensure transaction security</li>
            <li>Fulfill legal, regulatory, and tax obligations (KYC, anti-money laundering, sanctions screening)</li>
            <li>Conduct identity and business verification (KYC/KYB)</li>
            <li>Prevent fraud, financial crimes, and illicit activity</li>
            <li>Personalize user experience and improve platform functionality</li>
            <li>Communicate donation status, updates, and marketing messages (with opt-out option)</li>
            <li>Perform audits, statistical analysis, and reporting</li>
          </ul>

          <h2>3. Document Acceptance Policy (KYC/KYB)</h2>
          <ul>
            <li><strong>Languages Accepted Without Restriction:</strong> Portuguese, English, Spanish.</li>
            <li><strong>Languages Requiring Official Translation or Third-Party Verification:</strong> Documents in other languages must be accompanied by a sworn translation into English or Portuguese. Examples include Arabic, Mandarin, Japanese, Korean, Russian, Hindi, Thai, Vietnamese, Greek, Hebrew, and other non-Latin alphabets.</li>
            <li><strong>Restricted Jurisdictions:</strong> Documents issued by countries under international sanctions (e.g. North Korea, Iran, Syria), high-risk jurisdictions according to FATF/GAFI (e.g. Myanmar, South Sudan), or without a reliable issuing authority will not be accepted.</li>
            <li><strong>Accepted Documents:</strong>
              <ul>
                <li><em>Individuals:</em> Passport, government-issued photo ID, driver’s license with readable data</li>
                <li><em>Businesses:</em> Company registration document (CNPJ, EIN, VAT ID), articles of association or equivalent, proof of address, proof of institutional crypto-wallet ownership</li>
              </ul>
            </li>
          </ul>

          <h2>4. Data Sharing</h2>
          <ul>
            <li>On-ramp/off-ramp providers (Transak, Onramper, Bit2Me, and similar)</li>
            <li>KYC/KYB and risk analysis partners</li>
            <li>Authorities and regulators, when required by law</li>
            <li>Other third parties only when necessary for service provision or with explicit user consent</li>
          </ul>

          <h2>5. Data Retention</h2>
          <ul>
            <li>Transaction and accounting data: retained for the period required by tax law (at least 5 years)</li>
            <li>Browsing and cookie data: retained as needed for specific purposes (up to 12 months unless longer retention is required)</li>
            <li>KYC/KYB data: retained in accordance with applicable regulatory requirements</li>
          </ul>

          <h2>6. Security</h2>
          <ul>
            <li>Encryption in transit and at rest</li>
            <li>Role-based access control (RBAC)</li>
            <li>Continuous monitoring and security audits</li>
          </ul>

          <h2>7. Data Subject Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Confirm the existence of data processing</li>
            <li>Access and correct your personal data</li>
            <li>Request anonymization, blocking, or deletion of your data</li>
            <li>Object to processing and withdraw consent at any time</li>
          </ul>
          <p>To exercise your rights, please contact us at <a href="mailto:paulo@sanguedev.com">paulo@sanguedev.com</a>.</p>

          <h2>8. Contact</h2>
          <p>If you have any questions or concerns regarding this policy, contact us at:</p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:paulo@sanguedev.com">paulo@sanguedev.com</a></li>
          </ul>
        </div>
      </div>
    </section>
  `;
}