
"use client"

import React, {useLayoutEffect} from 'react';

import Image from "next/image";
import '../components/css/page-three.css';

import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const PageThree = () => {
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    gsap.to(".page-3-container", {scrollTrigger: {trigger: ".page-3-container", start: "5% bottom"}, x: 0, duration: 1.5});
  }, [])
  
  return (
    <div style={{ 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100vw', 
      height: '100vh', 
    }}>
      <div className="flex justify-between w-[90%] gap-20 page-3-container">
        <div className="flex flex-col justify-center items-start body-container">
          <p className="text-highlight text-4xl font-semibold">3BX is a Social Media Platform</p>
          <p>On 3BX, you can meet your fans and collaborate with other creatives with ease. Unlike other social media platforms, 3BX employs Know Your Customer (KYC) to verify user identities. Skip social media platforms that leave you guessing who&apos;s behind the computer: Get 3BX.</p>
          <button className="button-orange mt-4">Learn more</button>
        </div>
        <div className='video-3-container'>
          <video autoPlay loop muted >
            <source src="/record-disk.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default PageThree;