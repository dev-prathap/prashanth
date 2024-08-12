"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  IconBrightnessDown,
  IconBrightnessUp,
  IconCaretRightFilled,
  IconCaretUpFilled,
  IconChevronUp,
  IconMicrophone,
  IconMoon,
  IconPlayerSkipForward,
  IconPlayerTrackNext,
  IconPlayerTrackPrev,
  IconTable,
  IconVolume,
  IconVolume2,
  IconVolume3,
} from "@tabler/icons-react";
import { IconSearch } from "@tabler/icons-react";
import { IconWorld } from "@tabler/icons-react";
import { IconCommand } from "@tabler/icons-react";
import { IconCaretLeftFilled } from "@tabler/icons-react";
import { IconCaretDownFilled } from "@tabler/icons-react";
import Image from "next/image";

export const MacbookScroll = ({
  src,
  showGradient,
  title,
  badge,
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window && window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  const scaleX = useTransform(
    scrollYProgress,
    [0, 0.3],
    [1.2, isMobile ? 1 : 1.5]
  );
  const scaleY = useTransform(
    scrollYProgress,
    [0, 0.3],
    [0.6, isMobile ? 1 : 1.5]
  );
  const translate = useTransform(scrollYProgress, [0, 1], [0, 1500]);
  const rotate = useTransform(scrollYProgress, [0.1, 0.12, 0.3], [-28, -28, 0]);
  const textTransform = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div
      ref={ref}
      className="min-h-[200vh] flex flex-col items-center py-0 md:py-80 justify-start flex-shrink-0 [perspective:800px] transform md:scale-100 scale-[0.35] sm:scale-50"
    >
      <motion.h2
        style={{
          translateY: textTransform,
          opacity: textOpacity,
        }}
        className="dark:text-white text-neutral-800 text-3xl font-bold mb-20 text-center"
      >
        {title || (
          <span>
            This Macbook is built with Tailwindcss. <br /> No kidding.
          </span>
        )}
      </motion.h2>
      {/* Lid */}
      <Lid
        src={src}
        scaleX={scaleX}
        scaleY={scaleY}
        rotate={rotate}
        translate={translate}
      />
      {/* Base area */}
      <div className="h-[22rem] w-[32rem] bg-gray-200 dark:bg-[#272729] rounded-2xl overflow-hidden relative -z-10">
        {/* above keyboard bar */}
        <div className="h-10 w-full relative">
          <div className="absolute inset-x-0 mx-auto w-[80%] h-4 bg-[#050505]" />
        </div>
        <div className="flex relative">
          <div className="mx-auto w-[10%] overflow-hidden h-full">
            <SpeakerGrid />
          </div>
          <div className="mx-auto w-[80%] h-full">
            <Keypad />
          </div>
          <div className="mx-auto w-[10%] overflow-hidden h-full">
            <SpeakerGrid />
          </div>
        </div>
        <Trackpad />
        <div className="h-2 w-20 mx-auto inset-x-0 absolute bottom-0 bg-gradient-to-t from-[#272729] to-[#050505] rounded-tr-3xl rounded-tl-3xl" />
        {showGradient && (
          <div className="h-40 w-full absolute bottom-0 inset-x-0 bg-gradient-to-t dark:from-black from-white via-white dark:via-black to-transparent z-50"></div>
        )}
        {badge && <div className="absolute bottom-4 left-4">{badge}</div>}
      </div>
    </div>
  );
};

export const Lid = ({
  scaleX,
  scaleY,
  rotate,
  translate,
  src,
}) => {
  return (
    <div className="relative [perspective:800px]">
      <div
        style={{
          transform: "perspective(800px) rotateX(-25deg) translateZ(0px)",
          transformOrigin: "bottom",
          transformStyle: "preserve-3d",
        }}
        className="h-[12rem] w-[32rem] bg-[#010101] rounded-2xl p-2 relative"
      >
        <div
          style={{
            boxShadow: "0px 2px 0px 2px var(--neutral-900) inset",
          }}
          className="absolute inset-0 bg-[#010101] rounded-lg flex items-center justify-center"
        >
          <span className="text-white">
            {/* <AceternityLogo /> */}
          </span>
        </div>
      </div>
      <motion.div
        style={{
          scaleX: scaleX,
          scaleY: scaleY,
          rotateX: rotate,
          translateY: translate,
          transformStyle: "preserve-3d",
          transformOrigin: "top",
        }}
        className="h-96 w-[32rem] absolute inset-0 bg-[#010101] rounded-2xl p-2"
      >
        <div className="absolute inset-0 bg-[#272729] rounded-lg" />
        <Image
          src={src || ""}
          alt="aceternity logo"
          fill
          className="object-cover object-left-top absolute rounded-lg inset-0 h-full w-full"
        />
      </motion.div>
    </div>
  );
};

export const Trackpad = () => {
  return (
    <div
      className="w-[40%] mx-auto h-32 rounded-xl my-1"
      style={{
        boxShadow: "0px 0px 1px 1px #00000020 inset",
      }}
    ></div>
  );
};

