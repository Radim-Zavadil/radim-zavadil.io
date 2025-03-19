"use client";
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

import cardIcon from './card-icon.png'



export default function Cards() {
  return (
    <main className='mt-8 md:mt-0 md:ml-16 space-y-4'>
      
      
      
      <motion.div initial={{opacity:0, y:100}} animate={{opacity:1, y:0}} transition={{duration: 1, ease: "easeOut", delay: 0.2 }}>
        <Link href="#">
          <div className='card'>
            <Image src={cardIcon} alt='Card Icon' quality={100} className='cardIcon'/>
            <div>
              <p className='cardTitle'>Title</p>
              <p className='cardText'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
        </Link>
      </motion.div>

      <motion.div initial={{opacity:0, y:100}} animate={{opacity:1, y:0}} transition={{duration: 1, ease: "easeOut", delay: 0.2 }}>
        <Link href="#">
          <div className='card'>
            <Image src={cardIcon} alt='Card Icon' quality={100} className='cardIcon'/>
            <div>
              <p className='cardTitle'>Title</p>
              <p className='cardText'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
        </Link>
      </motion.div>

      <motion.div initial={{opacity:0, y:100}} animate={{opacity:1, y:0}} transition={{duration: 1, ease: "easeOut", delay: 0.2 }}>
        <Link href="#">
          <div className='card'>
            <Image src={cardIcon} alt='Card Icon' quality={100} className='cardIcon'/>
            <div>
              <p className='cardTitle'>Title</p>
              <p className='cardText'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
        </Link>
      </motion.div>
    </main>
  )
}
