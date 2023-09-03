import About from '@/components/About'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Service from '@/components/Service'
import Work from '@/components/Work'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
       <div className=" w-full h-auto curved-border " id='Home-section'>
        <Hero />
       </div>
       
        <Service />
       <div className='' id='about-section'>
        {/* <About /> */}
       </div>
       <Work />
       <Contact />
    </main>
  )
}
