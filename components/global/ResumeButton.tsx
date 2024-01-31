"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const ResumeButton = () => {
  const [isHovering, setIsHovering] = useState(false); // Track if button is being hovered over

  const setHoverTrue = () => setIsHovering(true);
  const setHoverFalse = () => setIsHovering(false); // Set hover to true on mouse enter and false on mouse leave

  return (
    <div className="cursor-pointer flex justify-center flex-row list-none text-fun-pink-dark hover:text-white opacity-80 hover:opacity-100 transition-opacity bg-fun-pink hover:bg-fun-pink-dark px-4 py-2 rounded-full"
    onMouseEnter={setHoverTrue}
    onMouseLeave={setHoverFalse}>
    <Link href="/static/resume.pdf">
        Resume
    </Link>
    <Image src="/static/misc/download.svg" alt="Download"
    className={`w-5 h-5 ml-2 ${isHovering ? 'invert' : ''}`} />
    </div>
  );
};

export default ResumeButton;
