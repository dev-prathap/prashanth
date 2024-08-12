"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import TextGenerateEffect from "../SpecialSection/txteffect";

/* eslint-disable react/no-unescaped-entities */
const About = () => {
  const words = `As a passionate writer and director, I craft stories that resonate
              with authenticity and depth, drawing from a well of personal
            experiences and creative vision. My work is a reflection of my
            commitment to exploring the human condition through compelling
            narratives and dynamic characters. With a keen eye for detail and a
            relentless drive for excellence, I aim to create films that not only
            entertain but also provoke thought and inspire emotional
            connections. Whether behind the camera or at the writing desk, my
            goal is to weave together elements of storytelling and visual
            artistry to produce memorable and impactful cinematic experiences.`;

  return (
    <section id="about" className="bg-primary min-h-screen flex items-center py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
          <motion.div
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative"
          >
            <Image
              width={400}
              height={400}
              className="rounded-full shadow-xl transition duration-500 transform hover:scale-105"
              src="/img/PrashanthFull.jpg"
              alt="dashboard image"
            />
          </motion.div>
        </div>

        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-violet-600 dark:text-white">
            Let's create more picture and ideas that brings us together.
          </h2>
          <TextGenerateEffect words={words} />
          <div className="mt-6">
            <a
              href="#"
              className="inline-flex items-center text-white bg-violet-600 hover:bg-violet-700 focus:ring-4 focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 transition dark:focus:ring-violet-900"
            >
              Get started
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
