import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import cardIcon from './card-icon.png'

export default function Cards() {
  return (
    <main className='mt-8 md:mt-0 md:ml-16 space-y-4'>
      
      
      
      
        <Link href="#">
          <div className='card'>
            <Image src={cardIcon} alt='Card Icon' quality={100} className='cardIcon'/>
            <div>
              <p className='cardTitle'>Title</p>
              <p className='cardText'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
        </Link>

        <Link href="#">
          <div className='card'>
            <Image src={cardIcon} alt='Card Icon' quality={100} className='cardIcon'/>
            <div>
              <p className='cardTitle'>Title</p>
              <p className='cardText'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
        </Link>

        <Link href="#">
          <div className='card'>
            <Image src={cardIcon} alt='Card Icon' quality={100} className='cardIcon'/>
            <div>
              <p className='cardTitle'>Title</p>
              <p className='cardText'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
        </Link>
      

    </main>
  )
}
