import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DropDown from '../../pages/CoursePage/DropDown';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);

  return (
    <>
      {/* Top Header */}
      <div className="bg-[#0c2d46] text-white w-full flex justify-center">
        <div className="max-w-[1440px] w-full pl-4 flex flex-col md:flex-row justify-between items-center text-sm h-[45px] md:h-[45px]">
          <div className="flex items-center space-x-6 mb-2 md:mb-0">
            <div className="flex items-center space-x-2">
              <img src="/images/img_vector_yellow_800_16x20.svg" alt="email" className="w-4 h-5" />
              <span className="text-white font-medium text-sm md:text-base">
                hello@demont.ac.ae
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <img src="/images/img_vector_yellow_800_38x30.svg" alt="phone" className="w-4 h-3" />
              <span className="text-white font-medium text-sm md:text-base">800 33 666 8</span>
            </div>
          </div>
          <div className="flex items-center space-x-6 text-white font-medium text-sm md:text-base">
            <span>Why Study in the UAE?</span>
            <span>Our Blogs</span>
            <span>Careers</span>
            <div className="bg-[#eca22d] px-4 md:px-6 py-3 rounded-none flex items-center space-x-2 cursor-pointer">
              <span>Apply</span>
              <img src="/images/img_vector_white_a700.svg" alt="arrow" className="w-2 h-3" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div
        className="bg-[#f6f6f6] w-full flex justify-center relative overflow-visible sticky top-0 z-40 shadow-sm"
        style={{ height: '80px' }}
      >
        <div className="max-w-[1440px] w-full px-4 flex justify-between items-center relative h-full">
          <div className="absolute top-0 left-18 z-20 rounded-b-[40px] bg-[#f6f6f6] p-2 md:p-4">
            <img
              src="/images/img_group_25.svg"
              alt="DIIT Logo"
              className="h-20 md:h-[90px] w-auto md:w-[234px]"
            />
          </div>
          <div className="flex-1 flex justify-center md:justify-end w-full h-full items-center">
            {/* Hamburger for mobile */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 bg-black mb-1 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-black mb-1 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-black transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
              ></span>
            </button>
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
              <Link to="/about" className="text-black hover:text-[#eca22d] font-medium">
                About Us
              </Link>
              <div className="w-px h-8 bg-black/20"></div>
              <div
                className="flex items-center space-x-2 text-[#eca22d] font-medium cursor-pointer relative"
                // onMouseEnter={() => setIsProgramsOpen(true)}
                // onMouseLeave={() => setIsProgramsOpen(false)}
              >
                <span>Programs</span>
                <img
                  src="/images/img_vector_yellow_800_11x8.svg"
                  alt="dropdown"
                  className="w-3 h-2"
                />
                <DropDown open={isProgramsOpen} />
              </div>
              <div className="w-px h-8 bg-black/20"></div>
              <Link to="/partners" className="text-black hover:text-[#eca22d] font-medium">
                Our Partners
              </Link>
              <div className="w-px h-8 bg-black/20"></div>
              <div className="flex items-center space-x-2 text-black hover:text-[#eca22d] font-medium cursor-pointer">
                <span>DeMont Plus</span>
                <img
                  src="/images/img_vector_black_900_11x8.svg"
                  alt="dropdown"
                  className="w-3 h-2"
                />
              </div>
              <div className="w-px h-8 bg-black/20"></div>
              <Link
                to="/business-challenge"
                className="text-black hover:text-[#eca22d] font-medium"
              >
                Business Challenge
              </Link>
              <div className="w-px h-8 bg-black/20"></div>
              <Link to="/life-at-demont" className="text-black hover:text-[#eca22d] font-medium">
                Life at DeMont
              </Link>
            </nav>
            {/* Mobile Nav */}
            {isMenuOpen && (
              <nav className="absolute top-full right-0 mt-2 w-56 bg-white shadow-lg rounded-lg flex flex-col z-50 md:hidden animate-fade-in">
                <Link
                  to="/about"
                  className="px-6 py-3 border-b hover:bg-gray-100 text-black font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                <button
                  className="px-6 py-3 border-b flex items-center space-x-2 text-[#eca22d] font-medium hover:bg-gray-100 text-left"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>Programs</span>
                  <img
                    src="/images/img_vector_yellow_800_11x8.svg"
                    alt="dropdown"
                    className="w-3 h-2"
                  />
                </button>
                <Link
                  to="/partners"
                  className="px-6 py-3 border-b hover:bg-gray-100 text-black font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Our Partners
                </Link>
                <button
                  className="px-6 py-3 border-b flex items-center space-x-2 text-black font-medium hover:bg-gray-100 text-left"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>DeMont Plus</span>
                  <img
                    src="/images/img_vector_black_900_11x8.svg"
                    alt="dropdown"
                    className="w-3 h-2"
                  />
                </button>
                <Link
                  to="/business-challenge"
                  className="px-6 py-3 border-b hover:bg-gray-100 text-black font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Business Challenge
                </Link>
                <Link
                  to="/life-at-demont"
                  className="px-6 py-3 hover:bg-gray-100 text-black font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Life at DeMont
                </Link>
              </nav>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
