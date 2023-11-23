"use client"

import Image from 'next/image';
import {gsap} from 'gsap';
import React, {useLayoutEffect, useState} from 'react';

// !svgs
import RocketShip from '../svg/page-1-rocket.svg';

// !CSS
import './css/page-one.css';

const PageOne = () => {

  useLayoutEffect(() => {
    const rocketship = window.document.querySelector('.full-container .right-side img');

    gsap.to(rocketship, {x: 200, repeat: -1, duration: 3, ease: 'ease-in-out', yoyoEase: true})
    gsap.to(".blurbs", {x: 200, repeat: -1, duration: 3, ease: 'ease-in-out', yoyoEase: true})
  })
  
    useLayoutEffect(() => {
      const tl = gsap.timeline({repeat: -1, repeatRefresh: true});
      tl.to(".blurbs .blurb-first", {display: 'block', duration: 5}).to(".blurbs .blurb-first", {display: 'none'}).to(".blurbs .blurb-second", {display: "block", duration: 5}).to(".blurbs .blurb-second", {display: 'none'}).to(".blurbs .blurb-third", {display: "block", duration: 5}).to(".blurbs .blurb-third", {display: "none"});
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
      <div className='full-container'>
        <div className='left-side'>
          <div className='body'>
            <p className='paragraph'>The Original Social Marketplace Where Independent Creators & Fans Converge.</p>
            <p className='mobile-only mt-10'>Explore the 3BX Universe to find the most out of this world content or use the Books Beats Box Launchpad to blast off your Indie Career</p>
          </div>
          <button className='button-orange mt-20'>Get Ready for Take Off!</button>
        </div>
        <div className='right-side'>
          <Image src={RocketShip} alt='page 1 rocket ship' />
          <div className='blurbs'>
            <div className='blurb-first'>
              <p className='first'>What&apos;s up my friend? Welcome to <span>Books Beats Box</span> of <span>3BX</span></p>
            </div>
            <div className='blurb-second'>
              <p className='second'>Explore the <span>3BX Universe</span> to find the most out of this world content</p>
            </div>
            <div className='blurb-third'>
              <p className='third'>or use the <span>Books Beats Box</span> launchpad to blast off your <span>Indie Career</span></p>
            </div>
          </div>
        </div>
        <canvas id="starsCanvas"></canvas>
      </div>
    </div>
  );
};

export default PageOne;