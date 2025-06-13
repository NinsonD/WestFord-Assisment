import React, { useState } from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HeroSection from '../../components/common/HeroSection';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import './index.css';

const CoursePage = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    course: '',
    phone: '',
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [expandedSection, setExpandedSection] = useState('Higher National Diploma');

  const handleContactFormChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
    alert('Thank you for your interest! Our admission team will contact you soon.');
  };

  const handleScheduleCall = () => {
    alert('Call scheduled! Our team will contact you within 24 hours.');
  };

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? '' : section);
  };

  const skills = [
    { icon: '/images/img_ellipse_21.png', title: 'Programming Proficiency' },
    { icon: '/images/img_ellipse_24.png', title: 'Software Design Principles' },
    {
      icon: '/images/img_ellipse_22.png',
      title: 'Object-Oriented Programming',
    },
    { icon: '/images/img_ellipse_27.png', title: 'Agile Development' },
    { icon: '/images/img_ellipse_25.png', title: 'Software Documentation' },
    { icon: '/images/img_ellipse_26.png', title: 'Critical Thinking' },
  ];

  const jobOpportunities = [
    'Software Developer',
    'Web Developer',
    'Quality Assurance Engineer',
    'Database Developer',
    'Software Tester',
    'Technical Support Engineer',
  ];

  const coreModules = [
    { name: 'Programming', credit: '15' },
    { name: 'Networking', credit: '15' },
    { name: 'Professional Practice', credit: '15' },
    { name: 'Database Design & Development', credit: '15' },
    { name: 'Security', credit: '15' },
    { name: 'Planning a Computing Project (Pearson-set)', credit: '15' },
    { name: 'Software Development Lifecycles', credit: '15' },
    { name: 'Website Design & Development', credit: '15' },
    { name: 'Computing Research Project (Pearson-set)', credit: '30' },
    { name: 'Business Process Support', credit: '15' },
    { name: 'Discrete Maths', credit: '15' },
    { name: 'Data Structures & Algorithms', credit: '15' },
    { name: 'Applied Programming and Design Principles', credit: '15' },
    { name: 'Operating Systems', credit: '15' },
    { name: 'Cloud Computing', credit: '15' },
  ];

  const relatedCourses = [
    {
      title: 'Higher National Diploma International in Computing (Cyber Security)',
      image: '/images/img_rectangle_7.png',
    },
    {
      title: 'Higher National Diploma International in Computing',
      image: '/images/img_rectangle_7_191x308.png',
    },
    {
      title: 'BTEC International Level 3 Foundation-Diploma in Information Technology',
      image: '/images/img_rectangle_10.png',
    },
    {
      title: 'BTEC International Level 3 Extended Diploma in Information Technology',
      image: '/images/img_rectangle_10_191x308.png',
    },
  ];

  const courseCategories = [
    'Higher National Diploma',
    'Foundation',
    'Management and Leadership',
    'Teacher Education',
    'Certification Programs',
  ];

  const coursesData = {
    'Higher National Diploma': [
      'International In Computing (Software Engineering)',
      'International in Computing (Cyber Security)',
      'International In Computing',
      'International in Business (Business Management)',
      'International in Business (Marketing)',
      'International in Business (Accounting and Finance)',
      'International in Business (Human Resource Management)',
    ],
  };

  return (
    <div className="w-full flex justify-center bg-white">
      <div className="max-w-[1440px] w-full flex flex-col min-h-screen">
        <Header />
        <HeroSection />

        {/* Action Buttons */}
        <div className="flex space-x-8 pt-10 px-8">
          <div className="flex items-center space-x-4">
            <div className="w-1 h-8 bg-[#0c2d46]"></div>
            <div className="flex items-center space-x-4">
              <span className="text-base font-medium text-[#0c2d46]">Get Brochure</span>
              <div className="relative">
                <img
                  src="/images/img_group_blue_gray_300.svg"
                  alt="download icon"
                  className="w-11 h-11"
                />
                <img
                  src="/images/img_vector_blue_gray_900.svg"
                  alt="arrow"
                  className="absolute top-7 right-4 w-3 h-2"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-1 h-8 bg-[#0c2d46]"></div>
            <span className="text-base font-medium text-[#0c2d46]">Apply Now</span>
          </div>
        </div>

        {/* Programme Overview */}
        <section className="pt-16 bg-white w-full">
          <div className="max-w-[1440px] mx-auto px-8">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              <div className="flex-1">
                <h2 className="text-4xl font-medium mb-8">
                  <span className="text-black">Programme </span>
                  <span className="text-[#eca22d]">Overview</span>
                </h2>
                <div className="max-w-4xl text-base font-light text-black leading-6 space-y-6">
                  <p>
                    The Higher National Diploma International (HND) in Computing with a
                    specialization in Software Engineering is a comprehensive program designed to
                    equip students with the knowledge, skills, and practical experience needed to
                    excel in the dynamic field of software development. This program focuses on
                    preparing students for careers in designing, building, and maintaining software
                    applications that meet modern technological and business demands.
                  </p>
                  <p>
                    The Higher National Diploma International in Computing with a specialization in
                    Software Engineering offers a comprehensive education in the ever-evolving field
                    of software development. Through a blend of theoretical knowledge and hands-on
                    experience, students are prepared to contribute effectively to the creation of
                    innovative and practical software solutions, meeting the demands of modern
                    technology-driven industries. This program serves as a gateway for those seeking
                    to build a successful career in software engineering.
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-96 flex-shrink-0 relative top-2">
                <h3 className="text-4xl font-medium leading-tight pl-6 pb-4">
                  <span className="text-[#eca22d]">Talk </span>
                  <span className="text-black">
                    to Our
                    <br />
                    Admission Team
                  </span>
                </h3>
                <div className="bg-[#e7ebed] rounded-[25px] p-8">
                  <div className="z-10 space-y-6">
                    <form onSubmit={handleContactSubmit} className="space-y-4">
                      <div>
                        <label className="block text-lg font-medium text-black mb-2">Name</label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Enter your First & Last Names"
                          value={contactForm.name}
                          onChange={handleContactFormChange}
                          className="w-full text-base font-light text-[#6d6d6d] bg-transparent border-b border-gray-300 pb-2 outline-none"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-lg font-medium text-black mb-2">Email</label>
                        <input
                          type="email"
                          name="email"
                          placeholder="Enter your Email"
                          value={contactForm.email}
                          onChange={handleContactFormChange}
                          className="w-full text-base font-light text-[#6d6d6d] bg-transparent border-b border-gray-300 pb-2 outline-none"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-lg font-medium text-black mb-2">
                          Interested Course
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            name="course"
                            placeholder="Select a Course"
                            value={contactForm.course}
                            onChange={handleContactFormChange}
                            className="w-full text-base font-light text-[#6d6d6d] bg-transparent border-b border-gray-300 pb-2 outline-none"
                            required
                          />
                          <img
                            src="/images/img_vector_gray_600.svg"
                            alt="dropdown"
                            className="absolute right-0 top-2 w-2 h-3"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-lg font-medium text-black mb-2">Phone</label>
                        <div className="flex items-center space-x-2">
                          <img
                            src="/images/img_flagoftheunitedarabemirates_1.svg"
                            alt="UAE flag"
                            className="w-6 h-3"
                          />
                          <img
                            src="/images/img_vector_black_900_4x6.svg"
                            alt="dropdown"
                            className="w-1 h-2"
                          />
                          <span className="text-base font-light text-black">+971</span>
                          <input
                            type="tel"
                            name="phone"
                            value={contactForm.phone}
                            onChange={handleContactFormChange}
                            className="flex-1 bg-transparent border-b border-gray-300 pb-2 outline-none"
                            required
                          />
                        </div>
                      </div>

                      <Button
                        type="submit"
                        variant="primary"
                        className="w-full bg-[#eca22d] text-white rounded-[15px] py-3 mt-6"
                        onClick={handleScheduleCall}
                      >
                        <span>Schedule a Call</span>
                        <img
                          src="/images/img_vector_black_900.svg"
                          alt="arrow"
                          className="w-4 h-2 ml-2"
                        />
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Top Skills Section */}
        <section className="py-16 bg-[#fafbfb] w-full">
          <div className="max-w-[1440px] mx-auto px-8">
            <h2 className="text-4xl font-medium text-center mb-12">
              <span className="text-black">Top </span>
              <span className="text-[#eca22d]">Skills </span>you will Learn
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <img
                    src={skill.icon}
                    alt={skill.title}
                    className="w-32 h-32 rounded-full object-cover"
                  />
                  <h3 className="text-xl font-light text-black">{skill.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Opportunities */}
        <section className="bg-white relative w-full">
          <div className="max-w-[1440px] mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl py-6 font-medium text-black">
                  <span className="text-[#eca22d]">Job</span> Opportunities
                </h2>
                <p className="text-base font-light text-black leading-6 mb-8">
                  Graduates of the Higher National Diploma International (HND) in Computing
                  (Software Engineering) are well-equipped to pursue a wide range of job
                  opportunities in the dynamic field of software development. The skills gained
                  through this program open doors to various roles across industries that rely on
                  technology and software solutions.
                </p>
                <h3 className="text-2xl font-medium text-black mb-6">
                  Here are some of the job opportunities for graduates:
                </h3>
                <ul className="space-y-4">
                  {jobOpportunities.map((job, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <img src="/images/img_line_32.svg" alt="bullet" className="w-1 h-2" />
                      <span className="text-base font-light text-black">{job}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center">
                <img
                  src="/images/img_layer_2_1.png"
                  alt="Job Opportunities"
                  className="w-full max-w-[868px] h-[579px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Who Is This Programme For */}
        <section className="py-16 bg-[#0c2d46] w-full">
          <div className="max-w-[1440px] mx-auto px-8">
            <h2 className="text-4xl font-medium mb-8">
              <span className="text-[#eca22d]">Who</span>
              <span className="text-white"> Is This Programme for?</span>
            </h2>
            <p className="text-base font-light text-white leading-6 max-w-4xl">
              The Higher National Diploma International (HND) in Computing with a specialization in
              Software Engineering is designed for a diverse range of individuals who are interested
              in pursuing a career in the field of software development. This program caters to
              various backgrounds and aspirations, making it suitable for High School Graduates,
              Tech Enthusiasts, and IT Professionals etc.
            </p>
          </div>
        </section>

        {/* Minimum Eligibility & Awarding Body */}
        <section className="py-16 bg-white w-full">
          <div className="max-w-[1440px] mx-auto px-8 space-y-12">
            {/* Minimum Eligibility */}
            <div>
              <h2 className="text-4xl font-medium mb-6">
                <span className="text-[#eca22d]">Minimum </span> Eligibility
              </h2>
              <div className="flex items-center space-x-3">
                <img src="/images/img_line_32_blue_gray_900.svg" alt="bullet" className="w-1 h-2" />
                <p className="text-base font-light text-black">
                  Students must be <span className="font-semibold">High School Graduates</span>
                </p>
              </div>
            </div>

            {/* Awarding Body */}
            <div>
              <div className="flex items-center space-x-8 mb-6">
                <h2 className="text-4xl font-light text-black">Awarding Body:</h2>
                <img src="/images/img_pearson.png" alt="Pearson" className="h-14 w-47" />
              </div>
              <p className="text-base font-light text-black leading-6 max-w-6xl">
                Pearson Education is a British-owned educational publishing and appraisal service
                for educational institutions and corporations, as for students directly. It
                integrates world-class educational content and evaluation, driven by services and
                technology, to allow more efficient teaching and customized learning. Their mission
                is to have a direct partnership with millions of lifelong learners and to link
                education to the way people aspire to live and work each day. They assume that
                wherever learning flourishes, people do as well.
              </p>
            </div>
          </div>
        </section>

        {/* Core Modules & Key Learnings */}
        <section className="py-16 bg-white w-full">
          <div className="max-w-[1440px] mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Core Modules */}
              <div>
                <h2 className="text-4xl font-light text-black mb-8">Core Modules</h2>
                <Card className="border border-[#e6e6e6] rounded-[25px] overflow-hidden">
                  <div className="p-5">
                    <div className="grid grid-cols-2 gap-8 mb-8">
                      <h3 className="text-2xl font-medium text-black">Module Name</h3>
                      <h3 className="text-2xl font-medium text-black">Credit</h3>
                    </div>
                    <div className="space-y-6">
                      {coreModules.map((module, index) => (
                        <div key={index}>
                          <div className="grid grid-cols-2 gap-8 py-2">
                            <p className="text-base font-light text-black">{module.name}</p>
                            <p className="text-base font-light text-black">{module.credit}</p>
                          </div>
                          {index < coreModules.length - 1 && (
                            <div className="w-full h-px bg-[#e6e6e6] mt-4"></div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>

              {/* Key Learnings */}
              <div>
                <h2 className="text-4xl font-light text-black mb-8">Key Learnings</h2>
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <img src="/images/img_line_36.svg" alt="bullet" className="w-1 h-2 mt-2" />
                    <p className="text-base font-light text-black leading-6">
                      Gain the essential knowledge, understanding, and skills required for a
                      successful career in the computing industry, equipping you with a solid
                      foundation to excel in various roles.
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <img src="/images/img_line_36.svg" alt="bullet" className="w-1 h-2 mt-2" />
                    <p className="text-base font-light text-black leading-6">
                      Develop a versatile skill set through the effective integration of knowledge
                      and skills gained across different program components, enabling you to tackle
                      multifaceted challenges in the computing industry.
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <img src="/images/img_line_36.svg" alt="bullet" className="w-1 h-2 mt-2" />
                    <p className="text-base font-light text-black leading-6">
                      Gain flexibility, knowledge, skills, and motivation that serve as a solid
                      foundation for ongoing studies and career advancement in the dynamic realm of
                      computing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Courses */}
        <section className="py-16 bg-white w-full">
          <div className="max-w-[1440px] mx-auto px-8">
            <h2 className="text-4xl font-medium mb-12">
              <span className="text-black">Related </span>
              <span className="text-[#eca22d]">Courses</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedCourses.map((course, index) => (
                <Card
                  key={index}
                  className="bg-[#f5f5f5] rounded-[25px] overflow-hidden related-courses-card"
                >
                  <div className="p-4">
                    <img src="/images/img_pearson.png" alt="Pearson" className="h-11 w-38 mb-4" />
                    <p className="text-lg font-light text-black leading-7 mb-6">{course.title}</p>

                    <div className="relative">
                      <div className="disable-on-hover ">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-full h-48 object-cover rounded-b-[25px]"
                        />
                        <div className="absolute top-0 left-0 w-full h-15 bg-gradient-to-b from-[#f5f5f5] via-[#f6f6f6ce] to-transparent"></div>
                        <div className="absolute bottom-4 right-4 bg-[#eca22d] rounded-[14px] p-2">
                          <img
                            src="/images/img_vector_white_a700_15x33.svg"
                            alt="arrow"
                            className="w-4 h-8"
                          />
                        </div>
                      </div>

                      <div className="enable-on-hover bg-[#eca22d] rounded-[14px] p-2">
                        <div>Duration</div>
                        <div>Course Level</div>
                        <div>Credits</div>
                        <div>Modules</div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            <div className="flex items-center justify-center mt-12">
              <div className="flex items-center space-x-4">
                <span className="text-2xl font-medium text-black">Explore All Programs</span>
                <div className="bg-[#879da5] rounded-full w-5 h-5 flex items-center justify-center">
                  <img
                    src="/images/img_vector_black_900_8x21.svg"
                    alt="arrow"
                    className="w-2 h-5"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Academic Partners */}
        <section className="py-16 bg-[#e7ebed] w-full">
          <div className="max-w-[1440px] mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="bg-[#0c2d46] rounded-[25px] p-8 relative">
                  <div className="bg-white rounded-t-[18px] p-8 mb-6">
                    <img
                      src="/images/img_pearson.png"
                      alt="Pearson"
                      className="h-16 w-55 mx-auto"
                    />
                  </div>
                  <p className="text-base font-light text-white leading-6 mb-8">
                    A leading global organization focused on enhancing management and leadership
                    capabilities through accreditation, qualifications, and resources.
                  </p>
                  <div className="flex space-x-0">
                    <div className="bg-white rounded-l-[15px] px-7 py-2">
                      <span className="text-base font-semibold text-black">Get in touch!</span>
                    </div>
                    <div className="bg-[#eca22d] rounded-r-[15px] px-9 py-2 flex items-center space-x-2">
                      <span className="text-base font-semibold text-white">Know More</span>
                      <img src="/images/img_vector_black_900.svg" alt="arrow" className="w-4 h-2" />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="bg-white rounded-[23px] p-8 shadow-md">
                    <img
                      src="/images/img_ncfelogorgbgrey.png"
                      alt="NCFE"
                      className="h-11 w-49 mx-auto"
                    />
                  </Card>
                  <Card className="bg-white rounded-[23px] p-8 shadow-md">
                    <img
                      src="/images/img_charteredmanagementinstitutecmivectorlogo.png"
                      alt="CMI"
                      className="h-20 w-45 mx-auto"
                    />
                  </Card>
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="text-4xl font-medium">
                  <span className="text-black">Discover Our Academic </span>
                  <span className="text-[#eca22d]">Partners</span>
                </h2>
                <p className="text-base font-light text-black leading-6">
                  DeMont Institute of Management and Technology proudly collaborates with top
                  institutions globally, ensuring our students receive world-class higher education.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Explore Our Courses */}
        <section className="py-16 bg-white relative w-full">
          <div className="max-w-[1440px] mx-auto px-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
              <h2 className="text-4xl font-medium mb-4 md:mb-0 flex-shrink-0">
                <span className="text-black">Explore </span>
                <span className="text-[#eca22d]">Our Courses</span>
              </h2>
              <div className="w-full md:w-[420px]">
                <div className="bg-[#f0f0f0] rounded-[25px] shadow-md p-2 pl-6 flex items-center">
                  <input
                    type="text"
                    placeholder="Search for Courses..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="flex-1 bg-transparent text-xl font-light text-black placeholder-black outline-none"
                  />
                  <button className="bg-[#879da5] rounded-r-[25px] p-4 shadow-md flex items-center justify-center">
                    <img
                      src="/images/img_vector_white_a700_15x33.svg"
                      alt="search"
                      className="w-4 h-8"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="flex-1 w-full">
                {/* Course Categories */}
                <div className="space-y-4">
                  {courseCategories.map((category, index) => (
                    <div key={index}>
                      <div
                        className="bg-[#0c2d46] rounded-r-[25px] shadow-md p-4 cursor-pointer hover:bg-[#1a3a5a] transition-colors flex items-center justify-between"
                        onClick={() => toggleSection(category)}
                      >
                        <h3 className="text-base md:text-lg lg:text-base font-medium text-white ml-2 md:ml-8">
                          {category}
                        </h3>
                        <img
                          src="/images/img_vector_white_a700_16x16.svg"
                          alt="expand"
                          className={`w-4 h-4 mr-4 md:mr-12 transition-transform ${
                            expandedSection === category ? 'rotate-180' : ''
                          }`}
                        />
                      </div>
                      {expandedSection === category && coursesData[category] && (
                        <div className="bg-white border-l-4 border-[#0c2d46] pl-8 md:pl-32 py-4 space-y-3">
                          <ul className="list-disc ml-4 md:ml-0">
                            {coursesData[category].map((course, courseIndex) => (
                              <li
                                key={courseIndex}
                                className="text-base md:text-xl font-light text-black"
                              >
                                <span className="font-light">International In </span>
                                <span className="font-medium">
                                  {course
                                    .replace('International In ', '')
                                    .replace('International in ', '')}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              {/* Decorative Images */}
              <div className="hidden lg:block flex-shrink-0 w-[340px]">
                <div className="flex flex-wrap gap-4 justify-end">
                  <img
                    src="/images/img_ellipse_6.png"
                    alt="decoration"
                    className="w-24 h-24 rounded-full"
                  />
                  <div className="bg-[#eca22d] w-16 h-24 rounded-[48px] shadow-md"></div>
                  <img
                    src="/images/img_rectangle_39.png"
                    alt="decoration"
                    className="w-24 h-24 rounded-br-[50px]"
                  />
                  <img
                    src="/images/img_rectangle_34.png"
                    alt="decoration"
                    className="w-24 h-32 rounded-tl-[50px] rounded-tr-[50px] rounded-bl-[50px]"
                  />
                  <img
                    src="/images/img_ellipse_7.png"
                    alt="decoration"
                    className="w-24 h-24 rounded-full"
                  />
                  <img
                    src="/images/img_rectangle_35.png"
                    alt="decoration"
                    className="w-24 h-32 rounded-[44px]"
                  />
                  <img
                    src="/images/img_rectangle_36.png"
                    alt="decoration"
                    className="w-24 h-24 rounded-[44px]"
                  />
                  <img
                    src="/images/img_rectangle_40.png"
                    alt="decoration"
                    className="w-24 h-24 rounded-[44px]"
                  />
                  <img
                    src="/images/img_rectangle_41.png"
                    alt="decoration"
                    className="w-24 h-24 rounded-[44px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-[#f5fafc] w-full">
          <div className="max-w-[1440px] mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Us */}
              <div className="text-center space-y-6">
                <div className="flex justify-center">
                  <img src="/images/img_demonmtlogo.svg" alt="DeMont Logo" className="h-17 w-28" />
                  <div className="border-2 border-[#eca22d] rounded-full w-17 h-17 flex items-center justify-center ml-8">
                    <img
                      src="/images/img_vector_yellow_800_38x30.svg"
                      alt="phone"
                      className="w-10 h-8"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-medium text-black">Got question? Let us talk!</h3>
                <p className="text-xl font-light text-black">+971 4 580 4285</p>
                <p className="text-xl font-medium text-black">Contact Us</p>
              </div>

              {/* Learn More */}
              <div className="text-center space-y-6">
                <div className="flex justify-center">
                  <img src="/images/img_group.svg" alt="Learn More" className="h-23 w-17" />
                </div>
                <h3 className="text-xl font-medium text-black">Want to know more?</h3>
                <p className="text-xl font-light text-black">Let us find out!</p>
                <p className="text-xl font-medium text-black">Learn More</p>
              </div>

              {/* Chat with Counselor */}
              <div className="text-center space-y-6">
                <div className="flex justify-center">
                  <img src="/images/img_group_16.svg" alt="Chat" className="h-18 w-18" />
                </div>
                <h3 className="text-xl font-medium text-black">We are here to guide you</h3>
                <p className="text-xl font-light text-black">+971 58 625 0566</p>
                <p className="text-xl font-medium text-black text-center">
                  Chat with an Admission Counselor
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default CoursePage;
