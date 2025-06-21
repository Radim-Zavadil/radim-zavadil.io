"use client"
import React from 'react'
import Link from 'next/link'
import Blur from './components/Blur'
import UnicornStudioEmbed from './components/UnicornStudioEmbed'

export default function notFound() {
  return (
    <main className='h-screen flex justify-center items-center overflow-hidden'>
        <div className=" absolute top-10 left-10 p-5">
            <Link href="/" className=" py-1 px-6 border-[1px] border-[rgb(209,213,219)] dark:border-[rgba(255,255,255,0.15)] border-opacity-15 rounded-full bg-transparent text-black dark:text-white hover:opacity-50 duration-500 ease-in-out">Back</Link>
        </div>
        <UnicornStudioEmbed />
    </main>
  )
}