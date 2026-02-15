import { useState } from "react";
import styles from "./ResidentialForm.module.css";

export default function ResidentialForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    contactMethod: "Phone",
    residentialType: "",
    bedrooms: "",
    city: "",
    location: "",
    serviceTypes: [],
    frequency: "",
    timing: "",
    accessDetails: "",
    specialInstructions: "",
    date: "",
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
    console.log("Residential Form Submitted:", formData);
    // Add submission logic here
  };

  return (
    <section className={styles.formSection} id="request-quote">
      <div className={styles.container}>
        <div className={styles.formHeader}>
          <p className={styles.eyebrow}>GET A QUOTE</p>
          <h2 className={styles.sectionTitle}>Residential Cleaning Request</h2>
          <p className={styles.sectionDesc}>
            Tell us about your home and cleaning needs, and we'll provide a customized quote.
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
                type="tel" name="phone" placeholder="Phone Number" 
                className={styles.input} required onChange={handleInputChange} 
              />
              <input 
                type="email" name="email" placeholder="Email Address" 
                className={styles.input} required onChange={handleInputChange} 
              />
              <select name="contactMethod" className={styles.select} onChange={handleInputChange}>
                <option value="Phone">Pref. Contact: Phone</option>
                <option value="Email">Pref. Contact: Email</option>
                <option value="WhatsApp">Pref. Contact: WhatsApp</option>
              </select>
            </div>
          </div>

          {/* 2. Property Details */}
          <div className={styles.formGroup}>
            <h3 className={styles.groupTitle}>2. Property Details</h3>
            <div className={styles.grid}>
              <select name="residentialType" className={styles.select} required onChange={handleInputChange}>
                <option value="">Select Residential Type</option>
                <option value="Apartment / Flat">Apartment / Flat</option>
                <option value="Duplex / House">Duplex / House</option>
                <option value="Terrace / Townhouse">Terrace / Townhouse</option>
                <option value="Estate Unit">Estate Unit / Managed Property</option>
                <option value="Short-let">Short-let / Airbnb Property</option>
              </select>
              <select name="bedrooms" className={styles.select} required onChange={handleInputChange}>
                <option value="">Number of Bedrooms</option>
                <option value="Studio / 1 Bedroom">Studio / 1 Bedroom</option>
                <option value="2 Bedrooms">2 Bedrooms</option>
                <option value="3 Bedrooms">3 Bedrooms</option>
                <option value="4+ Bedrooms">4+ Bedrooms</option>
              </select>
            </div>
            <div className={styles.grid} style={{ marginTop: '1rem' }}>
              <input 
                type="text" name="location" placeholder="Property Location (Area/Street)" 
                className={styles.input} required onChange={handleInputChange} 
              />
              <select name="city" className={styles.select} required onChange={handleInputChange}>
                <option value="">Select City</option>
                <option value="Lagos">Lagos</option>
                <option value="Abuja">Abuja</option>
                <option value="Port Harcourt">Port Harcourt</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {/* 3. Type of Service Required */}
          <div className={styles.formGroup}>
            <h3 className={styles.groupTitle}>3. Type of Service Required</h3>
            <div className={styles.checkboxGrid}>
              {[
                "Regular Cleaning", "Deep Cleaning", 
                "Move-In / Move-Out", "Post-Renovation",
                "After-Event Cleaning", "Disinfection & Sanitization",
                "Upholstery / Carpet / Mattress"
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

          {/* 4. Preferred Service Frequency */}
          <div className={styles.formGroup}>
            <h3 className={styles.groupTitle}>4. Preferred Service Frequency</h3>
            <select name="frequency" className={styles.select} required onChange={handleInputChange}>
              <option value="">Select Frequency</option>
              <option value="One-Time">One-Time Cleaning</option>
              <option value="Weekly">Weekly Schedule</option>
              <option value="Bi-Weekly">Bi-Weekly Schedule</option>
              <option value="Monthly">Monthly Subscription</option>
              <option value="Customized">Customized Frequency</option>
            </select>
          </div>

          {/* 5. Preferred Service Timing */}
          <div className={styles.formGroup}>
            <h3 className={styles.groupTitle}>5. Preferred Service Timing</h3>
            <select name="timing" className={styles.select} onChange={handleInputChange}>
              <option value="">Select Timing</option>
              <option value="Morning">Morning (8 AM – 12 PM)</option>
              <option value="Afternoon">Afternoon (12 PM – 4 PM)</option>
              <option value="Evening">Evening (4 PM – 8 PM)</option>
              <option value="Flexible">Flexible / To Be Agreed</option>
            </select>
          </div>

          {/* 6. Access Details & Supervision */}
          <div className={styles.formGroup}>
            <h3 className={styles.groupTitle}>6. Access Details & Supervision</h3>
            <div className={styles.fieldWrapper}>
              <label className={styles.label}>Will someone be home?</label>
              <select name="accessDetails" className={styles.select} required onChange={handleInputChange}>
                <option value="Yes">Yes</option>
                <option value="No">No, someone will grant access</option>
                <option value="Estate Access">Access via estate/security</option>
              </select>
            </div>
            <div className={styles.fieldWrapper} style={{ marginTop: '1rem' }}>
              <label className={styles.label}>Special Instructions</label>
              <textarea 
                name="specialInstructions" 
                placeholder="E.g., balconies, kitchen detail, upholstery, or fragile items." 
                className={`${styles.input} ${styles.textarea}`} onChange={handleInputChange}
              ></textarea>
            </div>
          </div>

          {/* 7. Timeline & Booking Details */}
          <div className={styles.formGroup}>
            <h3 className={styles.groupTitle}>7. Timeline & Booking Details</h3>
            <div className={styles.grid}>
              <div className={styles.fieldWrapper}>
                <label className={styles.label}>Preferred Date</label>
                <input 
                  type="date" name="date" 
                  className={styles.input} onChange={handleInputChange} 
                />
              </div>
              <div className={styles.fieldWrapper}>
                <label className={styles.label}>Urgency Level</label>
                <select name="urgency" className={styles.select} onChange={handleInputChange}>
                  <option value="Within 48 hours">Within 48 hours</option>
                  <option value="Within 1 week">Within 1 week</option>
                  <option value="Within 1 month">Within 1 month</option>
                  <option value="Flexible">Flexible</option>
                </select>
              </div>
            </div>
          </div>

          {/* 8. Optional Upload */}
          <div className={styles.formGroup}>
            <h3 className={styles.groupTitle}>8. Optional Upload</h3>
            <input type="file" className={styles.fileInput} accept=".pdf,.jpg,.png" />
            <p className={styles.helpText}>Upload pictures or areas needing special attention (PDF/JPEG/PNG)</p>
          </div>

          {/* 9. Consent */}
          <div className={styles.consentGroup}>
            <label className={styles.checkboxLabel}>
              <input 
                type="checkbox" name="consent" required 
                onChange={handleInputChange} 
              />
              <span>I confirm the details above are accurate and authorize contact to finalize quotation or scheduling.</span>
            </label>
          </div>

          <button type="submit" className={styles.submitButton}>
            Request Residential Cleaning Quote
          </button>
        </form>
      </div>
    </section>
  );
}
