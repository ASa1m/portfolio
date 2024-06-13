"use client";
import Link from 'next/link';
import React, { use, useState } from 'react';
import Image from 'next/image';
import { Tooltip } from 'react-tooltip';
import ReactGA from 'react-ga4';
import { useEffect, useRef } from 'react';

const ResumeButton = () => {
  const buttonRef = useRef(null);
  
  useEffect(() => {
    const handleClick = () => {
      ReactGA.event({
        category: 'Button',
        action: 'Resume Download',
        label: 'Resume Button'
      });
    };
    

    buttonRef.current.addEventListener('click', handleClick);

    return () => buttonRef.current?.removeEventListener('click', handleClick); // Cleanup function for event listener
  }, []); // Empty dependency array ensures this runs only once


  const [isHovering, setIsHovering] = useState(false); // Track if button is being hovered over

  const setHoverTrue = () => setIsHovering(true);
  const setHoverFalse = () => setIsHovering(false); // Set hover to true on mouse enter and false on mouse leave

  return (
    <div  data-tooltip-id="my-tooltip-1" className="cursor-pointer flex justify-center flex-row list-none text-fun-pink-dark hover:text-white opacity-80 hover:opacity-100 transition-opacity bg-fun-pink hover:bg-fun-pink-dark px-4 py-2 rounded-full"
        onMouseEnter={setHoverTrue}
        onMouseLeave={setHoverFalse}>
        <Link href="/static/Resume.pdf" ref={buttonRef}>
          Resume
        </Link>
        <Image src="/static/misc/download.svg" alt="Download" width={20} height="0"
          className={`h-auto ml-2 ${isHovering ? 'invert' : ''}`} />
    <Tooltip id="my-tooltip-1" content='Download my resume' place='bottom'/>
      </div>
  );
};

export default ResumeButton;
