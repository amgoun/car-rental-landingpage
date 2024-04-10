"use client";

import { useState, useEffect, useContext } from "react";
import { useMediaQuery } from "react-responsive";

import Image from "next/image";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

import { BiMenuAltRight, BiX } from "react-icons/bi";
import SearchMobile from "./SearchMobile";
import { SearchContext, SearchContextValue } from "../context/search";

const Header = () => {
  const { setIsSearching } = useContext(SearchContext) as SearchContextValue;
  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(true);
  const desktopMode = useMediaQuery({
    query: "(min-width:1300px)",
  });

  useEffect(() => {
    const handleScroll = () => {
      // header
      if (window.scrollY > 40) {
        setHeader(true);
      } else {
        setHeader(false);
      }
      //serach
      if (window.scrollY > 700) {
        setIsSearching(true);
      } else {
        setIsSearching(false);
      }
    };
    // add event listner
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <header
      className={`${
        header
          ? "bg-white shadow-md py-4 xl:py-[1.6rem] md:px-4"
          : "bg-transparent shadow-none py-2 md:px-4"
      } fixed w-full max-w-[1920px] mx-auto z-20 transition-all duration-300 `}
    >
      <div className="xl:container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between ">
        <div className="flex justify-between items-center px-4">
          {/*logo */}
          <Link
            to="home"
            smooth={desktopMode}
            spy={true}
            className="cursor-pointer"
          >
            <Image src="/logo_main.svg" width={113} height={52} alt="logo" />
          </Link>
          {/* nav open menu */}
          <div
            onClick={() => setNav(!nav)}
            className=" cursor-pointer xl:hidden"
          >
            {nav ? (
              <BiX className="text-4xl" />
            ) : (
              <BiMenuAltRight className="text-4xl" />
            )}
          </div>
        </div>
        {/* nav */}
        <nav
          className={`${
            nav ? "max-h-max py-8 px-4 xl:py-0" : " max-h-0 xl:max-h-max "
          } flex flex-col w-full bg-white gap-y-6 overflow-hidden font-bold xl:font-medium xl:flex-row xl:max-w-max xl:gap-x-8 xl:h-max xl:bg-transparent xl:pb-0 transition-all duration-150 text-center xl:text-left uppercase text-sm xl:text-[15px] xl:normal-case mr-8 `}
        >
          <Link
            to="home"
            smooth={desktopMode}
            spy={true}
            activeClass="active"
            className="cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="cars"
            smooth={desktopMode}
            spy={true}
            activeClass="active"
            className="cursor-pointer"
          >
            Cars
          </Link>

          <Link
            to="why"
            smooth={desktopMode}
            spy={true}
            activeClass="active"
            className="cursor-pointer"
          >
            Why us
          </Link>
          <Link
            to="testmonial"
            smooth={desktopMode}
            spy={true}
            activeClass="active"
            className="cursor-pointer"
          >
            Testmonials
          </Link>
          <Link
            to="contact"
            smooth={desktopMode}
            spy={true}
            activeClass="active"
            className="cursor-pointer"
          >
            Contac us
          </Link>
          <Link
            to="/"
            smooth={desktopMode}
            spy={true}
            activeClass="active"
            className="xl:hidden btn btn-sm max-w-[164px]  bg-primary mx-auto"
          >
            See all cars
          </Link>
          <SearchMobile />
        </nav>
      </div>
    </header>
  );
};

export default Header;
