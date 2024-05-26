'use client'
import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { Boxes } from "./ui/background-boxes";

function HomeEntrySection() {
  const words = [
    {
      text: "Khushi",
      className: "mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
    },
    {
      text: "Tripathi",
      className: "mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400",

    },
  ];
  return (
    <div
      className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0"
    >
      <Boxes key={"box"} />
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 relative z-10 text-center" >
        <TypewriterEffectSmooth words={words} cursorClassName="bg-default-theme h-1" className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 justify-center text-center" />
        <p
          className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-2xl mx-auto"
        >Analytical, adaptable, goal-oriented, highly determined, detail-oriented professional and exceptional to analyze information in a structured and logical way. </p>
        <div className="mt-4">
          <Link href={"/courses"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white  dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              About Projects
            </Button>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default HomeEntrySection