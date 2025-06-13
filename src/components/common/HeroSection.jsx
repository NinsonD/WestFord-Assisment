import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-white">
      {/* Back to Programs Link */}
      <div className="max-w-7xl mx-auto pt-6">
        <div className="flex items-center space-x-2 text-black">
          <img src="/images/img_vector_black_900_8x11.svg" alt="back arrow" className="w-2 h-3" />
          <span className="text-base font-medium">Back to all Programs</span>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-light text-black leading-tight">
                Higher National diploma international
              </h1>
              <h2 className="text-3xl font-light text-black leading-tight">
                In Computing (Software Engineering)
              </h2>
            </div>
          </div>

          {/* Right Content - Course Image */}
          <div className="flex justify-center">
            <img
              src="/images/img_rectangle_58.png"
              alt="Computing Course"
              className="w-full max-w-[574px] h-[536px] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Course Stats Bar */}
      <div className="bg-[#0c2d46] py-6">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
            <div className="flex items-center space-x-3">
              <img src="/images/img_vector_yellow_800.svg" alt="duration" className="w-10 h-10" />
              <div>
                <p className="text-sm font-light">Duration</p>
                <p className="text-sm font-medium">24 Months</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <img src="/images/img_vector.svg" alt="level" className="w-8 h-12" />
              <div>
                <p className="text-sm font-light">Course Level</p>
                <p className="text-sm font-medium">Level 5</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <img src="/images/img_group_3.svg" alt="credits" className="w-11 h-11" />
              <div>
                <p className="text-sm font-light">Credits</p>
                <p className="text-sm font-medium">240</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <img src="/images/img_group_2.svg" alt="modules" className="w-11 h-11" />
              <div>
                <p className="text-sm font-light">Modules</p>
                <p className="text-sm font-medium">15</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pearson Badge */}
      <div className="absolute left-0 top-64 bg-[#f6f6f6] rounded-r-[54px] p-6">
        <img src="/images/img_pearson.png" alt="Pearson" className="h-14 w-47" />
      </div>
    </section>
  );
};

export default HeroSection;
