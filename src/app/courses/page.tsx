'use client'
import Image from "next/image";
import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { motion } from "framer-motion";

import courseData from "@/data/music_courses.json"
import Modal from "@/components/Modal";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect.tsx";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { AuroraBackground } from "@/components/ui/aurora-background";

function page() {
  const [modal, setModalState] = useState<boolean>(false)
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
        <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white pt-36">Recent Projects ({courseData.courses.length})</h1>
        <div className="flex flex-wrap justify-center flex-col">
          {courseData.courses.map((course) => (
            <div className={modal ? "flex flex-wrap items-center justify-evenly  lg:ml-[5rem]" : ""}>
              <CardContainer className="inter-var m-4 tripathi">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
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
                    setModalState(true)
                  }}>
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      Try now →
                    </CardItem>
                    <CardItem

                      translateZ={20}
                      as="button"

                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      <div className="" onClick={() => {
                        debugger
                        setModalState(true)
                      }}>
                        Sign up
                      </div>

                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
              {modal ? <TextGenerateEffect words={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rem ab neque nulla odit fugit dolore asperiores dolores, quia velit eaque, adipisci iure fugiat. Aliquam facere deleniti iste id voluptates! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo suscipit eligendi aspernatur, ullam sapiente ratione hic quibusdam dicta voluptas non, quasi modi? Animi inventore accusamus necessitatibus. Voluptatum culpa a qui? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis a, quo exercitationem iusto ducimus facere! Magni, dicta libero! Provident aliquam fugiat nam accusantium vero illo eaque aperiam excepturi odio illum? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam animi, quis veniam nisi culpa consequuntur distinctio voluptatem nam voluptatum illum tempore repudiandae delectus similique quas maxime nostrum corrupti veritatis dolor?"} className=" lg:row-[1] row-[2]  pl-1 pr-1 text-neutral-300 flex  mt-4 font-normal text-base md:text-lg  mx-auto text-justify items-start Khushi  w-[30rem] min-h-[20rem] border-cyan-400 border-2 border-solid" />

                : null}

            </div>

          ))}

        </div>
      </motion.div>
    </AuroraBackground>

  )
}

export default page