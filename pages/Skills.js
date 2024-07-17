import React from "react";
import Image from "next/image";
import { FaReact, FaPython, FaHtml5, FaCss3, FaDocker } from "react-icons/fa";
import { SiNextdotjs, SiFastapi } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { DiDjango } from "react-icons/di";

const skillsData = [
  {
    icon: <FaReact className="text-6xl" />,
    image: "/code_react.png",
    name: "React"
  },
  {
    icon: <SiNextdotjs className="text-6xl" />,
    image: "/code_nextJS.png",
    name: "Next.js"
  },
  {
    icon: <IoLogoJavascript className="text-6xl" />,
    image: null,
    name: "JavaScript"
  },
  {
    icon: <FaPython className="text-6xl" />,
    image: null,
    name: "Python"
  },
  {
    icon: <FaHtml5 className="text-6xl" />,
    image: null,
    name: "HTML5"
  },
  {
    icon: <FaCss3 className="text-6xl" />,
    image: null,
    name: "CSS3"
  },
  {
    icon: <FaDocker className="text-6xl" />,
    image: null,
    name: "Docker"
  },
  {
    icon: <DiDjango className="text-6xl" />,
    image: "/code_django.png",
    name: "Django"
  },
  {
    icon: <SiFastapi className="text-6xl" />,
    image: null,
    name: "FastAPI"
  }
];

function Skills({ currentSkill }) {
  return (
    <div className="text-center">
      <p className="alfa-slab-one mb-10" style={{ fontSize: "90px" }}>
        Skills
      </p>
      <div className="flex justify-center items-center space-x-8">
        <div className="skill-icon">{currentSkill.icon}</div>
        {currentSkill.image && (
          <div className="skill-image">
            <Image src={currentSkill.image} alt={currentSkill.name} width={500} height={500} />
          </div>
        )}
      </div>
    </div>
  );
}

export { Skills, skillsData };
