'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

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
    <div className="h-[40rem] w-full  dark:default-theme justify-center  relative flex flex-col items-center overflow-hidden">
      <h1 className="text-neutral-300 text-4xl pb-4 pt-4">About me </h1>
      <p className=" pl-4 pr-4 text-neutral-300 flex text-center items-center justify-center w-[80%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rem ab neque nulla odit fugit dolore asperiores dolores, quia velit eaque, adipisci iure fugiat. Aliquam facere deleniti iste id voluptates!
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo suscipit eligendi aspernatur, ullam sapiente ratione hic quibusdam dicta voluptas non, quasi modi? Animi inventore accusamus necessitatibus. Voluptatum culpa a qui?
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis a, quo exercitationem iusto ducimus facere! Magni, dicta libero! Provident aliquam fugiat nam accusantium vero illo eaque aperiam excepturi odio illum?
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam animi, quis veniam nisi culpa consequuntur distinctio voluptatem nam voluptatum illum tempore repudiandae delectus similique quas maxime nostrum corrupti veritatis dolor?
      </p>
      <h2 className="text-3xl text-neutral-300 font-size-3bold text-center mb-8 z-10">
        Some key points about profile and academics
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
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