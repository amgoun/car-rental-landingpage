import React from "react";

const Cta = () => {
  return (
    <section className="flex flex-col justify-center items-center py-12 bg-slate-100">
      <h3 className="text-2xl capitalize leading-3">
        {" "}
        subscribe to our newsletter
      </h3>
      <p className="capitalize">keep up our latest news and discounts & more</p>
      <div className="py-6  flex justify-center gap-2">
        <input
          type="text"
          placeholder="enter your email"
          className="w-[350px] boredr-none py-4 px-4 ring-0 rounded-md outline-none"
        />
        <button
          type="submit"
          className="py4 px-4 bg-[#4F8A8B] text-white font-normal rounded-md  hover:bg-opacity-80 duration-200"
        >
          submit
        </button>
      </div>
    </section>
  );
};

export default Cta;
