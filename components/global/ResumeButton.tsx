"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import { Tooltip } from 'react-tooltip';

const ResumeButton = () => {
  const [isHovering, setIsHovering] = useState(false); // Track if button is being hovered over

  const setHoverTrue = () => setIsHovering(true);
  const setHoverFalse = () => setIsHovering(false); // Set hover to true on mouse enter and false on mouse leave

  return (
    <div  data-tooltip-id="my-tooltip-1" className="cursor-pointer flex justify-center flex-row list-none text-fun-pink-dark hover:text-white opacity-80 hover:opacity-100 transition-opacity bg-fun-pink hover:bg-fun-pink-dark px-4 py-2 rounded-full"
        onMouseEnter={setHoverTrue}
        onMouseLeave={setHoverFalse}>
        <Link href="/static/Resume.pdf">
          Resume
        </Link>
        <Image src="/static/misc/download.svg" alt="Download" width={20} height={20}
          className={`ml-2 ${isHovering ? 'invert' : ''}`} />
    <Tooltip id="my-tooltip-1" content='Download my resume' place='bottom'/>
      </div>
  );
};

export default ResumeButton;
