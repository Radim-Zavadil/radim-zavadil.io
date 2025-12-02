import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import twitterIcon from './x-icon.png';
import instagramIcon from './instagram-icon.png';
import githubIcon from './github-icon.png';
import linkedlnIcon from './linkedln-icon.png';

export default function Links() {
  return (
    <main className='flex flex-col gap-7 text-gray-400'>

      <Link href="#">
        Instagram
      </Link>
      <Link href="#">
        LinkedIn
      </Link>
      <Link href="#">
        GitHub
      </Link>
      <Link href="#">
        X
      </Link>
    </main>
  )
}