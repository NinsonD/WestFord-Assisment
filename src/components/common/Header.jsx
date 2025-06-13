import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Header */}
      <div
        className="bg-[#0c2d46] text-white"
        style={{ width: '1440px', height: '45px', flexShrink: 0 }}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <img src="/images/img_vector_yellow_800_16x20.svg" alt="email" className="w-4 h-5" />
              <span
                style={{
                  color: '#FFF',
                  fontFamily: 'Poppins',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: 'normal',
                }}
              >
                hello@demont.ac.ae
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <img src="/images/img_vector_yellow_800_38x30.svg" alt="phone" className="w-4 h-3" />
              <span
                style={{
                  color: '#FFF',
                  fontFamily: 'Poppins',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: 'normal',
                }}
              >
                800 33 666 8
              </span>
            </div>
          </div>
          <div
            className="flex items-center space-x-6"
            style={{
              color: '#FFF',
              fontFamily: 'Poppins',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: 'normal',
            }}
          >
            <span>Why Study in the UAE?</span>
            <span>Our Blogs</span>
            <span>Careers</span>
            <div
              className="bg-[#eca22d] px-6 py-2 rounded-none flex items-center space-x-2"
              style={{ width: '112px', height: '45px', flexShrink: 0 }}
            >
              <span>Apply</span>
              <img src="/images/img_vector_white_a700.svg" alt="arrow" className="w-2 h-3" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div
        className="bg-[#f6f6f6] py-6"
        style={{ width: '1440px', height: '111px', flexShrink: 0 }}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="bg-[#f6f6f6] rounded-b-[40px] p-4">
            <img src="/images/img_group_25.svg" alt="DIIT Logo" className="h-[71px] w-[234px]" />
          </div>
          <nav className="flex items-center space-x-8">
            <Link to="/about" className="text-black hover:text-[#eca22d] font-medium">
              About Us
            </Link>
            <div className="w-px h-8 bg-black/20"></div>
            <div className="flex items-center space-x-2 text-[#eca22d] font-medium">
              <span>Programs</span>
              <img
                src="/images/img_vector_yellow_800_11x8.svg"
                alt="dropdown"
                className="w-3 h-2"
              />
            </div>
            <div className="w-px h-8 bg-black/20"></div>
            <Link to="/partners" className="text-black hover:text-[#eca22d] font-medium">
              Our Partners
            </Link>
            <div className="w-px h-8 bg-black/20"></div>
            <div className="flex items-center space-x-2 text-black hover:text-[#eca22d] font-medium">
              <span>DeMont Plus</span>
              <img src="/images/img_vector_black_900_11x8.svg" alt="dropdown" className="w-3 h-2" />
            </div>
            <div className="w-px h-8 bg-black/20"></div>
            <Link to="/business-challenge" className="text-black hover:text-[#eca22d] font-medium">
              Business Challenge
            </Link>
            <div className="w-px h-8 bg-black/20"></div>
            <Link to="/life-at-demont" className="text-black hover:text-[#eca22d] font-medium">
              Life at DeMont
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
