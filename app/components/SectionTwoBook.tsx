"use client"

import React, {useLayoutEffect} from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const SectionTwoBook = () => {
  
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#page-2-container", {scrollTrigger: {trigger: "#page-2-container", start: "5% bottom"}, x: 0, duration: 1.5});
  }, [])

  return (
    <div className="flex justify-end items-center w-full h-screen">
      <div id="page-2-container" className="flex flex-col lg:flex-row justify-center items-center w-full gap-4 bg-gradient-to-b from-[#6a99c548] to-[#01016860] rounded-s-full overflow-visible h-4/5 lg:w-11/12 lg:gap-14 lg:translate-x-0">
        <video autoPlay loop muted className="w-[80%] sm:w-2/5 lg:w-3/5 mt-2" aria-hidden="true">
          <source src="/books.mp4" type="video/mp4" />
        </video>
        <div className="flex flex-col justify-center items-center lg:items-end lg:w-1/2 lg:mr-10 mt-4">
          <p className="text-highlight text-2xl lg:text-right md:text-4xl mb-4 p-2 font-semibold">What&apos;s Your HERO Story?</p>
          <div className='text-center lg:text-right text-sm w-[90%]'>
            <p className='pb-2'>There are so many amazing stories that go untold. so many unique perspectives that break the mold.</p>
            <p className='pb-2'>Why not build an ecosystem where wordsmiths&apos; tales unfold, and share with the world your literary gold.</p>
            <p className='pb-2'>Fans link up with your favorite authors to add a copy of their limited edition content to your digital collection.</p>
          </div>
          <a href="https://register.3bx.live" className="button-orange mt-10" aria-label="Start for free" role="button">Get started for free</a>
        </div>
      </div>
    </div>
  );
};

export default SectionTwoBook;