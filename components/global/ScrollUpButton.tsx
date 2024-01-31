"use client";
import React, { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import Image from 'next/image';

const ScrollUpButton = () => {
  const [showButton, setShowButton] = useState(false); // Track if button is visible

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  // Update button visibility based on scroll position
  useEffect(() => {
    const handleScroll = () => setShowButton(window.scrollY > 100); // Show button when scrolled past 100px
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-4 right-4 rounded-full p-2 text-white bg-fun-pink hover:bg-fun-pink-dark focus:outline-none ${showButton ? 'block' : 'hidden'} cursor-pointer`}
      onClick={scrollToTop}
    >
      <Image
        src={"/static/misc/up.svg"}
        alt="Scroll Up"
        className="w-5 h-5 hover:invert"
        width={5} height={5}
      />
    </div>
  );
};

export default ScrollUpButton;
