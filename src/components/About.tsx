'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import { TextGenerateEffect } from "./ui/text-generate-effect.tsx";
import { WobbleCard } from "./ui/wobble-card";
import Image from "next/image";

const aboutYourself = [
  {
    quote:
      'Joining the music school transformed my understanding of music and helped me to truly discover my own sound. The instructors are world-class!',
    name: 'Alex Johnson',
    title: 'Guitar Student',
  },
  {
    quote:
      "The community and support at this school are unmatched. I've grown not just as a pianist, but also as a performer, thanks to their comprehensive approach.",
    name: 'Samantha Lee',
    title: 'Piano Student',
  },
  {
    quote:
      "This school offered me the tools and confidence to take my singing to the next level. I'm endlessly grateful for the personalized coaching.",
    name: 'Michael Chen',
    title: 'Vocal Student',
  },
  {
    quote:
      'As a violinist, finding the right mentor can be challenging, but this school matched me with a teacher who truly understands my goals and challenges.',
    name: 'Emily Taylor',
    title: 'Violin Student',
  },
  {
    quote:
      'The production courses here opened my eyes to the intricacies of music production. Highly recommend for any aspiring producers!',
    name: 'Chris Morales',
    title: 'Music Production Student',
  },
];

function About() {
  return (
    <div id="about" className="h-auto w-full  dark:bg-slate-900 justify-center  relative flex flex-col items-center overflow-hidden">

      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8  py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          {/* Build lamps <br /> the right way */}

          <div className="text-neutral-300  pb-4  mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl pt-[12rem]">About Me </div>

        </motion.h1>
      </LampContainer>

      <div className=" lg:w-full w-[40rem] mx-20 p-2 lg:ml-[15rem]  items-center justify-center grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-20  mt-[-20rem]  z-10">

        <TextGenerateEffect words={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rem ab neque nulla odit fugit dolore asperiores dolores, quia velit eaque, adipisci iure fugiat. Aliquam facere deleniti iste id voluptates! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo suscipit eligendi aspernatur, ullam sapiente ratione hic quibusdam dicta voluptas non, quasi modi? Animi inventore accusamus necessitatibus. Voluptatum culpa a qui? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis a, quo exercitationem iusto ducimus facere! Magni, dicta libero! Provident aliquam fugiat nam accusantium vero illo eaque aperiam excepturi odio illum? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam animi, quis veniam nisi culpa consequuntur distinctio voluptatem nam voluptatum illum tempore repudiandae delectus similique quas maxime nostrum corrupti veritatis dolor?"} className=" lg:row-[1] row-[2]  pl-1 pr-1 text-neutral-300 flex  mt-4 font-normal text-base md:text-lg  mx-auto text-justify   w-auto items-start" />

        {/* <p >
        </p> */}

        {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full"> */}

        {/* </div> */}

        <div className="w-[20rem] h-full lg:ml-20 ml-[10rem] flex justify-center items-center">
          <WobbleCard containerClassName="col-span-1 min-h-[300px]">
            {/* <img src="courses/profile-img.jpg" alt="" className="" /> */}
            <Image
              src="/courses/profile-img.jpg"
              width={500}
              height={500}
              alt="profile image"
            // className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
            />
          </WobbleCard>

        </div>
      </div>

      <h2 className="text-3xl text-neutral-300 font-size-3bold text-center mb-8 z-10">
        Some key points about profile and academics
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8 pb-[5rem]">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={aboutYourself}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>

  )
}

export default About