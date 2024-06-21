import React from "react";
import logomain from "../public/logomain.png";
import resume from "../public/resume.png";
import Image from "next/image";

function Navbar() {
  return (
    <nav
      className="py-10 mb-12 flex justify-between"
      style={{ fontSize: "20px" }}
    >
      <div className="image-container">
        <Image src={logomain} alt="logokevin" width={180} height={180} />
      </div>
      <ul className=" flex items-center space-x-10">
        <li>
          <a
            id="resume-link"
            href={resume.src}
            className="bg-gradient-to-r from-green-400 to-green-600 text-white px-4 py-2 rounded-md ml-8"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </li>
        <ul
          className="flex items-center space-x-14"
          style={{ fontSize: "20px" }}
        >
          <li className="mr-6">
            <a href="#about" className="link">
              About Me
            </a>
          </li>
          <li className="mr-6">
            <a href="#skills" className="link">
              Skills
            </a>
          </li>
          <li className="mr-6">
            <a href="#projects" className="link">
              Projects
            </a>
          </li>
          <li className="mr-6">
            <a href="#contact" className="link">
              Contact
            </a>
          </li>
        </ul>
      </ul>
    </nav>
  );
}

export default Navbar;
