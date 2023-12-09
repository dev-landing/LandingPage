"use client"

// !Packages
import Image from "next/image";
import Link from "next/link";
import React, { useState, useLayoutEffect } from 'react';

// !Icons
import MenuIcon from '../../svg/menu-icon.svg';
import CloseIcon from '@mui/icons-material/Close';
import HouseIcon from '../../svg/home-icon.svg';
import InfoIcon from '../../svg/info-icon.svg';
import SupportIcon from '../../svg/support-icon.svg';
import RegisterIcon from '../../svg/register-icon.svg';
import FacebookIcon from '../../svg/facebook-icon.svg';
import InstagramIcon from '../../svg/instagram-icon.svg';
import TwitterIcon from '../../svg/twitter-icon.svg';
import TiktokIcon from '../../svg/tiktok-icon.svg';
import LinkedinIcon from '../../svg/linkedin-icon.svg';
import YoutubeIcon from '../../svg/youtube-icon.svg';
import Logo from '../../svg/3bx-logo.svg';

// !Animations
import {gsap} from 'gsap'

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    useLayoutEffect(() => {

        const gridIcon = document.querySelector('.grid-icon');

        gridIcon?.addEventListener("mouseover", () => gsap.to(".grid-svg", {rotate: 180, cursor: 'pointer', duration: 1.1, transformOrigin: "50% 50%"}));
        gridIcon?.addEventListener("mouseleave", () => gsap.to(".grid-svg", {cursor: 'pointer', duration: 1.1, rotate: -90, transformOrigin: "50% 50%"}));

        const socials = document.querySelectorAll("#social");

        socials?.forEach((social) => social.addEventListener("mouseover", () => gsap.to(social, {rotate: 360, duration: 0.5, transformOrigin: "50% 50%", transform: "scale(1.2)"})));
        socials?.forEach((social) => social.addEventListener("mouseleave", () => gsap.to(social, {rotate: -360, duration: 0.5, transformOrigin: "50% 50%", transform: "scale(1.0)"})));
    }, [])

    const toggleMenu = () => {

        setIsOpen(!isOpen);

        var timeline = gsap.timeline();
        if (!isOpen) {
            timeline.to("#side-menu-background", { left: 0, duration: 0.3 })
                    .to("#side-menu", { left: 0, duration: 0.3 });
        } else {
            timeline.to("#side-menu-background", { left: -415, duration: 0.3 })
                    .to("#side-menu", { left: -400, duration: 0.3 });
        }
    };


    return (
        <div className="container">
            <header className="fixed top-0 w-full z-[2]">
                <nav className="bg-original flex items-center justify-around p-2">
                    <div className="flex items-center space-x-4">

                        <div onClick={toggleMenu}>
                            <Image src={MenuIcon} alt="menu icon" width={40} height={40}  className="cursor-pointer" priority />
                        </div>
                        <Link href="/">
                            <Image src={Logo} alt="logo" width={40} height={40} className="h-9 w-auto" />
                        </Link>
                    </div>

                    <div className="hidden sm:flex items-center space-x-4 p-2">
                        <button onClick={() => location.href="https://login.3bx.live"} className="bg-original text-original-dark w-28 h-9 font-semibold border border-original-dark rounded-md shadow-custom hover:text-highlight">Sign In!</button>
                        <button onClick={() => location.href="https://register.3bx.live"} className="bg-highlight text-original-dark font-semibold w-28 h-9 border border-original-dark rounded-md shadow-custom hover:text-original">Join</button>
                    </div>
                </nav>
            </header>
            <div id="side-menu" className="w-96 h-screen bg-original-dark fixed flex flex-col justify-between z-[3] -left-96 top-0 text-original">
                <div className="pt-8 ml-10 flex flex-row">
                    <div className="text-[25px] text-original font-bold absolute top-4"><h3>MENU</h3></div>
                    <div className="absolute top-4 right-12 hover:cursor-pointer" onClick={() => {setIsOpen(false); var timeline = gsap.timeline(); timeline.to("#side-menu", {left: -400, duration: 0.3}).to("#side-menu-background", {left: -415, duration: 0.3}); }}><CloseIcon fontSize="large" /></div>
                </div>
                
                <div className="text-[30px] flex flex-col ml-12">
                    <Link href="https://booksbeatsbox.com" className="flex flex-row items-baseline hover:cursor-pointer hover:text-highlight hover:underline">
                        <Image src={HouseIcon} alt='house icon' className="self-start"/>
                        <h3 className="ml-[8px] mt-[5px]">Home</h3>
                    </Link>
                    <Link href="/about-3bx">
                        <div className="flex flex-row mt-4 hover:cursor-pointer hover:text-highlight hover:underline">
                            <Image src={InfoIcon} alt='info icon' width={40} height={40} className="h-9 w-auto"/>
                            <h3 className="ml-4">About 3BX</h3>
                        </div>
                    </Link>
                </div>

                <div className="border-t-[1px] border-t-[silver] w-[80%] self-center flex flex-col">
                    <div><Link href="https://support.3bx.live" className="flex flex-row mt-12 hover:cursor-pointer hover:text-highlight hover:underline"><Image src={SupportIcon} alt='support icon' width={40} height={40} className="ml-2 h-9 w-auto"/><h3 className="ml-4 self-top text-[30px]">Support</h3></Link></div>
                    <div><Link href="https://register.3bx.live"  className="flex flex-row mt-4 hover:cursor-pointer hover:text-highlight hover:underline"><Image src={RegisterIcon} alt='register icon' width={40} height={40} className="ml-2 h-9 w-auto"/><h3 className="ml-4 self-top text-[30px]">Register</h3></Link></div>
                    <div className="border-[2px] border-original rounded-[5px] w-fit p-3 my-4 ml-2 font-bold shadow-custom hover:cursor-pointer hover:text-original-dark hover:underline hover:bg-original"><Link href="https://login.3bx.live"><h3>Sign In!</h3></Link></div>
                </div>
                <div className="flex flex-row justify-evenly mb-28 overflow-hidden items-center h-28">
                    <div id="social" className="mx-[-50px] h-auto w-auto hover:cursor-pointer" onClick={() => location.href="https://www.facebook.com/profile.php?id=100091576004576"}><Image src={FacebookIcon} alt='facebook icon' width={40} height={40} className="h-10 w-10"/></div>
                    <div id="social" className="mx-[-50px] h-auto w-auto hover:cursor-pointer" onClick={() => location.href="https://www.instagram.com/booksbeatsbox/"}><Image src={InstagramIcon} alt='instagram icon' width={40} height={40} className="h-10 w-10"/></div>
                    <div id="social" className="mx-[-50px] h-auto w-auto hover:cursor-pointer" onClick={() => location.href="https://twitter.com/booksbeatsbox"}><Image src={TwitterIcon} alt='twitter icon' width={40} height={40} className="h-10 w-10"/></div>
                    <div id="social" className="mx-[-50px] h-auto w-auto hover:cursor-pointer" onClick={() => location.href="https://www.tiktok.com/@booksbeatsbox?lang=en"}><Image src={TiktokIcon} alt='tiktok icon' width={40} height={40} className="h-10 w-10"/></div>
                    <div id="social" className="mx-[-50px] h-auto w-auto hover:cursor-pointer" onClick={() => location.href="https://www.linkedin.com/company/3bx"}><Image src={LinkedinIcon} alt='linkedin icon' width={40} height={40} className="h-10 w-10"/></div>
                    <div id="social" className="mx-[-50px] h-auto w-auto hover:cursor-pointer" onClick={() => location.href="https://www.youtube.com/@3bx-booksbeatsbox"}><Image src={YoutubeIcon} alt='youtube icon' width={40} height={40} className="h-10 w-10"/></div>
                </div>
            </div>
            <div id="side-menu-background" className="w-[415px] fixed left-[-415px] top-[0] h-screen bg-highlight rounded-3xl z-[2] "></div>
        </div>
    )
}

export default Nav
