import { useState } from "react";
import styles from "./CareerForm.module.css";

const initialForm = {
  fullName: "",
  phone: "",
  whatsapp: "",
  email: "",
  gender: "",
  ageRange: "",
  location: "",
  startDate: "",
  workTime: "",
  flexLocation: "",
  workedBefore: "",
  previousEmployer: "",
  cleaningPlaces: [],
  willingToTrain: "",
  hasFuturePlans: "",
  futurePlans: "",
  openToGrowth: "",
  idDocument: null,
  passport: null,
  proofOfAddress: null,
  motivation: "",
  followsInstructions: "",
  promisePunctual: "",
  confirmed: false,
};

const cleaningPlaceOptions = [
  "Office",
  "Bank",
  "School",
  "Hospital",
  "Factory",
  "House",
  "I have not worked before",
];

const REQUIRED_FIELDS = [
  "fullName", "phone", "gender", "ageRange", "location",
  "startDate", "workTime", "flexLocation",
  "workedBefore", "willingToTrain", "hasFuturePlans", "openToGrowth",
  "idDocument", "passport", "proofOfAddress",
  "motivation", "followsInstructions", "promisePunctual",
];
const TOTAL_REQUIRED = REQUIRED_FIELDS.length + 1; // +1 for confirmed

const SECTIONS = [
  { label: "About You",       fields: ["fullName", "phone", "gender", "ageRange", "location"] },
  { label: "Availability",    fields: ["startDate", "workTime", "flexLocation"] },
  { label: "Experience",      fields: ["workedBefore"] },
  { label: "Training & Plans",fields: ["willingToTrain", "hasFuturePlans", "openToGrowth"] },
  { label: "Documents",       fields: ["idDocument", "passport", "proofOfAddress"] },
  { label: "Confirmation",    fields: ["motivation", "followsInstructions", "promisePunctual", "confirmed"] },
];

