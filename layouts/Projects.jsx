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
            tags: ["Express", "MongoDB", "Nodejs", "React", "JWT", "API"],
            description: "This is an Open Sourced Project for a Startup, the backend has many endpoints both Login and Signup with JWT Authorization, its pretty secure."
        },
        {
            img: Twitter,
            name: "Twitter/X Clone",
            github: "https://github.com/Akinleyejoshua/twitter-clone-client",
            link: "http://x-clone-client-vercel.app",
            tags: ["Nextjs", "TypeScript"],
            description: "This Web Application was built using Nextjs Framework, it comprises of the frontend only"
        },

        {
            img: Store,
            name: "WooCommerce Web App ",
            github: "https://github.com/Akinleyejoshua/uni-store",
            link: "http://uni-store.vercel.app",
            tags: ["Nextjs", "MongoDB", "Nodejs", "API"],
            description: "This Web Application was built using Nextjs and Nodejs Server, it comprises of frontend and backend, in this web app, you can add a product, list the products for buyers, add to cart, checkout and wait for delivery, it also have admin dashboard to monitor products and sales revenue"

        },
        {
            img: Screen,
            name: "SaaS for Screen Sharing",
            github: null,
            link: "http://screen-view.vercel.app",
            tags: ["Nextjs", "Express", "MongoDB", "API", "Nodejs"],
            description: "This Web Application was built using Nextjs, Nodejs, Express, MongoDB, this app can help you share streamed video content, uploading the content to your own personal cloud storage and sharing to any part of the world, nevertheless the Server is down due to Billing and Maintenance, you can only go through the frontend aspect only, you can also check my Linkedin for DEMO video of this app"

        }
    ]

    const mlprojects = [
        {
            img: Covid,
            name: "Covid 19 Diagnostics",
            github: null,
            link: "https://j-covidtest.netlify.app/",
            tags: ["Python", "JavaScript", "Tensorflow", "Pandas", "Numpy", "Computer Vision"],
            description: "This is a Covid-19 Detector for patients, i used pandas to prepare the datasets gotten from kaggle, i then trained the computer vision model using tensorflow, converted the model to JSON and finally deployed it on the web using Tensorflow.js using Javascript. the current version makes use X-ray Scans for detection"
        },
        {
            img: Face,
            name: "Facial Expression Detector V2",
            github: "https://github.com/Akinleyejoshua/facial-expression-v1",
            link: "https://facialanalysis.netlify.app/",
            tags: ["Python", "React", "Tensorflow", "Pandas", "Numpy", 'Object Detection'],
            description: "One of the most intersting project i worked on as a data scientist, the latter version which is the picture above was not deployed due to a crash on my system, so i lost the files, but the first version was uploaded but also the server is also down, i used object detection model to train the network and build the model."
        },
        {
            img: Bot,
            name: "Chat Bot Assistant like GPT for HRs, Web Scraping, Code Fetching",
            github: "https://github.com/Akinleyejoshua/-chatbot/tree/main",
            link: "https://j-chatbot.netlify.app/",
            tags: ["Python", "React", "Tensorflow", "Pandas", "Numpy", 'NLP'],
            description: "This is a bot that can help do anything automated on the web like conducting interviews for candidates, scrape the web faster, retrieve code answers from github, stackoverflow and google, can help you locate places on the map, check my Linkedin Page for a the Demos for this app, it was built using Natural Language Processing"

        }

    ]
    return <section className="projects" id="projects">
        <h1 className="row items-center self-center">
            <AiOutlineLaptop className="icon" />
            <div className="space"></div>
            <div className="space"></div>
            <div className="space"></div>
            My Projects
        </h1>

        <div className="space"></div>
        <h4 className="self-center dim">I have {webprojects.length} TOP Full Stack Development Project</h4>

        <div className="projects grid-2" id="web">

            {webprojects.map((item, i) => {
                return <div className="item" key={i}>
                    <div className="img">
                        <Image alt="img" src={item?.img} className="img" />
                    </div>
                    <div className="content">
                        <div className="space"></div>

                        <div className="data">
                            <h1>{item?.name}</h1>
                            <div className="space"></div>
                            <small className="dim">{item?.description}</small>
                            <div className="space"></div>
                            <div className="flex-1">
                                {item?.tags.map((item, i) => {
                                    return <small className="tag" key={i}>#{item}</small>
                                })}
                            </div>
                            <div className="space"></div>
                            <div className="space"></div>


                        </div>
                        <div className="actions">
                            <a target="blank" href={item?.link}><AiOutlineShareAlt /></a>
                            {item?.github !== null && <a target="blank" href={item?.github}><AiOutlineGithub /></a>}
                        </div>
                    </div>
                </div>
            })}

        </div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>


        <h4 className="self-center dim">I have {mlprojects.length} TOP Machine Learning Projects</h4>
        <div className="projects grid" id="ml">

            {mlprojects.map((item, i) => {
                return <div className="item" key={i}>
                    <div className="img">
                        <Image alt="img" src={item?.img} className="img" />
                    </div>
                    <div className="content">
                        <div className="space">
                        </div>
                        <div className="data">
                            <h1>{item?.name}</h1>
                            <div className="space"></div>
                            <small className="dim">{item?.description}</small>
                            <div className="space"></div>
                            <div className="flex-1">
                                {item?.tags.map((item, i) => {
                                    return <small className="tag" key={i}>#{item}</small>
                                })}
                            </div>
                            <div className="space"></div>
                            <div className="space"></div>

                        </div>
                        <div className="actions">
                            <a target="blank" href={item?.link}><AiOutlineShareAlt /></a>
                            {item?.github !== null && <a target="blank" href={item?.github}><AiOutlineGithub /></a>}
                        </div>
                    </div>
                </div>
            })}

        </div>
    </section>
}