export const Keypad = () => {
  return (
    <div className="h-full rounded-md bg-[#050505] mx-1 p-1">
      {/* First Row */}
      <Row>
        <KBtn
          className="w-10 items-end justify-start pl-[4px] pb-[2px]"
          childrenClassName="items-start"
        >
          esc
        </KBtn>
        <KBtn>
          <IconBrightnessDown className="h-[6px] w-[6px]" />
          <span className="inline-block mt-1">F1</span>
        </KBtn>

        <KBtn>
          <IconBrightnessUp className="h-[6px] w-[6px]" />
          <span className="inline-block mt-1">F2</span>
        </KBtn>
        <KBtn>
          <IconTable className="h-[6px] w-[6px]" />
          <span className="inline-block mt-1">F3</span>
        </KBtn>
        <KBtn>
          <IconSearch className="h-[6px] w-[6px]" />
          <span className="inline-block mt-1">F4</span>
        </KBtn>
        <KBtn>
          <IconMicrophone className="h-[6px] w-[6px]" />
          <span className="inline-block mt-1">F5</span>
        </KBtn>
        <KBtn>
          <IconMoon className="h-[6px] w-[6px]" />
          <span className="inline-block mt-1">F6</span>
        </KBtn>
        <KBtn>
          <IconPlayerTrackPrev className="h-[6px] w-[6px]" />
          <span className="inline-block mt-1">F7</span>
        </KBtn>
        <KBtn>
          <IconPlayerSkipForward className="h-[6px] w-[6px]" />
          <span className="inline-block mt-1">F8</span>
        </KBtn>
        <KBtn>
          <IconPlayerTrackNext className="h-[6px] w-[6px]" />
          <span className="inline-block mt-1">F9</span>
        </KBtn>
        <KBtn>
          <IconVolume3 className="h-[6px] w-[6px]" />
          <span className="inline-block mt-1">F10</span>
        </KBtn>
        <KBtn>
          <IconVolume2 className="h-[6px] w-[6px]" />
          <span className="inline-block mt-1">F11</span>
        </KBtn>
        <KBtn>
          <IconVolume className="h-[6px] w-[6px]" />
          <span className="inline-block mt-1">F12</span>
        </KBtn>
        <KBtn>
          <IconWorld className="h-[6px] w-[6px]" />
          <span className="inline-block mt-1">F13</span>
        </KBtn>
        <KBtn>
          <IconCommand className="h-[6px] w-[6px]" />
          <span className="inline-block mt-1">F14</span>
        </KBtn>
        <KBtn>
          <IconCaretLeftFilled className="h-[6px] w-[6px]" />
          <span className="inline-block mt-1">F15</span>
        </KBtn>
        <KBtn>
          <IconCaretRightFilled className="h-[6px] w-[6px]" />
          <span className="inline-block mt-1">F16</span>
        </KBtn>
        <KBtn>
          <IconCaretDownFilled className="h-[6px] w-[6px]" />
          <span className="inline-block mt-1">F17</span>
        </KBtn>
        <KBtn>
          <IconCaretUpFilled className="h-[6px] w-[6px]" />
          <span className="inline-block mt-1">F18</span>
        </KBtn>
      </Row>
      {/* Second Row */}
      <Row>
        <KBtn>1</KBtn>
        <KBtn>2</KBtn>
        <KBtn>3</KBtn>
        <KBtn>4</KBtn>
        <KBtn>5</KBtn>
        <KBtn>6</KBtn>
        <KBtn>7</KBtn>
        <KBtn>8</KBtn>
        <KBtn>9</KBtn>
        <KBtn>0</KBtn>
        <KBtn>-</KBtn>
        <KBtn>=</KBtn>
        <KBtn>
          <IconChevronUp className="h-[10px] w-[10px]" />
        </KBtn>
        <KBtn>
          <IconChevronUp className="h-[10px] w-[10px]" />
        </KBtn>
      </Row>
      {/* Third Row */}
      <Row>
        <KBtn>
          <IconCaretLeftFilled className="h-[10px] w-[10px]" />
        </KBtn>
        <KBtn>
          <IconCaretDownFilled className="h-[10px] w-[10px]" />
        </KBtn>
        <KBtn>
          <IconCaretRightFilled className="h-[10px] w-[10px]" />
        </KBtn>
        <KBtn>Shift</KBtn>
        <KBtn>Cmd</KBtn>
        <KBtn>Alt</KBtn>
        <KBtn>Ctrl</KBtn>
        <KBtn>
          <IconCommand className="h-[10px] w-[10px]" />
        </KBtn>
        <KBtn>
          <IconCommand className="h-[10px] w-[10px]" />
        </KBtn>
        <KBtn>
          <IconCommand className="h-[10px] w-[10px]" />
        </KBtn>
      </Row>
    </div>
  );
};

export const SpeakerGrid = () => {
  return (
    <div className="h-full flex flex-col justify-between items-center mx-1">
      <div className="flex space-y-2 flex-col justify-center items-center h-full">
        <div className="bg-gray-400 h-2 rounded-xl w-8" />
        <div className="bg-gray-400 h-2 rounded-xl w-8" />
        <div className="bg-gray-400 h-2 rounded-xl w-8" />
        <div className="bg-gray-400 h-2 rounded-xl w-8" />
      </div>
    </div>
  );
};

export const Row = ({ children }) => {
  return (
    <div className="flex items-center justify-start mb-1">{children}</div>
  );
};

export const KBtn = ({ children, className, childrenClassName }) => {
  return (
    <button
      className={cn(
        "flex items-center justify-center rounded-md w-8 h-8 mx-1 bg-gray-600 text-white dark:bg-gray-500 dark:text-white",
        className
      )}
    >
      <span className={cn("text-xs font-medium", childrenClassName)}>{children}</span>
    </button>
  );
};
