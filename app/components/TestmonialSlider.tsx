'use client'

 import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import {  Pagination } from 'swiper/modules';
import { FaQuoteLeft} from 'react-icons/fa'
import {motion} from 'framer-motion'
import { FadeIn } from '../../variants'

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatar: "/logo.png",
  },
  {
    id: 2,
    name: "Jane Smith",
    message: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    avatar: "/logo.png",
  },
 
];



export default function TestmonialSlider() {

  
  return (
  <div className=' py-8  '>
   
  <div className=' flex justify-center py-4 capitalize'>
      <h1 className='px-4 capitalize '>testmonials</h1>
  </div>
        <Swiper
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={5}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className='flex justify-center'
      >
       
       
       <SwiperSlide >
        <div className='py-4 bg-white  flex flex-col justify-center items-center  rounded'>
        
          <Image
           src= '/images/tesmonial_01.png'
           alt=''
           width={70}
           height={70}
           className='rounded-full'
          
          />
          <p className='text-md text-black capitalize py-2 font-bold '>Manal elan</p>
          
         <p className='py-4 text-xl leading-8 text-black italic max-w-md mb-8 '>"Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
        </div>
       </SwiperSlide>
       <SwiperSlide >
        <div className='py-4 bg-white  flex flex-col justify-center items-center  rounded'>
          <Image
           src= '/images/tesmonial_02.png'
           alt=''
           width={70}
           height={70}
           className='rounded-full'
          
          />
          <p className='text-md text-black capitalize py-2 font-bold '>Joh Doe</p>
          
         <p className='py-4 text-xl leading-8 text-black italic max-w-md mb-8'>"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariaturadipiscing elitreprehenderit in voluptate."</p>
        </div>
       </SwiperSlide>
      </Swiper>
  </div>
  )
}
