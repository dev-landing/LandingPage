import React from 'react';
import Nav from '../components/global/Nav';
import Footer from '../components/global/Footer';

const AnimatedIllustrations = () => {
  return (
    <div> 
        <Nav/>

      <div className="flex w-[597px] h-[597px] flex-shrink-0 bg-highlight items-center justify-center overflow-hidden mt-20">
        <div className="relative w-full h-full items-center justify-center overflow-hidden">
          <video autoPlay muted loop id="mp4Video1" className="absolute left-2/5 -translate-x-2/5 object-cover w-auto h-full object-center">
            <source src="books.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
          <div className="flex w-[562.728px] h-[562.728px] flex-shrink-0 border-[2.764px] border-original-dark items-center justify-center translate-x-[2.5%] translate-y-[2.5%]"></div>
        </div>
      </div>

      <div className="flex w-[597px] h-[597px] flex-shrink-0 bg-highlight items-center justify-center overflow-hidden">
        <div className="relative w-full h-full items-center justify-center overflow-hidden">
          <video autoPlay muted loop id="mp4Video2" className="absolute left-2/5 -translate-x-2/5 object-cover w-auto h-full object-center">
            <source src="record-disk.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
          <div className="flex w-[562.728px] h-[562.728px] flex-shrink-0 border-[2.764px] border-original-dark items-center justify-center translate-x-[2.5%] translate-y-[2.5%]"></div>
        </div>
      </div>

      <div className="flex w-[597px] h-[597px] flex-shrink-0 bg-highlight items-center justify-center overflow-hidden">
        <div className="relative w-full h-full items-center justify-center overflow-hidden">
          <video autoPlay muted loop id="mp4Video3" className="absolute left-2/5 -translate-x-2/5 object-cover w-auto h-full object-center">
            <source src="head-gif-3bx.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
          <div className="flex w-[562.728px] h-[562.728px] flex-shrink-0 border-[2.764px] border-original-dark items-center justify-center translate-x-[2.5%] translate-y-[2.5%]"></div>
        </div>
      </div>

      <div className="flex w-[597px] h-[597px] flex-shrink-0 bg-highlight items-center justify-center overflow-hidden">
        <div className="relative w-full h-full items-center justify-center overflow-hidden">
          <video autoPlay muted loop id="mp4Video4" className="absolute left-2/5 -translate-x-2/5 object-cover w-auto h-full object-center">
            <source src="3bx-movie.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
          <div className="flex w-[562.728px] h-[562.728px] flex-shrink-0 border-[2.764px] border-original-dark items-center justify-center translate-x-[2.5%] translate-y-[2.5%]"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AnimatedIllustrations;
