import React from 'react';
import Image from 'next/image';
import smiley from '../public/smiley.png';
import logomain from '../public/logomain.png';
import { AiFillLinkedin } from 'react-icons/ai';

function Footer() {
  return (
  <footer className="bg-black text-white dark:bg-gray-900" style={{padding: 0}}>
    <div className='container flex flex-col md:flex-row justify-center items-center'>
        <div className='flex justify-center md:mb-0'>
            <Image
            src={smiley}
            alt="thank you for visiting smiley"
            width={220}
            height={220}
            priority
            />
        </div>
        <div className='flex flex-col md:flex-row items-center md:ml-50'>
            <div className='text-center md:text-left'>
                <h2 
                style={{ fontWeight: 'bold', color: 'white', marginBottom: '10px' }} 
                className="alfa-slab-one text-xl py-1 font-medium md:text-7xl"> Contact <br/> Me.
                </h2>
                <div className="mt-8 text-center md:text-left">
                    <h4 className="text-3xl font-bold">Email:</h4>
                    <a 
                    href="mailto:ksalmeron1993@gmail.com" 
                    className="text-xl contact">ksalmeron1993@gmail.com
                    </a>
                </div>
            </div>
             
            <div className='mt-10 md:mt-[550px] md:ml-[-1100px]'>
            <div className="text-left md:text-right">
                <Image src={logomain} alt="logokevin" width={180} height={180} />
                <div className="ml-2 text-lg font-semibold">
                    <p>Portfolio by Kevin Salmeron</p>
                    <p>2023</p>
                </div>
            </div>
            </div>
            <div className='absolute bottom-0 right-14 mb-16 mr-16 linkedin'>
                <AiFillLinkedin size={50} color='white' />
            </div>
        </div>
    </div>
    </footer>
  );
}

export default Footer;
