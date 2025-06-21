import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import twitterIcon from './x-icon.png';
import instagramIcon from './instagram-icon.png';
import githubIcon from './github-icon.png';
import linkedlnIcon from './linkedln-icon.png';

export default function Icons() {
  return (
    <main className='flex items-center text-gray-400 mb-3'>
        <Link href="https://x.com/radimzavadil16" target='_blank'><Image src={twitterIcon} alt='X logo' quality={100} className='m-1 w-[22px] hover:opacity-50 hover:duration-100 hover:ease-in'/></Link>
        <Link href="https://instagram.com/radimzavadil_" target='_blank'><Image src={instagramIcon} alt='Instagram logo' quality={100} className='m-1 w-6 hover:opacity-50 hover:duration-100 hover:ease-in'/></Link>
        <Link href="https://github.com/Radim-Zavadil" target='_blank'><Image src={githubIcon} alt='Github logo' quality={100} className='m-1 w-6 hover:opacity-50 hover:duration-100 hover:ease-in'/></Link>
        <Link href="https://www.linkedin.com/in/radim-zavadil-400043371/" target='_blank'><Image src={linkedlnIcon} alt='Linkedln logo' quality={100} className='m-1 w-6 hover:opacity-50 hover:duration-100 hover:ease-in'/></Link>
    </main>
  )
}