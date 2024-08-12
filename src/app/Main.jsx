import About from "@/components/Section/About";
import Clintlogo from "@/components/Section/Clintlogo";
import Exp from "@/components/Section/Exp";
import Hero from "@/components/Section/Hero";
import Special from "@/components/Section/Special";
import { Team } from "@/components/Section/Team";
import { MacbookScroll } from "@/components/SpecialSection/Scrouleffect";
import { Globe, LampDemo } from "@/components/SpecialSection/globe";
import Link from "next/link";

const Main = () => {
  return (
    <div>
      <Hero />
      {/* <MacbookScroll /> */}
      <Special />
      <About />
      <Exp />
      <Team />
      <Clintlogo />
    </div>
  );
};

export default Main;
