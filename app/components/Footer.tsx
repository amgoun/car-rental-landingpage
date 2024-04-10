import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <section className=" flex justify-center py-6 bg-slate-950  text-slate-300">
      <div
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4  gap-4 py-4 container w-full mx-4 xl:mx-0 "
        id="contact"
      >
        <div className="py-4 px-2">
          <Image
            src="/images/logo_footer.svg"
            height={103}
            width={222}
            alt="logo_footer"
          />
        </div>
        <div className="py-4 px-2">
          <h4 className=" text-xl font-medium capitalize py-2">our Services</h4>
          <ul role="list">
            <li className="py-2">Home</li>
            <li className="py-2">Cars</li>
            <li className="py-2">Why us</li>
            <li className="py-2">Testmonials</li>
          </ul>
        </div>
        <div className="py-4 px-2">
          <h4 className=" text-xl font-medium capitalize py-2">Locations</h4>
          <ul role="list">
            <li className="py-2">California</li>
            <li className="py-2">Texas</li>
            <li className="py-2">Florida</li>
            <li></li>
          </ul>
        </div>
        <div className="py-4 px-2">
          <h4 className=" text-xl font-medium capitalize py-2">contact us</h4>
          <ul role="list">
            <li className="py-2">+9654457781</li>
            <li className="py-2">rentcars@email.com</li>
          </ul>
          <ul className=" flex gap-2 mt-2">
            <li>F</li>
            <li>F</li>
            <li>In</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
