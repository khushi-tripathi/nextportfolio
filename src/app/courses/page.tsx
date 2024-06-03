'use client'
import Image from "next/image";
import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { motion } from "framer-motion";

import courseData from "@/data/music_courses.json"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect.tsx";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Vortex } from "@/components/ui/vortex";

function Page() {
  const [modal, setModalState] = useState<any>({})
  return (

    <div id="project" className="bg-black">
      <Vortex
        baseHue={240}
        particleCount={200}
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10  w-full h-auto"
      >
        <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white pt-36">Recent Projects ({courseData.courses.length})</h1>

      </Vortex>

      <div className="flex flex-wrap justify-center flex-col">
        {courseData.courses.map((course, idx) => (
          <Vortex
            backgroundColor="black"
            className="flex items-center flex-col justify-center px-2 md:px-10  w-full h-auto"
            rangeY={800}
            baseHue={240}
            particleCount={300}
            key={idx}
          // className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
          >

            <div className={modal?.[idx]?.status ? "flex flex-wrap items-center justify-evenly  lg:ml-[5rem]" : ""}>
              <CardContainer className="inter-var m-4 tripathi">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-default-bg-dark dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    {course.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    {course.description}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src={course.image}
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt={course.title}
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-20" onClick={() => {

                  }}>
                    {course?.github ? <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      Go To GitHub → {course.github}
                    </CardItem> : null}
                    <CardItem

                      translateZ={20}
                      as="button"

                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      <div className="" onClick={() => {

                        setModalState({
                          ...modal,
                          [idx]: {
                            status: !modal?.[idx]?.status
                          }
                        })
                      }}>
                        {modal?.[idx]?.status ? 'Less' : 'Know More'}
                      </div>

                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
              {(modal?.[idx]?.status) ? <TextGenerateEffect words={courseData?.courses?.[idx]?.detail} className=" lg:row-[1] row-[2]  pl-1 pr-1 text-neutral-300 flex  mt-4 font-normal text-base md:text-lg  mx-auto text-justify items-start Khushi  w-[30rem] min-h-[20rem] border-cyan-400 border-2 border-solid" />

                : null}

            </div>
          </Vortex>

        ))}

      </div>

    </div>
  )
}

export default Page