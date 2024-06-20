'use client'
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";
import { Vortex } from "./ui/vortex";

function Capabilities() {

  const featuredWebinars = [
    {
      title: 'Problem Solving',
      description:
        'Identify problem and then always try to give the optimize way to solve it. My approach combines technical expertise with creativity and persistence, ensuring that I can navigate any obstacle to achieve optimal outcomes in software development.',
      isFeatured: true,
    },
    {
      title: 'Debugging Skills',
      description:
        'I have debugging skills which help me to debug and fix the bug and issues of application ASAP.',
      slug: 'digital-music-marketing',
      isFeatured: true,
    },

    {
      title: 'Communication Skills',
      description:
        "I have good communication skills that help me to build understanding and give more clarity of work. I have active listening skills, that help me to understand other's point of view.",
      isFeatured: true,
    },
    {
      title: 'Leadership Quality',
      description:
        'Our main goal is to focus on quality of required work and provide deliveries on time. Leadership is something to take care of that and as a team we will work and grow together. And if we are facing any issues then try to resolve it collaboratively.',
      isFeatured: true,
    },
    {
      title: 'Time Management',
      description:
        'Mostly deliverables are before or on time. That gives me more flexibility to manage everything.',
      isFeatured: true,
    },
    {
      title: 'Consistency',
      description:
        'I am consistent about my work and I am adaptable that will help me to grasp any thing in short duration.',
      slug: 'live-performance-techniques',
      isFeatured: true,
    },
    {
      title: 'Attention To Details',
      description:
        'Always try to focus on each and every small aspect of work.',
      slug: 'digital-music-marketing',
      isFeatured: true,
    },
    {
      title: 'Responsible',
      description:
        'Responsibility and discipline are the main characteristics of the developer.',
      slug: 'digital-music-marketing',
      isFeatured: true,
    },
  ];

  return (
    <Vortex
      backgroundColor="black"
      className="flex items-center flex-col justify-center  md:pr-12  w-full h-[30%] "
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 " >
        <div className="text-center pt-16">
          <p className="mt-2 text-xl leading-8 font-extrabold tracking-tight  text-white sm:text-4xl">Proficient</p>
        </div>

        <div className=" mb-20">
          <HoverEffect
            items={featuredWebinars.map(webinar => (
              {
                title: webinar.title,
                description: webinar.description,
                link: ''
              }
            ))}
          />
        </div>

      </div>
    </Vortex>

  )
}

export default Capabilities