import React from 'react';

import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';


const Footer = () => {
  return (
    <div className="footer">
        <div className='footer-section'>
          <h3>Customer Service</h3>
          <ul>
            <li><Link to="#">Contact Us</Link></li>
            <li><Link to="#">Returns</Link></li>
            <li><Link to="#">Site Map</Link></li>
            <li><Link to="#">Blog</Link></li>
          </ul>
        </div>
        <div className='footer-section'>
          <h3>My Account</h3>
          <ul>
            <li><Link to="/account">My Account</Link></li>
            <li><Link to="#">Order History</Link></li>
            <li><Link to="/wishlist">Wish List</Link></li>
            <li><Link to="#">Newsletter</Link></li>
          </ul>
        </div>
        <div className='footer-section'>
              <h3>Contact Us</h3>
              <ul>
                  <li><i><FaMapMarkerAlt></FaMapMarkerAlt> </i><Link to="//maps.app.goo.gl/3AuRvRJVJiuRQ4Wd8">Helwan University</Link></li>
                  <li><i><FaPhone></FaPhone></i><Link to="callto:01018425423">01018425423</Link></li>
                  <li><i><FaEnvelope></FaEnvelope></i><Link to="mailto:FCAIHCare@Helwan.com">FCAIHCare@Helwan.com</Link></li>
                  <li><i><FaClock></FaClock></i> 7 days a week from 8:00 am to 5:00 pm</li>
          </ul>
          </div>
    </div>
  );
};

export default Footer;