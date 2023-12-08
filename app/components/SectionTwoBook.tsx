"use client"

import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const SectionTwoBook = () => {
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#page-2-container", {
      scrollTrigger: {
        trigger: "#page-2-container",
        // start: "top bottom", end: "top bottom", toggleActions: "play none none none", once: true, // ONLY ONCE IN AND REMAINS
        start: "top bottom", end: "center center", scrub: 1, // SCROLLING DOWN APPEARS, SCROLLING FURTHER REMAINS. SCROLLING UP DISAPPEARS
      },
      opacity: 1, x: 0, duration: 1.5,
    });
  }, []);


  return (
    <div className="flex justify-end items-center w-full h-screen">
      <div id="page-2-container" style={{ transform: 'translateX(100vw)' }}
        className="flex flex-col lg:flex-row justify-center items-center w-full gap-4 bg-gradient-to-b from-[#6a99c548] to-[#01016860] rounded-s-full overflow-visible h-4/5 lg:w-11/12 lg:gap-14 lg:translate-x-0">
        <div className="relative w-full max-w-[30%] pb-[30%] lg:max-w-[45%] lg:pb-[45%] xl:max-w-[600px] xl:pb-[600px] sm:max-w-[30%] sm:pb-[30%] overflow-hidden">
          <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover" aria-hidden="true">
            <source src="/books.mp4" type="video/mp4" />
          </video>
          <div className="absolute top-[4%] left-[4%] w-[92%] h-[92%] border-2 md:border-4 border-white"></div>
        </div>
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