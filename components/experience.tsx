// client-side component
"use client";

import React, { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { FaBriefcase, FaLaptopCode, FaBrain, FaShieldAlt } from "react-icons/fa";

import { useActiveSectionContext } from "@/context/active-section-context";
import { useThemeContext } from "@/context/theme-context";
import { useSectionInView } from "@/lib/hooks";

import SectionHeading from "./section-heading";
import "react-vertical-timeline-component/style.min.css";

// Experience data
const EXPERIENCES_DATA = [
  {
    title: "Cybersecurity Intern @ Evu.com (Cyberly.com)",
    description:
      "Contributed to building secure systems and developing internal tools to support cybersecurity research and threat analysis. Worked on backend services using FastAPI and integrated monitoring tools for risk assessment.",
    date: "Jan 2025 – Present",
    icon: <FaShieldAlt />,
  },
  {
    title: "Full Stack Developer Intern @ B2World",
    description:
      "Worked on an Employee Management System using React.js, Tailwind CSS, Node.js, and MongoDB. Designed frontend pages and built RESTful APIs for core modules like attendance, users, and roles.",
    date: "May 2024 – Aug 2024",
    icon: <FaBriefcase />,
  },
  {
    title: "Freelance Developer",
    description:
      "Built full-stack web apps like a hotel booking system and a voting app using the MERN stack. Integrated user authentication, CRUD operations, and deployed apps on Netlify and Render.",
    date: "2023 – Present",
    icon: <FaLaptopCode />,
  },
  {
    title: "AI-based Job Recommendation System",
    description:
      "Developed an intelligent job recommender using FastAPI, LangChain, Azure AI, and HuggingFace. Parsed resumes, matched job roles, and enabled question-answering from uploaded PDFs.",
    date: "Academic Project, 2024",
    icon: <FaBrain />,
  },
];

const Experience = () => {
  const { ref } = useSectionInView("Experience", 0.5);
  const { theme } = useThemeContext();
  const { activeSection } = useActiveSectionContext();

  const [isExperienceSectionActive, setIsExperienceSectionActive] =
    useState(false);

  useEffect((): void => {
    if (activeSection === "Experience") setIsExperienceSectionActive(true);
  }, [activeSection]);

  return (
    <section ref={ref} id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My Experience</SectionHeading>

      <VerticalTimeline lineColor="">
        {EXPERIENCES_DATA.map((experience, i) => (
          <React.Fragment key={`experience-${i}`}>
            <VerticalTimelineElement
              visible={isExperienceSectionActive}
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={experience.date}
              icon={experience.icon} // ✅ FIXED HERE
              iconStyle={{
                background:
                  theme === "light" ? "#fff" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold">{experience.title}</h3>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {experience.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
