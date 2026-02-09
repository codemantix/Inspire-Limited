import Layout from "../components/Layout";
import styles from "./Services.module.css";

export default function Services() {
  return (
    <Layout>
      <section className={styles.section}>
        <div className={`${styles.container} ${styles.sectionStack}`}>
          <p className={styles.eyebrow}>Our Services</p>
          <h1 className={styles.displayTitle}>Structured facility and environmental services.</h1>
          <p className={styles.bodyText}>
            We provide structured facility and environmental services designed to meet
            operational needs while ensuring quality, safety, and reliability.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`${styles.container} ${styles.splitGrid}`}>
          <div className={styles.sectionStack}>
            <p className={styles.eyebrow}>BPO Cleaning Personnel</p>
            <h2 className={`${styles.displayTitle} ${styles.displayTitleSm}`}>Outsourced Cleaning Personnel (BPO)</h2>
            <p className={styles.bodyText}>
              We provide trained, vetted, and supervised cleaning personnel for organizations
              that want to outsource recruitment and workforce management. Our team handles
              recruitment, training, deployment, supervision, and replacement to ensure service
              continuity and consistent performance.
            </p>
            <p className={styles.subtleText}>Ideal for offices, banks, institutions, and large facilities.</p>
          </div>
          <form className={`${styles.cardSurface} ${styles.formStack}`}>
            <div className={styles.formGridTwo}>
              <div>
                <label className={styles.label}>Full Name</label>
                <input type="text" className={`${styles.inputField} ${styles.fieldSpacing}`} placeholder="Full name" />
              </div>
              <div>
                <label className={styles.label}>Phone Number</label>
                <input type="tel" className={`${styles.inputField} ${styles.fieldSpacing}`} placeholder="+234" />
              </div>
            </div>
            <div className={styles.formGridTwo}>
              <div>
                <label className={styles.label}>Email Address</label>
                <input type="email" className={`${styles.inputField} ${styles.fieldSpacing}`} placeholder="you@email.com" />
              </div>
              <div>
                <label className={styles.label}>Organization Name</label>
                <input type="text" className={`${styles.inputField} ${styles.fieldSpacing}`} placeholder="Organization" />
              </div>
            </div>
            <div className={styles.formGridTwo}>
              <div>
                <label className={styles.label}>Organization Type</label>
                <select className={`${styles.inputField} ${styles.fieldSpacing}`}>
                  <option>Individual</option>
                  <option>Company</option>
                  <option>Institution</option>
                  <option>Property Manager</option>
                  <option>Developer</option>
                </select>
              </div>
              <div>
                <label className={styles.label}>Service Location</label>
                <input type="text" className={`${styles.inputField} ${styles.fieldSpacing}`} placeholder="City / State" />
              </div>
            </div>
            <div className={styles.formGridTwo}>
              <div>
                <label className={styles.label}>Cleaners Needed</label>
                <input type="number" className={`${styles.inputField} ${styles.fieldSpacing}`} placeholder="Number of cleaners" />
              </div>
              <div>
                <label className={styles.label}>Preferred Contact</label>
                <select className={`${styles.inputField} ${styles.fieldSpacing}`}>
                  <option>Phone Call</option>
                  <option>WhatsApp</option>
                  <option>Email</option>
                </select>
              </div>
            </div>
            <div>
              <label className={styles.label}>Urgency Level</label>
              <select className={`${styles.inputField} ${styles.fieldSpacing}`}>
                <option>Immediate (24 to 48 hours)</option>
                <option>Short Term (1 to 2 weeks)</option>
                <option>Planning Stage (1 to 3 months)</option>
              </select>
            </div>
            <button type="submit" className={styles.primaryButton}>
              Request Service
            </button>
          </form>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`${styles.container} ${styles.blockStack}`}>
          <div className={styles.sectionStack}>
            <p className={styles.eyebrow}>Commercial and Industrial Cleaning</p>
            <h2 className={`${styles.displayTitle} ${styles.displayTitleSm}`}>Commercial and Industrial Facility Cleaning</h2>
            <p className={styles.bodyText}>
              We deliver professional cleaning services for offices, financial institutions,
              industrial sites, and public facilities. Services are tailored to each site's
              usage, risk profile, and operational requirements, with clear quality checks
              and reporting.
            </p>
          </div>
          <form className={`${styles.cardSurface} ${styles.formStackLg}`}>
            <div className={styles.formGridTwo}>
              <div>
                <label className={styles.label}>Full Name</label>
                <input type="text" className={`${styles.inputField} ${styles.fieldSpacing}`} />
              </div>
              <div>
                <label className={styles.label}>Company / Organization</label>
                <input type="text" className={`${styles.inputField} ${styles.fieldSpacing}`} />
              </div>
              <div>
                <label className={styles.label}>Email Address</label>
                <input type="email" className={`${styles.inputField} ${styles.fieldSpacing}`} />
              </div>
              <div>
                <label className={styles.label}>Phone Number</label>
                <input type="tel" className={`${styles.inputField} ${styles.fieldSpacing}`} />
              </div>
            </div>

            <div className={styles.formGridTwo}>
              <div>
                <label className={styles.label}>Facility Address</label>
                <textarea className={`${styles.inputField} ${styles.textareaField} ${styles.fieldSpacing}`} />
              </div>
              <div className={styles.sectionStack}>
                <div>
                  <label className={styles.label}>City</label>
                  <select className={`${styles.inputField} ${styles.fieldSpacing}`}>
                    <option>Lagos</option>
                    <option>Abuja</option>
                    <option>Port Harcourt</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className={styles.label}>Preferred Contact</label>
                  <select className={`${styles.inputField} ${styles.fieldSpacing}`}>
                    <option>Phone</option>
                    <option>Email</option>
                    <option>WhatsApp</option>
                  </select>
                </div>
              </div>
            </div>

            <div className={styles.formGridTwo}>
              <div>
                <label className={styles.label}>Type of Facility</label>
                <select className={`${styles.inputField} ${styles.fieldSpacing}`}>
                  <option>Office Building / Corporate Headquarters</option>
                  <option>Bank / Financial Institution</option>
                  <option>Industrial / Manufacturing Site</option>
                  <option>Warehouse / Logistics Facility</option>
                  <option>Hospital / Healthcare Facility</option>
                  <option>School / Institutional Building</option>
                  <option>Public Facility (Government or Community Center)</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className={styles.label}>Size of Facility</label>
                <select className={`${styles.inputField} ${styles.fieldSpacing}`}>
                  <option>Under 500 sqm</option>
                  <option>500 to 1,000 sqm</option>
                  <option>1,000 to 2,500 sqm</option>
                  <option>Above 2,500 sqm</option>
                </select>
              </div>
            </div>

            <div>
              <label className={styles.label}>Service Type Required</label>
              <select className={`${styles.inputField} ${styles.fieldSpacing}`} multiple>
                <option>General Routine Cleaning</option>
                <option>Deep Cleaning and Disinfection</option>
                <option>Post-Construction / Renovation Cleaning</option>
                <option>Industrial Floor and Equipment Cleaning</option>
                <option>Window / Facade Cleaning</option>
                <option>Restroom and Waste Management Services</option>
                <option>Janitorial / Day Porter Services</option>
              </select>
            </div>

            <div className={styles.formGridTwo}>
              <div>
                <label className={styles.label}>Cleaning Frequency</label>
                <select className={`${styles.inputField} ${styles.fieldSpacing}`}>
                  <option>One-Time Service</option>
                  <option>Daily (Full-time Onsite Team)</option>
                  <option>2 to 3 Times per Week</option>
                  <option>Weekly / Bi-Weekly</option>
                  <option>Monthly</option>
                  <option>Customized Schedule</option>
                </select>
              </div>
              <div>
                <label className={styles.label}>Service Timing Preference</label>
                <select className={`${styles.inputField} ${styles.fieldSpacing}`}>
                  <option>Regular Business Hours</option>
                  <option>After Hours / Night Cleaning</option>
                  <option>Weekends Only</option>
                  <option>Flexible / To Be Agreed</option>
                </select>
              </div>
            </div>

            <div>
              <label className={styles.label}>Additional Information</label>
              <textarea
                className={`${styles.inputField} ${styles.textareaTall} ${styles.fieldSpacing}`}
                placeholder="Special requirements, risk conditions, or compliance standards"
              />
            </div>

            <div className={styles.formGridTwo}>
              <div>
                <label className={styles.label}>Requested Start Date</label>
                <input type="date" className={`${styles.inputField} ${styles.fieldSpacing}`} />
              </div>
              <div>
                <label className={styles.label}>Urgency Level</label>
                <select className={`${styles.inputField} ${styles.fieldSpacing}`}>
                  <option>Within 1 week</option>
                  <option>Within 1 month</option>
                  <option>Flexible Timeline</option>
                </select>
              </div>
            </div>

            <div>
              <label className={styles.label}>Attachment Upload</label>
              <input type="file" className={`${styles.inputField} ${styles.fieldSpacing}`} />
            </div>

            <label className={styles.checkboxRow}>
              <input type="checkbox" className={styles.checkboxInput} />
              I confirm that the details provided are accurate and authorize contact for a site
              inspection or quotation.
            </label>

            <button type="submit" className={styles.primaryButton}>
              Request Cleaning Quote
            </button>
          </form>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`${styles.container} ${styles.blockStack}`}>
          <div className={styles.sectionStack}>
            <p className={styles.eyebrow}>Residential Cleaning</p>
            <h2 className={`${styles.displayTitle} ${styles.displayTitleSm}`}>Residential Cleaning Services</h2>
            <p className={styles.bodyText}>
              We provide reliable cleaning services for homes, estates, and managed residential
              properties. Our teams are vetted, supervised, and trained to deliver discreet,
              high-quality service with attention to detail.
            </p>
          </div>
          <form className={`${styles.cardSurface} ${styles.formStackLg}`}>
            <div className={styles.formGridTwo}>
              <div>
                <label className={styles.label}>Full Name</label>
                <input type="text" className={`${styles.inputField} ${styles.fieldSpacing}`} />
              </div>
              <div>
                <label className={styles.label}>Phone Number</label>
                <input type="tel" className={`${styles.inputField} ${styles.fieldSpacing}`} />
              </div>
              <div>
                <label className={styles.label}>Email Address</label>
                <input type="email" className={`${styles.inputField} ${styles.fieldSpacing}`} />
              </div>
              <div>
                <label className={styles.label}>Preferred Contact</label>
                <select className={`${styles.inputField} ${styles.fieldSpacing}`}>
                  <option>WhatsApp</option>
                  <option>Phone</option>
                  <option>Email</option>
                </select>
              </div>
            </div>

            <div className={styles.formGridTwo}>
              <div>
                <label className={styles.label}>Residential Type</label>
                <select className={`${styles.inputField} ${styles.fieldSpacing}`}>
                  <option>Apartment / Flat</option>
                  <option>Duplex / House</option>
                  <option>Terrace / Townhouse</option>
                  <option>Estate Unit / Managed Property</option>
                  <option>Short-let / Airbnb Property</option>
                </select>
              </div>
              <div>
                <label className={styles.label}>Number of Bedrooms</label>
                <select className={`${styles.inputField} ${styles.fieldSpacing}`}>
                  <option>Studio / 1 Bedroom</option>
                  <option>2 Bedrooms</option>
                  <option>3 Bedrooms</option>
                  <option>4+ Bedrooms</option>
                </select>
              </div>
            </div>

            <div className={styles.formGridTwo}>
              <div>
                <label className={styles.label}>Property Location</label>
                <input type="text" className={`${styles.inputField} ${styles.fieldSpacing}`} />
              </div>
              <div>
                <label className={styles.label}>City</label>
                <select className={`${styles.inputField} ${styles.fieldSpacing}`}>
                  <option>Lagos</option>
                  <option>Abuja</option>
                  <option>Port Harcourt</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className={styles.label}>Type of Service Required</label>
              <select className={`${styles.inputField} ${styles.fieldSpacing}`} multiple>
                <option>Regular Cleaning (General housekeeping)</option>
                <option>Deep Cleaning (Thorough wall-to-wall)</option>
                <option>Move-In / Move-Out Cleaning</option>
                <option>Post-Renovation Cleaning</option>
                <option>After-Event Cleaning</option>
                <option>Disinfection and Sanitization</option>
                <option>Upholstery / Carpet / Mattress Cleaning</option>
              </select>
            </div>

            <div className={styles.formGridTwo}>
              <div>
                <label className={styles.label}>Preferred Frequency</label>
                <select className={`${styles.inputField} ${styles.fieldSpacing}`}>
                  <option>One-Time Cleaning</option>
                  <option>Weekly Schedule</option>
                  <option>Bi-Weekly Schedule</option>
                  <option>Monthly Subscription</option>
                  <option>Customized Frequency</option>
                </select>
              </div>
              <div>
                <label className={styles.label}>Preferred Timing</label>
                <select className={`${styles.inputField} ${styles.fieldSpacing}`}>
                  <option>Morning (8 AM to 12 PM)</option>
                  <option>Afternoon (12 PM to 4 PM)</option>
                  <option>Evening (4 PM to 8 PM)</option>
                  <option>Flexible / To Be Agreed</option>
                </select>
              </div>
            </div>

            <div className={styles.formGridTwo}>
              <div>
                <label className={styles.label}>Will someone be home?</label>
                <select className={`${styles.inputField} ${styles.fieldSpacing}`}>
                  <option>Yes</option>
                  <option>No, someone will grant access</option>
                  <option>Access via estate/security</option>
                </select>
              </div>
              <div>
                <label className={styles.label}>Preferred Cleaning Date</label>
                <input type="date" className={`${styles.inputField} ${styles.fieldSpacing}`} />
              </div>
            </div>

            <div>
              <label className={styles.label}>Special Instructions</label>
              <textarea
                className={`${styles.inputField} ${styles.textareaTall} ${styles.fieldSpacing}`}
                placeholder="Areas of focus or special requirements"
              />
            </div>

            <div className={styles.formGridTwo}>
              <div>
                <label className={styles.label}>Urgency Level</label>
                <select className={`${styles.inputField} ${styles.fieldSpacing}`}>
                  <option>Within 48 hours</option>
                  <option>Within 1 week</option>
                  <option>Within 1 month</option>
                  <option>Flexible</option>
                </select>
              </div>
              <div>
                <label className={styles.label}>Optional Upload</label>
                <input type="file" className={`${styles.inputField} ${styles.fieldSpacing}`} />
              </div>
            </div>

            <label className={styles.checkboxRow}>
              <input type="checkbox" className={styles.checkboxInput} />
              I confirm the details above are accurate and authorize contact to finalize
              quotation or scheduling.
            </label>

            <button type="submit" className={styles.primaryButton}>
              Request Residential Cleaning Quote
            </button>
          </form>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`${styles.container} ${styles.blockStack}`}>
          <div className={styles.sectionStack}>
            <p className={styles.eyebrow}>Fumigation and Pest Control</p>
            <h2 className={`${styles.displayTitle} ${styles.displayTitleSm}`}>Fumigation and Pest Control</h2>
            <p className={styles.bodyText}>
              End-to-end fumigation and pest control services for residential, commercial, and
              industrial environments. Services are delivered by trained professionals using
              approved methods and equipment, with service reports and preventive programs.
            </p>
          </div>
          <form className={`${styles.cardSurface} ${styles.formStackLg}`}>
            <div className={styles.formGridTwo}>
              <div>
                <label className={styles.label}>Full Name</label>
                <input type="text" className={`${styles.inputField} ${styles.fieldSpacing}`} />
              </div>
              <div>
                <label className={styles.label}>Company / Organization</label>
                <input type="text" className={`${styles.inputField} ${styles.fieldSpacing}`} />
              </div>
              <div>
                <label className={styles.label}>Phone Number</label>
                <input type="tel" className={`${styles.inputField} ${styles.fieldSpacing}`} />
              </div>
              <div>
                <label className={styles.label}>Email Address</label>
                <input type="email" className={`${styles.inputField} ${styles.fieldSpacing}`} />
              </div>
            </div>

            <div className={styles.formGridTwo}>
              <div>
                <label className={styles.label}>Property Address</label>
                <input type="text" className={`${styles.inputField} ${styles.fieldSpacing}`} />
              </div>
              <div>
                <label className={styles.label}>City / Area</label>
                <select className={`${styles.inputField} ${styles.fieldSpacing}`}>
                  <option>Lagos</option>
                  <option>Abuja</option>
                  <option>Port Harcourt</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className={styles.label}>Property Type</label>
              <select className={`${styles.inputField} ${styles.fieldSpacing}`}>
                <option>Residential Apartment / House</option>
                <option>Estate / Managed Property</option>
                <option>Commercial Office / Bank</option>
                <option>Industrial / Warehouse Facility</option>
                <option>School / Healthcare Facility</option>
                <option>Public Facility / Other</option>
              </select>
            </div>

            <div>
              <label className={styles.label}>Type of Pest or Issue</label>
              <select className={`${styles.inputField} ${styles.fieldSpacing}`} multiple>
                <option>Cockroaches</option>
                <option>Mosquitoes</option>
                <option>Termites</option>
                <option>Rodents (Rats, Mice)</option>
                <option>Ants</option>
                <option>Bed Bugs</option>
                <option>Lizards / Reptiles</option>
                <option>Snakes</option>
                <option>General Pest Control / Preventive Fumigation</option>
              </select>
            </div>

            <div className={styles.formGridTwo}>
              <div>
                <label className={styles.label}>Service Type</label>
                <select className={`${styles.inputField} ${styles.fieldSpacing}`}>
                  <option>One-Time Fumigation</option>
                  <option>Routine Pest Control (Monthly or Bi-Monthly)</option>
                  <option>Preventive Maintenance Program</option>
                  <option>Emergency Call-Out Service</option>
                </select>
              </div>
              <div>
                <label className={styles.label}>Estimated Area / Size</label>
                <select className={`${styles.inputField} ${styles.fieldSpacing}`}>
                  <option>Under 500 sqm</option>
                  <option>500 to 1,000 sqm</option>
                  <option>1,000 to 2,500 sqm</option>
                  <option>Above 2,500 sqm</option>
                </select>
              </div>
            </div>

            <div className={styles.formGridThree}>
              <div>
                <label className={styles.label}>Preferred Service Date</label>
                <input type="date" className={`${styles.inputField} ${styles.fieldSpacing}`} />
              </div>
              <div>
                <label className={styles.label}>Service Timing</label>
                <select className={`${styles.inputField} ${styles.fieldSpacing}`}>
                  <option>Morning</option>
                  <option>Afternoon</option>
                  <option>Evening</option>
                  <option>Flexible</option>
                </select>
              </div>
              <div>
                <label className={styles.label}>Access Type</label>
                <select className={`${styles.inputField} ${styles.fieldSpacing}`}>
                  <option>Someone Will Be Available</option>
                  <option>Security / Facility Access</option>
                  <option>Key or Code Access</option>
                </select>
              </div>
            </div>

            <div>
              <label className={styles.label}>Additional Notes</label>
              <textarea
                className={`${styles.inputField} ${styles.textareaTall} ${styles.fieldSpacing}`}
                placeholder="Sensitive areas, pets onsite, or chemicals to avoid"
              />
            </div>

            <div className={styles.formGridTwo}>
              <div>
                <label className={styles.label}>Documentation Requests</label>
                <div className={styles.checkboxList}>
                  {[
                    "Service Report",
                    "Safety Data Sheet (SDS)",
                    "Preventive Maintenance Schedule",
                    "Quotation Only",
                  ].map((item) => (
                    <label key={item} className={styles.checkboxRow}>
                      <input type="checkbox" className={styles.checkboxInput} />
                      {item}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className={styles.label}>Optional Upload</label>
                <input type="file" className={`${styles.inputField} ${styles.fieldSpacing}`} />
              </div>
            </div>

            <label className={styles.checkboxRow}>
              <input type="checkbox" className={styles.checkboxInput} />
              I understand my information will be used to prepare a quotation or site
              inspection booking.
            </label>

            <button type="submit" className={styles.primaryButton}>
              Request Fumigation Quote
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
