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

function Skills() {
  return (
    <div className="text-center">
      <p className="alfa-slab-one mb-10" style={{ fontSize: "90px" }}>
        Skills
      </p>
      <div className="flex justify-center items-center space-x-8">
        <FaReact className="text-6xl" />
        <SiNextdotjs className="text-6xl" />
        <IoLogoJavascript className="text-6xl" />
        <FaPython className="text-6xl" />
        <FaHtml5 className="text-6xl" />
        <FaCss3 className="text-6xl" />
        <FaDocker className="text-6xl" />
        <DiDjango className="text-6xl" />
        <SiFastapi className="text-6xl" />
      </div>
    </div>
  );
}

export default Skills;
