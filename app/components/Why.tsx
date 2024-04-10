import { Services } from "@/lib/Brands";
import Image from "next/image";

const Why = () => {
  return (
    <section className="  py-8 xl:py-16" id="why">
      <div className="flex flex-col justify-center items-center">
        <h1 className="capitalize text-[3rem] leading-[4rem]  xl:text-[4rem] xl:leading-[5rem] py-4">
          why choose us
        </h1>
        <p className="description  mx-auto xl:mx-0 mb-6 xl:mb-10 xl:max-w-xl text-[16px] text-center py-4 text-gray-400">
          We stand out by offering personalized assistance and a seamless
          experience, making every journey a memorable and convenient one.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-x-8 justify-arouned">
        <Image
          className="-transform scale-x-[-1] min-w-[50%] "
          src="/images/toyota_2.png"
          width={800}
          height={600}
          alt=""
        />
        <div className="py-8 px-4">
          {Services.map((Services) => {
            return (
              <div className="flex flex-col ">
                <div className="flex space-x-4 items-center">
                  <div className=" p-4 bg-[#D6E6E6] rounded-md">
                    <Image
                      src={Services.iconUrl}
                      width={24}
                      height={24}
                      alt={Services.title}
                    />
                  </div>
                  <p className=" text-lg text-black leading-7 font-semibold ">
                    {Services.title}
                  </p>
                </div>
                <div>
                  <p className="py-2 ml-20 text-gray-400">
                    {Services.descrioption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Why;
