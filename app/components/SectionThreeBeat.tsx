
"use client"

import React, {useEffect} from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const SectionThreeBeat = () => {
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#page-3-container", { 
      scrollTrigger: { 
        trigger: "#page-3-container", start: "top bottom", end: "top center", scrub: 1, 
      }, 
    opacity:1, x:0, duration: 1.5 
  });
  }, []);

  return (
    <div className="flex justify-start items-center w-full h-screen">
      <div id="page-3-container" style={{ transform: 'translateX(-100vw)' }}
        className="flex flex-col-reverse lg:flex-row justify-center items-center w-full gap-4 bg-gradient-to-b from-[#6a99c548] to-[#01016860] rounded-e-full overflow-visible h-4/5 lg:w-11/12 lg:gap-14 lg:translate-x-0">
        <div className="flex flex-col justify-center items-center lg:items-start lg:w-1/2 lg:ml-10 mt-4">
          <p className="text-highlight text-lg md:text-4xl mb-4 p-2 font-semibold">3BX is a Social Media Platform</p>
          <div className='text-center lg:text-left text-sm w-[90%]'>
            <p className='pb-2'>On 3BX, you can meet your fans and collaborate with other creatives with ease.</p>
            <p className='pb-2'>Unlike other social media platforms, 3BX employs Know Your Customer (KYC) to verify user identities.</p>
            <p className='pb-2'>Skip social media platforms that leave you guessing who&apos;s behind the computer: Get 3BX.</p>
          </div>
          <a href="https://register.3bx.live" className="button-orange mt-10" aria-label="Start for free" role="button">Take the leap</a>
        </div>
        <div className="relative w-full max-w-[30%] pb-[30%] lg:max-w-[45%] lg:pb-[45%] xl:max-w-[600px] xl:pb-[600px] sm:max-w-[30%] sm:pb-[30%] overflow-hidden">
          <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover" aria-hidden="true">
            <source src="/record-disk.mp4" type="video/mp4" />
          </video>
          <div className="absolute top-[4%] left-[4%] w-[92%] h-[92%] border-2 md:border-4 border-white"></div>
        </div>
      </div>
    </div>
  );
};

export default SectionThreeBeat;