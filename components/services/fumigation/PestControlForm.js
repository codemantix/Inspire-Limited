import { useState } from "react";
import styles from "./PestControlForm.module.css";

export default function PestControlForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    orgName: "",
    phone: "",
    email: "",
    contactChannel: "Phone",
    
    address: "",
    city: "",
    propertyType: "",
    otherPropertyType: "",
    
    pests: [],
    
    serviceType: "",
    estimatedSize: "",
    
    preferredDate: "",
    timing: "",
    accessType: "",
    
    additionalNotes: "",
    
    documents: [],
    
    consent: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleMultiSelect = (e, field) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      const list = prev[field];
      if (checked) {
        return { ...prev, [field]: [...list, value] };
      } else {
        return { ...prev, [field]: list.filter(item => item !== value) };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Pest Control Form Submitted:", formData);
  };

  return (
    <section className={styles.formSection} id="request-quote">
      <div className={styles.container}>
        <div className={styles.formHeader}>
          <p className={styles.eyebrow}>GET A QUOTE</p>
          <h2 className={styles.sectionTitle}>Fumigation & Pest Control Request</h2>
          <p className={styles.sectionDesc}>
            Fill in the details below to receive a comprehensive quote and treatment plan.
          </p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          
          {/* 1. Contact Information */}
          <div className={styles.formGroup}>
            <h3 className={styles.groupTitle}>1. Contact Information</h3>
            <div className={styles.grid}>
              <input type="text" name="fullName" placeholder="Full Name" className={styles.input} required onChange={handleInputChange} />
              <input type="text" name="orgName" placeholder="Company / Organization (Optional)" className={styles.input} onChange={handleInputChange} />
              <input type="tel" name="phone" placeholder="Phone Number" className={styles.input} required onChange={handleInputChange} />
              <input type="email" name="email" placeholder="Email Address" className={styles.input} required onChange={handleInputChange} />
              <select name="contactChannel" className={styles.select} onChange={handleInputChange}>
                <option value="Phone">Pref. Contact: Phone</option>
                <option value="WhatsApp">Pref. Contact: WhatsApp</option>
                <option value="Email">Pref. Contact: Email</option>
              </select>
            </div>
          </div>

          {/* 2. Service Location */}
          <div className={styles.formGroup}>
            <h3 className={styles.groupTitle}>2. Service Location</h3>
            <div className={styles.grid}>
              <input type="text" name="address" placeholder="Property Address" className={styles.input} required onChange={handleInputChange} />
              <select name="city" className={styles.select} required onChange={handleInputChange}>
                <option value="">Select City / Area</option>
                <option value="Lagos">Lagos</option>
                <option value="Abuja">Abuja</option>
                <option value="Port Harcourt">Port Harcourt</option>
                <option value="Other">Other</option>
              </select>
              <select name="propertyType" className={styles.select} required onChange={handleInputChange}>
                <option value="">Property Type</option>
                <option value="Residential">Residential Apartment / House</option>
                <option value="Estate">Estate / Managed Property</option>
                <option value="Commercial">Commercial Office / Bank</option>
                <option value="Industrial">Industrial / Warehouse Facility</option>
                <option value="School">School / Healthcare Facility</option>
                <option value="Public">Public Facility / Others</option>
              </select>
              {formData.propertyType === "Public" && (
                <input type="text" name="otherPropertyType" placeholder="Specify Other Property" className={styles.input} onChange={handleInputChange} />
              )}
            </div>
          </div>

          {/* 3. Type of Pest or Issue */}
          <div className={styles.formGroup}>
            <h3 className={styles.groupTitle}>3. Type of Pest or Issue</h3>
            <div className={styles.checkboxGrid}>
              {[
                "Cockroaches", "Mosquitoes", "Termites", "Rodents (Rats/Mice)",
                "Ants", "Bed Bugs", "Lizards / Reptiles", "Snakes",
                "General Preventive Fumigation"
              ].map(pest => (
                <label key={pest} className={styles.checkboxLabel}>
                  <input type="checkbox" value={pest} onChange={(e) => handleMultiSelect(e, 'pests')} />
                  <span>{pest}</span>
                </label>
              ))}
            </div>
          </div>

          {/* 4. Service Scope & Frequency */}
          <div className={styles.formGroup}>
            <h3 className={styles.groupTitle}>4. Service Scope & Frequency</h3>
            <div className={styles.grid}>
              <select name="serviceType" className={styles.select} required onChange={handleInputChange}>
                <option value="">Service Type</option>
                <option value="One-Time">One-Time Fumigation</option>
                <option value="Routine">Routine Pest Control (Monthly/Bi-Monthly)</option>
                <option value="Preventive">Preventive Maintenance Program</option>
                <option value="Emergency">Emergency Call-Out Service</option>
              </select>
              <select name="estimatedSize" className={styles.select} required onChange={handleInputChange}>
                <option value="">Estimated Area / Size</option>
                <option value="Under 500 sqm">Under 500 sqm</option>
                <option value="500 – 1,000 sqm">500 – 1,000 sqm</option>
                <option value="1,000 – 2,500 sqm">1,000 – 2,500 sqm</option>
                <option value="Above 2,500 sqm">Above 2,500 sqm</option>
              </select>
            </div>
          </div>

          {/* 5. Accessibility & Schedule */}
          <div className={styles.formGroup}>
            <h3 className={styles.groupTitle}>5. Accessibility & Schedule</h3>
            <div className={styles.grid}>
              <div className={styles.fieldWrapper}>
                <label className={styles.label}>Preferred Date</label>
                <input type="date" name="preferredDate" className={styles.input} onChange={handleInputChange} />
              </div>
              <select name="timing" className={styles.select} onChange={handleInputChange}>
                <option value="">Service Timing Preference</option>
                <option value="Morning">Morning</option>
                <option value="Afternoon">Afternoon</option>
                <option value="Evening">Evening</option>
                <option value="Flexible">Flexible</option>
              </select>
              <select name="accessType" className={styles.select} required onChange={handleInputChange}>
                <option value="">Access Type</option>
                <option value="Available">Someone Will Be Available</option>
                <option value="Security">Security / Facility Access</option>
                <option value="Key">Key or Code Access</option>
              </select>
            </div>
          </div>

          {/* 6. Additional Notes */}
          <div className={styles.formGroup}>
            <h3 className={styles.groupTitle}>6. Additional Notes / Special Requirements</h3>
            <textarea 
              name="additionalNotes" 
              placeholder="Example: Sensitive areas, pets onsite, equipment restrictions, or chemicals to avoid." 
              className={`${styles.input} ${styles.textarea}`} 
              onChange={handleInputChange}
            ></textarea>
          </div>

          {/* 7. Documentation Requests */}
          <div className={styles.formGroup}>
            <h3 className={styles.groupTitle}>7. Documentation Requests (Optional)</h3>
            <div className={styles.checkboxGrid}>
              {["Service Report", "Safety Data Sheet (SDS)", "Preventive Maintenance Schedule", "Quotation Only"].map(doc => (
                <label key={doc} className={styles.checkboxLabel}>
                  <input type="checkbox" value={doc} onChange={(e) => handleMultiSelect(e, 'documents')} />
                  <span>{doc}</span>
                </label>
              ))}
            </div>
          </div>

          {/* 8. Optional Upload */}
          <div className={styles.formGroup}>
            <h3 className={styles.groupTitle}>8. Optional Upload</h3>
            <input type="file" className={styles.fileInput} accept=".pdf,.jpg,.png" />
            <p className={styles.helpText}>Upload floor plans, pest photos, or previous treatment reports (JPEG / PDF)</p>
          </div>

          {/* 9. Consent */}
          <div className={styles.consentGroup}>
            <label className={styles.checkboxLabel}>
              <input type="checkbox" name="consent" required onChange={handleInputChange} />
              <span>I understand my information will be used to prepare a quotation or site inspection booking.</span>
            </label>
          </div>

          <button type="submit" className={styles.submitButton}>
            Request Fumigation Quote
          </button>
        </form>
      </div>
    </section>
  );
}
