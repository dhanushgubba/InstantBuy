import { useState } from 'react';
import { FaEnvelope, FaLock, FaShoppingCart } from 'react-icons/fa';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      setStatusMessage('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    try {
      // Simulated API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatusMessage('✅ Login successful!');
      setFormData({ email: '', password: '', rememberMe: false });
    } catch (error) {
      setStatusMessage('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <FaShoppingCart className="shop-icon" />
          <h2>Welcome Back!</h2>
          <p>Sign in to your account</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
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

          <div className="form-footer">
            <label className="remember-me">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              <span>Remember me</span>
            </label>

            {/*eslint-disable-next-line*/}
            <a href="#" className="forgot-password">
              Forgot password?
            </a>
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Signing in...' : 'Sign In'}
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

          <div className="register-prompt">
            <span>Don't have an account?</span>
            {/*eslint-disable-next-line*/}
            <a href="/register" className="register-link">
              Register now
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
