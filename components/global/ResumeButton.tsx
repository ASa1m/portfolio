"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import {Tooltip} from 'react-tippy';

const ResumeButton = () => {
  const [isHovering, setIsHovering] = useState(false); // Track if button is being hovered over

  const setHoverTrue = () => setIsHovering(true);
  const setHoverFalse = () => setIsHovering(false); // Set hover to true on mouse enter and false on mouse leave

  return (
    <Tooltip title="Download my resume" position="bottom" trigger="mouseenter" arrow={true} duration={200}>
    <div className="cursor-pointer flex justify-center flex-row list-none text-fun-pink-dark hover:text-white opacity-80 hover:opacity-100 transition-opacity bg-fun-pink hover:bg-fun-pink-dark px-4 py-2 rounded-full"
      onMouseEnter={setHoverTrue}
      onMouseLeave={setHoverFalse}>
      <Link href="/static/Resume.pdf">
        Resume
      </Link>
      <Image src="/static/misc/download.svg" alt="Download" width={20} height={20}
        className={`ml-2 ${isHovering ? 'invert' : ''}`} />
    </div>
    </Tooltip>
  );
};

export default ResumeButton;
