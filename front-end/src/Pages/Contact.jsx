import React, { useState } from 'react';
import { submitContactForm } from '../api';

function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); 
    setErrors({ ...errors, [name]: '' }); 
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isFormEmpty = false;

    Object.values(formData).forEach(value => {
      if (value.trim() === '') {
        isFormEmpty = true;
      }
    });

    if (isFormEmpty) {
      alert('Please fill in all fields');
    } else {
      if (validateForm()) {
        try {
          const response = await submitContactForm(formData);
          alert(response.data.message); // Display success message
          // Reset form after submission
          setFormData({ email: '', message: '' });
        } catch (error) {
          alert(error.response.data.message); // Display error message
        }
      } else {
        let errorMessage = '';
        if (errors.email) errorMessage += errors.email + '\n';
        if (errors.message) errorMessage += errors.message;
        alert(errorMessage);
      }
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ textAlign: 'center', fontSize: '22px', fontWeight: '500' }}>Contact Us ☎️</h2>
      <p style={{ textAlign: 'center' }}>Feel free to contact us for any inquiries!</p>
      <div style={{ marginBottom: '20px', textAlign: 'center', fontSize: '14px' }}>
        📧 Email: FitnessRevolution@gmail.com<br />
        ☎️ Phone: +94758900795 
      </div>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '16px', boxSizing: 'border-box', ...(errors.email && { borderColor: '#ff0000' }) }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '16px', boxSizing: 'border-box', resize: 'vertical', ...(errors.message && { borderColor: '#ff0000' }) }}
          />
        </div>
        <button type="submit" style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', padding: '10px 20px', cursor: 'pointer' }}>Submit</button>
      </form>
    </div>
  );
}

export default Contact;
















