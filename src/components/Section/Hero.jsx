/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import Navbar from "./Navbar";
import { Parallax } from "react-parallax";
import TextGenerateEffect from "../SpecialSection/txteffect";
import { motion } from "framer-motion";
import StarsBackground from "../SpecialSection/stars-background";
import ShootingStars from "../SpecialSection/shooting-star";

const Hero = () => {
  const words = `Crafting narratives with precision, directing visions with passion. Together, we bring stories to life, one scene at a time...`;

  return (
    <section className=" mt-4 relative h-screen overflow-hidden bg-primary text-white">
      <Navbar />

      <Parallax
        blur={0}
        bgImage="/img/hero-bg.jpg"
        bgImageAlt="background"
        strength={600}
        className="absolute inset-0"
      >
        <div className="relative z-20 grid max-w-screen-xl px-4 py-8 mx-auto lg:grid-cols-12 lg:gap-8 lg:py-16 lg:px-6">
          <div className="flex flex-col items-center justify-center lg:col-span-5 lg:items-start lg:text-left mb-8 lg:mb-0">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, type: "spring" }}
            >
              <Image
                className="rounded-lg  transition-transform duration-500 hover:scale-110 hover:shadow-xl ffilter grayscale hover:grayscale-0"
                src="/img/prashanth.png"
                alt="Prashanth Chandhar"
                width={380}
                height={380}
                loading="lazy"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQMAAAAl21bKAAAADFBMVEUAAAAzMzM+MjI4ODg6Ojo8PDw+Pj4+Tk5OTk5ubm5wcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHB"
              />
            </motion.div>
          </div>

          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.h1
              className="text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight mb-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <span>Hi, I'm</span>
              <br />
              <span className="text-gray-400">PRASHANTH CHANDER</span>
            </motion.h1>
            <motion.h2
              className="text-3xl md:text-4xl text-gray-300 font-extrabold mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              WRITER & DIRECTOR
            </motion.h2>
            <TextGenerateEffect words={words} />
            <div className="flex flex-col sm:flex-row sm:gap-4 mt-6">
              <motion.a
                href="#"
                className="inline-flex items-center px-6 py-3 mb-4 sm:mb-0 text-base font-medium text-white bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 focus:ring-4 focus:ring-gray-500 transition-transform transform hover:scale-110"
                whileHover={{ scale: 1.1 }}
              >
                Get started
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
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
              </motion.a>

              <motion.a
                href="#"
                className="inline-flex items-center px-6 py-3 text-base font-medium text-gray-800 bg-gray-100 border border-gray-300 rounded-lg shadow-lg dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:shadow-gray-700 focus:ring-4 focus:ring-gray-100 transition-transform transform hover:scale-110"
                whileHover={{ scale: 1.1 }}
              >
                Speak to Sales
              </motion.a>
            </div>
            <div className="flex gap-4 mt-8 justify-center lg:justify-start flex-wrap">
              {['instagram', 'facebook', 'linkedin', 'youtube'].map((social) => (
                <motion.a
                  key={social}
                  href={`https://www.${social}.com/prashanthchandhar`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900 p-3 rounded-full hover:bg-gray-700 transition-transform transform hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                >
                  <Image
                    src={`/img/${social}.png`}
                    alt={social}
                    width={32}
                    height={32}
                    className="h-8"
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </Parallax>

      {/* Parallax Background */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        <StarsBackground />
        <ShootingStars />
      </div>
    </section>
  );
};

export default Hero;
