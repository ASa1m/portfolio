/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";

type HeadingProps = {
  tag?: string;
};

function Heading({ tag }: HeadingProps) {
  return (
    <div
      className={`${
        tag ? "pt-10 pb-4 sm:pt-24 sm:pb-20" : "py-12 sm:py-20"
      } w-full text-center relative`}
    >
      {tag ? (
        <>
          <h1 className="text-3xl sm:text-4xl inline-block w-auto mx-auto mb-8 relative">
            Projects built with <b>{tag}</b>
            <img
              alt="code"
              className="sqD w-8 sm:w-10 -top-6 -right-2 sm:-right-8 sm:-top-8 absolute"
              src={`${process.env.NEXT_PUBLIC_BASE_URL}static/doodles/projects/camera.svg`}
            />
          </h1>
        </>
      ) : (
        <h1 className="text-4xl sm:text-6xl inline-block w-auto mx-auto mb-8 relative">
          Photography
          <img
            alt="code"
            className="sqD w-10 -top-8 -right-8 absolute"
            src={`${process.env.NEXT_PUBLIC_BASE_URL}static/doodles/hero/code.svg`}
          />
        </h1>
      )}
      {!tag && (
        <p className="text-fun-gray text-xl sm:text-2xl max-w-3xl m-auto">
          I've been doing Photography and Videography since quite a while now.
          Here are some of my favorite shots over the course of my journey.
        </p>
      )}
    </div>
  );
}

export default Heading;
