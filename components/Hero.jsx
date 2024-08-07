import Image from "next/image";
import Logo from "@/src/img/logo.jpg";

export const Hero = () => {
  return (
    <section className="hero bg" id="home">
      <div className="row display">
        <div className="content">
          <h1>Joshua Akinleye</h1>
          <h2>I'm a Full Stack Developer & Machine Learning Engineer</h2>
          <div className="space"></div>
          <div className="space"></div>
          <div className="space"></div>
          <div className="space"></div>
          <p className="dim text">
          As a Lead full-stack developer and ML Engineer, I possess a diverse skill set,
          proficient in both front-end and back-end and data-science technologies
          </p>
          <div className="space"></div>
          <div className="space"></div>
          <div className="space"></div>
          <div className="space"></div>
          <div className="space"></div>
          <div className="space"></div>

          <div className="actions grid" style={{ gridGap: "1rem" }}>
            <a href="#contact">Yo, Get in touch</a>
            <a
              target="blank"
              href="https://matching.turing.com/developer-resume-preview/94fcd098ef28063a611a36b6c211b83394302204b3221e"
            >
              Visit Turing Profile
            </a>
          </div>
        </div>
        <Image src={Logo} className="img" />
      </div>
    </section>
  );
};
