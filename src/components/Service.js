import React from 'react'

function Service() {
  return (
    <div className='m-auto px-5 md:px-24 lg:px-36 '>
      <p className='m-20'></p>
      <p className='text-[400] text-[48px] text-[#0D1FA1] text-center'>Services I Offer</p>
      <p className='text-[400] text-[28px] text-center'>Your Success, My Priority</p>
      <div className='flex flex-col md:flex-row items-center md:items-start   justify-center md:justify-between mt-10 gap-3'>
        <span>

          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow lg:h-[444px]">
            <a href="#">
              <img class="rounded-t-lg" src="/assets/images/image4.png" alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="text-center mb-2 text-2xl font-bold tracking-tight">Website Copywriting</h5>
              </a>
              <p class="mb-3 font-normal text-center ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

            </div>
          </div>

        </span>
        <span>
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow lg:h-[444px]">
            <a href="#">
              <img class="rounded-t-lg" src="/assets/images/image5.png" alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="text-center mb-2 text-2xl font-bold tracking-tight">Convert Leads Email Copies</h5>
              </a>
              <p class="mb-3 font-normal text-center ">Turn leads into loyal customers with persuasive email copies. My personalized approach connects with your subscribers, nurturing them through the buying journey.</p>

            </div>
          </div>

        </span>
        <span>
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow lg:h-[444px]">
            <a href="#">
              <img class="rounded-t-lg" src="/assets/images/image7.png" alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="text-center mb-2 text-2xl font-bold tracking-tight">Website Copywriting</h5>
              </a>
              <p class="mb-3 font-normal text-center ">Transform your blog into a valuable resource with my insightful and informative blog posts.</p>

            </div>
          </div>

        </span>
      </div>
    </div>
  )
}

export default Service