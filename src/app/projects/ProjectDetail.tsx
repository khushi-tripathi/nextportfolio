import { TextGenerateEffect } from '@/components/ui/text-generate-effect.tsx'
import React from 'react'

export default function ProjectDetail({ detail, project }: any) {
  return (
    <div className="max-w-[40rem] min-h-[20rem] lg:ml-[5rem] mt-[2rem]">

      <div className=" ">
        <TextGenerateEffect words={"Project Name: "} className="inline-block pl-1 pr-1 text-neutral-200   font-bold text-base   mx-auto text-justify items-start"
        />

        <TextGenerateEffect words={project?.title || ""} className=" lg:row-[1] row-[2] inline-block pl-1 pr-1 text-neutral-200   font-normal text-base   mx-auto text-justify items-start" />
      </div>

      <div className="">
        {detail?.clientName?.length ? <TextGenerateEffect words={"Client: "} className="inline-block pl-1 pr-1 text-neutral-200   font-bold text-base   mx-auto text-justify items-start"
        /> : null}

        <TextGenerateEffect words={detail?.clientName || detail?.firstPara || ""} className=" lg:row-[1] row-[2]  pl-1 pr-1 text-neutral-200    font-normal text-base  inline-block mx-auto text-justify items-start" />

      </div>

      <TextGenerateEffect words={"Tools: "} className=" pl-1 pr-1 text-neutral-200   font-bold text-base   mx-auto text-justify items-start"
      />

      <TextGenerateEffect words={detail?.tools || ""} className=" lg:row-[1] row-[2]  pl-1 pr-1 text-neutral-200 inline-block   font-normal text-base   mx-auto text-justify items-start pb-3" />

      <TextGenerateEffect words={"Used Skills and Technologies: "} className=" pl-1 pr-1 text-neutral-200   font-bold text-base   mx-auto text-justify items-start"
      />

      <TextGenerateEffect words={detail?.tech || ""} className=" lg:row-[1] row-[2]  pl-1 pr-1 text-neutral-200   font-normal text-base   mx-auto text-justify items-start pb-3" />

      <TextGenerateEffect words={"Roles and Responsibilities: "} className=" lg:row-[1] row-[2]  pl-1 pr-1 text-neutral-200   font-bold text-base   mx-auto text-justify items-start" />

      {detail?.rolesAndRes?.map((item: string) => {
        return <TextGenerateEffect key={item} words={item} className=" lg:row-[1] row-[2]  pl-1 pr-1 text-neutral-200 flex font-normal text-base   mx-auto text-justify items-start" />
      })}

    </div>
  )
}
