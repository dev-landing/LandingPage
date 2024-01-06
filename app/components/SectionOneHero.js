"use client"

import Image from 'next/image';
import {gsap} from 'gsap';
import React, {useLayoutEffect, useState} from 'react';

// !svgs
import RocketShip from '../svg/page-1-rocket.svg';

const SectionOneHero = () => {

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
    <div className="flex justify-center items-center w-full h-screen">
      <div className="flex flex-col items-center justify-center mx-4 my-auto text-center lg:text-start lg:flex-row lg:justify-start lg:w-auto lg:ml-20">
        <div>
          <p className="paragraph text-highlight font-bold text-3xl lg:text-4xl py-2 lg:text-left">The Original Social Marketplace Where Independent Creators & Fans Converge.</p>
          <p className="mt-10 text-lg lg:hidden">Explore the 3BX Universe to find the most out of this world content or use the Books Beats Box Launchpad to blast off your Indie Career</p>
          <p className='py-10'><a href="https://register.3bx.live" className="button-orange mt-10" aria-label="Get ready for takeoff" role="button">Get Ready for Take Off</a></p>
        </div>
        <div className="hidden lg:flex lg:flex-row lg:items-center lg:justify-center lg:w-full lg:ml-12">
          <Image src={RocketShip} id="rocketship" alt="Illustration of a rocket ship" priority />
          <div id="blurbs" className="bg-original-dark h-28 w-96 rounded-bl-full rounded-r-full shadow-lg flex items-center justify-center mt-10 ml-[-9rem] mr-6 z-10">
            <div id="blurb-first" className="hidden">
              <p className="text-justify text-original px-4">What&apos;s up my friend? Welcome to <span className="font-bold text-highlight">Books Beats Box</span> or <span className="font-bold text-highlight">3BX</span>.</p>
            </div>
            <div id="blurb-second" className="hidden">
              <p className="text-justify text-original px-4">Explore the <span className="font-bold text-highlight">3BX Universe</span> to find the most out of this world content.</p>
            </div>
            <div id="blurb-third" className="hidden">
              <p className="text-justify text-original px-4">Or use the <span className="font-bold text-highlight">Books Beats Box</span> to blast off your <span className="font-bold text-highlight">Indie Career</span>.</p>
            </div>
          </div>
        </div>
      </div>
      <canvas id="starsCanvas" className="absolute top-0 left-0 w-full h-full z-[-1]" aria-hidden="true"></canvas>
    </div>
  );
};

export default SectionOneHero;
