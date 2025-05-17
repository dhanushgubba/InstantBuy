import { useState } from 'react';
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLock,
  FaBuilding,
} from 'react-icons/fa';
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

    if (password !== confirmPassword) {
      setStatusMessage('Passwords do not match.');
      return;
    }

    if (password.length < 8) {
      setStatusMessage('Password must be at least 8 characters long.');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('http://localhost:8082/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatusMessage(
          '✅ Registration successful! Please check your email for verification.'
        );
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
        setStatusMessage(`❌ Registration failed: ${errorData.message}`);
      }
    } catch (error) {
      setStatusMessage(`❌ An error occurred: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <div className="register-header">
          <h1>Create Account</h1>
          <p>Join our e-commerce community today</p>
        </div>

        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="input-group">
              <FaUser className="input-icon" />
              <input
                type="text"
                name="firstname"
                placeholder="First Name"
                value={formData.firstname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <FaUser className="input-icon" />
              <input
                type="text"
                name="lastname"
                placeholder="Last Name"
                value={formData.lastname}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <FaPhone className="input-icon" />
            <input
              type="tel"
              name="contact"
              placeholder="Contact Number"
              value={formData.contact}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <FaMapMarkerAlt className="input-icon" />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <div className="input-group">
              <FaBuilding className="input-icon" />
              <input
                type="text"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <FaMapMarkerAlt className="input-icon" />
              <input
                type="text"
                name="pincode"
                placeholder="Pincode"
                value={formData.pincode}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Creating Account...' : 'Create Account'}
          </button>

          {statusMessage && (
            <p
              className={`status-message ${
                statusMessage.includes('✅') ? 'success' : 'error'
              }`}
            >
              {statusMessage}
            </p>
          )}

          <div className="login-prompt">
            Already have an account?{' '}
            <a href="/login" className="login-link">
              Sign in
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
