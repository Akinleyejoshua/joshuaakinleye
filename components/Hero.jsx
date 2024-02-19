import Image from "next/image";
import Logo from "@/src/img/logo.jpg";

export const Hero = () => {
    return <section className="hero bg" id="home">
        <div className="row display">
        <div className="content">
            <h1>Joshua Akinleye</h1>
            <div className="space"></div>
            <h2>Full Stack Developer & Machine Learning Eng.</h2>
            <div className="space"></div>
            <p className="dim">As a Lead full-stack developer, I possess a diverse skill set, proficient in both front-end and back-end technologies. My expertise includes designing user interfaces, implementing server-side logic, and managing databases. With a solid understanding of web development frameworks and languages, I contribute to creating seamless and efficient applications. My problem-solving abilities and adaptability make me a valuable asset in the ever-evolving landscape of software development.</p>
            <div className="space"></div>
            <div className="space"></div>
        </div>
        <Image src={Logo} className="img"/>
        </div>
        {/* <div className="rect"></div> */}
       
    </section>
}