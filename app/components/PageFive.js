

"use client"

import React, {useLayoutEffect} from 'react';

import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const PageFive = () => {
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    gsap.to("div.rounded-e-full", { scrollTrigger: { trigger: "div.rounded-e-full", start: "5% bottom" }, x: 0, duration: 1.5 });
  }, []);

  return (
    <div className="flex justify-start items-center w-full h-screen">
      <div className="flex phone:flex-col-reverse justify-center items-center w-11/12 gap-14 phone:gap-2 bg-gradient-to-b from-[#6a99c548] to-[#01016860] rounded-e-full overflow-visible translate-x-[-2000px] h-4/5">
        <div className="flex flex-col justify-center items-start phone:items-center w-1/2 phone:w-full ml-10 phone:ml-0 phone:mt-4">
          <p className="text-highlight phone:text-lg text-4xl mb-4 font-semibold overflow-visible">Now Fans Get To Choose!!!</p>
          <div className='text-center phone:text-sm'>
            <p className='pb-2'>On 3BX, fans of indie authors, animators, musicians, and artists can get fresh-off-the-press, exclusive access to creations, private book readings, virtual concerts, and art shows that they can&apos;t get anywhere else. Get 3BX for fans.</p>
          </div>
          <button className="button-orange mt-10">Learn more</button>
        </div>
        <video autoPlay loop muted className="phone:w-full w-2/5 phone:-mr-5 phone:mt-2">
          <source src="/3bx-movie.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default PageFive;