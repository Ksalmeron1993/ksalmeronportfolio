import React from "react";
import resume from "../public/resume.png";
import Link from "next/link";
import Image from "next/image";

function resumeLink() {
  return (
    <div className="button-container">
      <Link
        href="/"
        className="home-link bg-gradient-to-r from-blue-400 to to-blue-800 text-white px-4 py-2 rounded-m ml-7"
      >
        Home
      </Link>
      <div className="resume-container">
        <a
          id="resume-link"
          href={resume.src}
          className="bg-gradient-to-r from-green-400 to-green-600 text-white px-4 py-2 rounded-md ml-8"
          download="Kevin_Salmeron_Resume"
        >
          Download Resume
        </a>

        <div className="resume-wrapper">
          <Link href={resume.src}>
            <Image
              src={resume}
              alt="resume"
              className="resume"
              placeholder="blur"
              loading="lazy"
              width={600}
              height={800}
            />
          </Link>
        </div>
        </div>
      </div>
  );
}

export default resumeLink;
