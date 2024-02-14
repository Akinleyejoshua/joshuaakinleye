import Image from "next/image";
import { AiOutlineGithub, AiOutlineLaptop, AiOutlineShareAlt } from "react-icons/ai";
import Twitter from "@/src/img/twitter.png";
import Store from "@/src/img/store.png";
import Screen from "@/src/img/screen.png";
import Covid from "@/src/img/covid.png";
import Face from "@/src/img/face.jpg";
import Blnr from "@/src/img/brnl.png";
import Bot from "@/src/img/bot.png";

export const Projects = () => {
    const webprojects = [
        {
            img: Blnr,
            name: "BLNR Backend (Open Source Project)",
            github: null,
            link: "https://blnr-dashboard-jet.vercel.app/",
            tags: ["Express", "MongoDB", "Nodejs", "React", "JWT", "API"]
        },
        {
            img: Twitter,
            name: "Twitter/X Clone",
            github: "https://github.com/Akinleyejoshua/twitter-clone-client",
            link: "http://x-clone-client-vercel.app",
            tags: ["Nextjs", "TypeScript"]
        },

        {
            img: Store,
            name: "WooCommerce Web App ",
            github: "https://github.com/Akinleyejoshua/uni-store",
            link: "http://uni-store.vercel.app",
            tags: ["Nextjs", "MongoDB", "Nodejs", "API"]
        },
        {
            img: Screen,
            name: "SaaS for Screen Sharing",
            github: null,
            link: "http://screen-view.vercel.app",
            tags: ["Nextjs", "Express", "MongoDB", "API", "Nodejs"]
        }
    ]

    const mlprojects = [
        {
            img: Covid,
            name: "Covid 19 Diagnostics",
            github: null,
            link: "https://j-covidtest.netlify.app/",
            tags: ["Python", "JavaScript", "Tensorflow", "Pandas", "Numpy", "Computer Vision"]
        },
        {
            img: Face,
            name: "Facial Expression Detector V2",
            github: "https://github.com/Akinleyejoshua/facial-expression-v1",
            link: "https://facialanalysis.netlify.app/",
            tags: ["Python", "React", "Tensorflow", "Pandas", "Numpy", 'Object Detection']
        },
        {
            img: Bot,
            name: "Chat Bot Assistant like GPT for HRs, Web Scraping, Code Fetching",
            github: "https://github.com/Akinleyejoshua/-chatbot/tree/main",
            link: "https://j-chatbot.netlify.app/",
            tags: ["Python", "React", "Tensorflow", "Pandas", "Numpy", 'NLP']

        }

    ]
    return <section className="projects" id="projects">
        <h1 className="row items-center self-center">
            <AiOutlineLaptop className="icon" />
            <div className="space"></div>
            <div className="space"></div>
            <div className="space"></div>
            Projects
        </h1>

        <div className="space"></div>
        <h4 className="self-center dim">Full Stack Development</h4>

        <div className="projects grid" id="web">

            {webprojects.map((item, i) => {
                return <div className="item" key={i}>
                    <div className="img">
                        <Image alt="img" src={item?.img} className="img" />
                    </div>
                    <div className="content">
                        <div className="space">
                        </div>
                        <div>
                            <h1>{item?.name}</h1>
                            <a target="blank" href={item?.link}><AiOutlineShareAlt /></a>

                            {item?.github !== null && <a target="blank" href={item?.github}><AiOutlineGithub /></a>}

                            <div className="grid-1">
                                {item?.tags.map((item, i) => {
                                    return <small className="tag" key={i}>{item}</small>
                                })}
                            </div>
                        </div>

                    </div>
                </div>
            })}

        </div>
        <h1 className="row items-center self-center">
            <AiOutlineLaptop className="icon" />
            <div className="space"></div>
            <div className="space"></div>
            <div className="space"></div>
            Projects
        </h1>

        <div className="space"></div>
        <h4 className="self-center dim">Machine Learning</h4>
        <div className="projects grid" id="ml">

            {mlprojects.map((item, i) => {
                return <div className="item" key={i}>
                    <div className="img">
                        <Image alt="img" src={item?.img} className="img" />
                    </div>
                    <div className="content">
                        <div className="space">
                        </div>
                        <div>
                            <h1>{item?.name}</h1>
                            <a target="blank" href={item?.link}><AiOutlineShareAlt /></a>

                            {item?.github !== null && <a target="blank" href={item?.github}><AiOutlineGithub /></a>}

                            <div className="grid-1">
                                {item?.tags.map((item, i) => {
                                    return <small className="tag" key={i}>{item}</small>
                                })}
                            </div>
                        </div>

                    </div>
                </div>
            })}

        </div>
    </section>
}