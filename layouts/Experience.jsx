import { FaBriefcase } from "react-icons/fa";

export const Experience = () => {
    const experiences = [
        {
            name: "C.A.C",
            role: "Web Developer",
            time: "2020 - 2021"
        },
        {
            name: "Gtext",
            role: "Full Stack Developer",
            time: "2021 - 2022"
        },
        {
            name: "Smart Technique",
            role: "Conversational A.I Scientist (Data Science)",
            time: "2022 - 2023"
        },
        {
            name: "BLNR (Open Source)",
            role: "Senior Backend Developer",
            time: "2024 • Current"
        }
    ]
    return <section className="experience" id="experience">
        <h1 className="row items-center">
            <FaBriefcase className="icon" />
            <div className="space"></div>
            <div className="space"></div>
            <div className="space"></div>
            My Experiences
        </h1>

        <div className="experiences grid">
            {experiences.map((item, i) => {
                return <div className="item" key={i}>
                    <h2>{item.name}</h2>
                    <p className="dim">{item.role}</p>
                    <h3>{item.time}</h3>
                    <div className="num">{i+1}</div>
                </div>
            })}

        </div>

<div className="note">
    <p>From the above experiences i had at the organizations has a softwear developer, i was responsible for
    planning, researching, designing, developing codebase, testing and then deploying to production 
    after critical testing of the business products 
    that needed to be launched, thereby i collaborated with the I.T Team to foster clear communication
    on how the products meet clients expectation and help in solving business problems. 
    if this interest you based on my expertise kindly reach out to me through any of my <a href="#contact">contacts</a>, 
    can't wait to drive your business solutions to it potentials for your business to gain marginal success.
    </p>
</div>
    </section>
}