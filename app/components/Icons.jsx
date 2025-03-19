import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import twitterIcon from './x-icon.png';
import instagramIcon from './instagram-icon.png';
import githubIcon from './github-icon.png';
import linkedlnIcon from './linkedln-icon.png';

export default function Icons() {
  return (
    <main className='flex items-center text-gray-400 m-2'>
        <Link href=""><Image src={twitterIcon} alt='X logo' quality={100} className='icon'/></Link>
        <Link href=""><Image src={instagramIcon} alt='Instagram logo' quality={100} className='icon'/></Link>
        <Link href=""><Image src={githubIcon} alt='Github logo' quality={100} className='icon'/></Link>
        <Link href=""><Image src={linkedlnIcon} alt='Linkedln logo' quality={100} className='icon'/></Link>
    </main>
  )
}