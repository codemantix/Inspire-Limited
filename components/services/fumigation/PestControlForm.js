import { useState } from "react";
import styles from "./PestControlForm.module.css";

const WHATSAPP_URL = "https://wa.me/message/FTINUCHUTZIPP1";

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

  const WHATSAPP_PHONE = "2349132736772";

  const handleSubmit = (e) => {
    e.preventDefault();
    const pests = formData.pests.length > 0 ? formData.pests.join(", ") : "Not specified";
    const docs = formData.documents.length > 0 ? formData.documents.join(", ") : "None";
    const propertyType = formData.propertyType === "Public" ? `Other: ${formData.otherPropertyType}` : formData.propertyType;
    const msg = [
      "*Fumigation & Pest Control Request*",
      `Name: ${formData.fullName}`,
      `Company: ${formData.orgName || "N/A"}`,
      `Phone: ${formData.phone}`,
      `Email: ${formData.email}`,
      `Preferred Contact: ${formData.contactChannel}`,
      `Address: ${formData.address}`,
      `City: ${formData.city}`,
      `Property Type: ${propertyType}`,
      `Pests / Issues: ${pests}`,
      `Service Type: ${formData.serviceType}`,
      `Estimated Size: ${formData.estimatedSize}`,
      `Preferred Date: ${formData.preferredDate || "Not specified"}`,
      `Timing: ${formData.timing || "Not specified"}`,
      `Access Type: ${formData.accessType}`,
      `Additional Notes: ${formData.additionalNotes || "None"}`,
      `Documents Requested: ${docs}`,
    ].join("\n");
    window.location.href = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`;
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
            Submit Request
          </button>
        </form>
      </div>
    </section>
  );
}
