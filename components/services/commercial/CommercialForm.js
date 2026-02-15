import { useState } from "react";
import styles from "./CommercialForm.module.css";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add submission logic here
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
            Request Cleaning Quote
          </button>
        </form>
      </div>
    </section>
  );
}
