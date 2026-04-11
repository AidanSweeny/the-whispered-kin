import { useState, useEffect } from 'react';
import HomePage from './components/HomePage';
import FormPage from './components/FormPage';
import AboutMePage from './components/AboutMePage';
import FAQPage from './components/FAQPage';
import PricingPage from './components/PricingPage';
import ServicePage from './components/ServicePage';
import Intro from './components/Intro';
import './styles/App.css';

const EMPTY_FORM = {
  parentName: '',
  email: '',
  phone: '',
  dueDate: '',
  babySex: '',
  gender: '',
  culturalBackground: '',
  nameStyle: '',
  nameStyleOther: '',
  meaningPreference: '',
  syllables: '',
  avoidNames: '',
  additionalNotes: '',
};

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedService, setSelectedService] = useState(null);
  const [showIntro, setShowIntro] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState(EMPTY_FORM);

  const handleServiceSelect = (serviceId) => {
    setSelectedService(serviceId);
    setCurrentPage('service');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    if (!formData.parentName || !formData.email) {
      alert('Please fill in your name and email address');
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || res.statusText);
      }

      alert(`Thank you, ${formData.parentName}! We'll be in touch at ${formData.email} soon.`);
      setCurrentPage('home');
      setFormData(EMPTY_FORM);
    } catch (err) {
      console.error('Email send failed:', err);
      alert('Something went wrong sending your request. Please try again or contact us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {showIntro && <Intro onComplete={() => setShowIntro(false)} />}
      {currentPage === 'home' && <HomePage setCurrentPage={setCurrentPage} />}
      {currentPage === 'about' && <AboutMePage setCurrentPage={setCurrentPage} />}
      {currentPage === 'form' && (
        <FormPage
          setCurrentPage={setCurrentPage}
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          submitting={submitting}
        />
      )}
      {currentPage === 'faq' && <FAQPage setCurrentPage={setCurrentPage} />}
      {currentPage === 'pricing' && <PricingPage setCurrentPage={setCurrentPage} onServiceSelect={handleServiceSelect} />}
      {currentPage === 'service' && <ServicePage setCurrentPage={setCurrentPage} service={selectedService} />}
    </>
  );
};

export default App;