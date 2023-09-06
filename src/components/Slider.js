"use client"
import React from 'react'

// import Swiper from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay,  Navigation } from 'swiper/modules';
import Image from 'next/image';

function Slider() {
  return (
    <div className='mx-auto px-5 md:px-24 lg:px-36 my-12 hidden md:block'>

      <p className='text-[400] text-[48px] text-[#0D1FA1]'>Raving Client Testimonials</p>

      <p className='text-[400] text-[20px]'>My satisfied clients are a testament to the quality of my services. Dont just take my word for it read what my clients have to say about their experience working with me.</p>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
       
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className='mx-auto my-auto  py-5 flex gap-10'>
            <div className='basis-6/12 flex justify-center'>
            <Image className="md:w-full w-auto md:h-full h-auto cover "  width={1000} height={1000} alt='logo' src="/assets/images/Mask group-2.png" />
            </div>
            <div className='basis-6/12 '>
            <p className='text-[400] text-[28px]'>Devasheesh</p>
                  <p className='text-[400] text-[20px]'>Social Media Strategist </p>
                  <p className='text-[400] text-[18px] pt-4'>Prathamesh has written exclusive blog contents for the website of our company. He has fulfilled our desired checklist by adding keywords and providing well researched data. He works spokes about his quality and determination. I would definitely recommend him for his promising job.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='mx-auto my-auto  py-5 flex gap-10'>
            <div className='basis-6/12 flex justify-center'>
            <Image className="md:w-full w-auto md:h-full h-auto cover" width={1000} height={1000} alt='logo' src="/assets/images/Mask group-1.png" />
            </div>
            <div className='basis-6/12 '>
            <p className='text-[400] text-[28px] pt-4'>Aashna Arora</p>
                  <p className='text-[400] text-[20px]'>Technical Content Writer| B2B Marketer </p>
                  <p className='text-[400] text-[18px]'>“Prathamesh is a great and efficient writer who adheres to deadlines. He is a versatile writer who does adequate research on every subject before writing. So far, I have had a good experience working with him.”</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='mx-auto my-auto  py-5 flex gap-10'>
            <div className='basis-6/12 flex justify-center'>
            <Image className="md:w-full w-auto md:h-full h-auto cover" width={1000} height={1000} alt='logo' src="/assets/images/Mask group.png" />
            </div>
            <div className='basis-6/12 '>
            <p className='text-[400] text-[28px]'>Bhavana Watti✨</p>
                  <p className='text-[400] text-[20px]'>Social Media Strategist  </p>
                  <p className='text-[400] text-[18px] pt-4'> I highly recommend Prathamesh for his work on the company &apos s website. He has written exclusive blog contents that are well-researched and informative. He is also humble and polite, and he is always willing to discuss the details of his work. I would definitely work with him again.  </p>
            </div>
          </div>
        </SwiperSlide>
       
      </Swiper>
    </div>
  )
}

export default Slider