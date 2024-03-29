"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
  {
    quote:
      "Enrolling in these web development courses completely transformed my understanding of coding and empowered me to create innovative digital solutions. The instructors' expertise is truly top-notch!",
    name: "Maria Rodriguez",
    title: "Web Development Student",
  },
  {
    quote:
      "The supportive community and guidance I received in these courses have been invaluable. I've not only learned new programming languages but also gained confidence in building complex web applications.",
    name: "Kevin Smith",
    title: "Front-End Development Student",
  },
  {
    quote:
      "Thanks to these courses, I've been able to elevate my skills in back-end development and tackle real-world challenges with ease. Highly recommend for anyone serious about mastering web development!",
    name: "Sarah Johnson",
    title: "Back-End Development Student",
  },
  {
    quote:
      "Finding the right resources for learning web development can be daunting, but this school provided me with everything I needed to excel. I'm now proficient in creating responsive and dynamic websites!",
    name: "Daniel Brown",
    title: "Full-Stack Development Student",
  },
  {
    quote:
      "The UI/UX design principles I learned here have revolutionized my approach to creating user-friendly interfaces. I feel equipped to design impactful digital experiences for clients and users alike.",
    name: "Jessica Turner",
    title: "UI/UX Design Student",
  },
];

function MusicSchoolTestimonials() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Hear our Harmony: Voices of success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={musicSchoolTestimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default MusicSchoolTestimonials;
