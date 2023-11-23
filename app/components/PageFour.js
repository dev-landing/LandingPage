

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
      <div className="flex phone:flex-col justify-center w-[90%] gap-14 bg-gradient-to-b from-[#6a99c548] to-[#01016860] rounded-s-full h-[75%] overflow-visible translate-x-[2000px]">
        <video autoPlay loop muted height={"auto"} width={"40%"} className="phone:w-full phone:-ml-5 phone:mt-2">
          <source src="/head-gif-3bx.mp4" type="video/mp4" />
        </video>
        <div className="flex flex-col justify-center items-end w-[50%] mr-10 phone:items-center phone:w-full">
          <p className="text-highlight phone:text-2xl text-4xl mb-4 font-semibold overflow-y-hidden">Show Us What You See</p>
          <p className='flex flex-col'>
            <span>Michelangelo once said that &quot;if people knew how hard I worked to get my mastery, it wouldn't seem so wonderful at all.&quot;</span>
            <span>Artists!!! Surround yourself with inspirational people and ideas that will accelerate your mastery, EXPEDITIOUSLY.</span>
            <span>Allowing fans to become members of an exclusive art gallery, the likes of which have never been seen.</span>
          </p>
          <button className="button-orange mt-4">Learn more</button>
        </div>
      </div>
    </div>
  );
};

export default PageFour;