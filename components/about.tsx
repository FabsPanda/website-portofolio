"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Hello, my name is Hubertus Alvito Koesno, I am currently a{" "}
        <span className="font-medium">Computer Science</span> student at BINUS
        University. My passion lies in creating interactive and aesthetically
        pleasing websites and mobile applications. I'm currently interested in
        the world of <span className="italic">web development</span>, exploring
        the knowledge of React and Laravel. I've had some experience with{" "}
        <span className="font-medium">Flutter</span>{" "}
        before, but I must admit that it still very challenging for me. However
        I'm{" "}
        <span className="underline">enthusiastic</span> about continuous
        learning and embracing new challenges in the field of technology.{" "}
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing guitar, playing
        video games, watching movies, and playing basketball.{" "}
      </p>
    </motion.section>
  );
}
