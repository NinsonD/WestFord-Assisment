import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    agreeToContact: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <footer className="bg-[#0c2d46] text-white">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <img src="/images/img_asset_13x_1.png" alt="DeMont Logo" className="h-[87px] w-[282px]" />
            <div className="flex items-start space-x-3">
              <img src="/images/img_location.svg" alt="location" className="w-6 h-6 mt-1" />
              <p className="text-sm leading-6">802, 8th Floor, Block No. 10, Academic City – Dubai</p>
            </div>
            <div className="flex items-center space-x-3">
              <img src="/images/img_tollfreewhiteorange_1.png" alt="phone" className="w-8 h-8" />
              <span className="text-sm">800 33 666 8</span>
            </div>
            <div className="flex space-x-4">
              <img src="/images/img_facebook.svg" alt="Facebook" className="w-9 h-9 cursor-pointer hover:opacity-80" />
              <img src="/images/img_twitter.svg" alt="Twitter" className="w-9 h-9 cursor-pointer hover:opacity-80" />
              <img src="/images/img_insta.svg" alt="Instagram" className="w-9 h-9 cursor-pointer hover:opacity-80" />
              <img src="/images/img_linkedin.svg" alt="LinkedIn" className="w-9 h-9 cursor-pointer hover:opacity-80" />
            </div>
          </div>

          {/* Menu */}
          <div className="space-y-6">
            <h3 className="text-2xl font-medium">Menu</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <img src="/images/img_line_16.svg" alt="line" className="w-0.5 h-2" />
                <Link to="/about" className="text-sm hover:text-[#eca22d]">About Us</Link>
              </div>
              <div className="flex items-center space-x-2">
                <img src="/images/img_line_16.svg" alt="line" className="w-0.5 h-2" />
                <Link to="/programs" className="text-sm hover:text-[#eca22d]">Programs</Link>
              </div>
              <div className="flex items-center space-x-2">
                <img src="/images/img_line_16.svg" alt="line" className="w-0.5 h-2" />
                <Link to="/partners" className="text-sm hover:text-[#eca22d]">Our Partners</Link>
              </div>
              <div className="flex items-center space-x-2">
                <img src="/images/img_line_16.svg" alt="line" className="w-0.5 h-2" />
                <Link to="/blogs" className="text-sm hover:text-[#eca22d]">Our Blogs</Link>
              </div>
              <div className="flex items-center space-x-2">
                <img src="/images/img_line_16.svg" alt="line" className="w-0.5 h-2" />
                <Link to="/contact" className="text-sm hover:text-[#eca22d]">Contact Us</Link>
              </div>
            </div>
          </div>

          {/* Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-medium">Information</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <img src="/images/img_line_16.svg" alt="line" className="w-0.5 h-2" />
                <Link to="/skill-master" className="text-sm hover:text-[#eca22d]">Skill Master</Link>
              </div>
              <div className="flex items-center space-x-2">
                <img src="/images/img_line_16.svg" alt="line" className="w-0.5 h-2" />
                <Link to="/delead" className="text-sm hover:text-[#eca22d]">DeLead</Link>
              </div>
              <div className="flex items-center space-x-2">
                <img src="/images/img_line_16.svg" alt="line" className="w-0.5 h-2" />
                <Link to="/decode" className="text-sm hover:text-[#eca22d]">DeCode</Link>
              </div>
              <div className="flex items-center space-x-2">
                <img src="/images/img_line_16.svg" alt="line" className="w-0.5 h-2" />
                <Link to="/privacy" className="text-sm hover:text-[#eca22d]">Privacy Policy</Link>
              </div>
              <div className="flex items-center space-x-2">
                <img src="/images/img_line_16.svg" alt="line" className="w-0.5 h-2" />
                <Link to="/refund" className="text-sm hover:text-[#eca22d]">Refund Policy</Link>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-6">
            <h3 className="text-2xl font-medium">Get in Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="bg-[#e7ebed] rounded-[20px] p-6 shadow-md">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-transparent text-black placeholder-black text-sm outline-none"
                  required
                />
              </div>
              <div className="bg-[#e7ebed] rounded-[19px] p-6 shadow-md">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-transparent text-black placeholder-black text-sm outline-none"
                  required
                />
              </div>
              <div className="bg-[#e7ebed] rounded-[20px] p-6 shadow-md">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-transparent text-black placeholder-black text-sm outline-none"
                  required
                />
              </div>
              <div className="bg-[#e7ebed] rounded-[25px] p-6 shadow-md">
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full bg-transparent text-black placeholder-black text-sm outline-none resize-none"
                  required
                />
              </div>
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  name="agreeToContact"
                  checked={formData.agreeToContact}
                  onChange={handleInputChange}
                  className="w-4 h-4 mt-1 bg-[#d9d9d9] rounded"
                  required
                />
                <p className="text-xs leading-4">I agree to share my contact info and receive exclusive offers via email or call</p>
              </div>
              <button
                type="submit"
                className="flex items-center justify-center space-x-2 w-full"
              >
                <img src="/images/img_submit_icon.svg" alt="submit" className="w-13 h-13" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#f5fafc] py-4">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-black text-sm">@ 2025 DEMONT. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;