import * as React from "react";
import { useEffect } from "react";
import AboutMe from "./AboutMe";
import city from "../public/city.png";
import Footer from "./Footer";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ImageSlider from "./ImageSlider";
import museum2 from "../public/museum2.png";
import Navbar from "./Navbar";
import needle2 from "../public/needle2.png";
import ScrollToTop from "react-scroll-to-top";
import SkillsHover from "./SkillsHover";
import woods2 from "../public/woods2.png";
import Skills from "./Skills";

export default function Home() {
 
  const slides = [
    {
      url: "/movie.png",
      title: "MovieMania",
      gitlabLink: "https://gitlab.com/instructors2085807/movie-maniacs.git",
    },
    {
      url: "/carcar.png",
      title: "CarCar",
      gitlabLink: "https://gitlab.com/ksalmeron1993/car-car.git",
    },
    { url: "morecoming.png", title: "Default", gitlabLink: null },
  ];

  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", reveal);

    return () => {
      window.removeEventListener("scroll", reveal);
    };
  }, []);

  return (
    <div className="page-container bg-black text-white">
      <div className="page-container">
        <Head>
          <title>Kevin Salmeron</title>
          <meta name="description" content="Generated by Kevin Salmeron" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <main className="bg-black text-white px-4 md:px-10 lg:px-20 dark:bg-gray-900">
          <div className="mb-10">
            <Navbar />
          </div>

          <div className="text-center p-10 mb-10">
            <div className="md:flex md:justify-between">
              <div className="w-full md:w-1/2 slide-in-element mt-2">
                <h2
                  style={{
                    fontWeight: 'bold',
                    backgroundImage: 'linear-gradient(to right, #0074D9, #33ADFF)',
                    WebkitBackgroundClip: 'text',
                    color: 'white',
                  }}
                  className="text-4xl md:text-7xl py-2 font-medium"
                >
                  Portfolio
                </h2>
              </div>
              <div className="w-full md:w-1/2 slide-in-element mt-2 pl-0 md:pl-8">
                <h2
                  style={{ fontWeight: 'bold', color: 'white' }}
                  className="text-xl md:text-4xl py-2 font-medium"
                >
                  by
                  <br /> Kevin Salmeron.
                </h2>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center mb-10">
            <div className="p-2">
              <Link href={'../public/woods2.png'}>
                <Image
                  src={woods2}
                  alt="woods"
                  className="image1"
                  id="image1"
                  priority={true}
                  placeholder="blur"
                />
              </Link>
            </div>
            <div className="p-2">
              <Link href={'../public/city.png'}>
                <Image
                  src={city}
                  alt="city"
                  className="image2"
                  id="image2"
                  priority={true}
                  placeholder="blur"
                />
              </Link>
            </div>
            <div className="p-2">
              <Link href={'../public/museum2.png'}>
                <Image
                  src={museum2}
                  alt="museum"
                  className="image3"
                  id="image3"
                  priority={true}
                  placeholder="blur"
                />
              </Link>
            </div>
            <div className="p-2">
              <Link href={'../public/needle2.png'}>
                <Image
                  src={needle2}
                  alt="needle"
                  className="image4"
                  id="image4"
                  priority={true}
                  placeholder="blur"
                />
              </Link>
            </div>
          </div>

          <div className="mb-10">
            <AboutMe />
          </div>

          <section id="skills" name="skills" className="flex flex-col items-center mb-10 bg-black text-white">
            <div>
              <Skills />
            </div>
            <div className="mt-4 mb-10">
              <SkillsHover />
            </div>
          </section>

          <section className="flex flex-col items-center mb-10 bg-black text-white w-full m-0 mt-4">
            <div
              id="projects"
              name="projects"
              className="text-5xl flex justify-center py-9 text-white-600 container reveal fade-right"
            >
              <p className="alfa-slab-one text-6xl md:text-7xl">Projects</p>
            </div>
            <div className="w-full mt-12 mb-10 text-center">
              <ImageSlider slides={slides} />
            </div>
          </section>

          <div className="flex justify-center mb-10">
            <ScrollToTop smooth />
          </div>

          <div className="container mb-10" id="contact" name="contact">
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}
