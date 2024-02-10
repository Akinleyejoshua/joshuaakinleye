import { AiOutlineLinkedin, AiOutlineMail, AiOutlinePhone, AiOutlineTwitter } from "react-icons/ai"

export const Contact = () => {
    return <footer id="contact">
        <div className="socials row items-center">
            <a target="blank" href="https://twitter.com/Joshuaakinleye4"><AiOutlineTwitter/></a>
            <a target="blank" href=""><AiOutlineLinkedin/></a>
        </div>
        <div className="contacts">
            <a target="blank" href="mailto:akinleyejoshua.dev@gmail.com" className="row items-center">
                <AiOutlineMail className="icon"/>
                <div className="space"></div>
                akinleyejoshua.dev@gmail.com
            </a>
            <div className="space"></div>
            <a target="blank" href="" className="row items-center">
                <AiOutlinePhone className="icon"/>
                <div className="space"></div>
                +(234) 08131519518
            </a>
        </div>

        <div className="copy">
        Joshua Akinleye &copy; 2024

        </div>
    </footer>
}