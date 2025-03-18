import React from 'react'
import Link from 'next/link'
import Blur from './components/Blur'

export default function notFound() {
  return (
    <main className='flex-grow flex justify-center items-center'>
      <div>
        <Blur />
        <p className='text-3xl font-bold animate-pulse'>404</p>
        <p>Uh oh! This page does not exists, maybe you clicked an old link or misspelled. Please try again…</p>
        <div className='btn'><Link href="/">Return Home</Link></div>
      </div>
    </main>
  )
}