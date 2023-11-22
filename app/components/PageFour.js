

"use client"

import React, {useLayoutEffect} from 'react';

import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const PageFour = () => {
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    gsap.to("div.bg-gradient-to-b", {scrollTrigger: {trigger: "div.bg-gradient-to-b", start: "5% bottom"}, x: 0, duration: 1.5});
  }, [])
  
  return (
    <div style={{ 
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      width: '100vw', 
      height: '100vh', 
    }}>
      <div className="flex justify-between items-center w-[90%] gap-20 bg-gradient-to-b from-[#6a99c548] to-[#01016860] rounded-s-full h-[75%] overflow-visible translate-x-[2000px]">
        <div className='w-[70%] h-[60%] overflow-hidden'>
          <video autoPlay loop muted className='min-w-[140%] origin-bottom-right'>
            <source src="/head-gif-3bx.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="flex flex-col justify-center items-start w-[90%] ml-10">
          <p className="text-highlight text-4xl font-semibold overflow-y-hidden">Show Us What You See</p>
          <p className='flex flex-col'>
            <span className='my-3'>Michelangelo once said that "if people knew how hard I worked to get my mastery, it wouldn't seem so wonderful at all."</span>
            <span className='my-3'>Artists!!! Surround yourself with inspirational people and ideas that will accelerate your mastery, EXPEDITIOUSLY.</span>
            <span className='my-3'>Allowing fans to become members of an exclusive art gallery, the likes of which have never been seen.</span>
          </p>
          <button className="button-orange mt-4">Learn more</button>
        </div>
      </div>
    </div>
  );
};

export default PageFour;