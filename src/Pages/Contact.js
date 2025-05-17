import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaComment } from 'react-icons/fa';
import './Contact.css';
const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
  });
  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      setStatusMessage('Please fill in all fields.');
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch('http://localhost:8082/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatusMessage('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        setStatusMessage('Failed to send message.');
      }
    } catch (error) {
      setStatusMessage('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h1 className="contact-heading">Contact Us</h1>
        <p className="contact-description">
          Get in touch with us for any inquiries or support.
        </p>
        <div className="form-group">
          <label htmlFor="name">
            <FaUser />
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">
            <FaEnvelope />
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="message">
            <FaComment />
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>

          {statusMessage && <p className="status-message">{statusMessage}</p>}
          <p className="contact-info">
            For any inquiries, please contact us at:{' '}
            <a href="mailto:2200030302@kluniversity.in">
              2200030302@kluniversity.in
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};
export default Contact;
