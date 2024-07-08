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
      "Profile: Full Stack Developer, Main Stream: React JS, Exprience: 3 YEARs (Current)",
    name: 'Netlink Private LTD',
    title: 'Office Experience (JULY 2021-Current)',
  },
  {
    quote:
      "8.8 CGPA",
    name: 'Sagar Institute of Science and Technology (SISTec), Bhopal',
    title: 'Bachelor of Technology (2018-2022)',
  },
  {
    quote:
      '85.4%',
    name: 'Elite Higher Secondary School, Bhopal',
    title: 'Higher Education Examination (2018)',
  },
  {
    quote:
      "84%",
    name: 'Elite Higher Secondary School, Bhopal',
    title: 'Secondary Education Examination (2016)',
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

          <div className="text-neutral-300  pb-4  mt-2 text-xl leading-8 font-extrabold tracking-tight sm:text-4xl pt-[12rem]">About Me </div>

        </motion.h1>
      </LampContainer>
      <div className=" w-full mx-20  items-center justify-center  mt-[-20rem]  z-10">
        <TextGenerateEffect words={"I am Khushi Tripathi, an experienced React Developer with more than 3 years of hands-on experience specializing in the design, development, precise testing, and troubleshooting of React applications. I excel in working collaboratively across teams to define project requirements, design intuitive features, and implement solutions that enhance user experience. Skilled in converting UI/UX wireframes into responsive, high-performance code to deliver seamless experiences across devices."} className=" lg:row-[1] row-[2]   mb-[3rem] pl-1 pr-1 text-neutral-300 flex  mt-4 font-normal   md:text-lg  text-justify items-start px-[4rem]  p-[2rem] lg:px-[10rem]"
        />

        <div className="     ">
          <div className="  md:mb-[3rem] md:ml-0  flex  flex-col justify-center items-center ">

            <TextGenerateEffect words={" WHY CHOOSE ME ?"} className="  flex justify-center items-center   text-center  pl-1 pr-1   my-4   md:text-lg  mx-auto  font-bold italic" />

            <div className="text-zinc-400  lg:w-[80%] flex justify-center items-center flex-col">

              <TextGenerateEffect words={"• Skilled in designing landing pages with React JS."} className=" lg:row-[1] row-[2]    pl-1 pr-1 flex  mt-4 font-normal  md:text-lg  lg:text-justify text-center items-start" />

              <TextGenerateEffect words={"• Experienced in bug fixing and optimizing your React site."} className=" lg:row-[1] row-[2]   pl-1 pr-1 flex  font-normal  md:text-lg  lg:text-justify text-center items-start" />

              <TextGenerateEffect words={"• Proficient in building fully functional React-based web applications."} className=" lg:row-[1] row-[2]   pl-1 pr-1 flex  font-normal  md:text-lg  lg:text-justify text-center items-start" />
              <TextGenerateEffect words={"• Upgrade your React application with the addition of new functionalities."} className=" lg:row-[1] row-[2]   pl-1 pr-1 flex  font-normal  md:text-lg  lg:text-justify text-center items-start" />

              <TextGenerateEffect words={"• Capable of architecting and implementing both frontend and backend functionalities using React JS and Node JS."} className=" lg:row-[1] row-[2]   pl-1 pr-1 flex  font-normal  md:text-lg lg:text-justify text-center items-start" />
              <TextGenerateEffect words={"• I specialize in developing React applications that are responsive and adaptive."} className=" lg:row-[1] row-[2]   pl-1 pr-1 flex  font-normal  md:text-lg  lg:text-justify text-center items-start" />

              <TextGenerateEffect words={"• Convert your UI Design Figma/XD to real site with React JS."} className=" lg:row-[1] row-[2]   pl-1 pr-1 flex  font-normal  md:text-lg lg:text-justify text-center items-start" />
              <TextGenerateEffect words={"• I prioritize the timely completion of work."} className=" lg:row-[1] row-[2]   pl-1 pr-1 flex  font-normal  md:text-lg lg:text-justify text-center items-start" />
              <TextGenerateEffect words={"• Can create fast-performing web apps."} className=" lg:row-[1] row-[2]   pl-1 pr-1 flex  font-normal  md:text-lg  lg:text-justify text-center items-start" />
            </div>

          </div>

          {/* <div className=" md:mt-[2rem] flex justify-center items-start">
            <WobbleCard containerClassName="col-span-1 ">
              <Image
                src="/courses/profile-img.jpg"
                width={300}
                height={300}
                alt="profile image"
              />
            </WobbleCard>

          </div> */}
        </div>

        <div className=" ">
          <h2 className="text-xl text-neutral-300 font-size-bold font-extrabold text-center mb-8 z-10 pt-20 flex items-center justify-center   w-auto  ">
            Experience and Education
          </h2>
          <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8 pb-[5rem]">
            <div className="w-full">
              <InfiniteMovingCards
                items={aboutYourself}
                direction="right"
                speed="slow"
              />
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}

export default About