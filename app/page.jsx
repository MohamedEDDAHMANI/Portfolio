'use client'
import About from "@/components/about";
import Prejects from "@/components/projects";
import Contact from "@/components/contact";
import Typewriter from 'typewriter-effect';
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";



export default function Home() {
  return (
    <main>
      <div className=" md:w-[70%] sm:w-full  h-[400px]  mt-[130px] md:pl-[70px] sm:pl-[30px]  lg:pl-10px">
        <h1 className="font-semibold text-[40px]">
          Mohamed EDDAHMANI
        </h1>
        <div className="text-[25px] flex items-center">I&apos;m a
          <span className=" ml-2 text-accent">
            <Typewriter
              options={{
                strings: [
                  ' Web Developer',
                  ' UI/UX Researcher',
                  ' Next js Developer'
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </div>
        <p>
          Welcome to my world ,I am a web developer, I have a strong foundation in front-end &amp; back-end development and am skilled in creating user-friendly and responsive web applications using React and its ecosystem.
        </p>
        <a href="/CV_Mohamed_EDDAHMANI.pdf" download>
          <Button
            variant="outline"
            size="lg"
            className="uppercase flex items-center gap-2 text-accent bg-gray hover:bg-gray-300 border border-accent rounded-full mt-10"
          >
            <span>Download CV</span>
            <FiDownload className="text-xl" />
          </Button>
        </a>
      </div>
      <About />
      <Prejects />
      <Contact />
    </main>
  );
}
