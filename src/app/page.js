import About from '@/components/About'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Industrial from '@/components/Industrial'
import Service from '@/components/Service'
import Slider from '@/components/Slider'
import Work from '@/components/Work'
// import Slider2 from '@/components/slider2'
// import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
       <div className=" w-full h-auto curved-border " id='Home-section'>
        <Hero id='Home-section' />
       </div>
       
        <Service />
        <Industrial  id="service-section" />
       <div className='' id='about-section'>
        {/* <About /> */}
       </div>
       <Work  />
       <Slider />
       {/* <Slider2 /> */}
       <Contact id="contact Me" />
    </main>
  )
}
