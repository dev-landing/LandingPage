
"use client"

import React, {useLayoutEffect} from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const SectionFourBox = () => {
  
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#page-4-container", { 
      scrollTrigger: { 
        trigger: "#page-4-container", start: "top bottom", end: "center center", scrub: 1 
      }, 
      x: 0, duration: 1.5 
    });
  }, []);

  return (
    <div className="flex justify-end items-center w-full h-screen">
      <div id="page-4-container" style={{ transform: 'translateX(100vw)' }}
        className="flex flex-col lg:flex-row justify-center items-center w-full gap-4 bg-gradient-to-b from-[#6a99c548] to-[#01016860] rounded-s-full overflow-visible h-4/5 lg:w-11/12 lg:gap-14 lg:translate-x-0">
        <div className="relative w-full max-w-[30%] pb-[30%] lg:max-w-[45%] lg:pb-[45%] xl:max-w-[600px] xl:pb-[600px] sm:max-w-[30%] sm:pb-[30%] overflow-hidden">
          <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover" aria-hidden="true">
            <source src="/head-gif-3bx.mp4" type="video/mp4" />
          </video>
          <div className="absolute top-[4%] left-[4%] w-[92%] h-[92%] border-2 md:border-4 border-white"></div>
        </div>
        <div className="flex flex-col justify-center items-center lg:items-end lg:w-1/2 lg:mr-10 mt-4">
          <p className="text-highlight text-lg md:text-4xl mb-4 p-2 font-semibold">Show Us What You See</p>
          <div className='text-center lg:text-right text-sm w-[90%]'>
            <p className='pb-2'>Michelangelo once said that &quot;if people knew how hard I worked to get my mastery, it wouldn&apos;t seem so wonderful at all.&quot;</p>
            <p className='pb-2'>Artists!!! Surround yourself with inspirational people and ideas that will accelerate your mastery, EXPEDITIOUSLY.</p>
            <p className='pb-2'>Allowing fans to become members of an exclusive art gallery, the likes of which have never been seen.</p>
          </div>
          <a href="https://register.3bx.live" className="button-orange mt-10" aria-label="Learn more about 3BX" role="button">Learn more</a>
        </div>
      </div>
    </div>
  );
};

export default SectionFourBox;