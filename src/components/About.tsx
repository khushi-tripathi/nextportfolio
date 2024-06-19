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
      "Profile: Full Stack Developer, Main Stream: React JS, Exprience: 3 year (current)",
    name: 'Netlink Private LTD',
    title: 'Office Experience',
  },
  {
    quote:
      "8.8 CGPA",
    name: 'Sagar Institute of Science and Technology (SISTec)',
    title: 'Bachelor of Technology 2018-2022',
  },
  {
    quote:
      '85.4%',
    name: 'Elite Higher Secondary School',
    title: 'Higher Education Examination 2018',
  },
  {
    quote:
      "84%",
    name: 'Elite Higher Secondary School',
    title: 'Secondary Education Examination 2016',
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
      <div className=" w-full mx-20 p-2 items-center justify-center  mt-[-20rem]  z-10">
        <TextGenerateEffect words={"I am Khushi Tripathi. I am full stack developer and my main stream of work or I spend my majority time on React JS. I have three years of experience and many more to count."} className=" lg:row-[1] row-[2]   mb-[3rem] pl-1 pr-1 text-neutral-300 flex  mt-4 font-normal   md:text-lg  text-justify items-start p-[2rem]"
        />

        <div className="   grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-6 ">
          <div className="lg:row-[1] row-[2]  md:mb-[3rem] md:ml-0  lg:pl-[9rem]  ">

            <TextGenerateEffect words={" WHY CHOOSE ME ?"} className=" lg:row-[1] row-[2] flex justify-center items-center  lg:text-justify text-center lg:justify-start  pl-1 pr-1   my-4   md:text-lg  mx-auto  font-bold italic" />

            <div className="text-zinc-400 ">
              <TextGenerateEffect words={"• Create complete React Web Application."} className=" lg:row-[1] row-[2]    pl-1 pr-1 flex  mt-4 font-normal  md:text-lg  lg:text-justify text-center items-start" />

              <TextGenerateEffect words={"• Create landing pages with React JS."} className=" lg:row-[1] row-[2]   pl-1 pr-1 flex  font-normal  md:text-lg  lg:text-justify text-center items-start" />

              <TextGenerateEffect words={"• Bug Fixing of your existing React Site."} className=" lg:row-[1] row-[2]   pl-1 pr-1 flex  font-normal  md:text-lg  lg:text-justify text-center items-start" />
              <TextGenerateEffect words={"• Can create fast-performing Web App."} className=" lg:row-[1] row-[2]   pl-1 pr-1 flex  font-normal  md:text-lg  lg:text-justify text-center items-start" />
              <TextGenerateEffect words={"• Add new features in your existing React Application."} className=" lg:row-[1] row-[2]   pl-1 pr-1 flex  font-normal  md:text-lg  lg:text-justify text-center items-start" />
              <TextGenerateEffect words={"• Create Responsive React Application."} className=" lg:row-[1] row-[2]   pl-1 pr-1 flex  font-normal  md:text-lg  lg:text-justify text-center items-start" />

              <TextGenerateEffect words={"• Can create backend and frontend with React JS and Node JS."} className=" lg:row-[1] row-[2]   pl-1 pr-1 flex  font-normal  md:text-lg lg:text-justify text-center items-start" />
              <TextGenerateEffect words={"• Convert your UI Design Figma/XD to real site with React JS."} className=" lg:row-[1] row-[2]   pl-1 pr-1 flex  font-normal  md:text-lg lg:text-justify text-center items-start" />
              <TextGenerateEffect words={"• Will complete your work on or before deadline."} className=" lg:row-[1] row-[2]   pl-1 pr-1 flex  font-normal  md:text-lg lg:text-justify text-center items-start" />

            </div>

          </div>

          <div className=" md:mt-[2rem] flex justify-center items-start">
            <WobbleCard containerClassName="col-span-1 ">
              <Image
                src="/courses/profile-img.jpg"
                width={300}
                height={300}
                alt="profile image"
              />
            </WobbleCard>

          </div>
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