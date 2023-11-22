"use client"

import React, {useLayoutEffect} from 'react';

import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const PageTwo = () => {
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    gsap.to("div.rounded-s-full", {scrollTrigger: {trigger: "div.rounded-s-full", start: "5% bottom"}, x: 0, duration: 1.5});
  }, [])

  return (
    <div style={{ 
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      width: '100vw', 
      height: '100vh', 
    }}>
      <div className="flex phone:flex-col justify-between w-[90%] gap-6 bg-gradient-to-b from-[#6a99c548] to-[#01016860] rounded-s-full h-[75%] overflow-visible translate-x-[2000px]">
        <video autoPlay loop muted height={"auto"} width={"40%"} className="phone:w-full">
          <source src="/books.mp4" type="video/mp4" />
        </video>
        <div className="flex flex-col justify-center items-end w-[50%] mr-10 phone:items-start phone:w-full">
          <p className="text-highlight text-4xl font-semibold overflow-y-hidden">What&apos;s Your HERO Story?</p>
          <p className='flex flex-col'>
            <span className='my-3'>&apos;There are so many amazing stories that go untold. so many unique perspectives that break the mold.</span>
            <span className='my-3'>Why not build an ecosystem where wordsmiths&apos; tales unfold, and share with the world your literary gold.&apos;</span>
            <span className='my-3'>Fans link up with your favorite authors to add a copy of their limited edition content to your digital collection.</span>
          </p>
          <button className="button-orange mt-10">Get started for free</button>
        </div>
        
      </div>
    </div>
  );
};

export default PageTwo;