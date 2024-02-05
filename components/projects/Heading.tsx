/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
'use client';
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";


function Heading() {
  const searchParams = useSearchParams();
  const tag = searchParams.get("tag");
  
  return (
    <div
      className={`${
        tag ? "pt-10 pb-4 sm:pt-24 sm:pb-20" : "py-12 sm:py-20"
      } w-full text-center relative`}
    >
      {tag ? (
        <>
          <h1 className="text-3xl sm:text-4xl inline-block w-auto mx-auto mb-8 relative">
            Projects with tag <b>{tag}</b>
            <img
              alt="code"
              className="sqD w-8 sm:w-10 -top-6 -right-2 sm:-right-8 sm:-top-8 absolute"
              src={"/static/doodles/hero/code.svg"}
            />
          </h1>
          <br />
          <Link href="/projects" className="text-fun-pink hover:text-white text-lg">
              Show all projects
          </Link>
        </>
      ) : (
        <h1 className="text-4xl sm:text-6xl inline-block w-auto mx-auto mb-8 relative">
          Projects
          <img
            alt="code"
            className="sqD w-10 -top-8 -right-8 absolute"
            src={"/static/doodles/hero/code.svg"}
          />
        </h1>
      )}
      {!tag && (
        <p className="text-fun-gray text-xl sm:text-2xl max-w-3xl m-auto">
          I have built cool Desktop apps and websites using anything from React to
          Java and Python. Here are some of my favorite projects over the
          course of my journey.
        </p>
      )}
    </div>
  );
}

export default Heading;
