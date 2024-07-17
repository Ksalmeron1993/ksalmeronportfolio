import React from "react";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaPython } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { DiDjango } from "react-icons/di";
import { SiFastapi } from "react-icons/si";
import Image from "next/image";
import code_react from "../public/code_react.png";
import code_nextJS from "../public/code_nextJS.png";
import code_django from "../public/code_django.png";


function Skills() {
  return (
    <div className="text-center">
      <p className="alfa-slab-one mb-10" style={{ fontSize: "90px" }}>
        Skills
      </p>
      <div className="flex justify-center items-center space-x-8">
        <div className="skill-icon">
        <FaReact className="text-6xl" />
        <Image src={code_react} alt="react" />
        </div>
        <div className="skill-icon">
        <SiNextdotjs className="text-6xl" />
        <Image src={code_nextJS} alt="nextJS" />
        </div>
        <div className="skill-icon">
        <IoLogoJavascript className="text-6xl" />
        </div>
        <div className="skill-icon">
        <FaPython className="text-6xl" />
        </div>
        <div className="skill-icon">
        <FaHtml5 className="text-6xl" />
        </div>
        <div className="skill-icon">
        <FaCss3 className="text-6xl" />
        </div>
        <div className="skill-icon">
        <FaDocker className="text-6xl" />
        </div>
        <div className="skill-icon">
        <DiDjango className="text-6xl" />
        <Image src={code_django} alt="django" />
        </div>
        <div className="skill-icon">
        <SiFastapi className="text-6xl" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
