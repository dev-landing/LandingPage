"use client"

// !Packages
import Image from "next/image";
import Link from "next/link";
import React, { useState, useLayoutEffect } from 'react';

// Files
import Search from '../../ui/Search';

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
import Logo from '../../../public/3bx-logo.webp';

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


    return (
        <div className="container">
            <header className="fixed top-0 w-screen z-[2]">
                <nav className="bg-[#000041] flex items-center justify-around">
                    <div className="flex flex-row w-[250px] ml-[70px] text-[#FFFDFA] items-center justify-center sm:ml-0 sm:w-screen">
                        <div className="text-[60px] items-center flex ml-[-30px] mr-[10px] overflow-hidden hover:cursor-pointer" onClick={() => {
                            if(!isOpen) {
                                setIsOpen(true); var timeline = gsap.timeline(); timeline.to("#side-menu-background", {left: 0, duration: 0.3}).to("#side-menu", {left: 0, duration: 0.3});
                            }
                            else if(isOpen) {
                                setIsOpen(false); var timeline = gsap.timeline(); timeline.to("#side-menu-background", {left: -415, duration: 0.3}).to("#side-menu", {left: -400, duration: 0.3});
                            }}}>
                            <Image src={MenuIcon} alt='menu-icon' className="w-[40px] h-[40px]"/>
                        </div>
                        <Link href='/' style={{display: 'flex', alignItems: 'center', fontSize: '30px', marginLeft: "5px"}}><Image src={Logo.src} alt="logo" width={50} height={50} style={{scale: "0.6"}} />3BX</Link>
                    </div>
                    <div className="w-[350px] xl:hidden">
                        <Search placeholder="Search" />
                    </div>
                    <div className="flex justify-around w-[250px] h-[40px] sm:hidden">
                        <button className="bg-[#000041] text-[#FFFDFA] w-[100px] border border-[#FFFDFA] rounded-[5px] h-[35px] shadow-[5px_5px_0_#108CFF]">Sign In!</button>
                        <button className="bg-[#FC7A03] text-[#FFFDFA] w-[100px] border border-[#FFFDFA] rounded-[5px] h-[35px] shadow-[5px_5px_0_#108CFF]">Join</button>
                    </div>
                </nav>
            </header>
            <div id="side-menu" className="w-[400px] h-screen bg-[#FFFDFA] fixed flex flex-col justify-between z-[3] left-[-400px] top-0 text-[#000041]">
                <div className="pt-[30px] ml-[40px] flex flex-row">
                    <div className="text-[25px] text-[#000041] font-bold absolute top-[15px]"><h3>MENU</h3></div>
                    <div className="absolute top-[15px] right-[50px] hover:cursor-pointer" onClick={() => {setIsOpen(false); var timeline = gsap.timeline(); timeline.to("#side-menu", {left: -400, duration: 0.3}).to("#side-menu-background", {left: -415, duration: 0.3}); }}><CloseIcon fontSize="large" /></div>
                </div>
                <div className="text-[30px] flex flex-col ml-[50px]">
                    <div className="flex flex-row items-baseline hover:cursor-pointer hover:text-[#FC7A03] hover:underline"><Image src={HouseIcon} alt='house icon' className="self-start"/><h3 className="ml-[8px] mt-[5px]">Home</h3></div>
                    <div className="flex flex-row mt-[15px] hover:cursor-pointer hover:text-[#FC7A03] hover:underline"><Image src={InfoIcon} alt='info icon' className="ml-[6px]"/><h3 className="ml-[15px]">About 3BX</h3></div>
                </div>
                <div className="border-t-[1px] border-t-[silver] w-[80%] self-center flex flex-col">
                    <div className="flex flex-row mt-[50px] hover:cursor-pointer hover:text-[#FC7A03] hover:underline"><Image src={SupportIcon} alt='support icon' className="ml-[6px]"/><h3 className="ml-[15px] self-top text-[30px]">Support</h3></div>
                    <div className="flex flex-row mt-[15px] hover:cursor-pointer hover:text-[#FC7A03] hover:underline"><Image src={RegisterIcon} alt='register icon' className="ml-[6px]"/><h3 className="ml-[15px] self-top text-[30px]">Register</h3></div>
                    <div className="border-[2px] border-[#000041] rounded-[5px] w-fit p-[10px] mt-[15px] ml-[5px] font-bold shadow-[3px_3px_0_#108CFF] hover:cursor-pointer hover:text-[#FFFDFA] hover:underline hover:bg-[#000041]"><h3>Sign In!</h3></div>
                </div>
                <div className="flex flex-row justify-evenly mb-[100px] overflow-hidden items-center h-[100px]">
                    <div id="social" className="mx-[-50px] h-auto w-auto hover:cursor-pointer"><Image src={FacebookIcon} alt='facebook icon' className="h-[40px] w-[40px]"/></div>
                    <div id="social" className="mx-[-50px] h-auto w-auto hover:cursor-pointer"><Image src={InstagramIcon} alt='instagram icon' className="h-[40px] w-[40px]"/></div>
                    <div id="social" className="mx-[-50px] h-auto w-auto hover:cursor-pointer"><Image src={TwitterIcon} alt='twitter icon' className="h-[40px] w-[40px]"/></div>
                    <div id="social" className="mx-[-50px] h-auto w-auto hover:cursor-pointer"><Image src={TiktokIcon} alt='tiktok icon' className="h-[40px] w-[40px]"/></div>
                    <div id="social" className="mx-[-50px] h-auto w-auto hover:cursor-pointer"><Image src={LinkedinIcon} alt='linkedin icon' className="h-[40px] w-[40px]"/></div>
                    <div id="social" className="mx-[-50px] h-auto w-auto hover:cursor-pointer"><Image src={YoutubeIcon} alt='youtube icon' className="h-[40px] w-[40px]"/></div>
                </div>
            </div>
            <div id="side-menu-background" className="w-[415px] fixed left-[-415px] top-[0] h-screen bg-[#FC7A03] rounded-[15px] z-[2] "></div>
        </div>
    )
}

export default Nav
