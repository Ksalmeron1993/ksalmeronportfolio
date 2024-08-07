import React from "react";
import Image from "next/image";
import smiley from "../public/smiley.png";
import { AiFillLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <footer
      className="bg-black text-white dark:bg-gray-900"
      style={{ padding: "150px" }}
    >
      <div className="container flex flex-col md:flex-row justify-center items-center">
        <div className="flex justify-center md:mb-0">
          <Image
            src={smiley}
            alt="thank you for visiting smiley"
            width={220}
            height={220}
            priority
          />
        </div>
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mt-10 md:mt-5 w-full">
          <div className="text-center md:text-right">
            <div className="md:flex md:items-center">
              <div style={{ marginLeft: "5px" }}>
                <h2
                  style={{
                    fontWeight: "bold",
                    color: "white",
                    marginBottom: "10px",
                  }}
                  className="alfa-slab-one text-xl py-1 font-medium md:text-7xl"
                >
                  {" "}
                  Contact <br /> Me.
                </h2>
                <div className="mt-8 text-center md:text-left">
                  <h4 className="text-3xl font-bold">Email:</h4>
                  <a
                    href="mailto:ksalmeron1993@gmail.com"
                    className="text-xl contact"
                  >
                    ksalmeron1993@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="md:ml-4 mt-4 md:mt-5">
              <a
                href="https://www.linkedin.com/in/kevin-salmeron-zendejas"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin size={50} color="white" />
              </a>
            </div>
          </div>
          <div className="mt-2 text-lg font-semibold">
            <p className="md:text-xl">Portfolio by Kevin Salmeron</p>
            <p className="md:text-xl">2024</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
