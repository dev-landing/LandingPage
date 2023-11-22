
"use client"

import React, {useLayoutEffect} from 'react';

import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const PageThree = () => {
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    gsap.to("div.bg-gradient-to-b", {scrollTrigger: {trigger: "div.bg-gradient-to-b", start: "5% bottom"}, x: 0, duration: 1.5});
  }, [])
  
  return (
    <div style={{ 
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: '100vw', 
      height: '100vh', 
    }}>
      <div className="flex justify-between items-center w-[90%] gap-20 bg-gradient-to-b from-[#6a99c548] to-[#01016860] rounded-e-full h-[75%] overflow-visible translate-x-[-2000px]">
        <div className="flex flex-col justify-center items-start w-[90%] ml-10">
          <p className="text-highlight text-4xl font-semibold overflow-y-hidden">3BX is a Social Media Platform</p>
          <p>On 3BX, you can meet your fans and collaborate with other creatives with ease. Unlike other social media platforms, 3BX employs Know Your Customer (KYC) to verify user identities. Skip social media platforms that leave you guessing who&apos;s behind the computer: Get 3BX.</p>
          <button className="button-orange mt-4">Learn more</button>
        </div>
        <div className='w-[70%] h-[60%] overflow-hidden'>
          <video autoPlay loop muted className='min-w-[140%] origin-bottom-right'>
            <source src="/record-disk.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default PageThree;