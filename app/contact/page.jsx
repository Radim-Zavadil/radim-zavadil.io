"use client"
import React from 'react'
import Button from '../components/Button'
import Link from 'next/link'

export default function Contact() {
  return (
    <main className='flex-grow flex justify-center items-center transition-bg'>


        {/*<div class="absolute inset-0 overflow-hidden z-50">
            <div class="jumbo absolute -inset-[10px] opacity-30"></div>
        </div>*/}


      <div>
        <div className=" absolute top-10 left-10 p-5">
            <Link href="/" className=" py-1 px-6 border-[1px] border-[rgba(255,255,255,0.15)] border-opacity-15 rounded-full bg-black text-white hover:opacity-50 duration-500 ease-in-out">Back</Link>
        </div>

        <div className="blur"></div>

        <div className="isolate bg-black px-6 py-20">

            <div className="mx-auto max-w-2xl text-center">
            <h2 className="m-5 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">Contact me</h2>
            <p className="p-5 text-lg/8 font-light bg-gradient-to-r from-[#FFFFFF] inline-block text-transparent bg-clip-text">Get in touch for innovative solutions tailored to your success.</p>
            </div>

            

        </div>

        <Button />
      </div>

      
    </main>
  )
}
