import { FaBriefcase } from "react-icons/fa";

export const Experience = () => {
    return <section className="experience" id="experience">
        <h1 className="row items-center">
            <FaBriefcase className="icon" />
            <div className="space"></div>
            <div className="space"></div>
            <div className="space"></div>
           My Experiences
        </h1>

        <div className="experiences grid">
            <div className="item">
                <h2>Gtext</h2>
                <p className="dim">Junior Full Stack Developer</p>
                <h3>2021-2022</h3>
            </div>
            <div className="item">
                <h2>Smart Technique</h2>
                <p className="dim">Coversationsal A.I Developer</p>
                <h3>2022-2023</h3>
            </div>
            <div className="item">
                <h2>BLNR (Open Source)</h2>
                <p className="dim">Senior Backend Developer</p>
                <h3>2024 • Current</h3>
            </div>

        </div>

    </section>
}