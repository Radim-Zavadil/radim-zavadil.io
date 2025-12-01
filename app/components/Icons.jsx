import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import twitterIcon from './x-icon.png';
import instagramIcon from './instagram-icon.png';
import githubIcon from './github-icon.png';
import linkedlnIcon from './linkedln-icon.png';

export default function Icons() {
  return (
    <main className='flex flex-col items-start text-gray-400 mb-3'>
        <Link href="https://x.com/radimzavadil16" target='_blank' className='link'><p className='linkText'>X</p></Link>
        <Link href="https://instagram.com/radimzavadil_" target='_blank' className='link'><p className='linkText'>Instagram</p></Link>
        <Link href="https://github.com/Radim-Zavadil" target='_blank' className='link'><p className='linkText'>GitHub</p></Link>
        <Link href="https://www.linkedin.com/in/radim-zavadil-400043371/" target='_blank' className='link'><p className='linkText'>LinkedIn</p></Link>
    </main>
  )
}