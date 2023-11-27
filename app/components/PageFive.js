

"use client"

import React, {useLayoutEffect} from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const PageFive = () => {
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    gsap.to("#page-5-container", { scrollTrigger: { trigger: "#page-5-container", start: "5% bottom" }, x: 0, duration: 1.5 });
  }, []);

  return (
    <div className="flex justify-start items-center w-full h-screen">
      <div id="page-5-container" className="flex sm:flex-col-reverse justify-center items-center w-11/12 gap-14 sm:gap-2 bg-gradient-to-b from-[#6a99c548] to-[#01016860] rounded-e-full overflow-visible translate-x-[-2000px] h-4/5 sm:w-full sm:px-[5%]">
        <div className="flex flex-col justify-center items-start sm:items-center w-1/2 sm:w-full ml-10 sm:ml-0 sm:mt-4">
          <p className="text-highlight sm:text-lg text-4xl mb-4 font-semibold overflow-visible">Now Fans Get To Choose!!!</p>
          <div className='text-center sm:text-sm'>
            <p className='pb-2'>On 3BX, fans of indie authors, animators, musicians, and artists can get fresh-off-the-press, exclusive access to creations, private book readings, virtual concerts, and art shows that they can&apos;t get anywhere else. Get 3BX for fans.</p>
          </div>
          <button className="button-orange mt-10">Learn more</button>
        </div>
        <video autoPlay loop muted className="sm:w-full w-2/5 sm:mt-2">
          <source src="/3bx-movie.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default PageFive;