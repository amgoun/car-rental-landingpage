"use client";

import Image from "next/image";

import { CarBrands } from "../../lib/Brands";

const Brands = () => {
  return (
    <section className="flex justify-center items-center  gap-6 xl:gap-20 xl:py-20 ">
      {CarBrands.map((CarBrands, i) => {
        return (
          <div className="py-4 " key={i}>
            <Image
              src={CarBrands.iconUrl}
              width={CarBrands.with}
              height={CarBrands.height}
              alt={`Image ${i}`}
            />
          </div>
        );
      })}
    </section>
  );
};

export default Brands;
