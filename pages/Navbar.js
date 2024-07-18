import React from "react";
import logomain from "../public/logomain.png";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  const handleLinkClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    const offset = 80;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <nav
      className="sticky-navbar py-10 mb-10 flex justify-between"
      style={{ fontSize: "20px" }}
    >
      <div className="image-container">
        <Image src={logomain} alt="logokevin" width={130} height={130} priority />
      </div>
      <ul className=" flex items-center space-x-8">
        <li>
          <Link
            href="/resume"
            className="bg-gradient-to-r from-green-400 to-green-600 text-white px-4 py-2 rounded-md ml-8"
          >
            Resume
          </Link>
        </li>
        <ul
          className="flex items-center space-x-8"
          style={{ fontSize: "20px" }}
        >
          <li>
            <a
              href="/about"
              className="link"
              onClick={(e) => handleLinkClick(e, "about")}
            >
              About Me
            </a>
          </li>
          <li className="mr-6">
            <a
              href="#projects"
              className="link"
              onClick={(e) => handleLinkClick(e, "projects")}
            >
              Projects
            </a>
          </li>
          <li className="mr-6">
            <a
              href="#skills"
              className="link"
              onClick={(e) => handleLinkClick(e, "skills")}
            >
              Skills
            </a>
          </li>
          <li className="mr-6">
            <a
              href="#contact"
              className="link"
              onClick={(e) => handleLinkClick(e, "contact")}
            >
              Contact
            </a>
          </li>
        </ul>
      </ul>
    </nav>
  );
}

export default Navbar;
