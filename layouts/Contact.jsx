import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
  AiOutlineYoutube,
} from "react-icons/ai";

export const Contact = () => {
  return (
    <footer id="contact">
      <div className="socials col">
        <h1 className="row items-center">Contacts</h1>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>

        <div className="col">
          <div className="row">
            <a
              title="Twitter"
              target="blank"
              href="https://x.com/Joshuaakinleye4/media"
            >
              <AiOutlineTwitter />
            </a>
            <a
              title="Linkedin"
              target="blank"
              href="https://www.linkedin.com/in/joshua-a-9895b61ab/"
            >
              <AiOutlineLinkedin />
            </a>
            <a
              title="Youtube"
              target="blank"
              href="https://www.youtube.com/channel/UCQ51Ney9amBf0T5C69OmBog"
            >
              <AiOutlineYoutube />
            </a>
          </div>
          <div className="space"></div>
          <div className="space"></div>
          <div className="space"></div>
          <div className="row">
            <a
              title="Email Box"
              target="blank"
              href="mailto:akinleyejoshua.dev@gmail.com"
            >
              <AiOutlineMail />
            </a>
            <a title="Phone Number" target="blank" href="tel:2348131519518">
              <AiOutlinePhone />
            </a>
            <a
              title="Whatsapp Number"
              target="blank"
              href="https://wa.me/2348131519518"
            >
              <AiOutlineWhatsApp />
            </a>
          </div>
          <div className="space"></div>
          <div className="space"></div>
          <div className="space"></div>
          <div className="row">
            <a
              title="GitHub"
              target="blank"
              href="https://github.com/Akinleyejoshua"
            >
              <AiOutlineGithub />
            </a>
          </div>
        </div>
      </div>

      <div className="contact">
        <h1 className="row items-center">Explore</h1>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <a
          href="http://github.com/Akinleyejoshua"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <div className="space"></div>
        <a href="https://j-resume.netlify.app">ML Projects</a>
        <div className="space"></div>
        <a href="https://akinleyejoshua.netlify.app">1st Portfolio</a>
        <div className="space"></div>
        <a href="https://matching.turing.com/developer-resume-preview/94fcd098ef28063a611a36b6c211b83394302204b3221e">
          Turing Profile
        </a>
      </div>

      <div className="aboutme">
        <h1 className="row items-center">About me</h1>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <p>
          As a Lead full-stack developer and ML Engineer, I possess a diverse skill set,
          proficient in both front-end and back-end and data-science technologies. My expertise
          includes designing user interfaces, implementing server-side logic,
          ,managing databases, building and deploying ML models. With a solid understanding of web development
          frameworks and languages, I contribute to creating seamless and
          efficient applications. My problem-solving abilities and adaptability
          make me a valuable asset in the ever-evolving landscape of software
          development.
        </p>
      </div>

      <div className="copy">
        <a href="/">JOSHUA AKINLEYE</a> &copy; 2024 • The Creative
      </div>
    </footer>
  );
};
