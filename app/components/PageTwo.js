"use client"

import React, {useLayoutEffect} from 'react';

import Image from "next/image";
import '../components/css/page-two.css';

import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const PageTwo = () => {
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    gsap.to(".page-2-container", {scrollTrigger: {trigger: ".page-2-container", start: "5% bottom"}, x: 0, duration: 1.5});
  }, [])

  return (
    <div style={{ 
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      width: '100vw', 
      height: '100vh', 
    }}>
      <div className="flex justify-between w-[90%] gap-20 page-2-container">
        <div className='video-container'>
          <video autoPlay loop muted >
            <source src="/books.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="flex flex-col justify-center items-end w-[50%] body-container">
          <p className="text-highlight text-4xl font-semibold p-container">What&apos;s Your HERO Story?</p>
          <p className='body-paragraph'>
            <span>&apos;There are so amny amazing stories that go untold. so many unique perspectives that break the mold.</span>
            <span>Why not build an ecosystem where wordsmiths&apos; tales unfold, and share with the world your literary gold.&apos;</span>
            <span>Fans link up with your favorite authors to add a copy of their limited edition content to your digital collection.</span>
          </p>
          <button className="button-orange mt-4">Get started for free</button>
        </div>
        
      </div>
    </div>
  );
};

export default PageTwo;