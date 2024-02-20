import { AiOutlineContacts, AiOutlineHome, AiOutlineLaptop, AiOutlineSetting } from "react-icons/ai";


export const NavBar = ({toggle, navBar}) => {
    return <div className={`${navBar ? "navbar open": "navbar"}`}>
    <div className="close-bar" onClick={() => toggle(false)}></div>

    <div className="links grid-1" onClick={() => toggle(false)}>
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

</div>
}