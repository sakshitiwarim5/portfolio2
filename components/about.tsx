// client-side component
"use client";

import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";

const About = () => {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    >
      <SectionHeading>About Me</SectionHeading>

      <p className="mb-3">
        I'm <b className="font-medium">Sakshi Tiwari</b>, a Computer Science graduate and full-stack developer focused on building
        impactful web applications using <b className="font-medium">React.js, Node.js, FastAPI, and MongoDB</b>.
      </p>

      <p className="mb-3">
        I'm skilled in <b className="font-medium">Python, C++, TypeScript, SQLAlchemy</b> and tools like <b className="font-medium">Git, Postman, and Azure AI</b>. 
        I’ve built projects like a Job Recommendation System, a PDF Q&A app, and an Employee Management System.
      </p>

      <p>
        I'm always exploring new technologies and currently seeking a <b className="font-medium">full-time role</b> where I can contribute and grow. 
        Outside coding, I enjoy yoga, learning, and building creative ideas.
      </p>
    </motion.section>
  );
};

export default About;
