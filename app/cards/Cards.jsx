"use client";
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

import cardIcon1 from './Background+Overlay+Border1.png'
import cardIcon2 from './Background+Overlay+Border2.png'




export default function Cards() {
  return (
    <main className='mt-8 md:mt-0 md:ml-16 space-y-4'>
      
      
      
      <motion.div initial={{opacity:0, y:100}} animate={{opacity:1, y:0}} transition={{duration: 1, ease: "easeOut", delay: 0.2 }}>
        <Link href="#">
          <div className='card'>
            <Image src={cardIcon1} alt='Card Icon' quality={100} className='cardIcon'/>
            <div>
              <p className='cardTitle'>Eightsleep</p>
              <p className='cardText'>App that is focusing on improving your sleeping</p>
            </div>
          </div>
        </Link>
      </motion.div>

      <motion.div initial={{opacity:0, y:100}} animate={{opacity:1, y:0}} transition={{duration: 1, ease: "easeOut", delay: 0.2 }}>
        <Link href="#">
          <div className='card'>
            <Image src={cardIcon2} alt='Card Icon' quality={100} className='cardIcon'/>
            <div>
              <p className='cardTitle'>Agency</p>
              <p className='cardText'>Paid advertising agency that will improve your ROI</p>
            </div>
          </div>
        </Link>
      </motion.div>

      <motion.div initial={{opacity:0, y:100}} animate={{opacity:1, y:0}} transition={{duration: 1, ease: "easeOut", delay: 0.2 }}>
        <Link href="#">
          <div className='card'>
            <Image src={cardIcon1} alt='Card Icon' quality={100} className='cardIcon'/>
            <div>
              <p className='cardTitle'>My Other Projects</p>
              <p className='cardText'>All my coding projects are listed on my Github</p>
            </div>
          </div>
        </Link>
      </motion.div>
    </main>
  )
}
