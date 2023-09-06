import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav className='m-auto px-5 md:px-24 lg:px-36 flex justify-between py-4 bg-[#CACACA]'>
        <div>
            <p className='font-[300]'>Prathamesh.Writes</p>
        </div>
        <div >
            <ul className='hidden md:flex gap-7 font-serif'>
                <li className='font-serif'><Link href="#Home-section">Home</Link></li>
                <li className='font-serif'><Link href="#about-section">About Me</Link></li>
                <li className='font-serif'><Link href="#service-section">Services</Link></li>
                <li className='font-serif'><Link href="#work-section">Work</Link></li>
            </ul>
        </div>
        <div>
            <Link href="#contact Me"><span className='border border-black px-4 py-2'>Contact Me</span></Link>
        </div>
    </nav>
  )
}

export default Navbar