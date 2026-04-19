import React from 'react';
import Header from './Header';
import '../styles/FormPage.css';

const FormPage = ({ setCurrentPage, formData, handleInputChange, handleSubmit, submitting }) => {
  return (
    <div className="form-page">
      <Header setCurrentPage={setCurrentPage} alwaysVisible />

      {/* Back */}
      <button className="page-back-btn" onClick={() => setCurrentPage('home')}>← Back</button>

      {/* Hero */}
      <div className="form-hero">
        <h1 className="form-hero-title">Tell Us About<br />Your Little One</h1>
        <p className="form-hero-subtitle">Share your preferences and I'll find the name that truly belongs.</p>
      </div>

      {/* Form body */}
      <div className="form-body">

        {/* Contact Information */}
        <div className="form-section-block">
          <h2 className="form-section-title">Contact Information</h2>
          <div className="form-field">
            <label className="form-label">Your name(s) *</label>
            <input type="text" name="parentName" value={formData.parentName}
              onChange={handleInputChange} className="form-input" placeholder="Enter your name(s)" />
          </div>
          <div className="form-field">
            <label className="form-label">Email Address *</label>
            <input type="email" name="email" value={formData.email}
              onChange={handleInputChange} className="form-input" placeholder="your.email@example.com" />
          </div>
          <div className="form-field">
            <label className="form-label">Phone Number</label>
            <input type="tel" name="phone" value={formData.phone}
              onChange={handleInputChange} className="form-input" placeholder="(555) 123-4567" />
          </div>
        </div>

        <hr className="form-divider" />

        {/* Baby Details */}
        <div className="form-section-block">
          <h2 className="form-section-title">Baby Details</h2>
          <div className="form-field">
            <label className="form-label">Expected Due Date</label>
            <input type="date" name="dueDate" value={formData.dueDate}
              onChange={handleInputChange} className="form-input" />
          </div>
          <div className="form-field">
            <label className="form-label">Gender Preference</label>
            <select name="gender" value={formData.gender}
              onChange={handleInputChange} className="form-input">
              <option value="">Select an option</option>
              <option value="boy">Boy</option>
              <option value="girl">Girl</option>
              <option value="unisex">Gender-neutral</option>
              <option value="surprise">Keeping it a surprise</option>
            </select>
          </div>
        </div>

        <hr className="form-divider" />

        {/* Name Preferences */}
        <div className="form-section-block">
          <h2 className="form-section-title">Name Preferences</h2>
          <div className="form-field">
            <label className="form-label">Cultural or Heritage Background</label>
            <input type="text" name="culturalBackground" value={formData.culturalBackground}
              onChange={handleInputChange} className="form-input" placeholder="e.g., Irish, Japanese, multicultural" />
          </div>
          <div className="form-field">
            <label className="form-label">Name Style</label>
            <select name="nameStyle" value={formData.nameStyle}
              onChange={handleInputChange} className="form-input">
              <option value="">Select a style</option>
              <option value="classic">Classic &amp; Traditional</option>
              <option value="modern">Modern &amp; Contemporary</option>
              <option value="unique">Unique &amp; Uncommon</option>
              <option value="nature">Nature-inspired</option>
              <option value="vintage">Vintage &amp; Old-fashioned</option>
              <option value="other">Other</option>
            </select>
          </div>
          {formData.nameStyle === 'other' && (
            <div className="form-field">
              <label className="form-label">Please describe your style</label>
              <input type="text" name="nameStyleOther" value={formData.nameStyleOther}
                onChange={handleInputChange} className="form-input" placeholder="Describe the name style you have in mind" />
            </div>
          )}
          <div className="form-field">
            <label className="form-label">Meaning or Theme Preference</label>
            <input type="text" name="meaningPreference" value={formData.meaningPreference}
              onChange={handleInputChange} className="form-input" placeholder="e.g., strength, light, nature, joy" />
          </div>
          <div className="form-field">
            <label className="form-label">Preferred Number of Syllables</label>
            <select name="syllables" value={formData.syllables}
              onChange={handleInputChange} className="form-input">
              <option value="">No preference</option>
              <option value="1">One syllable</option>
              <option value="2">Two syllables</option>
              <option value="3">Three syllables</option>
              <option value="4+">Four or more syllables</option>
            </select>
          </div>
          <div className="form-field">
            <label className="form-label">Names to Avoid</label>
            <input type="text" name="avoidNames" value={formData.avoidNames}
              onChange={handleInputChange} className="form-input" placeholder="Names of family members, friends, etc." />
          </div>
          <div className="form-field">
            <label className="form-label">Additional Notes</label>
            <textarea name="additionalNotes" value={formData.additionalNotes}
              onChange={handleInputChange} rows="5"
              className="form-input form-textarea"
              placeholder="Share any other preferences, family traditions, or special considerations..." />
          </div>
        </div>

        {/* Actions */}
        <div className="form-actions">
          <button onClick={() => setCurrentPage('home')} className="form-back-btn">
            Back
          </button>
          <button onClick={handleSubmit} className="form-submit-btn"
            disabled={submitting}
            style={{ opacity: submitting ? 0.6 : 1, cursor: submitting ? 'not-allowed' : 'pointer' }}>
            {submitting ? 'Sending…' : 'Submit Your Preferences'}
          </button>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-container">
          <p className="footer-text">© 2024 The Whispered Kin. Nurturing names, honoring heritage.</p>
          <p className="footer-text"><a href="mailto:cassia@thewhisperedkin.com" style={{ color: 'inherit', textDecoration: 'underline' }}>cassia@thewhisperedkin.com</a></p>
          <p className="footer-text"><a href="https://www.instagram.com/thewhisperedkin" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>@thewhisperedkin</a></p>
        </div>
      </footer>
    </div>
  );
};

export default FormPage;
