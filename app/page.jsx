"use client";
import Icons from "./components/Icons";
import Cards from "./cards/Cards";
import Blur from "./components/Blur";
import CursorBlur from "./components/CursorBlur";
import Switch from "./components/Switch";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex-grow flex justify-center items-center">



        <div>
          <div className="z-100 w-10 h-52 absolute top-0 right-32 -rotate-45 rounded-full bg-[rgb(254,252,255)] dark:bg-[rgba(247,247,247,0.15)] blur-3xl"></div>
          <div className="z-100 w-10 h-40 absolute top-0 right-80 -rotate-12 rounded-full bg-[rgb(165,164,165)] dark:bg-[rgb(247,247,247,0.2)] blur-3xl"></div>
          <div className="z-100 w-10 h-48 absolute top-0 right-[500px] rounded-full bg-[rgb(150,146,146)] dark:bg-[rgba(247,247,247,0.21)] blur-3xl"></div>
          <div className="z-100 w-10 h-60 absolute top-0 right-[670px] rotate-12 rounded-full bg-[rgb(58,57,57] dark:bg-[rgba(247,247,247,0.22)] blur-3xl"></div>
          <div className="z-100 w-10 h-48 absolute top-0 right-[850px] rotate-45 rounded-full bg-[rgb(148,145,145)] dark:bg-[rgba(247,247,247,0.21)] blur-3xl"></div>
          <div className="z-100 w-10 h-36 absolute top-0 right-[1100px] rotate-45 rounded-full bg-[rgb(226,223,223)] dark:bg-[rgb(247,247,247,0.2)] blur-3xl"></div>
        </div>
        


        <Blur />
        
        <Switch />

        <motion.div className="flex" initial={{opacity:0, y:100}} animate={{opacity:1, y:0}} transition={{duration:1, ease:"easeOut", delay:0.2}}>
          <div className="flex-grow flex items-center">
            <div>
              <Icons />
              
              <h1>Hi, I'm Radim!</h1>
              <p className="bio">A 17 years-old student from Czech Republic,<br /> currently living in Kroměříž. I'm a high <br /> school student learning IT.</p>
            </div>
            
          </div>

          <Cards />
        </motion.div>

      

      
    </main>
  );
}