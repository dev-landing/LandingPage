
"use client"

import React, {useLayoutEffect} from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const PageThree = () => {
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    gsap.to("#page-3-container", {scrollTrigger: {trigger: "#page-3-container", start: "5% bottom"}, x: 0, duration: 1.5});
  }, [])
  
  return (
    <div style={{ 
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: '100vw', 
      height: '100vh',
    }}>
      <div id="page-3-container" className="flex phone:flex-col-reverse justify-center w-[90%] gap-14 bg-gradient-to-b from-[#6a99c548] to-[#01016860] rounded-e-full h-[75%] overflow-visible translate-x-[-2000px]">
        <div className="flex flex-col justify-center items-center w-[50%] ml-10 phone:items-center phone:w-full">
          <p className="text-highlight phone:text-2xl text-4xl mb-4 font-semibold overflow-y-hidden">3BX is a Social Media Platform</p>
          <p className='flex flex-col'>
            <span>On 3BX, you can meet your fans and collaborate with other creatives with ease.</span>
            <span>Unlike other social media platforms, 3BX employs Know Your Customer (KYC) to verify user identities.</span>
            <span>Skip social media platforms that leave you guessing who&apos;s behind the computer: Get 3BX.</span>
          </p>
          <button className="button-orange mt-10">Learn more</button>
        </div>
        <video autoPlay loop muted height={"auto"} width={"40%"} className="phone:w-full phone:ml-5 phone:mt-2">
          <source src="/record-disk.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default PageThree;