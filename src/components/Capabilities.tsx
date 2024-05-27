'use client'
import Link from "next/link"

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import { HoverEffect } from "./ui/card-hover-effect";

function Capabilities() {

  const featuredWebinars = [
    {
      title: 'Understanding Music Theory',
      description:
        'Dive deep into the fundamentals of music theory and enhance your musical skills.',
      slug: 'understanding-music-theory',
      isFeatured: true,
    },
    {
      title: 'The Art of Songwriting',
      description:
        'Learn the craft of songwriting from experienced musicians and songwriters.',
      slug: 'the-art-of-songwriting',
      isFeatured: true,
    },
    {
      title: 'Mastering Your Instrument',
      description:
        'Advanced techniques to master your musical instrument of choice.',
      slug: 'mastering-your-instrument',
      isFeatured: true,
    },
    {
      title: 'Music Production Essentials',
      description:
        'Get started with music production with this comprehensive overview.',
      slug: 'music-production-essentials',
      isFeatured: true,
    },
    // Added two more webinars
    {
      title: 'Live Performance Techniques',
      description:
        'Enhance your live performance skills with expert tips and strategies.',
      slug: 'live-performance-techniques',
      isFeatured: true,
    },
    {
      title: 'Digital Music Marketing',
      description:
        'Learn how to promote your music effectively in the digital age.',
      slug: 'digital-music-marketing',
      isFeatured: true,
    },
  ];

  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="p-12 mt-[8rem] ">

          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center">
              {/* <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2> */}
              {/* <div className="h-20 "></div> */}
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight  text-white sm:text-4xl">Abiliites</p>
            </div>

            <div className=" mb-20">
              <HoverEffect
                items={featuredWebinars.map(webinar => (
                  {
                    title: webinar.title,
                    description: webinar.description,
                    link: '/'
                  }
                ))}
              />
            </div>

          </div>
        </div>
      </motion.div>
    </AuroraBackground>

  )
}

export default Capabilities