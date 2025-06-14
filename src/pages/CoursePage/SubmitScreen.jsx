import React from 'react';

const SubmitScreen = ({ onClose }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f6f6f6]">
      <div
        className="bg-white rounded-[24px] shadow-lg p-8 w-full relative flex flex-col items-center"
        style={{ width: '450px', height: '650px', flexShrink: 0 }}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-black text-xl"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        {/* Logo */}
        <img
          src="/images/img_asset_13x_1.png"
          alt="DeMont Logo"
          className="h-12 w-auto mb-4 mt-2"
        />
        {/* Thank You Text */}
        <h2 className="text-3xl font-light text-[#eca22d] mb-1 text-center">Thank you</h2>
        <p className="text-lg font-light text-black mb-4 text-center">for your interest!</p>
        {/* Message */}
        <p className="text-center text-gray-700 text-base mb-6">
          Your inquiry has been successfully submitted.
          <br />
          Our Academic Advisor shall get in touch with you
          <br />
          within the next 48 hours.
        </p>
        <p className="text-center text-gray-700 text-base mb-2">
          Please don't hesitate to contact us directly at:
        </p>
        {/* Contact Buttons */}
        <div className="flex gap-2 mb-6 w-full justify-center">
          <a
            href="tel:+97145804285"
            className="flex items-center bg-[#eca22d] text-white rounded-md px-4 py-2 text-sm font-medium hover:bg-[#d89a1b] transition-colors"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.3 1.2a2 2 0 01-.45 1.95l-.7.7a16.001 16.001 0 006.36 6.36l.7-.7a2 2 0 011.95-.45l1.2.3A2 2 0 0121 18.72V21a2 2 0 01-2 2h-1C9.163 23 1 14.837 1 5V4a2 2 0 012-2z"
              />
            </svg>
            +971 45804285
          </a>
          <a
            href="mailto:hello@demont.ac.ae"
            className="flex items-center bg-[#0c2d46] text-white rounded-md px-4 py-2 text-sm font-medium hover:bg-[#143a5a] transition-colors"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 12l-4-4-4 4m8 0v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6m16-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v4"
              />
            </svg>
            hello@demont.ac.ae
          </a>
        </div>
        {/* Social Icons */}
        <div className="flex gap-4 mt-2 mb-2">
          <a href="#" aria-label="Facebook">
            <img src="/images/img_facebook.svg" alt="Facebook" className="w-7 h-7" />
          </a>
          <a href="#" aria-label="X">
            <img src="/images/img_twitter.svg" alt="X" className="w-7 h-7" />
          </a>
          <a href="#" aria-label="Instagram">
            <img src="/images/img_insta.svg" alt="Instagram" className="w-7 h-7" />
          </a>
          <a href="#" aria-label="LinkedIn">
            <img src="/images/img_linkedin.svg" alt="LinkedIn" className="w-7 h-7" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SubmitScreen;
