import { useState } from "react";
import styles from "./PBOForm.module.css";

const WHATSAPP_URL = "https://wa.me/message/FTINUCHUTZIPP1";

export default function PBOForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    orgName: "",
    email: "",
    phone: "",
    contactMethod: "Phone",
    orgType: "",
    otherOrgType: "",
    address: "",
    city: "",
    personnelCount: "",
    serviceTier: "",
    shift: "",
    startDate: "",
    contractDuration: "",
    additionalInfo: "",
    consent: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("BPO Form Submitted:", formData);
  };

  return (
    <section className={styles.formSection} id="request-service">
      <div className={styles.container}>
        <div className={styles.formHeader}>
          <p className={styles.eyebrow}>GET STARTED</p>
          <h2 className={styles.sectionTitle}>Request a Personnel Outsourcing Proposal</h2>
          <p className={styles.sectionDesc}>
            Tell us about your organisation and we'll put together a tailored BPO cleaning package for you.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappButton}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" style={{ flexShrink: 0 }}>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Chat with us on WhatsApp
          </a>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>

          {/* 1. Contact Information */}
          <div className={styles.formGroup}>
            <h3 className={styles.groupTitle}>1. Contact Information</h3>
            <div className={styles.grid}>
              <input
                type="text" name="fullName" placeholder="Full Name"
                className={styles.input} required onChange={handleInputChange}
              />
              <input
                type="text" name="orgName" placeholder="Organisation Name"
                className={styles.input} required onChange={handleInputChange}
              />
              <input
                type="email" name="email" placeholder="Email Address"
                className={styles.input} required onChange={handleInputChange}
              />
              <input
                type="tel" name="phone" placeholder="Phone Number"
                className={styles.input} required onChange={handleInputChange}
              />
              <select name="contactMethod" className={styles.select} onChange={handleInputChange}>
                <option value="Phone">Preferred Contact: Phone</option>
                <option value="Email">Preferred Contact: Email</option>
                <option value="WhatsApp">Preferred Contact: WhatsApp</option>
              </select>
            </div>
          </div>

          {/* 2. Organisation Type */}
          <div className={styles.formGroup}>
            <h3 className={styles.groupTitle}>2. Organisation Type</h3>
            <div className={styles.grid}>
              <select name="orgType" className={styles.select} required onChange={handleInputChange}>
                <option value="">Select Organisation Type</option>
                <option value="Corporate Office">Corporate Office / HQ</option>
                <option value="Bank">Bank / Financial Institution</option>
                <option value="Hospital">Hospital / Healthcare Facility</option>
                <option value="School">School / University</option>
                <option value="Government">Government Agency / Ministry</option>
                <option value="Industrial">Industrial / Manufacturing Plant</option>
                <option value="Serviced Apartment">Serviced Apartments / Short-lets</option>
                <option value="Hotel">Hotel / Hospitality</option>
                <option value="Other">Other</option>
              </select>
              {formData.orgType === "Other" && (
                <input
                  type="text" name="otherOrgType" placeholder="Specify Organisation Type"
                  className={styles.input} onChange={handleInputChange}
                />
              )}
            </div>
          </div>

          {/* 3. Facility Location */}
          <div className={styles.formGroup}>
            <h3 className={styles.groupTitle}>3. Facility Location</h3>
            <div className={styles.grid}>
              <textarea
                name="address" placeholder="Facility Address"
                className={`${styles.input} ${styles.textarea}`} required onChange={handleInputChange}
              ></textarea>
              <select name="city" className={styles.select} required onChange={handleInputChange}>
                <option value="">Select City</option>
                <option value="Lagos">Lagos</option>
                <option value="Abuja">Abuja</option>
                <option value="Port Harcourt">Port Harcourt</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {/* 4. Personnel Requirements */}
          <div className={styles.formGroup}>
            <h3 className={styles.groupTitle}>4. Personnel Requirements</h3>
            <div className={styles.grid}>
              <select name="personnelCount" className={styles.select} required onChange={handleInputChange}>
                <option value="">Number of Cleaners Needed</option>
                <option value="1–2">1–2 Cleaners</option>
                <option value="3–5">3–5 Cleaners</option>
                <option value="6–10">6–10 Cleaners</option>
                <option value="11–20">11–20 Cleaners</option>
                <option value="20+">More than 20 Cleaners</option>
              </select>
              <select name="shift" className={styles.select} onChange={handleInputChange}>
                <option value="">Preferred Shift / Working Hours</option>
                <option value="Day Shift">Day Shift (Morning – Evening)</option>
                <option value="Night Shift">Night Shift</option>
                <option value="Split Shift">Split Shift</option>
                <option value="24/7 Coverage">24/7 Coverage</option>
                <option value="Flexible">Flexible / To Be Agreed</option>
              </select>
            </div>
          </div>

          {/* 5. Service Tier */}
          <div className={styles.formGroup}>
            <h3 className={styles.groupTitle}>5. Service Tier</h3>
            <div className={styles.radioGrid}>
              {[
                { value: "Essential", desc: "Supply of cleaners + uniforms" },
                { value: "Standard", desc: "Essential + supervision & reporting" },
                { value: "Premium", desc: "Standard + full compliance & HR management" },
                { value: "Not Sure", desc: "I need guidance on the right tier" },
              ].map(({ value, desc }) => (
                <label key={value} className={styles.radioCard}>
                  <input
                    type="radio" name="serviceTier" value={value}
                    onChange={handleInputChange}
                  />
                  <div>
                    <span className={styles.radioLabel}>{value}</span>
                    <span className={styles.radioDesc}>{desc}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* 6. Contract Details */}
          <div className={styles.formGroup}>
            <h3 className={styles.groupTitle}>6. Contract Details</h3>
            <div className={styles.grid}>
              <div className={styles.fieldWrapper}>
                <label className={styles.label}>Preferred Start Date</label>
                <input
                  type="date" name="startDate"
                  className={styles.input} onChange={handleInputChange}
                />
              </div>
              <select name="contractDuration" className={styles.select} onChange={handleInputChange}>
                <option value="">Contract Duration</option>
                <option value="3 Months">3 Months (Trial)</option>
                <option value="6 Months">6 Months</option>
                <option value="1 Year">1 Year</option>
                <option value="Ongoing">Ongoing / Renewable</option>
              </select>
            </div>
          </div>

          {/* 7. Additional Information */}
          <div className={styles.formGroup}>
            <h3 className={styles.groupTitle}>7. Additional Information</h3>
            <textarea
              name="additionalInfo"
              placeholder="Any special requirements, compliance standards, or notes for our team..."
              className={`${styles.input} ${styles.textarea}`} onChange={handleInputChange}
            ></textarea>
          </div>

          {/* Consent */}
          <div className={styles.consentGroup}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox" name="consent" required
                onChange={handleInputChange}
              />
              <span>I confirm that the details provided are accurate and authorise Inspire Limited to contact me regarding this request.</span>
            </label>
          </div>

          <button type="submit" className={styles.submitButton}>
            Submit BPO Request
          </button>
        </form>
      </div>
    </section>
  );
}
