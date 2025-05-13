import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    contact: '',
    address: '',
    state: '',
    pincode: '',
    password: '',
    confirmPassword: '',
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
    const {
      firstname,
      lastname,
      email,
      contact,
      address,
      state,
      pincode,
      password,
      confirmPassword,
    } = formData;

    // Check if all required fields are filled
    if (
      !firstname ||
      !lastname ||
      !email ||
      !contact ||
      !address ||
      !state ||
      !pincode ||
      !password ||
      !confirmPassword
    ) {
      setStatusMessage('Please fill in all required fields.');
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      setStatusMessage('Password and Confirm Password do not match.');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('http://localhost:8082/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Send plain password
      });

      if (response.ok) {
        setStatusMessage(
          'Registration successful! Please check your email for verification.'
        );
        // Clear form data after successful registration
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          contact: '',
          address: '',
          state: '',
          pincode: '',
          password: '',
          confirmPassword: '',
        });
      } else {
        const errorData = await response.json();
        setStatusMessage(`Registration failed: ${errorData.message}`);
      }
    } catch (error) {
      setStatusMessage(`An error occurred: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="register-container">
      <h1>Register Here</h1>
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstname">Firstname*</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            required
          />

          <label htmlFor="lastname">Lastname*</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email*</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="contact">Contact*</label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
          />

          <label htmlFor="address">Address*</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />

          <label htmlFor="state">State*</label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />

          <label htmlFor="pincode">Pincode*</label>
          <input
            type="text"
            id="pincode"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            required
          />

          <label htmlFor="password">Password*</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <label htmlFor="confirmPassword">Confirm Password*</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Registering...' : 'Register Here'}
          </button>
        </div>
        {statusMessage && <p className="status-message">{statusMessage}</p>}
      </form>
    </div>
  );
};

export default Register;
