import Heading from "components/media/Heading";
import More from "components/media/More";
import Page from "components/utility/Page";
import Media from "components/media/Media";
import React from "react";

export const metadata = {
  title: "Media - Abdullah Saim",
  description:
    "I love coding photography and videography, and many more! Here are some of my favorite Shots.",
  alternates: {
    canonical: "https://AbdullahSaim.js.org/Media"
  },
  openGraph: {
    title: "Media - Abdullah Saim",
    description:
    "I love coding photography and videography, and many more! Here are some of my favorite Shots.",
    url: "https://AbdullahSaim.js.org/Media"
  },
  twitter: {
    title: "Media - Abdullah Saim",
    description:
    "I love coding photography and videography, and many more! Here are some of my favorite Shots.",
    url: "https://AbdullahSaim.js.org/Photography"
  }
};

function media() {
  return (
    <Page
      currentPage="Media"
      meta={{
        title: "Media",
        desc: "I love photography and videography, and many more! Here are some of my favorite Shots."
      }}
    >
      <Heading />
      <Media />
      <More />
    </Page>
  );
}

export default media;
