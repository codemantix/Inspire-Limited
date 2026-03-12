import { useState } from "react";
import styles from "./BPOForm.module.css";

const WHATSAPP_PHONE = "2349132736772";

export default function BPOForm() {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    orgName: "",
    orgType: "",
    location: "",
    cleanersNeeded: "",
    contactMethod: "Phone Call",
    urgency: "Immediate (24-48h)",
  });

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const msg = [
      "*BPO Cleaning Service Request*",
      `Name: ${form.fullName}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Organization: ${form.orgName}`,
      `Organization Type: ${form.orgType}`,
      `Location: ${form.location}`,
      `Cleaners Needed: ${form.cleanersNeeded}`,
      `Preferred Contact: ${form.contactMethod}`,
      `Urgency: ${form.urgency}`,
    ].join("\n");
    window.location.href = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`;
  }

  return (
    <div className={styles.formWrapper}>
      <div className={styles.container}>
        <div className={styles.formSection}>
          <h3 className={styles.formTitle}>Request BPO Service</h3>
          <div className={styles.whatsappRow}>
            <span className={styles.whatsappNote}>Prefer a quicker response?</span>
            <a
              href={`https://wa.me/${WHATSAPP_PHONE}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappButton}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" style={{ flexShrink: 0 }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Chat with us on WhatsApp
            </a>
          </div>
          <form className={styles.formGrid} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Full Name</label>
              <input type="text" name="fullName" value={form.fullName} onChange={handleChange} className={styles.input} required />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Phone Number</label>
              <input type="tel" name="phone" value={form.phone} onChange={handleChange} className={styles.input} required />
            </div>
            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
              <label className={styles.label}>Email Address</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} className={styles.input} required />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Organization Name</label>
              <input type="text" name="orgName" value={form.orgName} onChange={handleChange} className={styles.input} required />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Organization Type</label>
              <select name="orgType" value={form.orgType} onChange={handleChange} className={styles.select} required>
                <option value="">Select Type</option>
                <option value="Company">Company</option>
                <option value="Institution">Institution</option>
                <option value="Property Manager">Property Manager</option>
                <option value="Developer">Developer</option>
                <option value="Individual">Individual</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Location (City/State)</label>
              <input type="text" name="location" value={form.location} onChange={handleChange} className={styles.input} required />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Cleaners Needed</label>
              <input type="number" name="cleanersNeeded" value={form.cleanersNeeded} onChange={handleChange} className={styles.input} required min="1" />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Contact Method</label>
              <select name="contactMethod" value={form.contactMethod} onChange={handleChange} className={styles.select}>
                <option value="Phone Call">Phone Call</option>
                <option value="WhatsApp">WhatsApp</option>
                <option value="Email">Email</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Urgency</label>
              <select name="urgency" value={form.urgency} onChange={handleChange} className={styles.select}>
                <option value="Immediate (24-48h)">Immediate (24-48h)</option>
                <option value="Short Term (1-2 weeks)">Short Term (1-2 weeks)</option>
                <option value="Planning Stage">Planning Stage</option>
              </select>
            </div>
            <button type="submit" className={`${styles.submitButton} ${styles.fullWidth}`}>
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}