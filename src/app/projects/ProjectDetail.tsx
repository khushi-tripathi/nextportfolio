import { TextGenerateEffect } from '@/components/ui/text-generate-effect.tsx'
import React from 'react'

export default function ProjectDetail({ detail, project }: any) {
  return (
    <div className="w-[50rem] min-h-[20rem] ml-[8rem] mt-[2rem]  border-cyan-400 border-2 border-solid">

      <div className=" ">
        <TextGenerateEffect words={"Project Name: "} className="inline-block pl-1 pr-1 text-neutral-300   font-bold text-base md:text-lg  mx-auto text-justify items-start"
        />

        <TextGenerateEffect words={project?.title || ""} className=" lg:row-[1] row-[2] inline-block pl-1 pr-1 text-neutral-300   font-normal text-base md:text-lg  mx-auto text-justify items-start" />
      </div>

      <div className="">
        <TextGenerateEffect words={detail?.clientName?.length ? "Client: " : ""} className="inline-block pl-1 pr-1 text-neutral-300   font-bold text-base md:text-lg  mx-auto text-justify items-start"
        />

        <TextGenerateEffect words={detail?.clientName || detail?.firstPara || ""} className=" lg:row-[1] row-[2]  pl-1 pr-1 text-neutral-300    font-normal text-base md:text-lg inline-block mx-auto text-justify items-start" />

      </div>

      <TextGenerateEffect words={"Tools: "} className=" pl-1 pr-1 text-neutral-300   font-bold text-base md:text-lg  mx-auto pt-2 text-justify items-start"
      />

      <TextGenerateEffect words={detail?.tools || ""} className=" lg:row-[1] row-[2]  pl-1 pr-1 text-neutral-300 inline-block   font-normal text-base md:text-lg  mx-auto text-justify items-start pb-3" />

      <TextGenerateEffect words={"Used skills and technologies: "} className=" pl-1 pr-1 text-neutral-300   font-bold text-base md:text-lg  mx-auto text-justify items-start"
      />

      <TextGenerateEffect words={detail?.tech || ""} className=" lg:row-[1] row-[2]  pl-1 pr-1 text-neutral-300   font-normal text-base md:text-lg  mx-auto text-justify items-start pb-3" />

      <TextGenerateEffect words={"Roles and Responsibilities: "} className=" lg:row-[1] row-[2]  pl-1 pr-1 text-neutral-300   font-bold text-base md:text-lg  mx-auto text-justify items-start" />

      {detail?.rolesAndRes?.map((item: string) => { return <TextGenerateEffect words={item} className=" lg:row-[1] row-[2]  pl-1 pr-1 text-neutral-300 flex font-normal text-base md:text-lg  mx-auto text-justify items-start" /> })}

    </div>
  )
}
