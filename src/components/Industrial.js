import Image from 'next/image'
import React from 'react'

function Industrial() {
  return (
    <div className='m-auto px-5 md:px-24 lg:px-36 my-10'>
        <div className='md:flex'>
              <div className='basis-6/12 '>
                  <p className='text-[48px] text-[400] text-[#0D1FA1]'>Industries I Work In</p>
                  <p className='text-[14px] text-[400] '>
                      A Content Writer based in the heart of India.<br />
                      I specialize in crafting exceptional words that help<br/> businesses flourish by attracting more customers and boosting sales.
                  </p>
                  <p className='mt-5  '><span className='text-[18px] rounded-md text-[500] text-white bg-black px-4 py-4'>
                  Tell Us Your Requirements
                    </span></p>
              </div>
              <div className='basis-6/12'>
                  <div className='flex justify-center gap-5 '>
                      <div className='flex flex-col items-center mt-16 border rounded-md px-5 shadow-md'>
                        <Image src={"/assets/images/image a.png"} width={88} height={114} alt='logo' className='w-[88px] h-[114px]' />
                        <p>Real Estate</p>
                      </div>
                      <div className='flex flex-col items-center  '>
                        <div className='border rounded-md shadow-md'>
                        <Image src={"/assets/images/image c.png"} width={119} height={119} alt='logo' className='w-[119px] h-[119px] ' />
                        <p className='text-center'>Hospital</p>
                        </div>
                      </div>
                      
                  </div>
                  <div className='flex justify-center gap-5'>
                  <div className='flex flex-col items-center mt-28'>
                        <div className='border rounded-md px-5 shadow-md'>
                        <Image src={"/assets/images/image d.png"} width={135} height={135} alt='logo' className='w-[100px] h-[100px]' />
                        <p className='text-center'>Ed-Tech</p>
                        </div>
                      </div>
                      <div className='flex flex-col items-center mt-16'>
                        <div className='border rounded-md px-5 shadow-md'>
                        <Image src={"/assets/images/image b.png"} width={150} height={100} alt='logo' className='w-[100px] h-[100px]' />
                        <p>E-Commerce</p>
                        </div>
                      </div>
                      <div className='flex flex-col items-center '>
                       <div className='border rounded-md px-5 shadow-md'>
                       <Image src={"/assets/images/image e.png"} width={250} height={150} alt='logo' className='w-[100px] h-[100px]' />
                        <p className='text-center'>Banking</p>
                       </div>
                      </div>
                  </div>

              </div>
        </div>
        <div className='mt-5'>
            <Image className='w-full h-full bg-cover' width={1300} height={869} alt='' src={"/assets/images/image14.png"} />
        </div>
    </div>
  )
}

export default Industrial