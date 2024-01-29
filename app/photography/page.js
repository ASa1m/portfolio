import Heading from "components/projects/Heading";
import More from "components/projects/More";
import Page from "components/utility/Page";
import Projects from "components/projects/Projects";
import React from "react";

export const metadata = {
  title: "Photography - Abdullah Saim",
  description:
    "I love coding using tools like React, NextJS, Tailwind, and many more! Here are some of my favorite Photography.",
  alternates: {
    canonical: "https://AbdullahSaim.js.org/Photography"
  },
  openGraph: {
    title: "Photography - Abdullah Saim",
    description:
      "I love coding using tools like React, NextJS, Tailwind, and many more! Here are some of my favorite Photography.",
    url: "https://AbdullahSaim.js.org/Photography"
  },
  twitter: {
    title: "Photography - Abdullah Saim",
    description:
      "I love coding using tools like React, NextJS, Tailwind, and many more! Here are some of my favorite Photography.",
    url: "https://AbdullahSaim.js.org/Photography"
  }
};

function Photography() {
  return (
    <Page
      currentPage="Photography"
      meta={{
        title: "Photography",
        desc: "I love coding using tools like React, NextJS, Tailwind, and many more! Here are some of my favorite Photography."
      }}
    >
      <Heading />
      <Projects />
      <More />
    </Page>
  );
}

export default Photography;
