import React, { useState } from 'react';
import HomePage from './components/HomePage';
import FormPage from './components/FormPage';
import Intro from './components/Intro';
import './styles/App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [showIntro, setShowIntro] = useState(true);
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    dueDate: '',
    gender: '',
    culturalBackground: '',
    nameStyle: '',
    meaningPreference: '',
    syllables: '',
    avoidNames: '',
    additionalNotes: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (!formData.parentName || !formData.email) {
      alert('Please fill in your name and email address');
      return;
    }
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you soon at ' + formData.email);
    setCurrentPage('home');
    setFormData({
      parentName: '',
      email: '',
      phone: '',
      dueDate: '',
      gender: '',
      culturalBackground: '',
      nameStyle: '',
      meaningPreference: '',
      syllables: '',
      avoidNames: '',
      additionalNotes: ''
    });
  };

  return (
    <>
      {showIntro && <Intro onComplete={() => setShowIntro(false)} />}
      {currentPage === 'home' ? (
        <HomePage setCurrentPage={setCurrentPage} />
      ) : (
        <FormPage 
          setCurrentPage={setCurrentPage}
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
      )}
    </>
  );
};

export default App;