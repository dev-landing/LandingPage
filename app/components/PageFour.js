

"use client"

import React, {useLayoutEffect} from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const PageFour = () => {
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    gsap.to("#page-4-container", { scrollTrigger: { trigger: "#page-4-container", start: "5% bottom" }, x: 0, duration: 1.5 });
  }, []);

  return (
    <div className="flex justify-end items-center w-full h-screen">
      <div id="page-4-container" className="flex flex-col lg:flex-row justify-center items-center w-full gap-4 bg-gradient-to-b from-[#6a99c548] to-[#01016860] rounded-s-full overflow-visible h-4/5 lg:w-11/12 lg:gap-14 lg:translate-x-0">
        <video autoPlay loop muted className="w-[80%] sm:w-2/5 lg:w-3/5 mt-2" aria-hidden="true">
          <source src="/head-gif-3bx.mp4" type="video/mp4" />
        </video>
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

export default PageFour;