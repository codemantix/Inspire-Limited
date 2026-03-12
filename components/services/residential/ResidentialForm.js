import { useState } from "react";
import styles from "./ResidentialForm.module.css";

const WHATSAPP_URL = "https://wa.me/message/FTINUCHUTZIPP1";

const INITIAL_FORM_STATE = {
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
};

export default function ResidentialForm() {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [loading, setLoading] = useState(false);
  const [formKey, setFormKey] = useState(0);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const services = formData.serviceTypes.length > 0 ? formData.serviceTypes.join(", ") : "Not specified";
    const msg = [
      "*Residential Cleaning Request*",
      `Name: ${formData.fullName}`,
      `Phone: ${formData.phone}`,
      `Email: ${formData.email}`,
      `Preferred Contact: ${formData.contactMethod}`,
      `Property Type: ${formData.residentialType}`,
      `Bedrooms: ${formData.bedrooms}`,
      `Location: ${formData.location}`,
      `City: ${formData.city}`,
      `Services Required: ${services}`,
      `Frequency: ${formData.frequency}`,
      `Timing: ${formData.timing || "Not specified"}`,
      `Access Details: ${formData.accessDetails}`,
      `Special Instructions: ${formData.specialInstructions || "None"}`,
      `Preferred Date: ${formData.date || "Not specified"}`,
      `Urgency: ${formData.urgency}`,
    ].join("\n");
    try {
      await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          form_type: "residential",
          data: { ...formData, serviceTypes: services },
        }),
      });
    } catch (err) {
      console.error("Submit error:", err);
    } finally {
      setLoading(false);
      setFormData(INITIAL_FORM_STATE);
      setFormKey(k => k + 1);
    }
    window.location.href = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section className={styles.formSection} id="request-quote">
      <div className={styles.container}>
        <div className={styles.formHeader}>
          <p className={styles.eyebrow}>GET A QUOTE</p>
          <h2 className={styles.sectionTitle}>Residential Cleaning Request</h2>
          <p className={styles.sectionDesc}>
            Tell us about your home and cleaning needs, and we’ll provide a customized quote.
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

        <form key={formKey} onSubmit={handleSubmit} className={styles.form}>
          
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

          <button type="submit" className={styles.submitButton} disabled={loading}>
            {loading ? "Submitting..." : "Submit Request"}
          </button>
        </form>
      </div>
    </section>
  );
}
