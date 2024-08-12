"use client";
import React from "react";
import { LampContainer } from "../SpecialSection/globe";
import { motion } from "framer-motion";
import Image from "next/image";

const Exps = [
  {
    id: 1,
    roll: "Assistant Director",
    movie: "Gangs of Madras",
    Info: "Lorem ipsum",
    img: "https://m.media-amazon.com/images/M/MV5BM2QyYjU4NWQtODMwNC00OTlmLTlhYWMtYjU1ZmJkYzU0Mjk4XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
  },
  {
    id: 2,
    roll: "Project Designer",
    movie: "Jango",
    Info: "Lorem ipsum",
    img: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/jango-et00317769-15-11-2021-07-13-25.jpg",
  },
  {
    id: 3,
    roll: "Project Designer",
    movie: "Kotravai",
    Info: "Lorem ipsum",
    img: "https://m.media-amazon.com/images/M/MV5BZmE4YTUzNzktYjhmYS00NjdhLWI4YTMtZDUyM2MwMTMwOTQ2XkEyXkFqcGc@._V1_.jpg",
  },
  {
    id: 4,
    roll: "Promotion Head",
    movie: "Titanic Kadhalum Kadanthu Pogum",
    Info: "Lorem ipsum",
    img: "https://m.media-amazon.com/images/M/MV5BMjZhOWRiODQtYzIzMi00NGMyLTk3M2ItZjYxN2ZjMWE4MTkwXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg",
  },
];

const Exp = () => {
  return (
    <div id="Experience" className="bg-primary min-h-screen py-16">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="-mt-16 relative -top-32 bg-gradient-to-br from-slate-100 to-slate-500 py-1 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Experience
        </motion.h1>
      </LampContainer>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {Exps.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl"
          >
            <a href="#">
              <Image
                className="w-full h-48 object-cover"
                src={item.img}
                alt={item.movie}
                width={400}
                height={300}
              />
            </a>
            <div className="p-6">
              <a href="#">
                <h5 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {item.roll}
                </h5>
              </a>
              <p className="text-gray-600 dark:text-gray-400">
                Movie: {item.movie}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Exp;
