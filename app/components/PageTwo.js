"use client"

import React, {useLayoutEffect} from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const PageTwo = () => {
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    gsap.to("#page-2-container", {scrollTrigger: {trigger: "#page-2-container", start: "5% bottom"}, x: 0, duration: 1.5});
  }, [])

  return (
    <div className="flex justify-end items-center w-full h-screen">
      <div id="page-2-container" className="flex sm:flex-col justify-center items-center w-11/12 gap-14 sm:gap-2 bg-gradient-to-b from-[#6a99c548] to-[#01016860] rounded-s-full overflow-visible translate-x-[2000px] h-4/5 sm:w-full sm:px-[5%]">
        <video autoPlay loop muted className="sm:w-full w-2/5 sm:mt-2">
          <source src="/books.mp4" type="video/mp4" />
        </video>
        <div className="flex flex-col justify-center items-end sm:items-center w-1/2 sm:w-full mr-10 sm:mr-0 sm:mt-4">
          <p className="text-highlight sm:text-lg text-4xl mb-4 font-semibold overflow-visible">What&apos;s Your HERO Story?</p>
          <div className='text-right sm:text-sm'>
            <p className='pb-2'>There are so many amazing stories that go untold. so many unique perspectives that break the mold.</p>
            <p className='pb-2'>Why not build an ecosystem where wordsmiths&apos; tales unfold, and share with the world your literary gold.</p>
            <p className='pb-2'>Fans link up with your favorite authors to add a copy of their limited edition content to your digital collection.</p>
          </div>
          <button className="button-orange mt-10">Get started for free</button>
        </div>
      </div>
    </div>
  );
};

export default PageTwo;