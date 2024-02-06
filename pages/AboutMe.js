import React from 'react';
import Image from "next/image";
import { AiFillLinkedin } from 'react-icons/ai';
import memoj2 from "../public/memoj2.png";



function AboutMe(){
    return(
    <div className='flex justify-center items-center h-screen'>
        <div className="md:w-1/2 text-left container reveal fade-bottom">
            <h2 style={{ fontWeight: 'bold', color: 'white'}} id="about" name="about" className="text-xl py-2 font-medium md:text-5xl"> 
            Full Stack
            <br/> Software Developer.
            </h2>
            <div>
                <p className="text-md py-5 leading-8 text-white-800 md:text-2xl max-w-xl mx-auto container reveal fade-left">
                    Welcome to my personal website.
                    I am a dedicated Software Developer eagerly seeking opportunities to contribute my skills and expertise to impactful 
                    projects within the industry. With a solid foundation in coding and a strong drive to innovate, I currently serve as an intern at RadicalX, 
                    where I specialize in building dynamic web applications using React, Node.js, and CSS.
                    Explore my portfolio to see how I am prepared to make a meaningful impact in the world of software development.            
                </p>
            </div>
            <div className="text-5xl flex justify-center gap-16 py-3 text-white-600 container reveal fade-right">
                <a href="https://www.linkedin.com/in/kevin-salmeron-zendejas" target="_blank" rel="noopener noreferrer">
                    <AiFillLinkedin />
                </a>
            </div>
            <div className="relative mx-auto bg-gradient-to-r from-green-400 to-green-900 rounded-full w-32 h-32 md:h-64 md:w-64 mt-3 overflow-hidden container reveal fade-left">
                <Image src={memoj2} alt="A developer coding on a computer"  sizes='(max-width: 640) 100vw, (max-width: 1024px) 80vh, 1200px'/>
            </div> 
        </div>
    </div>
    )   
};

export default AboutMe;