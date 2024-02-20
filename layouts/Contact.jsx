import { AiOutlineIdcard, AiOutlineLinkedin, AiOutlineMail, AiOutlinePhone, AiOutlineTwitter, AiOutlineUser, AiOutlineYoutube } from "react-icons/ai"
import { FaLink } from "react-icons/fa"

export const Contact = () => {
    return <footer id="contact">
        <div className="socials col">
            <h1 className="row items-center">Socials <div className="space"></div> <AiOutlineUser /></h1>
            <div className="space"></div>
            <div className="space"></div>
            <div className="space"></div>

            <div className="col">
                <div className="row">
                    <a title="Twitter" target="blank" href="https://twitter.com/Joshuaakinleye4"><AiOutlineTwitter /></a>
                    <a title="Linkedin" target="blank" href="https://www.linkedin.com/in/joshua-akinleye-9895b61ab/"><AiOutlineLinkedin /></a>
                    <a title="Youtube" target="blank" href="https://www.youtube.com/channel/UCQ51Ney9amBf0T5C69OmBog"><AiOutlineYoutube /></a>
                </div>
                <div className="space"></div>
                <div className="space"></div>
                <div className="space"></div>
                <div className="row">
                    <a title="Email Box" target="blank" href="mailto:akinleyejoshua.dev@gmail.com">
                        <AiOutlineMail />

                    </a>
                    <a title="Phone Number" target="blank" href="tel:2348131519518">
                        <AiOutlinePhone />

                    </a>
                </div>
            </div>

        </div>

        <div className="contact">
            <h1 className="row items-center">Explore <div className="space"></div> <FaLink /></h1>
            <div className="space"></div>
            <div className="space"></div>
            <div className="space"></div>

            <a href="https://j-resume.netlify.app">ML Projects</a>
            <div className="space"></div>
            <a href="https://akinleyejoshua.netlify.app">1st Portfolio</a>
        </div>


        <div className="aboutme">
            <h1 className="row items-center">About me <div className="space"></div> <AiOutlineIdcard /></h1>
            <div className="space"></div>
            <div className="space"></div>
            <div className="space"></div>
            As a Lead full-stack developer, I possess a diverse skill set, proficient in both front-end and back-end technologies. My expertise includes designing user interfaces, implementing server-side logic, and managing databases. With a solid understanding of web development frameworks and languages, I contribute to creating seamless and efficient applications. My problem-solving abilities and adaptability make me a valuable asset in the ever-evolving landscape of software development.
        </div>



        <div className="copy">Joshua Akinleye &copy; 2024</div>
    </footer>
}