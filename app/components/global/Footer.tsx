import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Import icons
import FacebookIcon from '../../svg/facebook-icon-light.svg';
import InstagramIcon from '../../svg/instagram-icon-light.svg';
import TwitterIcon from '../../svg/twitter-icon-light.svg';
import TiktokIcon from '../../svg/tiktok-icon-light.svg';
import LinkedinIcon from '../../svg/linkedin-icon-light.svg';
import YoutubeIcon from '../../svg/youtube-icon-light.svg';
import Logo from '../../../public/3bx-logo.webp';


const Footer = () => {
  return (
    <footer className="flex flex-col items-center w-full mx-auto">
      <div className="flex items-center w-full md:w-[90%] mb-2">

        <div className="hidden lg:block flex-1">
          <Link href="https://booksbeatsbox.com" aria-label="Home">
            <Image src={Logo.src} alt="logo" width={30} height={30} />
          </Link>
        </div>

        <div className="hidden lg:block flex-1 text-center">
          {/* REMOVE THE POINTER EVENTS NONE, IF THERE IS A LINK TO TERMS AND CONDITIONS ////////////////////////// */}
          <Link href="#" className="pointer-events-none" aria-label="Terms and Conditions">
            <p>Terms & Conditions</p>
          </Link>
        </div>

        <div className="flex flex-1 justify-center">
          <a href="https://www.facebook.com/profile.php?id=100091576004576" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook">
            <Image src={FacebookIcon} alt="Facebook icon" className="h-9 w-9 mx-2 hover:cursor-pointer" />
          </a>
          <a href="https://www.instagram.com/booksbeatsbox/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram">
            <Image src={InstagramIcon} alt="Instagram icon" className="h-9 w-9 mx-2 hover:cursor-pointer" />
          </a>
          <a href="https://twitter.com/booksbeatsbox" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Twitter">
            <Image src={TwitterIcon} alt="Twitter icon" className="h-9 w-9 mx-2 hover:cursor-pointer" />
          </a>
          <a href="https://www.tiktok.com/@booksbeatsbox?lang=en" target="_blank" rel="noopener noreferrer" aria-label="Follow us on TikTok">
            <Image src={TiktokIcon} alt="TikTok icon" className="h-9 w-9 mx-2 hover:cursor-pointer" />
          </a>
          <a href="https://www.linkedin.com/company/3bx" target="_blank" rel="noopener noreferrer" aria-label="Follow us on LinkedIn">
            <Image src={LinkedinIcon} alt="LinkedIn icon" className="h-9 w-9 mx-2 hover:cursor-pointer" />
          </a>
          <a href="https://www.youtube.com/@3bx-booksbeatsbox" target="_blank" rel="noopener noreferrer" aria-label="Follow us on YouTube">
            <Image src={YoutubeIcon} alt="YouTube icon" className="h-9 w-9 mx-2 hover:cursor-pointer" />
          </a>
        </div>
      </div>

      <p className="w-[90%] text-center border-t border-gray-300 py-2 overflow-hidden">
        © 2023 All rights reserved
      </p>
    </footer>
  );
};

export default Footer;