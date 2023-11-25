"use client"

import Image from 'next/image';
import {gsap} from 'gsap';
import React, {useLayoutEffect, useState} from 'react';

// !svgs
import RocketShip from '../svg/page-1-rocket.svg';

const PageOne = () => {

  useLayoutEffect(() => {
    const rocketship = window.document.querySelector('#rocketship');

    gsap.to(rocketship, {x: 25, repeat: -1, duration: 3, ease: 'ease-in-out', yoyoEase: true})
    gsap.to("#blurbs", {x: 25, repeat: -1, duration: 3, ease: 'ease-in-out', yoyoEase: true})
  })
  
    useLayoutEffect(() => {
      const tl = gsap.timeline({repeat: -1, repeatRefresh: true});
      tl.to("#blurb-first", {display: 'block', duration: 10}).to("#blurb-first", {display: 'none'}).to("#blurb-second", {display: "block", duration: 10}).to("#blurb-second", {display: 'none'}).to("#blurb-third", {display: "block", duration: 10}).to("#blurb-third", {display: "none"});
    }, [])

    useLayoutEffect(() => {
      const canvas = document.getElementById('starsCanvas');
      const ctx = canvas.getContext('2d');
      const canvasWidth = window.innerWidth;
      const canvasHeight = window.innerHeight;
      const stars = [];
  
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
  
      function getRandomNumber(min, max) {
      return Math.random() * (max - min) + min;
      }
  
      class Star {
      constructor() {
          this.x = getRandomNumber(0, canvasWidth);
          this.y = getRandomNumber(0, canvasHeight);
          this.speed = getRandomNumber(2, 5);
          this.brightness = getRandomNumber(0.5, 1);
      }
  
      draw() {
          ctx.beginPath();
          ctx.fillStyle = `rgba(255, 255, 255, ${this.brightness})`;
          ctx.arc(this.x, this.y, 1, 0, Math.PI * 2);
          ctx.fill();
      }
  
      move() {
          this.y += this.speed; // Update y position to move vertically
          if (this.y > canvasHeight) {
          this.y = 0;
          this.x = getRandomNumber(0, canvasWidth);
          this.speed = getRandomNumber(2, 5);
          this.brightness = getRandomNumber(0.5, 1);
          }
      }
      }
  
      function createStars(numStars) {
      for (let i = 0; i < numStars; i++) {
          stars.push(new Star());
      }
      }
  
      function animate() {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      for (const star of stars) {
          star.draw();
          star.move();
      }
      requestAnimationFrame(animate);
      }
  
      createStars(500); // Adjust the number of stars as desired
      animate();
    }, [])

  return (
    <div style={{ 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100vw', 
      height: '100vh', 
    }}>
      <div className='flex flex-row w-screen h-screen overflow-hidden'>
        <div className='flex flex-col w-auto justify-center ml-[15%] mx-4 sm:w-[100%] sm:mx-4 sm:my-auto sm:items-center sm:text-center'>
          <div className='sm:text-center leading-tight'>
            <p className='paragraph text-[#FC7A03] font-bold text-3xl'>The Original Social Marketplace Where Independent Creators & Fans Converge.</p>
            <p className='hidden sm:block mt-10 text-lg'>Explore the 3BX Universe to find the most out of this world content or use the Books Beats Box Launchpad to blast off your Indie Career</p>
          </div>
          <button className='button-orange px-10 py-3 w-fit mt-[30px]'>Get Ready for Take Off</button>
        </div>
        <div className='flex flex-row items-center justify-center w-full ml-[50px] sm:hidden'>
          <Image src={RocketShip} id="rocketship" alt='page 1 rocket ship' />
          <div id='blurbs' className='bg-white h-[100px] w-[350px] rounded-bl-full rounded-r-full shadow-[5px_5px_5px_rgba(22,22,233,0.596)] flex items-center justify-center mt-[100px] ml-[-150px] z-[1]'>
            <div id='blurb-first' className='hidden'>
              <p className='text-justify text-[#000041] px-4'>What&apos;s up my friend? Welcome to <span className='font-bold text-[#FC7A03]'>Books Beats Box</span> of <span className='font-bold text-[#FC7A03]'>3BX</span></p>
            </div>
            <div id='blurb-second' className='hidden'>
              <p className='text-justify text-[#000041] px-4'>Explore the <span className='font-bold text-[#FC7A03]'>3BX Universe</span> to find the most out of this world content</p>
            </div>
            <div id='blurb-third' className='hidden'>
              <p className='text-justify text-[#000041] px-4'>or use the <span className='font-bold text-[#FC7A03]'>Books Beats Box</span> launchpad to blast off your <span className='font-bold text-[#FC7A03]'>Indie Career</span></p>
            </div>
          </div>
        </div>
        <canvas id="starsCanvas" className='absolute top-0 left-0 w-full h-full z-[-1]'></canvas>
      </div>
    </div>
  );
};

export default PageOne;