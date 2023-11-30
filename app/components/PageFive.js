

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
      <div id="page-5-container" className="flex flex-col-reverse lg:flex-row justify-center items-center w-full gap-4 bg-gradient-to-b from-[#6a99c548] to-[#01016860] rounded-e-full overflow-visible h-4/5 lg:w-11/12 lg:gap-14 lg:translate-x-0">
        <div className="flex flex-col justify-center items-center lg:items-start lg:w-1/2 lg:ml-10 mt-4">
          <p className="text-highlight text-lg md:text-4xl mb-4 p-2 font-semibold">Now Fans Get To Choose!!!</p>
          <div className='text-center lg:text-left text-sm w-[90%]'>
            <p className='pb-2'>On 3BX, fans of indie authors, animators, musicians, and artists can get fresh-off-the-press, exclusive access to creations, private book readings, virtual concerts, and art shows that they can&apos;t get anywhere else. Get 3BX for fans.</p>
          </div>
          <a href="https://register.3bx.live" className="button-orange mt-10" aria-label="Learn more about 3BX for fans" role="button">Learn more</a>
        </div>
        <video autoPlay loop muted className="w-[80%] sm:w-2/5 lg:w-3/5 mt-2" aria-hidden="true">
          <source src="/3bx-movie.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default PageFive;