import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

export default function HeroSection() {
    return (
        <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col justify-center 
            items-center relative overflow-hidden mx-auto py-10 md:py-0">
            <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"/>
          <div className="p-4 relative z-10 w-full text-center">
            <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold text-transparent 
                 bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400">
                 Master the art of music
            </h1>
            <p className="mt-4 text-base md:text-lg text-neutral-300 max-w-lg
               mx-auto">Dive into our comprehensive music courses and transform your musical
               journey today. Whether you are a beginner or looking to refine your skills, join
               us to unlock your true potential.
            </p>
          </div>
            <div className="mt-5">
              <Button
                 borderRadius="1.75rem"
                 className="bg-white dark:bg-black text-black dark:text-white
                border-neutral-200 dark:border-slate-800">
                 Explore Courses
              </Button>
            </div>
        </div>
    )
}