import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <div className=" relative">
      <img src={"/assets/images/Union.png"} className='absolute w-full max-h-[850px]' />
      <div className='text-center pt-10'>
        <p className='font-[400] text-[48px]'>Writing Website Copies That Brings Sales</p>
        <p className='font-[400] text-[18px]'>I have helped businesses bring 40% more leads with their online presence.<br />
          Do you want to take your business to new heights?</p>
        <div className='mt-5'>
          <button className='border border-black px-3 py-1 bg-black text-white rounded-md'>Book A Call</button>  
        </div>  
      </div>
      <div className=''>
        <Image src={"/assets/images/image6.png"} width="1000" height="1000" />
      </div>
      <div className='m-20'></div>
      <div className='flex flex-col md:gap-4 lg:flex-row justify-center items-center lg:gap-5 m-auto px-5 md:px-24 lg:px-36'>
        <div className='basis-6/12'>
          <img src='/assets/images/Maskgroup.png' alt='logo' className='md:max-h-[452px] md:max-w-[452px] h-auto w-auto' />
        </div>
        <div className='basis-6/12'>
          <p className='text-[400] text-[48px] text-[#0D1FA1]'>Why Me</p>
          <p className='text-[400] text-[28px]'>Your Success, My Priority</p>
          <p className='text-[400] text-[18px]'>I don't just write, I craft experiences. Choosing me means choosing a partner committed to delivering exceptional content that aligns with your brand's goals and drives real results.
          </p>

          <div className='mt-5'>
          <p className='text-[400] text-[24px]'>Connect With Me!</p>
           
          </div>

          <div className='flex gap-5'>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                <path d="M34.3074 34.5292H28.3414V25.2782C28.3414 23.0721 28.3016 20.2323 25.2384 20.2323C22.1311 20.2323 21.6557 22.6359 21.6557 25.1175V34.5286H15.6896V15.5047H21.417V18.1045H21.4972C22.0704 17.1341 22.8986 16.3358 23.8937 15.7947C24.8889 15.2535 26.0136 14.9898 27.1482 15.0315C33.195 15.0315 34.3099 18.9697 34.3099 24.093L34.3074 34.5292ZM8.9579 12.9042C8.27315 12.9043 7.60372 12.7034 7.0343 12.3268C6.46488 11.9502 6.02106 11.4149 5.7589 10.7886C5.49674 10.1622 5.42804 9.47297 5.56151 8.80796C5.69497 8.14296 6.02462 7.53208 6.50872 7.05257C6.99283 6.57306 7.60967 6.24645 8.28125 6.11406C8.95282 5.98167 9.64894 6.04943 10.2816 6.30878C10.9143 6.56813 11.4551 7.00742 11.8356 7.57109C12.2162 8.13477 12.4193 8.79752 12.4195 9.47553C12.4195 9.92571 12.3301 10.3715 12.1561 10.7874C11.9822 11.2034 11.7273 11.5813 11.4059 11.8997C11.0844 12.2181 10.7028 12.4707 10.2828 12.643C9.86274 12.8154 9.41256 12.9041 8.9579 12.9042ZM11.9409 34.5292H5.96866V15.5047H11.9409V34.5292ZM37.2817 0.562287H2.97073C2.19197 0.553585 1.44154 0.851372 0.884407 1.39021C0.327274 1.92905 0.00901609 2.66485 -0.000488281 3.43594V37.5499C0.0086908 38.3214 0.326762 39.0577 0.883876 39.5971C1.44099 40.1365 2.19158 40.4349 2.97073 40.4267H37.2817C38.0624 40.4364 38.8151 40.1388 39.3744 39.5995C39.9337 39.0601 40.2539 38.3229 40.2647 37.5499V3.43348C40.2536 2.66086 39.9332 1.92422 39.3739 1.3854C38.8145 0.84657 38.062 0.549634 37.2817 0.559824" fill="#0A66C2" />
              </svg>
            </span>
            <span>
              <img src='/assets/images/Group.png' alt='insta' className='' />
            </span>
            <span>
            <img src='/assets/images/Twitter Dev - png.png' alt='twitter' className='' width="41" height="41" />

            </span>

          </div>

        
        </div>
      </div>
      <div className='m-16'></div>
      <div className='m-auto px-5 md:px-14 lg:px-36 md:flex justify-between items-center md:items-start md:gap-5'>
            <span className='flex flex-col justify-center items-center'>
              <div className='flex flex-col items-center'>
                <img src='/assets/images/image1.png' alt='spark' />
            <p className='text-[500] text-[28px]'>Faster Delivery</p>
            <p className='text-center'>Get your copy written fast and to <br/> your satisfaction.</p>
              </div>
            </span>
            <span className='flex flex-col justify-center items-center'>
            <img src='/assets/images/image3.png' alt='spark' />
            <p className='text-[500] text-[28px] text-center'>Sales Machine Copy</p>
            <p className='text-center'>I'm the sales copywriter who can<br/> help you take your business to the<br /> next level.</p>
            </span>
            <span className='flex flex-col justify-center items-center'>
            <img src='/assets/images/image2.png' alt='spark' />
            <p className='text-[500] text-[28px] text-center'>Originality</p>
            <p className='text-center'>I'm not afraid to think outside the box.</p>
            </span>
          </div>
      </div>
  )
}

export default Hero