/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import HeroLink from "./HeroLink";

function Hero() {
  return (
    <>
      <div
        className="relative w-full pt-20 pb-40 m-auto flex justify-center text-center flex-col lg:flex-row-reverse items-center z-1"
        style={{ maxWidth: "1200px" }}
      >
               <div className="relative w-full px-16 pb-4 md:w-2/3 md:px-50 lg:w-1/3 lg:p-4">
          <img
            src="/static/misc/pfp.png"
            alt="PFP"
            style={{ borderRadius: "50%", width: "100%" , objectFit: "cover" }}
          /> 
           <img
          alt="paintbrush"
          className="sqD right-[100px] sm:right-0 bottom-[-80px] lg:[5%]"
          style={{ animationDelay: "0.7s" }}
          src={`${process.env.NEXT_PUBLIC_BASE_URL}static/doodles/hero/paintbrush.svg`}
        />   
         <img
          alt="html"
          className="sqD squiggle-hero-html w-16 top-[-30px] right-[5%] sm:top-[-70px] sm:right-[70px]"
          style={{ animationDelay: "0.1s" }}
          src={`${process.env.NEXT_PUBLIC_BASE_URL}static/doodles/hero/html.svg`}
        />   
          <img
          alt="dino"
          className="sqD bottom-[-40px] right-[-28px] sm:right-[85%]"
          style={{ animationDelay: "0.6s" }}
          src={`${process.env.NEXT_PUBLIC_BASE_URL}static/doodles/hero/dino.svg`}
        />
          </div>
        <div className="w-full lg:pl-4 lg:w-2/3 relative">
          <p className="text-xl mb-5 lg:text-left">Hey, I'm Abdullah Saim.</p>
          <h1 className="heroTitle inline-block  lg:text-left max-w-2xl lg:max-w-4xl  w-auto relative text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-10 font-bold heroShinyBg">
            I enjoy <span className="heroShiny1 text-fun-pink">building</span> and{" "}
            <span className="heroShiny2 text-fun-pink">designing</span> for the
            world.
            
 
       
        <img
          alt="nextjs"
          className="sqD squiggle-hero-nextjs hidden top-[75px] right-0 w-11"
          style={{ animationDelay: "0.2s" }}
          src={`${process.env.NEXT_PUBLIC_BASE_URL}static/doodles/hero/nextjs.svg`}
        />
        <img
          alt="coder"
          className="sqD hidden sm:block bottom-[-240px] left-[-60px]"
          style={{ animationDelay: "0.4s" }}
          src={`${process.env.NEXT_PUBLIC_BASE_URL}static/doodles/hero/coder.svg`}
        />
        <img
          alt="js"
          className="sqD hidden sm:block left-[100px] lg:left-[450px] bottom-[-200px]"
          style={{ animationDelay: "0.5s" }}
          src={`${process.env.NEXT_PUBLIC_BASE_URL}static/doodles/hero/js.svg`}
        />
      
       
        <img
          alt="pop1"
          className="sqD squiggle-hero-pop1 hidden sm:block sm:top-[-130px] sm:left-[15%] lg:top-[-130px] lg:left-[420px]"
          src={`${process.env.NEXT_PUBLIC_BASE_URL}static/doodles/hero/pop1.svg`}
        />
        <img
          alt="code"
          className="sqD left-[135px] bottom-[-85px] sm:bottom-[-100px] sm:left-60 opacity-40"
          style={{ animationDelay: "0.9s" }}
          src={`${process.env.NEXT_PUBLIC_BASE_URL}static/doodles/hero/code.svg`}
        />
          </h1>
          <div className="w-full px-8 lg:w-1/3 lg:p-1 md:px-16">          
          <HeroLink />
          </div>


       
      </div>
      
      </div>
    </>
  );
}

export default Hero;
