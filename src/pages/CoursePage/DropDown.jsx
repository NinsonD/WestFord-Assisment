import React from 'react';
import { Link } from 'react-router-dom';

const programs = [
  {
    title: 'Higher National Diploma',
    image: '/images/hnd.png',
    link: '/programs/hnd',
  },
  {
    title: 'Foundation',
    image: '/images/foundation.png',
    link: '/programs/foundation',
  },
  {
    title: 'Teacher Education',
    image: '/images/teacher-education.png',
    link: '/programs/teacher-education',
  },
  {
    title: 'CMI Level 5 in Management and Leadership',
    image: '/images/cmi.png',
    link: '/programs/cmi',
  },
  {
    title: 'Certification Programs',
    image: '/images/certification.png',
    link: '/programs/certification',
  },
  {
    title: 'Continuing Professional Development (CPD)',
    image: '/images/cpd.png',
    link: '/programs/cpd',
  },
];

const DropDown = ({ open }) => {
  if (!open) return null;
  return (
    <div
      className="absolute left-0 top-full flex justify-center z-50 animate-fade-in"
      style={{
        background:
          'linear-gradient(180deg, #0C2D46 49.76%, rgba(12, 45, 70, 0.95) 55.68%, rgba(12, 45, 70, 0.00) 100%)',
        width: '1440px',
        height: '1026px',
        flexShrink: 0,
      }}
    >
      <div className="max-w-[1440px] w-full flex gap-8 justify-center">
        {programs.map((program, idx) => (
          <Link
            to={program.link}
            key={idx}
            className="bg-white rounded-[18px] w-[210px] h-[230px] flex flex-col justify-between shadow-md hover:shadow-lg transition-shadow duration-300 group"
          >
            <div className="p-5 pb-0">
              <div
                className="text-[1.2rem] font-medium text-black mb-2 leading-tight"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {program.title}
              </div>
            </div>
            <div className="flex-1 flex items-end justify-center px-4">
              <img
                src={program.image}
                alt={program.title}
                className="rounded-lg w-full h-[90px] object-cover"
              />
            </div>
            <div className="flex justify-end p-3 pt-0">
              <span className="bg-[#eca22d] rounded-full w-9 h-9 flex items-center justify-center transition-colors duration-200 group-hover:bg-[#d89b1d]">
                <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8 12h8m0 0-3-3m3 3-3 3"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DropDown;
