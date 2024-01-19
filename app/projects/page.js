import Heading from "components/projects/Heading";
import More from "components/projects/More";
import Page from "components/utility/Page";
import Projects from "components/projects/Projects";
import React from "react";

export const metadata = {
  title: "Projects - Hannan Imtiaz",
  description:
    "I love coding using tools like React, NextJS, Tailwind, and many more! Here are some of my favorite projects.",
  alternates: {
    canonical: "https://hannanimtiaz.com/projects",
  },
  openGraph: {
    title: "Projects - Hannan Imtiaz",
    description:
      "I love coding using tools like React, NextJS, Tailwind, and many more! Here are some of my favorite projects.",
    url: "https://hannanimtiaz.com/projects",
  },
  twitter: {
    title: "Projects - Hannan Imtiaz",
    description:
      "I love coding using tools like React, NextJS, Tailwind, and many more! Here are some of my favorite projects.",
    url: "https://hannanimtiaz.com/projects",
  },
};

function projects() {
  return (
    <Page
      currentPage="Projects"
      meta={{
        title: "Projects",
        desc: "I love coding using tools like React, NextJS, Tailwind, and many more! Here are some of my favorite projects.",
      }}
    >
      <Heading />
      <Projects />
      <More />
    </Page>
  );
}

export default projects;
