import React from "react";
import Image from "next/image";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import memoj2 from "../public/memoj2.png";


function AboutMe() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="md:w-1/2 text-left container reveal fade-bottom">
        <h2
          style={{ fontWeight: "bold", color: "white" }}
          id="about"
          name="about"
          className="text-xl py-2 font-medium md:text-5xl mt-8"
        >
          Front End
          <br /> Software Developer.
        </h2>
        <div>
          <p className="text-md py-5 leading-8 text-white-800 md:text-2xl max-w-xl mx-auto container reveal fade-left">
            Welcome to my personal website! I am a front end
            developer dedicated to creating visually appealing and 
            functional user interfaces. With experience in HTML, CSS, JavaScript,
            and modern frameworks like React.js and Next.js, I push myself to continuously
            improve my skills. 
            Please leave any feedback or reach out if you want to connect with me ! 
            </p>
        </div>
        <div className="text-5xl flex justify-center gap-16 top-8 py-3 text-white-600 container reveal fade-right">
          <a
            href="https://www.linkedin.com/in/kevin-salmeron-zendejas"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin />
          </a>
          <a
          href="https://github.com/Ksalmeron1993"
          target="_blank"
          rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
        <div className="relative mx-auto bg-gradient-to-r from-green-400 to-green-900 rounded-full w-30 h-30 md:h-60 md:w-60 mt-20 overflow-hidden container reveal fade-left">
          <Image
            src={memoj2}
            alt="A developer coding on a computer"
            sizes="(max-width: 640) 100vw, (max-width: 1024px) 80vh, 1200px"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
