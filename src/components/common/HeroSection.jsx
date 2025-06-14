import React from 'react';

const HeroSection = () => {
  return (
    <section className="w-full flex justify-center bg-white">
      <div className="max-w-[1440px] w-full relative">
        {/* Back to Programs Link */}
        <div className="mx-auto pt-24">
          <div className="flex items-center space-x-2 text-black">
            <img src="/images/img_vector_black_900_8x11.svg" alt="back arrow" className="w-2 h-3" />
            <span className="text-base font-medium">Back to all Programs</span>
          </div>
        </div>

        {/* Pearson Badge */}
        <div className="bg-[#f6f6f6] rounded-r-[54px] p-5 w-[250px] mt-[30px] absolute left-0 top-18">
          <img src="/images/img_pearson.png" alt="Pearson" className="h-14 w-47" />
        </div>

        {/* Main Hero Content */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-20">
            {/* Left Content */}
            <div className="space-y-8 my-20">
              <div className="space-y-4">
                <h1
                  style={{
                    color: '#000',
                    fontFamily: 'Poppins',
                    fontSize: '33px',
                    fontStyle: 'normal',
                    fontWeight: 300,
                    lineHeight: 'normal',
                    bold: true,
                  }}
                >
                  Higher National diploma international
                </h1>
                <h2
                  style={{
                    color: '#000',
                    fontFamily: 'Poppins',
                    fontSize: '23px',
                    fontStyle: 'normal',
                    fontWeight: 300,
                    lineHeight: 'normal',
                  }}
                >
                  In Computing (Software Engineering)
                </h2>
              </div>
            </div>

            {/* Right Content - Course Image */}
            <div
              className="flex-shrink-0 absolute right-0 top-0"
              style={{
                width: '600px',
                height: '560px',
                background: "url('/images/img_rectangle_58.png') 0 0 / cover no-repeat",
                overflow: 'hidden',
              }}
            />
          </div>
        </div>

        {/* Course Stats Bar */}
        <div
          className="bg-[#0c2d46] py-6"
          style={{ width: '1178px', height: '98px', flexShrink: 0 }}
        >
          <div className="max-w-5xl px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white pr-[150px]">
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
      </div>
    </section>
  );
};

export default HeroSection;
