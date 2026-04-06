import Layout from "../components/Layout";
import SEO from "../components/SEO";
import styles from "./Privacy.module.css";

export default function Privacy() {
  return (
    <Layout>
      <SEO
        title="Privacy Policy | Inspire Limited"
        description="Read the Privacy Policy for Inspire Limited. Learn how we collect, use, and protect your personal information when you use our facility services and website."
        canonical="/privacy"
      />

      <div className={styles.page}>
        <div className={styles.container}>
          <p className={styles.eyebrow}>Legal</p>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.effectiveDate}>Effective Date: 1 April 2026</p>

          {/* 1 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>1. Introduction</h2>
            <div className={styles.body}>
              <p>
                Inspire Limited (&ldquo;Inspire,&rdquo; &ldquo;we,&rdquo;
                &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is a professional
                facility services company registered and operating in
                the Federal Republic of Nigeria. We provide outsourced
                cleaning personnel, commercial and industrial cleaning,
                residential cleaning, fumigation and pest control, and
                related workforce development services.
              </p>
              <p>
                This Privacy Policy explains how we collect, use, store,
                share, and protect your personal information when you
                visit our website at{" "}
                <a
                  href="https://inspireservicesltd.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  inspireservicesltd.com
                </a>
                , use our services, submit enquiries, apply for
                employment, or otherwise interact with us. By accessing
                our website or engaging our services, you acknowledge
                that you have read and understood this Privacy Policy.
              </p>
            </div>
          </section>

          <hr className={styles.divider} />

          {/* 2 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              2. Information We Collect
            </h2>
            <div className={styles.body}>
              <p>
                We may collect and process the following categories of
                personal information:
              </p>

              <p><strong>a) Information You Provide Directly</strong></p>
              <ul>
                <li>
                  Full name, email address, phone number, and company
                  name when you submit our contact or quote-request
                  forms.
                </li>
                <li>
                  Curriculum vitae, employment history, educational
                  qualifications, and references when you apply for a
                  position through our career page.
                </li>
                <li>
                  Billing and payment details necessary to process
                  service contracts.
                </li>
                <li>
                  Any additional information you voluntarily include in
                  messages, emails, or telephone calls with our team.
                </li>
              </ul>

              <p><strong>b) Information Collected Automatically</strong></p>
              <ul>
                <li>
                  Device and browser type, operating system, IP address,
                  and general geographic location.
                </li>
                <li>
                  Pages visited, time spent on each page, referring URL,
                  and click-stream data.
                </li>
                <li>
                  Cookies and similar tracking technologies (see
                  Section&nbsp;6 below).
                </li>
              </ul>

              <p><strong>c) Information from Third Parties</strong></p>
              <ul>
                <li>
                  Background-check and identity-verification data
                  obtained (with consent) during our workforce
                  recruitment process.
                </li>
                <li>
                  Client-provided data necessary for service delivery,
                  such as site access credentials and facility
                  specifications.
                </li>
              </ul>
            </div>
          </section>

          <hr className={styles.divider} />

          {/* 3 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              3. How We Use Your Information
            </h2>
            <div className={styles.body}>
              <p>
                We process personal information only for lawful purposes
                directly related to our business operations, including:
              </p>
              <ul>
                <li>
                  Responding to service enquiries and preparing
                  customised proposals.
                </li>
                <li>
                  Executing and managing service contracts, invoicing,
                  and payment processing.
                </li>
                <li>
                  Recruiting, vetting, training, and managing our
                  workforce.
                </li>
                <li>
                  Complying with health, safety, and environmental
                  regulations applicable to our operations.
                </li>
                <li>
                  Sending service updates, operational notifications, and
                  (where consented) marketing communications.
                </li>
                <li>
                  Improving our website, services, and customer
                  experience through analytics.
                </li>
                <li>
                  Meeting legal and regulatory obligations under
                  Nigerian law.
                </li>
              </ul>
            </div>
          </section>

          <hr className={styles.divider} />

          {/* 4 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              4. Legal Basis for Processing
            </h2>
            <div className={styles.body}>
              <p>
                In accordance with the Nigeria Data Protection Act 2023
                (NDPA) and the Nigeria Data Protection Regulation (NDPR),
                we rely on the following legal bases:
              </p>
              <ul>
                <li>
                  <strong>Consent</strong> — where you have given clear
                  consent for us to process your personal data for a
                  specific purpose.
                </li>
                <li>
                  <strong>Contractual necessity</strong> — where
                  processing is required to perform a contract with you
                  or to take pre-contractual steps at your request.
                </li>
                <li>
                  <strong>Legitimate interest</strong> — where processing
                  is necessary for our legitimate business interests,
                  provided those interests are not overridden by your
                  rights.
                </li>
                <li>
                  <strong>Legal obligation</strong> — where processing is
                  required to comply with a legal or regulatory
                  obligation.
                </li>
              </ul>
            </div>
          </section>

          <hr className={styles.divider} />

          {/* 5 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              5. Sharing and Disclosure
            </h2>
            <div className={styles.body}>
              <p>
                We do not sell or rent your personal information. We may
                share data with:
              </p>
              <ul>
                <li>
                  <strong>Service partners and subcontractors</strong>{" "}
                  engaged to assist in service delivery, who are
                  contractually bound to protect your information.
                </li>
                <li>
                  <strong>Professional advisors</strong> such as
                  auditors, lawyers, and insurers where reasonably
                  necessary.
                </li>
                <li>
                  <strong>Regulatory and law-enforcement authorities</strong>{" "}
                  when required by law, court order, or to protect our
                  legal rights.
                </li>
                <li>
                  <strong>Technology providers</strong> who host our
                  website and business systems, under appropriate data
                  processing agreements.
                </li>
              </ul>
              <p>
                Where any data transfer occurs outside Nigeria, we
                ensure adequate safeguards are in place in compliance
                with the NDPA.
              </p>
            </div>
          </section>

          <hr className={styles.divider} />

          {/* 6 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              6. Cookies and Tracking Technologies
            </h2>
            <div className={styles.body}>
              <p>
                Our website uses cookies and similar technologies to
                enhance your browsing experience, analyse site traffic,
                and understand visitor behaviour. These include:
              </p>
              <ul>
                <li>
                  <strong>Essential cookies</strong> — required for the
                  website to function correctly.
                </li>
                <li>
                  <strong>Analytics cookies</strong> — help us understand
                  how visitors interact with the site so we can improve
                  content and performance.
                </li>
              </ul>
              <p>
                You may control or disable cookies via your browser
                settings. Disabling essential cookies may impair certain
                website functionality.
              </p>
            </div>
          </section>

          <hr className={styles.divider} />

          {/* 7 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              7. Data Retention
            </h2>
            <div className={styles.body}>
              <p>
                We retain personal data only for as long as necessary to
                fulfil the purposes for which it was collected, or as
                required by law. Specifically:
              </p>
              <ul>
                <li>
                  Client and contract records are retained for a minimum
                  of six (6) years after the end of the contract, in
                  line with Nigerian commercial and tax regulations.
                </li>
                <li>
                  Employment and recruitment records are retained in
                  accordance with applicable labour laws.
                </li>
                <li>
                  Website analytics data is retained in anonymised form
                  and does not personally identify you.
                </li>
              </ul>
              <p>
                When data is no longer required, it is securely deleted
                or anonymised.
              </p>
            </div>
          </section>

          <hr className={styles.divider} />

          {/* 8 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>8. Your Rights</h2>
            <div className={styles.body}>
              <p>
                Under the Nigeria Data Protection Act 2023, you have the
                right to:
              </p>
              <ul>
                <li>
                  <strong>Access</strong> — request a copy of the
                  personal data we hold about you.
                </li>
                <li>
                  <strong>Rectification</strong> — request correction of
                  inaccurate or incomplete data.
                </li>
                <li>
                  <strong>Erasure</strong> — request deletion of your
                  data where there is no compelling reason for continued
                  processing.
                </li>
                <li>
                  <strong>Restriction</strong> — request that we limit
                  how we use your data in certain circumstances.
                </li>
                <li>
                  <strong>Data portability</strong> — receive your data
                  in a structured, commonly used format.
                </li>
                <li>
                  <strong>Objection</strong> — object to processing
                  based on legitimate interest or for direct-marketing
                  purposes.
                </li>
                <li>
                  <strong>Withdraw consent</strong> — where processing is
                  based on consent, withdraw it at any time without
                  affecting the lawfulness of prior processing.
                </li>
              </ul>
              <p>
                To exercise any of these rights, please contact us using
                the details in Section&nbsp;11 below. We will respond
                within thirty (30) days of receiving your request.
              </p>
            </div>
          </section>

          <hr className={styles.divider} />

          {/* 9 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>9. Data Security</h2>
            <div className={styles.body}>
              <p>
                We implement appropriate technical and organisational
                measures to protect personal data against unauthorised
                access, alteration, disclosure, or destruction. These
                measures include, but are not limited to:
              </p>
              <ul>
                <li>Encryption of data in transit and at rest.</li>
                <li>
                  Role-based access controls limiting data access to
                  authorised personnel only.
                </li>
                <li>
                  Regular security assessments and staff awareness
                  training.
                </li>
                <li>
                  Secure disposal of physical and digital records when
                  no longer needed.
                </li>
              </ul>
              <p>
                While we strive to protect your personal information,
                no method of transmission or storage is completely
                secure. We encourage you to take reasonable precautions
                when sharing information online.
              </p>
            </div>
          </section>

          <hr className={styles.divider} />

          {/* 10 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              10. Children&rsquo;s Privacy
            </h2>
            <div className={styles.body}>
              <p>
                Our services and website are not directed at individuals
                under the age of eighteen (18). We do not knowingly
                collect personal data from children. If we become aware
                that we have inadvertently collected such data, we will
                take prompt steps to delete it.
              </p>
            </div>
          </section>

          <hr className={styles.divider} />

          {/* 11 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              11. Contact Us
            </h2>
            <div className={styles.body}>
              <p>
                If you have questions, concerns, or requests regarding
                this Privacy Policy or how we handle your personal data,
                please contact us:
              </p>
              <ul>
                <li>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:hello@inspireservicesltd.com">
                    hello@inspireservicesltd.com
                  </a>
                </li>
                <li>
                  <strong>Phone:</strong>{" "}
                  <a href="tel:+2349132736772">(+234) 913 273 6772</a>
                </li>
                <li>
                  <strong>Address:</strong> Lagos, Nigeria
                </li>
              </ul>
              <p>
                You also have the right to lodge a complaint with the
                Nigeria Data Protection Commission (NDPC) if you believe
                your data protection rights have been violated.
              </p>
            </div>
          </section>

          <hr className={styles.divider} />

          {/* 12 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              12. Changes to This Policy
            </h2>
            <div className={styles.body}>
              <p>
                We may update this Privacy Policy from time to time to
                reflect changes in our operations, legal requirements,
                or best practices. Any material changes will be posted
                on this page with a revised &ldquo;Effective
                Date.&rdquo; We encourage you to review this page
                periodically.
              </p>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
