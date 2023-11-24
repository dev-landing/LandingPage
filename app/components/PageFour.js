

"use client"

import React, {useLayoutEffect} from 'react';

import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const PageFour = () => {
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    gsap.to("div.rounded-s-full", { scrollTrigger: { trigger: "div.rounded-s-full", start: "5% bottom" }, x: 0, duration: 1.5 });
  }, []);

  return (
    <div className="flex justify-end items-center w-full h-screen">
      <div className="flex phone:flex-col justify-center items-center w-11/12 gap-14 phone:gap-2 bg-gradient-to-b from-[#6a99c548] to-[#01016860] rounded-s-full overflow-visible translate-x-[2000px] h-4/5">
        <video autoPlay loop muted className="phone:w-full w-2/5 phone:-ml-5 phone:mt-2">
          <source src="/head-gif-3bx.mp4" type="video/mp4" />
        </video>
        <div className="flex flex-col justify-center items-end phone:items-center w-1/2 phone:w-full mr-10 phone:mr-0 phone:mt-4">
          <p className="text-highlight phone:text-lg text-4xl mb-4 font-semibold overflow-visible">Show Us What You See</p>
          <div className='text-center phone:text-sm'>
            <p className='pb-2'>Michelangelo once said that &quot;if people knew how hard I worked to get my mastery, it wouldn&apos;t seem so wonderful at all.&quot;</p>
            <p className='pb-2'>Artists!!! Surround yourself with inspirational people and ideas that will accelerate your mastery, EXPEDITIOUSLY.</p>
            <p className='pb-2'>Allowing fans to become members of an exclusive art gallery, the likes of which have never been seen.</p>
          </div>
          <button className="button-orange mt-10">Learn more</button>
        </div>
      </div>
    </div>
  );
};

export default PageFour;