import React from 'react';
import '../styles/FormPage.css';

const FormPage = ({ setCurrentPage, formData, handleInputChange, handleSubmit }) => {
  return (
    <div className="form-page">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="logo-section" onClick={() => setCurrentPage('home')}>
            <div className="logo-icon">
              <img src="/tree-logo.png" alt="The Whispered Kin" className="tree-logo" />
            </div>
            <h1 className="site-title">The Whispered Kin</h1>
          </div>
        </div>
      </header>

      {/* Form Section */}
      <section className="form-section">
        <div className="form-container">
          <h2 className="form-main-title">Tell Us About Your Little One</h2>
          <p className="form-subtitle">
            Share your preferences and we'll curate the perfect name suggestions for your family.
          </p>

          <div className="form-content">
            {/* Contact Information */}
            <div className="form-group contact-section">
              <h3 className="section-title">Contact Information</h3>
              
              <div className="input-group">
                <div className="field">
                  <label className="label">Your Name *</label>
                  <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleInputChange}
                    className="input"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="field">
                  <label className="label">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="input"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="field">
                  <label className="label">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="input"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>
            </div>

            {/* Baby Information */}
            <div className="form-group baby-section">
              <h3 className="section-title">Baby Details</h3>
              
              <div className="input-group">
                <div className="field">
                  <label className="label">Expected Due Date</label>
                  <input
                    type="date"
                    name="dueDate"
                    value={formData.dueDate}
                    onChange={handleInputChange}
                    className="input"
                  />
                </div>

                <div className="field">
                  <label className="label">Gender Preference</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="input"
                  >
                    <option value="">Select an option</option>
                    <option value="boy">Boy</option>
                    <option value="girl">Girl</option>
                    <option value="unisex">Gender-neutral</option>
                    <option value="surprise">Keeping it a surprise</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Name Preferences */}
            <div className="form-group preferences-section">
              <h3 className="section-title">Name Preferences</h3>
              
              <div className="input-group">
                <div className="field">
                  <label className="label">Cultural or Heritage Background</label>
                  <input
                    type="text"
                    name="culturalBackground"
                    value={formData.culturalBackground}
                    onChange={handleInputChange}
                    className="input"
                    placeholder="e.g., Irish, Japanese, multicultural"
                  />
                </div>

                <div className="field">
                  <label className="label">Name Style</label>
                  <select
                    name="nameStyle"
                    value={formData.nameStyle}
                    onChange={handleInputChange}
                    className="input"
                  >
                    <option value="">Select a style</option>
                    <option value="classic">Classic & Traditional</option>
                    <option value="modern">Modern & Contemporary</option>
                    <option value="unique">Unique & Uncommon</option>
                    <option value="nature">Nature-inspired</option>
                    <option value="vintage">Vintage & Old-fashioned</option>
                  </select>
                </div>

                <div className="field">
                  <label className="label">Meaning or Theme Preference</label>
                  <input
                    type="text"
                    name="meaningPreference"
                    value={formData.meaningPreference}
                    onChange={handleInputChange}
                    className="input"
                    placeholder="e.g., strength, light, nature, joy"
                  />
                </div>

                <div className="field">
                  <label className="label">Preferred Number of Syllables</label>
                  <select
                    name="syllables"
                    value={formData.syllables}
                    onChange={handleInputChange}
                    className="input"
                  >
                    <option value="">No preference</option>
                    <option value="1">One syllable</option>
                    <option value="2">Two syllables</option>
                    <option value="3">Three syllables</option>
                    <option value="4+">Four or more syllables</option>
                  </select>
                </div>

                <div className="field">
                  <label className="label">Names to Avoid</label>
                  <input
                    type="text"
                    name="avoidNames"
                    value={formData.avoidNames}
                    onChange={handleInputChange}
                    className="input"
                    placeholder="Names of family members, friends, etc."
                  />
                </div>

                <div className="field">
                  <label className="label">Additional Notes</label>
                  <textarea
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleInputChange}
                    rows="4"
                    className="input textarea"
                    placeholder="Share any other preferences, family traditions, or special considerations..."
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="button-group">
              <button
                onClick={() => setCurrentPage('home')}
                className="back-button"
              >
                Back
              </button>
              <button
                onClick={handleSubmit}
                className="submit-button"
              >
                Submit Your Preferences
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <p className="footer-text">© 2024 The Whispered Kin. Nurturing names, honoring heritage.</p>
        </div>
      </footer>
    </div>
  );
};

export default FormPage;