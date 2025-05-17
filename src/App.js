import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';

import Home from './Pages/Home';
import Navbar from './components/Navbar';
import About from './Pages/About';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Contact from './Pages/Contact';
const App = () => {
  const location = useLocation();
  const showNavbar = [
    '/',
    '/about',
    '/register',
    '/login',
    '/contact',
  ].includes(location.pathname);
  return (
    <div>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

const Main = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};
export default Main;
