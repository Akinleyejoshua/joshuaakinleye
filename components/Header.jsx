"use client"
import { AiOutlineContacts, AiOutlineHome, AiOutlineLaptop, AiOutlineSetting } from "react-icons/ai";
import { MenuBar } from "./MenuBar";
import { useEffect, useRef, useState } from "react";

export const Header = () => {
    const header = useRef(0);

    useEffect(() => {
        window.onscroll = () => {
            if (window?.scrollY > 100){
                header.current.className = "ontop"
            } else {
                header.current.className = ""

            }
        }
    })
   
    
    const [navBar, setNavBar] = useState(false);
    return <header ref={header}>
        <nav>
            <div className="navbrand">
                <a href="/" style={{fontWeight: 900}}>Josh.</a>
            </div>

            <div className="menu-btn cover" onClick={() => setNavBar(true)}>
               <MenuBar/>
            </div>

            <div className={`${navBar ? "navlinks open": "navlinks"}`}>
                <div className="links">
                    <a href="#home" className="cover row">
                        <AiOutlineHome className="icon"/>
                        <div className="space"></div>
                        <p>Home</p>
                    </a>
                    <a href="#experience" className="cover row">
                        <AiOutlineSetting className="icon"/>
                        <div className="space"></div>
                        <p>Experience</p>
                    </a>
                    <a href="#projects" className="cover row">
                        <AiOutlineLaptop className="icon"/>
                        <div className="space"></div>
                        <p>Projects</p>
                    </a>
                    <a href="#contact" className="cover row">
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