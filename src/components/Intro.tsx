import logo from "../../images/logo.jpg"

"use client";

import { motion } from "framer-motion";
import { AuroraBackground } from "./aura-background";
import { Link } from "react-router-dom";

export function Intro() {
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
        <div className="text-3xl md:text-6xl font-bold dark:text-white text-center font-serif">
        <img className="h-32 w-32 rounded-full mx-auto" src={logo}/> "LaterList: Save Now, Enjoy Later!"
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4 w-1/2">
        Organize your thoughts, ideas, and information in one place. Accessible from anywhere, at any time.
        </div>
        <Link to={"/login"} className="bg-[#59A7CD] dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-4">
          Get Started
        </Link>
      </motion.div>
    </AuroraBackground>
  );
}



export default Intro;