function validate(form) {
  const errors = {};
  if (!form.fullName.trim()) errors.fullName = "Full name is required.";
  if (!form.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (!/^\+?[\d\s\-]{7,}$/.test(form.phone.trim())) {
    errors.phone = "Enter a valid phone number.";
  }
  if (!form.gender) errors.gender = "Please select your gender.";
  if (!form.ageRange) errors.ageRange = "Please select your age range.";
  if (!form.location.trim()) errors.location = "Location is required.";
  if (!form.startDate) errors.startDate = "Please select when you can start.";
  if (!form.workTime) errors.workTime = "Please select a preferred work time.";
  if (!form.flexLocation) errors.flexLocation = "Please select an option.";
  if (!form.workedBefore) errors.workedBefore = "Please select an option.";
  if (!form.willingToTrain) errors.willingToTrain = "Please select an option.";
  if (!form.hasFuturePlans) errors.hasFuturePlans = "Please select an option.";
  if (!form.openToGrowth) errors.openToGrowth = "Please select an option.";
  if (!form.idDocument) errors.idDocument = "Please upload a means of identification.";
  if (!form.passport) errors.passport = "Please upload a passport photograph.";
  if (!form.proofOfAddress) errors.proofOfAddress = "Please upload proof of address.";
  if (!form.motivation.trim()) {
    errors.motivation = "Please tell us why you want to work with Inspire Limited.";
  } else if (form.motivation.trim().length < 10) {
    errors.motivation = "Please write at least a few words.";
  }
  if (!form.followsInstructions) errors.followsInstructions = "Please select an option.";
  if (!form.promisePunctual) errors.promisePunctual = "Please select an option.";
  if (!form.confirmed) errors.confirmed = "Please tick the confirmation box before submitting.";
  return errors;
}

function countCompleted(form) {
  let count = REQUIRED_FIELDS.filter((k) => {
    const v = form[k];
    return v !== null && v !== "" && v !== false;
  }).length;
  if (form.confirmed) count++;
  return count;
}

export default function CareerForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileNames, setFileNames] = useState({
    idDocument: "",
    passport: "",
    proofOfAddress: "",
  });

  const completedCount = countCompleted(form);
  const pct = Math.round((completedCount / TOTAL_REQUIRED) * 100);
  const sectionStatus = SECTIONS.map((sec) =>
    sec.fields.every((f) => {
      const v = form[f];
      return v !== null && v !== "" && v !== false;
    })
  );

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    const newVal = type === "checkbox" ? checked : value;
    setForm((prev) => ({ ...prev, [name]: newVal }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  function handleBlur(e) {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const fieldErrors = validate({ ...form });
    setErrors((prev) => ({ ...prev, [name]: fieldErrors[name] }));
  }

  function handleCheckboxGroup(value) {
    setForm((prev) => {
      const current = prev.cleaningPlaces;
      return {
        ...prev,
        cleaningPlaces: current.includes(value)
          ? current.filter((v) => v !== value)
          : [...current, value],
      };
    });
  }

  function handleFileChange(e) {
    const { name, files } = e.target;
    if (!files || !files[0]) return;
    const file = files[0];
    const MAX_MB = 5;
    if (file.size > MAX_MB * 1024 * 1024) {
      setErrors((prev) => ({ ...prev, [name]: `File must be under ${MAX_MB} MB.` }));
      setTouched((prev) => ({ ...prev, [name]: true }));
      return;
    }
    setForm((prev) => ({ ...prev, [name]: file }));
    setFileNames((prev) => ({ ...prev, [name]: file.name }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  function handleRemoveFile(name) {
    setForm((prev) => ({ ...prev, [name]: null }));
    setFileNames((prev) => ({ ...prev, [name]: "" }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const allTouched = Object.keys(initialForm).reduce(
      (acc, k) => ({ ...acc, [k]: true }),
      {}
    );
    setTouched(allTouched);
    const fieldErrors = validate(form);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      const firstKey = Object.keys(fieldErrors)[0];
      const el =
        document.getElementById(`cf-${firstKey}`) ||
        document.querySelector(`[data-field="${firstKey}"]`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    setIsSubmitting(true);
    // TODO: replace with real API/form-submission call
    await new Promise((r) => setTimeout(r, 1200));
    setIsSubmitting(false);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (submitted) {
    return (
      <section className={styles.successSection}>
        <div className={styles.successCard}>
          <div className={styles.successIcon}>✓</div>
          <h2 className={styles.successTitle}>Application Received</h2>
          <p className={styles.successBody}>
            Thank you for completing this form. Our team will review your information and
            documents. You will be contacted on WhatsApp or phone if you are cleared for
            the next step.
          </p>
          <p className={styles.successTagline}>
            Inspire Limited believes in dignity of work, learning, and growth.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="application-form" className={styles.formSection}>

      {/* ── Mobile‑only sticky progress strip ── */}
      <div className={styles.mobileProgress}>
        <div className={styles.mobileProgressInner}>
          <div className={styles.progressTop}>
            <span className={styles.progressLabel}>Application progress</span>
            <span className={styles.progressCount}>{completedCount} of {TOTAL_REQUIRED} complete</span>
          </div>
          <div className={styles.progressTrack}>
            <div className={styles.progressFill} style={{ width: `${pct}%` }} />
          </div>
        </div>
      </div>

      <div className={styles.layoutWrap}>

        {/* ── Desktop sidebar ── */}
        <aside className={styles.sidebar}>
          <div className={styles.sidebarCard}>
            <p className={styles.sidebarTitle}>Your Progress</p>
            <p className={styles.sidebarCount}>{completedCount} of {TOTAL_REQUIRED} complete</p>
            <div className={styles.progressTrack}>
              <div className={styles.progressFill} style={{ width: `${pct}%` }} />
            </div>
            <ul className={styles.sidebarSteps}>
              {SECTIONS.map((sec, i) => (
                <li key={i} className={styles.sidebarStep}>
                  <span className={`${styles.sidebarStepDot}${sectionStatus[i] ? ` ${styles.sidebarStepDotDone}` : ""}`}>
                    {sectionStatus[i] ? "✓" : `0${i + 1}`}
                  </span>
                  <span className={`${styles.sidebarStepLabel}${sectionStatus[i] ? ` ${styles.sidebarStepLabelDone}` : ""}`}>
                    {sec.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* ── Form column ── */}
        <div className={styles.formCol}>
          <form className={styles.form} onSubmit={handleSubmit} noValidate>

          {/* ── Section 1: About You ── */}
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>01</span>
              <h2 className={styles.sectionTitle}>About You</h2>
            </div>
            <div className={styles.grid2}>
              <div className={styles.field}>
                <label htmlFor="cf-fullName" className={styles.label}>Full Name <span className={styles.req}>*</span></label>
                <p className={styles.hint}>Write your first name and last name</p>
                <input
                  id="cf-fullName"
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`${styles.input}${errors.fullName && touched.fullName ? ` ${styles.inputError}` : ""}`}
                />
                {errors.fullName && touched.fullName && (
                  <span className={styles.errorMsg}>{errors.fullName}</span>
                )}
              </div>
              <div className={styles.field}>
                <label htmlFor="cf-phone" className={styles.label}>Phone Number <span className={styles.req}>*</span></label>
                <p className={styles.hint}>The number we can call you on</p>
                <input
                  id="cf-phone"
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`${styles.input}${errors.phone && touched.phone ? ` ${styles.inputError}` : ""}`}
                />
                {errors.phone && touched.phone && (
                  <span className={styles.errorMsg}>{errors.phone}</span>
                )}
              </div>
              <div className={styles.field}>
                <label htmlFor="cf-whatsapp" className={styles.label}>WhatsApp Number</label>
                <p className={styles.hint}>If different from your phone number</p>
                <input
                  id="cf-whatsapp"
                  type="tel"
                  name="whatsapp"
                  value={form.whatsapp}
                  onChange={handleChange}
                  className={styles.input}
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="cf-email" className={styles.label}>Email Address</label>
                <p className={styles.hint}>If you have one. You can skip if you do not.</p>
                <input
                  id="cf-email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className={styles.input}
                />
              </div>
              <div className={styles.field} data-field="gender">
                <label className={styles.label}>Gender <span className={styles.req}>*</span></label>
                <div className={styles.radioGroup}>
                  {["Male", "Female"].map((g) => (
                    <label key={g} className={styles.radioLabel}>
                      <input
                        type="radio"
                        name="gender"
                        value={g}
                        checked={form.gender === g}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={styles.radio}
                      />
                      {g}
                    </label>
                  ))}
                </div>
                {errors.gender && touched.gender && (
                  <span className={styles.errorMsg}>{errors.gender}</span>
                )}
              </div>
              <div className={styles.field}>
                <label htmlFor="cf-ageRange" className={styles.label}>Age Range <span className={styles.req}>*</span></label>
                <select
                  id="cf-ageRange"
                  name="ageRange"
                  value={form.ageRange}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`${styles.select}${errors.ageRange && touched.ageRange ? ` ${styles.inputError}` : ""}`}
                >
                  <option value="">Select age range</option>
                  {["Under 20", "20–25", "26–30", "31–40", "40+"].map((a) => (
                    <option key={a} value={a}>{a}</option>
                  ))}
                </select>
                {errors.ageRange && touched.ageRange && (
                  <span className={styles.errorMsg}>{errors.ageRange}</span>
                )}
              </div>
              <div className={`${styles.field} ${styles.fullWidth}`}>
                <label htmlFor="cf-location" className={styles.label}>Where do you live? <span className={styles.req}>*</span></label>
                <p className={styles.hint}>Area / Town / LGA</p>
                <input
                  id="cf-location"
                  type="text"
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`${styles.input}${errors.location && touched.location ? ` ${styles.inputError}` : ""}`}
                />
                {errors.location && touched.location && (
                  <span className={styles.errorMsg}>{errors.location}</span>
                )}
              </div>
            </div>
          </div>

          {/* ── Section 2: Work Availability ── */}
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>02</span>
              <h2 className={styles.sectionTitle}>Work Availability</h2>
            </div>
            <div className={styles.grid2}>
              <div className={styles.field} data-field="startDate">
                <label className={styles.label}>When can you start work? <span className={styles.req}>*</span></label>
                <div className={styles.radioGroup}>
                  {["Immediately", "In 1 week", "In 2 weeks"].map((s) => (
                    <label key={s} className={styles.radioLabel}>
                      <input
                        type="radio"
                        name="startDate"
                        value={s}
                        checked={form.startDate === s}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={styles.radio}
                      />
                      {s}
                    </label>
                  ))}
                </div>
                {errors.startDate && touched.startDate && (
                  <span className={styles.errorMsg}>{errors.startDate}</span>
                )}
              </div>
              <div className={styles.field} data-field="workTime">
                <label className={styles.label}>Which work time do you prefer? <span className={styles.req}>*</span></label>
                <div className={styles.radioGroup}>
                  {["Day work", "Night work", "Any time"].map((t) => (
                    <label key={t} className={styles.radioLabel}>
                      <input
                        type="radio"
                        name="workTime"
                        value={t}
                        checked={form.workTime === t}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={styles.radio}
                      />
                      {t}
                    </label>
                  ))}
                </div>
                {errors.workTime && touched.workTime && (
                  <span className={styles.errorMsg}>{errors.workTime}</span>
                )}
              </div>
              <div className={styles.field} data-field="flexLocation">
                <label className={styles.label}>
                  Are you okay working at different places if needed? <span className={styles.req}>*</span>
                </label>
                <div className={styles.radioGroup}>
                  {["Yes", "No"].map((v) => (
                    <label key={v} className={styles.radioLabel}>
                      <input
                        type="radio"
                        name="flexLocation"
                        value={v}
                        checked={form.flexLocation === v}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={styles.radio}
                      />
                      {v}
                    </label>
                  ))}
                </div>
                {errors.flexLocation && touched.flexLocation && (
                  <span className={styles.errorMsg}>{errors.flexLocation}</span>
                )}
              </div>
            </div>
          </div>

          {/* ── Section 3: Work Experience ── */}
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>03</span>
              <h2 className={styles.sectionTitle}>Work Experience</h2>
              <span className={styles.sectionNote}>No worry if you have none</span>
            </div>
            <div className={styles.grid2}>
              <div className={styles.field} data-field="workedBefore">
                <label className={styles.label}>Have you worked as a cleaner before? <span className={styles.req}>*</span></label>
                <div className={styles.radioGroup}>
                  {["Yes", "No"].map((v) => (
                    <label key={v} className={styles.radioLabel}>
                      <input
                        type="radio"
                        name="workedBefore"
                        value={v}
                        checked={form.workedBefore === v}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={styles.radio}
                      />
                      {v}
                    </label>
                  ))}
                </div>
                {errors.workedBefore && touched.workedBefore && (
                  <span className={styles.errorMsg}>{errors.workedBefore}</span>
                )}
              </div>
              {form.workedBefore === "Yes" && (
                <div className={styles.field}>
                  <label htmlFor="cf-previousEmployer" className={styles.label}>If yes, where have you worked before?</label>
                  <p className={styles.hint}>Optional</p>
                  <input
                    id="cf-previousEmployer"
                    type="text"
                    name="previousEmployer"
                    value={form.previousEmployer}
                    onChange={handleChange}
                    className={styles.input}
                  />
                </div>
              )}
              <div className={`${styles.field} ${styles.fullWidth}`}>
                <label className={styles.label}>Where have you cleaned before?</label>
                <p className={styles.hint}>You can choose more than one</p>
                <div className={styles.checkboxGroup}>
                  {cleaningPlaceOptions.map((place) => (
                    <label key={place} className={styles.checkboxLabel}>
                      <input
                        type="checkbox"
                        checked={form.cleaningPlaces.includes(place)}
                        onChange={() => handleCheckboxGroup(place)}
                        className={styles.checkbox}
                      />
                      {place}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Section 4: Training & Future Plans ── */}
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>04</span>
              <h2 className={styles.sectionTitle}>Training &amp; Future Plans</h2>
            </div>
            <div className={styles.grid2}>
              <div className={styles.field} data-field="willingToTrain">
                <label className={styles.label}>
                  Are you willing to attend training and learn while working with us? <span className={styles.req}>*</span>
                </label>
                <div className={styles.radioGroup}>
                  {["Yes", "No"].map((v) => (
                    <label key={v} className={styles.radioLabel}>
                      <input
                        type="radio"
                        name="willingToTrain"
                        value={v}
                        checked={form.willingToTrain === v}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={styles.radio}
                      />
                      {v}
                    </label>
                  ))}
                </div>
                {errors.willingToTrain && touched.willingToTrain && (
                  <span className={styles.errorMsg}>{errors.willingToTrain}</span>
                )}
              </div>
              <div className={styles.field} data-field="hasFuturePlans">
                <label className={styles.label}>
                  Do you have something you want to become or do in the future? <span className={styles.req}>*</span>
                </label>
                <div className={styles.radioGroup}>
                  {["Yes", "Not yet", "I am not sure"].map((v) => (
                    <label key={v} className={styles.radioLabel}>
                      <input
                        type="radio"
                        name="hasFuturePlans"
                        value={v}
                        checked={form.hasFuturePlans === v}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={styles.radio}
                      />
                      {v}
                    </label>
                  ))}
                </div>
                {errors.hasFuturePlans && touched.hasFuturePlans && (
                  <span className={styles.errorMsg}>{errors.hasFuturePlans}</span>
                )}
              </div>
              {form.hasFuturePlans === "Yes" && (
                <div className={`${styles.field} ${styles.fullWidth}`}>
                  <label htmlFor="cf-futurePlans" className={styles.label}>What do you want to become or do in the future?</label>
                  <p className={styles.hint}>Optional. You can write anything.</p>
                  <textarea
                    id="cf-futurePlans"
                    name="futurePlans"
                    value={form.futurePlans}
                    onChange={handleChange}
                    className={`${styles.input} ${styles.textarea}`}
                    rows={3}
                  />
                </div>
              )}
              <div className={`${styles.field} ${styles.fullWidth}`} data-field="openToGrowth">
                <label className={styles.label}>
                  Are you open to learning and moving into another job or business within 1 year if we support you? <span className={styles.req}>*</span>
                </label>
                <div className={styles.radioGroup}>
                  {["Yes", "Maybe", "Not sure"].map((v) => (
                    <label key={v} className={styles.radioLabel}>
                      <input
                        type="radio"
                        name="openToGrowth"
                        value={v}
                        checked={form.openToGrowth === v}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={styles.radio}
                      />
                      {v}
                    </label>
                  ))}
                </div>
                {errors.openToGrowth && touched.openToGrowth && (
                  <span className={styles.errorMsg}>{errors.openToGrowth}</span>
                )}
              </div>
            </div>
          </div>

          {/* ── Section 5: Document Upload ── */}
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>05</span>
              <h2 className={styles.sectionTitle}>Document Upload</h2>
              <span className={`${styles.sectionNote} ${styles.important}`}>Very Important</span>
            </div>
            <p className={styles.uploadIntro}>
              Please upload clear pictures or scans. Make sure the writing can be read clearly.
              Maximum file size: 5 MB per document.
            </p>
            <div className={styles.uploadGrid}>
              <div
                className={`${styles.uploadCard}${errors.idDocument && touched.idDocument ? ` ${styles.uploadCardError}` : ""}`}
                data-field="idDocument"
              >
                <div className={styles.uploadCardHeader}>
                  <span className={styles.uploadIcon}>🪪</span>
                  <div>
                    <p className={styles.uploadLabel}>Means of Identification <span className={styles.req}>*</span></p>
                    <p className={styles.uploadHint}>
                      National ID (NIN slip or card), Voter&#39;s Card, Driver&#39;s Licence, or International Passport
                    </p>
                  </div>
                </div>
                {fileNames.idDocument ? (
                  <div className={styles.fileChosen}>
                    <span className={styles.fileChosenName} title={fileNames.idDocument}>{fileNames.idDocument}</span>
                    <button type="button" onClick={() => handleRemoveFile("idDocument")} className={styles.fileRemove} aria-label="Remove file">✕</button>
                  </div>
                ) : (
                  <label className={styles.fileInputWrapper}>
                    <input type="file" name="idDocument" accept="image/*,.pdf" onChange={handleFileChange} className={styles.fileInput} />
                    <span className={styles.fileButton}>Choose file</span>
                  </label>
                )}
                {errors.idDocument && touched.idDocument && (
                  <span className={styles.errorMsg}>{errors.idDocument}</span>
                )}
              </div>

              <div
                className={`${styles.uploadCard}${errors.passport && touched.passport ? ` ${styles.uploadCardError}` : ""}`}
                data-field="passport"
              >
                <div className={styles.uploadCardHeader}>
                  <span className={styles.uploadIcon}>📷</span>
                  <div>
                    <p className={styles.uploadLabel}>Recent Passport Photograph <span className={styles.req}>*</span></p>
                    <p className={styles.uploadHint}>Clear face photo, plain background</p>
                  </div>
                </div>
                {fileNames.passport ? (
                  <div className={styles.fileChosen}>
                    <span className={styles.fileChosenName} title={fileNames.passport}>{fileNames.passport}</span>
                    <button type="button" onClick={() => handleRemoveFile("passport")} className={styles.fileRemove} aria-label="Remove file">✕</button>
                  </div>
                ) : (
                  <label className={styles.fileInputWrapper}>
                    <input type="file" name="passport" accept="image/*" onChange={handleFileChange} className={styles.fileInput} />
                    <span className={styles.fileButton}>Choose file</span>
                  </label>
                )}
                {errors.passport && touched.passport && (
                  <span className={styles.errorMsg}>{errors.passport}</span>
                )}
              </div>

              <div
                className={`${styles.uploadCard}${errors.proofOfAddress && touched.proofOfAddress ? ` ${styles.uploadCardError}` : ""}`}
                data-field="proofOfAddress"
              >
                <div className={styles.uploadCardHeader}>
                  <span className={styles.uploadIcon}>🏠</span>
                  <div>
                    <p className={styles.uploadLabel}>Proof of Address <span className={styles.req}>*</span></p>
                    <p className={styles.uploadHint}>
                      Utility bill, letter from landlord or community leader, or any document showing where you live
                    </p>
                  </div>
                </div>
                {fileNames.proofOfAddress ? (
                  <div className={styles.fileChosen}>
                    <span className={styles.fileChosenName} title={fileNames.proofOfAddress}>{fileNames.proofOfAddress}</span>
                    <button type="button" onClick={() => handleRemoveFile("proofOfAddress")} className={styles.fileRemove} aria-label="Remove file">✕</button>
                  </div>
                ) : (
                  <label className={styles.fileInputWrapper}>
                    <input type="file" name="proofOfAddress" accept="image/*,.pdf" onChange={handleFileChange} className={styles.fileInput} />
                    <span className={styles.fileButton}>Choose file</span>
                  </label>
                )}
                {errors.proofOfAddress && touched.proofOfAddress && (
                  <span className={styles.errorMsg}>{errors.proofOfAddress}</span>
                )}
              </div>
            </div>
          </div>

          {/* ── Section 6: Work Attitude & Confirmation ── */}
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>06</span>
              <h2 className={styles.sectionTitle}>Work Attitude &amp; Confirmation</h2>
            </div>
            <div className={styles.grid2}>
              <div className={`${styles.field} ${styles.fullWidth}`}>
                <label htmlFor="cf-motivation" className={styles.label}>
                  Why do you want to work with Inspire Limited? <span className={styles.req}>*</span>
                </label>
                <p className={styles.hint}>Short answer</p>
                <textarea
                  id="cf-motivation"
                  name="motivation"
                  value={form.motivation}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`${styles.input} ${styles.textarea}${errors.motivation && touched.motivation ? ` ${styles.inputError}` : ""}`}
                  rows={3}
                />
                {errors.motivation && touched.motivation && (
                  <span className={styles.errorMsg}>{errors.motivation}</span>
                )}
              </div>
              <div className={styles.field} data-field="followsInstructions">
                <label className={styles.label}>
                  Are you ready to follow instructions and work with supervisors? <span className={styles.req}>*</span>
                </label>
                <div className={styles.radioGroup}>
                  {["Yes", "No"].map((v) => (
                    <label key={v} className={styles.radioLabel}>
                      <input
                        type="radio"
                        name="followsInstructions"
                        value={v}
                        checked={form.followsInstructions === v}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={styles.radio}
                      />
                      {v}
                    </label>
                  ))}
                </div>
                {errors.followsInstructions && touched.followsInstructions && (
                  <span className={styles.errorMsg}>{errors.followsInstructions}</span>
                )}
              </div>
              <div className={styles.field} data-field="promisePunctual">
                <label className={styles.label}>
                  Can you promise to be punctual, honest, and respectful at work? <span className={styles.req}>*</span>
                </label>
                <div className={styles.radioGroup}>
                  {["Yes", "No"].map((v) => (
                    <label key={v} className={styles.radioLabel}>
                      <input
                        type="radio"
                        name="promisePunctual"
                        value={v}
                        checked={form.promisePunctual === v}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={styles.radio}
                      />
                      {v}
                    </label>
                  ))}
                </div>
                {errors.promisePunctual && touched.promisePunctual && (
                  <span className={styles.errorMsg}>{errors.promisePunctual}</span>
                )}
              </div>
            </div>

            <div className={`${styles.confirmBox}${errors.confirmed && touched.confirmed ? ` ${styles.confirmBoxError}` : ""}`}>
              <label className={styles.confirmLabel}>
                <input
                  type="checkbox"
                  name="confirmed"
                  checked={form.confirmed}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={styles.confirmCheckbox}
                />
                <span>
                  I confirm that the information and documents I provided are correct. I understand that
                  false information can lead to disqualification or removal from work.
                </span>
              </label>
              {errors.confirmed && touched.confirmed && (
                <p className={`${styles.errorMsg} ${styles.confirmError}`}>{errors.confirmed}</p>
              )}
            </div>
          </div>

          <div className={styles.submitRow}>
            <button
              type="submit"
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting…" : "Submit Application"}
            </button>
          </div>
          </form>
        </div>
      </div>
    </section>
  );
}
