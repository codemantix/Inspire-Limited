import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Link from "next/link";
import styles from "./Terms.module.css";

export default function Terms() {
  return (
    <Layout>
      <SEO
        title="Terms of Service | Inspire Limited"
        description="Review the Terms of Service for Inspire Limited. These terms govern your use of our website and professional facility services in Nigeria."
        canonical="/terms"
      />

      <div className={styles.page}>
        <div className={styles.container}>
          <p className={styles.eyebrow}>Legal</p>
          <h1 className={styles.title}>Terms of Service</h1>
          <p className={styles.effectiveDate}>Effective Date: 1 April 2026</p>

          {/* 1 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>1. Introduction</h2>
            <div className={styles.body}>
              <p>
                These Terms of Service (&ldquo;Terms&rdquo;) constitute
                a legally binding agreement between you
                (&ldquo;Client,&rdquo; &ldquo;you,&rdquo; or
                &ldquo;your&rdquo;) and Inspire Limited
                (&ldquo;Inspire,&rdquo; &ldquo;we,&rdquo;
                &ldquo;us,&rdquo; or &ldquo;our&rdquo;), a professional
                facility services company registered in the Federal
                Republic of Nigeria.
              </p>
              <p>
                By accessing or using our website at{" "}
                <a
                  href="https://inspireservicesltd.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  inspireservicesltd.com
                </a>{" "}
                or by engaging any of our services — including outsourced
                cleaning personnel, commercial and industrial cleaning,
                residential cleaning, fumigation and pest control, and
                workforce development programmes — you agree to be bound
                by these Terms in their entirety. If you do not agree,
                please do not use our website or services.
              </p>
            </div>
          </section>

          <hr className={styles.divider} />

          {/* 2 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              2. Definitions
            </h2>
            <div className={styles.body}>
              <ul>
                <li>
                  <strong>&ldquo;Services&rdquo;</strong> means any
                  facility management, cleaning, pest control, personnel
                  outsourcing, or related service provided by Inspire
                  Limited under a written agreement.
                </li>
                <li>
                  <strong>&ldquo;Website&rdquo;</strong> means the
                  Inspire Limited website located at
                  inspireservicesltd.com and all its sub-pages.
                </li>
                <li>
                  <strong>&ldquo;Service Agreement&rdquo;</strong> means
                  the formal contract, proposal, or work order executed
                  between Inspire and the Client for a specific scope of
                  services.
                </li>
                <li>
                  <strong>&ldquo;Personnel&rdquo;</strong> means any
                  individual employed by, contracted by, or deployed
                  through Inspire Limited in the course of service
                  delivery.
                </li>
              </ul>
            </div>
          </section>

          <hr className={styles.divider} />

          {/* 3 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              3. Scope of Services
            </h2>
            <div className={styles.body}>
              <p>
                Inspire Limited provides the following professional
                facility services:
              </p>
              <ol>
                <li>
                  <strong>Outsourced Cleaning Personnel (BPO)</strong> —
                  recruitment, vetting, training, and deployment of
                  dedicated cleaning staff to client premises under
                  ongoing contracts with full supervision, HR
                  management, and performance reporting.
                </li>
                <li>
                  <strong>Commercial &amp; Industrial Cleaning</strong> —
                  scheduled and ad-hoc cleaning for offices, retail
                  spaces, warehouses, and industrial facilities.
                </li>
                <li>
                  <strong>Residential Cleaning</strong> — standard,
                  deep, and post-construction cleaning for private
                  residences.
                </li>
                <li>
                  <strong>Fumigation &amp; Pest Control</strong> —
                  integrated pest management for commercial and
                  residential properties.
                </li>
              </ol>
              <p>
                The specific scope, frequency, pricing, and terms for
                each engagement shall be detailed in a separate Service
                Agreement. In the event of a conflict between these
                Terms and a Service Agreement, the Service Agreement
                shall prevail to the extent of the conflict.
              </p>
            </div>
          </section>

          <hr className={styles.divider} />

          {/* 4 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              4. Service Agreements and Engagement
            </h2>
            <div className={styles.body}>
              <p>
                All service engagements require a signed Service
                Agreement before work commences. A Service Agreement
                will typically specify:
              </p>
              <ul>
                <li>
                  The nature and scope of services to be performed.
                </li>
                <li>Service schedule and duration.</li>
                <li>Pricing, payment terms, and invoicing frequency.</li>
                <li>
                  Personnel deployment details, including the number and
                  roles of assigned staff.
                </li>
                <li>
                  Quality standards, key performance indicators (KPIs),
                  and reporting obligations.
                </li>
                <li>
                  Termination provisions and notice periods.
                </li>
              </ul>
              <p>
                Submitting an enquiry or requesting a quote through our
                website does not constitute a binding agreement. A
                contractual relationship is formed only upon mutual
                execution of a Service Agreement.
              </p>
            </div>
          </section>

          <hr className={styles.divider} />

          {/* 5 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              5. Client Obligations
            </h2>
            <div className={styles.body}>
              <p>As a client of Inspire Limited, you agree to:</p>
              <ul>
                <li>
                  Provide safe and reasonable access to the premises
                  where services are to be performed.
                </li>
                <li>
                  Disclose any hazards, risks, or conditions that may
                  affect the health and safety of our personnel.
                </li>
                <li>
                  Provide accurate information necessary for us to
                  deliver the agreed services effectively.
                </li>
                <li>
                  Make payments in accordance with the invoicing
                  schedule set out in the Service Agreement.
                </li>
                <li>
                  Refrain from directly soliciting, hiring, or engaging
                  any Inspire personnel outside the terms of the Service
                  Agreement (see Section&nbsp;9).
                </li>
                <li>
                  Report any service quality concerns promptly so that
                  we can address them within the timeframes specified in
                  the Service Agreement.
                </li>
              </ul>
            </div>
          </section>

          <hr className={styles.divider} />

          {/* 6 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              6. Payment Terms
            </h2>
            <div className={styles.body}>
              <ul>
                <li>
                  All fees, rates, and payment schedules are specified
                  in the applicable Service Agreement.
                </li>
                <li>
                  Invoices are due and payable within the period stated
                  in the Service Agreement (typically fourteen (14) to
                  thirty (30) days from invoice date).
                </li>
                <li>
                  Late payments may attract interest at the rate of
                  2.5% per month on the outstanding balance, or such
                  other rate as specified in the Service Agreement.
                </li>
                <li>
                  Inspire reserves the right to suspend services where
                  payment is overdue by more than thirty (30) days,
                  upon giving seven (7) days&apos; written notice to the
                  Client.
                </li>
                <li>
                  All fees quoted are exclusive of applicable taxes
                  unless expressly stated otherwise.
                </li>
              </ul>
            </div>
          </section>

          <hr className={styles.divider} />

          {/* 7 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              7. Personnel and Workforce
            </h2>
            <div className={styles.body}>
              <p>
                All personnel deployed by Inspire remain employees or
                contractors of Inspire Limited at all times. The Client
                does not assume any employer obligations, including
                remuneration, benefits, tax withholding, or insurance,
                with respect to Inspire personnel.
              </p>
              <p>
                We handle all aspects of workforce management including:
              </p>
              <ul>
                <li>Recruitment, background checks, and vetting.</li>
                <li>
                  Training in accordance with our ISO-aligned standard
                  operating procedures.
                </li>
                <li>Supervision and performance monitoring.</li>
                <li>
                  Replacement of personnel within forty-eight (48) hours
                  in the event of absence, underperformance, or
                  separation.
                </li>
                <li>
                  Career development and transition support under our
                  workforce development model.
                </li>
              </ul>
            </div>
          </section>

          <hr className={styles.divider} />

          {/* 8 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              8. Health, Safety, and Compliance
            </h2>
            <div className={styles.body}>
              <p>
                Inspire Limited is committed to maintaining the highest
                standards of health, safety, and environmental
                compliance. We undertake to:
              </p>
              <ul>
                <li>
                  Ensure all personnel are trained on health and safety
                  protocols relevant to their assignments.
                </li>
                <li>
                  Provide appropriate personal protective equipment
                  (PPE) to our staff.
                </li>
                <li>
                  Use only approved, safe, and environmentally
                  responsible cleaning agents and pesticides.
                </li>
                <li>
                  Carry appropriate insurance coverage for workplace
                  incidents involving our personnel.
                </li>
              </ul>
              <p>
                The Client agrees to cooperate with our safety protocols
                and to ensure that working conditions at the service
                premises are not hazardous to our personnel.
              </p>
            </div>
          </section>

          <hr className={styles.divider} />

          {/* 9 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              9. Non-Solicitation
            </h2>
            <div className={styles.body}>
              <p>
                During the term of any Service Agreement and for a
                period of twelve (12) months following its termination
                or expiry, the Client agrees not to directly or
                indirectly solicit, recruit, employ, or engage any
                Inspire personnel who have been assigned to the
                Client&apos;s premises, without Inspire&apos;s prior
                written consent.
              </p>
              <p>
                In the event of a breach of this clause, the Client
                agrees to pay a recruitment fee equivalent to six (6)
                months of the affected personnel&apos;s gross salary as
                liquidated damages.
              </p>
            </div>
          </section>

          <hr className={styles.divider} />

          {/* 10 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              10. Intellectual Property
            </h2>
            <div className={styles.body}>
              <p>
                All content on the Inspire Limited website — including
                text, images, graphics, logos, icons, software, and
                design — is the property of Inspire Limited or its
                licensors and is protected by Nigerian copyright and
                intellectual property laws.
              </p>
              <p>
                You may not reproduce, distribute, modify, create
                derivative works from, publicly display, or exploit
                any content from this website without our prior written
                consent, except for personal, non-commercial use such
                as printing a page for your own reference.
              </p>
            </div>
          </section>

          <hr className={styles.divider} />

          {/* 11 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              11. Use of Website
            </h2>
            <div className={styles.body}>
              <p>
                You agree to use our website only for lawful purposes
                and in a manner that does not infringe the rights of, or
                restrict the use and enjoyment of the site by, any third
                party. You shall not:
              </p>
              <ul>
                <li>
                  Introduce any virus, malware, or other harmful
                  technology.
                </li>
                <li>
                  Attempt to gain unauthorised access to any part of
                  the website, server, or connected systems.
                </li>
                <li>
                  Use automated tools (bots, scrapers) to extract data
                  from the website without written permission.
                </li>
                <li>
                  Submit false, misleading, or fraudulent information
                  through any form on the website.
                </li>
              </ul>
              <p>
                We reserve the right to restrict or terminate access to
                the website for any user who violates these Terms.
              </p>
            </div>
          </section>

          <hr className={styles.divider} />

          {/* 12 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              12. Confidentiality
            </h2>
            <div className={styles.body}>
              <p>
                Both parties agree to keep confidential all proprietary,
                commercial, and operational information disclosed during
                the course of service delivery. This obligation survives
                the termination of any Service Agreement and applies
                regardless of the form in which information is
                disclosed.
              </p>
              <p>
                Confidential information does not include information
                that is publicly available, independently developed, or
                lawfully obtained from a third party not under a duty
                of confidentiality.
              </p>
            </div>
          </section>

          <hr className={styles.divider} />

          {/* 13 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              13. Limitation of Liability
            </h2>
            <div className={styles.body}>
              <p>
                To the maximum extent permitted by Nigerian law:
              </p>
              <ul>
                <li>
                  Inspire Limited shall not be liable for any indirect,
                  incidental, special, consequential, or punitive
                  damages arising out of or in connection with the use
                  of our website or services.
                </li>
                <li>
                  Our total liability for any claim arising under a
                  Service Agreement shall not exceed the total fees paid
                  by the Client under that agreement in the twelve (12)
                  months preceding the event giving rise to the claim.
                </li>
                <li>
                  We are not liable for delays or failures in service
                  delivery caused by events beyond our reasonable
                  control (see Section&nbsp;14).
                </li>
              </ul>
              <p>
                Nothing in these Terms excludes or limits liability for
                death or personal injury caused by negligence, fraud, or
                any other liability that cannot be excluded under
                applicable law.
              </p>
            </div>
          </section>

          <hr className={styles.divider} />

          {/* 14 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              14. Force Majeure
            </h2>
            <div className={styles.body}>
              <p>
                Neither party shall be liable for failure or delay in
                performing its obligations under these Terms or any
                Service Agreement where such failure or delay results
                from circumstances beyond the reasonable control of that
                party, including but not limited to: natural disasters,
                epidemic or pandemic, civil unrest, acts of government,
                war, terrorism, labour disputes, power outages, or
                failure of telecommunications infrastructure.
              </p>
              <p>
                The affected party shall give prompt notice and shall
                use reasonable efforts to mitigate the impact of the
                force majeure event.
              </p>
            </div>
          </section>

          <hr className={styles.divider} />

          {/* 15 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              15. Termination
            </h2>
            <div className={styles.body}>
              <p>
                Termination of service engagements shall be governed by
                the applicable Service Agreement. In the absence of
                specific termination provisions:
              </p>
              <ul>
                <li>
                  Either party may terminate a recurring service by
                  giving thirty (30) days&apos; written notice.
                </li>
                <li>
                  Inspire may terminate or suspend services immediately
                  if the Client breaches any material term and fails to
                  remedy the breach within fourteen (14) days of
                  receiving written notice.
                </li>
                <li>
                  Upon termination, the Client shall pay all
                  outstanding fees for services rendered up to the date
                  of termination.
                </li>
              </ul>
            </div>
          </section>

          <hr className={styles.divider} />

          {/* 16 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              16. Indemnification
            </h2>
            <div className={styles.body}>
              <p>
                The Client agrees to indemnify and hold harmless Inspire
                Limited, its directors, officers, employees, and agents
                from and against any claims, liabilities, damages,
                losses, or expenses (including reasonable legal fees)
                arising from:
              </p>
              <ul>
                <li>The Client&apos;s breach of these Terms.</li>
                <li>
                  The Client&apos;s negligence or wilful misconduct.
                </li>
                <li>
                  Any hazard or risk at the Client&apos;s premises that
                  was not disclosed to Inspire.
                </li>
              </ul>
            </div>
          </section>

          <hr className={styles.divider} />

          {/* 17 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              17. Dispute Resolution
            </h2>
            <div className={styles.body}>
              <p>
                In the event of any dispute arising out of or in
                connection with these Terms or any Service Agreement:
              </p>
              <ol>
                <li>
                  The parties shall first attempt to resolve the
                  dispute amicably through good-faith negotiations
                  within thirty (30) days of written notice.
                </li>
                <li>
                  If the dispute is not resolved through negotiation,
                  the parties agree to submit the matter to mediation
                  under the rules of the Lagos Court of Arbitration.
                </li>
                <li>
                  If mediation is unsuccessful, either party may
                  commence proceedings before the courts of the Federal
                  Republic of Nigeria, which shall have exclusive
                  jurisdiction.
                </li>
              </ol>
            </div>
          </section>

          <hr className={styles.divider} />

          {/* 18 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              18. Governing Law
            </h2>
            <div className={styles.body}>
              <p>
                These Terms shall be governed by and construed in
                accordance with the laws of the Federal Republic of
                Nigeria. Any legal action or proceeding shall be brought
                exclusively in the courts located in Lagos State,
                Nigeria.
              </p>
            </div>
          </section>

          <hr className={styles.divider} />

          {/* 19 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              19. Amendments
            </h2>
            <div className={styles.body}>
              <p>
                Inspire Limited reserves the right to update or amend
                these Terms at any time. Material changes will be posted
                on this page with a revised &ldquo;Effective
                Date.&rdquo; Continued use of our website or services
                following any changes constitutes acceptance of the
                revised Terms.
              </p>
            </div>
          </section>

          <hr className={styles.divider} />

          {/* 20 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              20. Severability
            </h2>
            <div className={styles.body}>
              <p>
                If any provision of these Terms is found to be invalid,
                illegal, or unenforceable by a court of competent
                jurisdiction, the remaining provisions shall continue
                in full force and effect.
              </p>
            </div>
          </section>

          <hr className={styles.divider} />

          {/* 21 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              21. Entire Agreement
            </h2>
            <div className={styles.body}>
              <p>
                These Terms, together with any executed Service
                Agreement and our{" "}
                <Link href="/privacy">Privacy Policy</Link>, constitute
                the entire agreement between your organisation and
                Inspire Limited regarding the subject matter herein and
                supersede all prior representations, understandings, or
                agreements.
              </p>
            </div>
          </section>

          <hr className={styles.divider} />

          {/* 22 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>22. Contact Us</h2>
            <div className={styles.body}>
              <p>
                For questions regarding these Terms, please contact us:
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
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
