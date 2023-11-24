
"use client"

import React, {useLayoutEffect} from 'react';

import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const PageThree = () => {
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    gsap.to("div.rounded-e-full", { scrollTrigger: { trigger: "div.rounded-e-full", start: "5% bottom" }, x: 0, duration: 1.5 });
  }, []);

  return (
    <div className="flex justify-start items-center w-full h-screen">
      <div className="flex phone:flex-col-reverse justify-center items-center w-11/12 gap-14 phone:gap-2 bg-gradient-to-b from-[#6a99c548] to-[#01016860] rounded-e-full overflow-visible translate-x-[-2000px] h-4/5">
        <div className="flex flex-col justify-center items-start phone:items-center w-1/2 phone:w-full ml-10 phone:ml-0 phone:mt-4">
          <p className="text-highlight phone:text-lg text-4xl mb-4 font-semibold overflow-visible">3BX is a Social Media Platform</p>
          <div className='text-center phone:text-sm'>
            <p className='pb-2'>On 3BX, you can meet your fans and collaborate with other creatives with ease.</p>
            <p className='pb-2'>Unlike other social media platforms, 3BX employs Know Your Customer (KYC) to verify user identities.</p>
            <p className='pb-2'>Skip social media platforms that leave you guessing who's behind the computer: Get 3BX.</p>
          </div>
          <button className="button-orange mt-10">Learn more</button>
        </div>
        <video autoPlay loop muted className="phone:w-full w-2/5 phone:-mr-5 phone:mt-2">
          <source src="/record-disk.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default PageThree;