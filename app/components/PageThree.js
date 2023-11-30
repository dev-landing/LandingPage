
"use client"

import React, {useLayoutEffect} from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const PageThree = () => {
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    gsap.to("#page-3-container", { scrollTrigger: { trigger: "#page-3-container", start: "5% bottom" }, x: 0, duration: 1.5 });
  }, []);

  return (
    <div className="flex justify-start items-center w-full h-screen">
      <div id="page-3-container" className="flex flex-col-reverse lg:flex-row justify-center items-center w-full gap-4 bg-gradient-to-b from-[#6a99c548] to-[#01016860] rounded-e-full overflow-visible h-4/5 lg:w-11/12 lg:gap-14 lg:translate-x-0">
        <div className="flex flex-col justify-center items-center lg:items-start lg:w-1/2 lg:ml-10 mt-4">
          <p className="text-highlight text-lg md:text-4xl mb-4 p-2 font-semibold">3BX is a Social Media Platform</p>
          <div className='text-center lg:text-left text-sm w-[90%]'>
            <p className='pb-2'>On 3BX, you can meet your fans and collaborate with other creatives with ease.</p>
            <p className='pb-2'>Unlike other social media platforms, 3BX employs Know Your Customer (KYC) to verify user identities.</p>
            <p className='pb-2'>Skip social media platforms that leave you guessing who's behind the computer: Get 3BX.</p>
          </div>
          <a href="https://register.3bx.live" className="button-orange mt-10" aria-label="Learn more about 3BX" role="button">Learn more</a>
        </div>
        <video autoPlay loop muted className="w-[80%] sm:w-2/5 lg:w-3/5 mt-2" aria-hidden="true">
          <source src="/record-disk.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default PageThree;