import React from 'react';
import Image from "next/image";
import code from '../public/code.png';
import design from '../public/design.png';
import problemsolve from '../public/problemsolve.png';


function SkillsHover(){
    return (
<div>
    <div className="lg:flex gap-9"> 
      <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white your-section-class container reveal fade-right">
        <div className="flex justify-center items-center mb-8">
            <Image src={code} width={100} height={100} alt="code" />
        </div>
        <h3 className="text-xl font-large pt-8 pb-6">Innovative Coding</h3>
        <p style={{fontSize:'20px'}}>I continuously explore and implement innovative approaches to software development,
           ensuring that my solutions are not only functional but also creative in their design.
        </p>
      </div>
      <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white your-section-class container reveal fade-right">
        <div className="flex justify-center items-center mb-8">
            <Image src={design} width={100} height={100} alt="design" />
        </div>
        <h3 className="text-xl font-large pt-8 pb-6">Creative Designs</h3>
        <p style={{fontSize:'20px'}}>Leveraging tools like React and CSS, I can craft visually appealing interfaces that enhance user interaction. 
         With an art background, my commitment is to create not just functional but aesthetically pleasing and user-friendly applications.
        </p>
      </div>
      <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white your-section-class container reveal fade-right">
        <div className="flex justify-center items-center mb-8">
            <Image src={problemsolve} width={100} height={100} alt="problemsolving" />
        </div>
        <h3 className="text-xl font-large pt-8 pb-6">Problem Solving</h3>
        <p style={{fontSize:'20px'}}>Faced with challenges, I approach each problem systematically, breaking it down into manageable components. 
          With my experience with languages like Python and JavaScript, coupled with a foundational understanding of algorithms and data structures, 
          I am well prepared to analyze complex problems and devise elegant solutions.
        </p>
      </div>
    </div>
    </div>
    );
};

export default SkillsHover;