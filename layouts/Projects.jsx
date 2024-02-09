import Image from "next/image";
import { AiOutlineGithub, AiOutlineLaptop, AiOutlineShareAlt } from "react-icons/ai";
import Twitter from "@/src/img/twitter.png";
import Store from "@/src/img/store.png"

export const Projects = () => {
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
            <div className="item">
                <div className="img">
                    <Image alt="img" src={Twitter} className="img" />
                </div>
                <div className="content">
                    <div className="space">
                    </div>
                    <div>
                        <h1>Twitter Clone (Frontend) Nextjs</h1>
                        <a target="blank" href="http://x-clone-client-vercel.app"><AiOutlineShareAlt /></a>
                        <a target="blank" href="https://github.com/Akinleyejoshua/twitter-clone-client"><AiOutlineGithub /></a>
                    </div>

                </div>
            </div>

            <div className="item">
                <div className="img">
                    <Image alt="img" src={Store} className="img" />
                </div>
                <div className="content">
                    <div className="space">
                    </div>
                    <div>
                        <h1>WooCommerce Web App (Frontend) Nextjs Express MongoDB Nodejs</h1>
                        <a target="blank" href="http://uni-store.vercel.app"><AiOutlineShareAlt /></a>
                        <a target="blank" href="https://github.com/Akinleyejoshua/uni-store"><AiOutlineGithub /></a>
                    </div>

                </div>
            </div>
        </div>
    </section>
}