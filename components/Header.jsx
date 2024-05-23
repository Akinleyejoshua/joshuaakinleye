"use client"
import { AiOutlineContacts, AiOutlineHome, AiOutlineLaptop, AiOutlineSetting } from "react-icons/ai";
import { MenuBar } from "./MenuBar";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Logo from "@/src/img/logo.jpg";

export const Header = ({checkNavBar}) => {
    const header = useRef(0);
    const navlinks = useRef(0);

    useEffect(() => {
        let headerTop = header.current;
        window.onscroll = () => {
            if (window?.scrollY > 500){
                headerTop.className = "ontop"
            } else {
                headerTop.className = ""

            }
        }
    })
   
    
    const [navBar, setNavBar] = useState(false);
    return <header ref={header}>
        <nav>
            <div className="navbrand">
                <a href="/" style={{fontWeight: 900}}>
                    <Image src={Logo}/>
                </a>
            </div>

            <div className="menu-btn cover" onClick={() => {setNavBar(true); checkNavBar(true)}}>
               <MenuBar />
            </div>

            <div className={`${navBar ? "navlinks open": "navlinks"}`} ref={navlinks}>

                <div className="links" onClick={() => setNavBar(false)}>
                    <a href="#home" className="cover row" title="Home">
                        <AiOutlineHome className="icon"/>
                        <div className="space"></div>
                        <p>Home</p>
                    </a>
                    <a href="#experience" className="cover row" title="Experience">
                        <AiOutlineSetting className="icon"/>
                        <div className="space"></div>
                        <p>Experience</p>
                    </a>
                    <a href="#projects" className="cover row" title="Projects">
                        <AiOutlineLaptop className="icon"/>
                        <div className="space"></div>
                        <p>Projects</p>
                    </a>
                    <a href="#contact" className="cover row" title="Contact me">
                        <AiOutlineContacts className="icon"/>
                        <div className="space"></div>
                        <p>Contact</p>
                    </a>
                </div>
                <div className="close-bar" onClick={() => setNavBar(false)}></div>

            </div>
        </nav>
    </header>
}