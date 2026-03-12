import { useState } from "react";
import styles from "./CommercialForm.module.css";

const WHATSAPP_URL = "https://wa.me/message/FTINUCHUTZIPP1";

export default function CommercialForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    orgName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    contactMethod: "Phone",
    facilityType: "",
    otherFacilityType: "",
    facilitySize: "",
    serviceTypes: [],
    frequency: "",
    timing: "",
    additionalInfo: "",
    startDate: "",
    urgency: "",
    consent: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleMultiSelect = (e) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      if (checked) {
        return { ...prev, serviceTypes: [...prev.serviceTypes, value] };
      } else {
        return { ...prev, serviceTypes: prev.serviceTypes.filter(item => item !== value) };
      }
    });
  };

  const WHATSAPP_PHONE = "2349132736772";

  const handleSubmit = (e) => {
    e.preventDefault();
    const services = formData.serviceTypes.length > 0 ? formData.serviceTypes.join(", ") : "Not specified";
    const facilityType = formData.facilityType === "Other" ? `Other: ${formData.otherFacilityType}` : formData.facilityType;
    const msg = [
      "*Commercial & Industrial Cleaning Request*",
      `Name: ${formData.fullName}`,
      `Company: ${formData.orgName}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `Address: ${formData.address}`,
      `City: ${formData.city}`,
      `Preferred Contact: ${formData.contactMethod}`,
      `Facility Type: ${facilityType}`,
      `Facility Size: ${formData.facilitySize}`,
      `Services Required: ${services}`,
      `Frequency: ${formData.frequency}`,
      `Timing: ${formData.timing}`,
      `Start Date: ${formData.startDate || "Not specified"}`,
      `Urgency: ${formData.urgency}`,
      `Additional Info: ${formData.additionalInfo || "None"}`,
    ].join("\n");
    window.location.href = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section className={styles.formSection} id="request-quote">
      <div className={styles.container}>
        <div className={styles.formHeader}>
          <p className={styles.eyebrow}>GET A QUOTE</p>
          <h2 className={styles.sectionTitle}>Commercial & Industrial Facility Cleaning Request</h2>
          <p className={styles.sectionDesc}>
            Please verify facility details to receive a tailored proposal.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappButton}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" style={{ flexShrink: 0 }}>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
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
                type="text" name="orgName" placeholder="Company/Organization Name" 
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
            </div>
          </div>

          {/* 2. Service Location */}
          <div className={styles.formGroup}>
            <h3 className={styles.groupTitle}>2. Service Location</h3>
            <div className={styles.grid}>
              <textarea 
                name="address" placeholder="Facility Address" 
                className={`${styles.input} ${styles.textarea}`} required onChange={handleInputChange}
              ></textarea>
              <div className={styles.subGrid}>
                <select name="city" className={styles.select} required onChange={handleInputChange}>
                  <option value="">Select City</option>
                  <option value="Lagos">Lagos</option>
                  <option value="Abuja">Abuja</option>
                  <option value="Port Harcourt">Port Harcourt</option>
                  <option value="Other">Other</option>
                </select>
                <select name="contactMethod" className={styles.select} onChange={handleInputChange}>
                  <option value="Phone">Pref. Contact: Phone</option>
                  <option value="Email">Pref. Contact: Email</option>
                  <option value="WhatsApp">Pref. Contact: WhatsApp</option>
                </select>
              </div>
            </div>
          </div>

          {/* 3. Type of Facility */}
          <div className={styles.formGroup}>
            <h3 className={styles.groupTitle}>3. Type of Facility</h3>
            <div className={styles.grid}>
              <select name="facilityType" className={styles.select} required onChange={handleInputChange}>
                <option value="">Select Facility Type</option>
                <option value="Office">Office Building / Corporate HQ</option>
                <option value="Bank">Bank / Financial Institution</option>
                <option value="Industrial">Industrial / Manufacturing Site</option>
                <option value="Warehouse">Warehouse / Logistics Facility</option>
                <option value="Healthcare">Hospital / Healthcare Facility</option>
                <option value="School">School / Institutional Building</option>
                <option value="Public">Public Facility</option>
                <option value="Other">Other</option>
              </select>
              {formData.facilityType === "Other" && (
                <input 
                  type="text" name="otherFacilityType" placeholder="Specify Other Facility" 
                  className={styles.input} onChange={handleInputChange} 
                />
              )}
            </div>
          </div>

          {/* 4. Size of Facility */}
          <div className={styles.formGroup}>
            <h3 className={styles.groupTitle}>4. Size of Facility</h3>
            <select name="facilitySize" className={styles.select} required onChange={handleInputChange}>
              <option value="">Select Size Range</option>
              <option value="Under 500 sqm">Under 500 sqm</option>
              <option value="500 – 1,000 sqm">500 – 1,000 sqm</option>
              <option value="1,000 – 2,500 sqm">1,000 – 2,500 sqm</option>
              <option value="Above 2,500 sqm">Above 2,500 sqm</option>
            </select>
          </div>

          {/* 5. Service Type Required */}
          <div className={styles.formGroup}>
            <h3 className={styles.groupTitle}>5. Service Type Required</h3>
            <div className={styles.checkboxGrid}>
              {[
                "General Routine Cleaning", "Deep Cleaning & Disinfection", 
                "Post-Construction / Renovation", "Industrial Floor & Equipment",
                "Window / Facade Cleaning", "Restroom & Waste Management",
                "Janitorial / Day Porter Services"
              ].map(service => (
                <label key={service} className={styles.checkboxLabel}>
                  <input 
                    type="checkbox" value={service} 
                    onChange={handleMultiSelect} 
                  />
                  <span>{service}</span>
                </label>
              ))}
            </div>
          </div>

          {/* 6. Cleaning Frequency */}
          <div className={styles.formGroup}>
            <h3 className={styles.groupTitle}>6. Cleaning Frequency</h3>
            <select name="frequency" className={styles.select} required onChange={handleInputChange}>
              <option value="">Select Frequency</option>
              <option value="One-Time">One-Time Service</option>
              <option value="Daily">Daily (Full-time Onsite Team)</option>
              <option value="2-3 Times/Week">2–3 Times per Week</option>
              <option value="Weekly">Weekly / Bi-Weekly</option>
              <option value="Monthly">Monthly</option>
              <option value="Custom">Customized Schedule</option>
            </select>
          </div>

          {/* 7. Service Timing Preference */}
          <div className={styles.formGroup}>
            <h3 className={styles.groupTitle}>7. Service Timing Preference</h3>
            <select name="timing" className={styles.select} onChange={handleInputChange}>
              <option value="Regular Hours">Regular Business Hours</option>
              <option value="After Hours">After Hours / Night Cleaning</option>
              <option value="Weekends">Weekends Only</option>
              <option value="Flexible">Flexible / To Be Agreed</option>
            </select>
          </div>

          {/* 8. Additional Information */}
          <div className={styles.formGroup}>
            <h3 className={styles.groupTitle}>8. Additional Information</h3>
            <textarea 
              name="additionalInfo" 
              placeholder="Describe special requirements, risks, or compliance standards (e.g., ISO, HACCP)..." 
              className={`${styles.input} ${styles.textarea}`} onChange={handleInputChange}
            ></textarea>
          </div>

          {/* 9. Timeline & Readiness */}
          <div className={styles.formGroup}>
            <h3 className={styles.groupTitle}>9. Timeline & Readiness</h3>
            <div className={styles.grid}>
              <div className={styles.fieldWrapper}>
                <label className={styles.label}>Start Date</label>
                <input 
                  type="date" name="startDate" 
                  className={styles.input} onChange={handleInputChange} 
                />
              </div>
              <div className={styles.fieldWrapper}>
                <label className={styles.label}>Urgency</label>
                <select name="urgency" className={styles.select} onChange={handleInputChange}>
                  <option value="Within 1 week">Within 1 week</option>
                  <option value="Within 1 month">Within 1 month</option>
                  <option value="Flexible">Flexible Timeline</option>
                </select>
              </div>
            </div>
          </div>

          {/* 10. Attachment Upload (UI Only) */}
          <div className={styles.formGroup}>
            <h3 className={styles.groupTitle}>10. Attachment Upload (Optional)</h3>
            <input type="file" className={styles.fileInput} accept=".pdf,.jpg,.png" />
            <p className={styles.helpText}>Upload floor plans or scope docs (PDF/JPEG/PNG)</p>
          </div>

          {/* 11. Consent */}
          <div className={styles.consentGroup}>
            <label className={styles.checkboxLabel}>
              <input 
                type="checkbox" name="consent" required 
                onChange={handleInputChange} 
              />
              <span>I confirm that the details provided are accurate and authorize contact for a site inspection or quotation.</span>
            </label>
          </div>

          <button type="submit" className={styles.submitButton}>
           Submit Request
          </button>
        </form>
      </div>
    </section>
  );
}
