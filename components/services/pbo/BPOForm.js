import styles from "./BPOForm.module.css";

export default function BPOForm() {
  return (
    <div className={styles.formSection}>
      <h3 className={styles.formTitle}>Request BPO Service</h3>
      <form className={styles.formGrid}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Full Name</label>
          <input type="text" className={styles.input} required />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Phone Number</label>
          <input type="tel" className={styles.input} required />
        </div>
        <div className={`${styles.formGroup} ${styles.fullWidth}`}>
          <label className={styles.label}>Email Address</label>
          <input type="email" className={styles.input} required />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Organization Name</label>
          <input type="text" className={styles.input} required />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Organization Type</label>
          <select className={styles.select} required>
            <option value="">Select Type</option>
            <option value="company">Company</option>
            <option value="institution">Institution</option>
            <option value="property_manager">Property Manager</option>
            <option value="developer">Developer</option>
            <option value="individual">Individual</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Location (City/State)</label>
          <input type="text" className={styles.input} required />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Cleaners Needed</label>
          <input type="number" className={styles.input} required min="1" />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Contact Method</label>
          <select className={styles.select}>
            <option value="phone">Phone Call</option>
            <option value="whatsapp">WhatsApp</option>
            <option value="email">Email</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Urgency</label>
          <select className={styles.select}>
            <option value="immediate">Immediate (24-48h)</option>
            <option value="short_term">Short Term (1-2 weeks)</option>
            <option value="planning">Planning Stage</option>
          </select>
        </div>
        <button type="submit" className={`${styles.submitButton} ${styles.fullWidth}`}>
          Submit Request
        </button>
      </form>
    </div>
  );
}
