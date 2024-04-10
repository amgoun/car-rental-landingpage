"use client";
import { Cars } from "../../lib/Brands";
import Image from "next/image";
import { motion } from "framer-motion";
import FadeIn from "@/variants";

const CarSlide = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 place-items-center gap-4 px-4 h-[100%] -z-50">
      {Cars.map((Cars, i) => {
        return (
          <motion.div
            variants={FadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.6 }}
            className="flex flex-col bg-white p-4 shadow-md rounded container mx-auto   "
            key={i}
          >
            <div className="flex justify-between items-start">
              <div className="felx flex-col">
                <p className="text-xl capitalize text-black font-bold">
                  {" "}
                  {Cars.brand}
                </p>
                <p className="font-semibold text-gray-400 py-1">
                  {Cars.category}
                </p>
              </div>
              <div className="flex justify-center items-center gap-2">
                <span>{Cars.rating}</span>
                <Image
                  src="/black-star-icon.svg"
                  width={16}
                  height={16}
                  alt=""
                />
              </div>
            </div>
            <div
              className="py-6 flex self-center  rounded mt-2"
              style={{ width: "100%", height: "100%" }}
            >
              <Image
                className="hover:scale-[1.2] transition-all"
                src={Cars.image}
                width={700}
                height={400}
                alt={`Image ${i}`}
              />
            </div>

            <div className=" p-4 mt-5">
              <ul className="flex  justify-between text-sm font-[500] text-gray-400 capitalize ">
                <li className="flex flex-col items-center gap-y-2 ">
                  <Image src="/gas.svg" width={24} height={24} alt="" />
                  <span>{Cars.gaz}</span>
                </li>
                <li className="flex flex-col items-center text-sm gap-y-2">
                  <Image
                    src="/transmission-icon.svg"
                    width={24}
                    height={24}
                    alt=""
                  />
                  <span> {Cars.transmission} </span>
                </li>

                <li className="flex flex-col  items-center gap-y-2 ">
                  <Image
                    src="/steering-wheel-icon.svg"
                    width={24}
                    height={24}
                    alt=""
                  />
                  <span>{Cars.ph}</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-between pt-4 items-center  mt-2 ">
              <p className="text-black text-xl font-semibold">
                ${Cars.price}/{""}
                <span className="text-gray-400 font-normal ml-1">day</span>
              </p>
              <button className="py-3 px-6 bg-[#4F8A8B] text-white rounded font-semibold hover:bg-opacity-80 duration-200">
                Rent Now
              </button>
            </div>
          </motion.div>
        );
      })}
    </section>
  );
};

export default CarSlide;
