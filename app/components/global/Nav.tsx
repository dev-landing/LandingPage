"use client"

// !Packages
import Image from "next/image";
import Link from "next/link";
import React, { useState, useLayoutEffect } from 'react';

// Files
import '../global/Nav.css';
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

    }, [])


    return (
        <div className="container">
            <header className="navbar-container">
                <nav className="navbar">
                    <div className="left-side">
                        <div className="grid-icon" onClick={() => {
                            if(!isOpen) {
                                setIsOpen(true); var timeline = gsap.timeline(); timeline.to(".side-menu-background", {left: 0, duration: 0.3}).to(".side-menu", {left: 0, duration: 0.3});
                            }
                            else if(isOpen) {
                                setIsOpen(false); var timeline = gsap.timeline(); timeline.to(".side-menu-background", {left: -415, duration: 0.3}).to(".side-menu", {left: -400, duration: 0.3});
                            }}}>
                            <Image src={MenuIcon} alt='menu-icon' className="grid-svg"/>
                        </div>
                        <Link href='/' style={{display: 'flex', alignItems: 'center', fontSize: '30px', marginLeft: "5px"}}><Image src={Logo.src} alt="logo" width={50} height={50} style={{scale: "0.6"}} />3BX</Link>
                    </div>
                    <div className="search-bar">
                        <Search placeholder="Search" />
                    </div>
                    <div className="right-side">
                        <button className="sign-in">Sign In!</button>
                        <button className="join">Join</button>
                    </div>
                </nav>
            </header>
            <div className="side-menu">
                <div className="top">
                    <div className="title"><h3>MENU</h3></div>
                    <div className="close-icon" onClick={() => {setIsOpen(false); var timeline = gsap.timeline(); timeline.to(".side-menu", {left: -400, duration: 0.3}).to(".side-menu-background", {left: -415, duration: 0.3}); }}><CloseIcon fontSize="large" /></div>
                </div>
                <div className="mid-top">
                    <div className="home-btn"><Image src={HouseIcon} alt='house icon' /><h3>Home</h3></div>
                    <div className="info-btn"><Image src={InfoIcon} alt='info icon' /><h3>About 3BX</h3></div>
                </div>
                <div className="mid-bottom">
                    <div className="support-btn"><Image src={SupportIcon} alt='support icon' /><h3>Support</h3></div>
                    <div className="register-btn"><Image src={RegisterIcon} alt='register icon' /><h3>Register</h3></div>
                    <div className="sign-in-btn"><h3>Sign In!</h3></div>
                </div>
                <div className="footer-socials">
                    <div className="facebook social"><Image src={FacebookIcon} alt='facebook icon'/></div>
                    <div className="instagram social"><Image src={InstagramIcon} alt='instagram icon'/></div>
                    <div className="twitter social"><Image src={TwitterIcon} alt='twitter icon'/></div>
                    <div className="tiktok social"><Image src={TiktokIcon} alt='tiktok icon'/></div>
                    <div className="tiktok social"><Image src={LinkedinIcon} alt='linkedin icon'/></div>
                    <div className="youtube social"><Image src={YoutubeIcon} alt='youtube icon'/></div>
                </div>
            </div>
            <div className="side-menu-background"></div>
        </div>
    )
}

export default Nav
