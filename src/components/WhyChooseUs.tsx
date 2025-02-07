"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Learn from Experts",
    description:
      "Join our music school and get trained by experienced musicians and industry professionals. Whether you're a beginner or an advanced learner, our structured courses help you master your instrument with expert guidance.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--indigo-500))] flex items-center justify-center text-white">
        Learn from Experts
      </div>
    ),
  },
  {
    title: "Personalized Music Lessons",
    description:
      "Every student is unique, and so is our approach. Our tailored music lessons ensure that you progress at your own pace, focusing on your strengths while improving weak areas. Get one-on-one mentorship and structured learning.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/music-lesson.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Personalized Music Lessons"
        />
      </div>
    ),
  },
  {
    title: "Live Performance Training",
    description:
      "Master the art of performing live! Our school offers regular stage practice, band collaborations, and concerts, helping you build confidence and stage presence. Learn to captivate your audience with powerful performances.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--red-500),var(--yellow-500))] flex items-center justify-center text-white">
        Live Performance Training
      </div>
    ),
  },
  {
    title: "Music Production & Recording",
    description:
      "Step into the world of music production! Learn to compose, record, and produce your own music using state-of-the-art software and studio equipment. Our courses cover everything from mixing and mastering to sound design.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/studio.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Music Production & Recording"
        />
      </div>
    ),
  },
  {
    title: "Join Our Musical Community",
    description:
      "Be a part of a thriving community of musicians. Connect with fellow artists, collaborate on projects, and grow together. Our school hosts events, workshops, and jam sessions to keep the musical spirit alive!",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--green-500),var(--blue-500))] flex items-center justify-center text-white">
        Join Our Musical Community
      </div>
    ),
  },
];


export default function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={content} />
    </div>
  );
}
