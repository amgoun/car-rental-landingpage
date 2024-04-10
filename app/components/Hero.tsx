"use client";

import { useContext } from "react";

// components
import Search from "./Serach";

//context
import { SearchContext, SearchContextValue } from "../context/search";
//images
import Image from "next/image";
import hero_bg from "../../public/images/toyota_hero.png";

//motion

import { motion, easeInOut } from "framer-motion";

//variants
import FadeIn from "@/variants";
import { once } from "events";

const Hero = () => {
  const { isSearching } = useContext(SearchContext) as SearchContextValue;
  return (
    <section
      className="h-[90vh] xl:[90vh] bg-[#b2b7c2]/10  md:bg-map_bg bg-no-repeat bg-right-bottom bg-none"
      id="home"
    >
      {/*  text & image */}
      <div className="container mx-auto h-full xl:pt:10 ">
        <div className=" flex flex-col xl:flex-row justify-center items-center xl:justify-between h-full md:px-4">
          <div className="text-center xl:max-w-2xl xl:text-left mt-[24rem]  xl:mt-0">
            <motion.h1
              variants={FadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className=" capitalize text-[3rem] leading-[4rem]  xl:text-[4rem]  xl:leading-[5rem] py-2 xl:py-4"
            >
              Unleash Your Imagination with{" "}
              <span className="text-[#4F8A8B]">Luxury</span> Car Rentals
            </motion.h1>
            <motion.p
              variants={FadeIn("down", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="description  mx-auto xl:mx-0 mb-6 xl:mb-10  xl:max-w-xl"
            >
              Welcome to the epitome of luxury and freedom. Our car rental
              services offer a seamless blend of style and performance.{" "}
            </motion.p>
            <motion.div
              variants={FadeIn("down", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }}
              className="flex gap-x-4 justify-center xl:justify-start mt-5"
            >
              <button className=" btn-cta text-white">book now</button>
              <button className="btn-cta text-white bg-[#4F8A8B]">
                {" "}
                explore us
              </button>
            </motion.div>
          </div>
          {/* text-center xl:max-w-2xl xl:text-right */}
          <motion.div
            variants={FadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="text-center xl:max-w-2xl xl:text-right md:max-w-[70vw] "
          >
            <Image
              src={hero_bg}
              alt="Picture of the author"
              width={800}
              height={633}
              style={{ objectFit: "contain" }}
            />
          </motion.div>
        </div>
      </div>
      {isSearching ? (
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          transition={{ ease: easeInOut }}
          className="fixed top-[80px] z-10 w-full  max-w-[1920px]"
        >
          <Search />
        </motion.div>
      ) : (
        <div className="-mt-12 w-full max-w-[1300px] mx-auto ">
          <motion.div
            variants={FadeIn("up", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
          >
            <Search />
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Hero;
