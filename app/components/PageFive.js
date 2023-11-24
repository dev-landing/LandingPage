

"use client"

import React, {useLayoutEffect} from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const PageFive = () => {
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    gsap.to("#page-5-container", {scrollTrigger: {trigger: "#page-5-container", start: "5% bottom"}, x: 0, duration: 1.5});
  }, [])
  
  return (
    <div style={{ 
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: '100vw', 
      height: '100vh', 
    }}>
      <div id="page-5-container" className="flex phone:flex-col-reverse justify-center w-[90%] gap-14 bg-gradient-to-b from-[#6a99c548] to-[#01016860] rounded-e-full h-[75%] overflow-visible translate-x-[-2000px]">
        <div className="flex flex-col justify-center items-center w-[50%] ml-10 phone:items-center phone:w-full">
          <p className="text-highlight phone:text-2xl text-4xl mb-4 font-semibold overflow-y-hidden">Now Fans Get To Choose!!!</p>
          <p className='flex flex-col'>
            <span>On 3BX, fans of indie authors, animators, musicians, and artists can get fresh-off-the-press, exclusive access to creations, private book readings, virtual concerts, and art shows that they can&apos;t get anywhere else. Get 3BX for fans.</span>
          </p>
          <button className="button-orange mt-4">Learn more</button>
        </div>
        <video autoPlay loop muted height={"auto"} width={"40%"} className="phone:w-full phone:ml-5 phone:mt-2">
          <source src="/3bx-movie.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default PageFive;