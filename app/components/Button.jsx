import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Star from './stars.png'

export default function Button() {
  return (
    <main className='flex justify-center p-3'>
      
      

      <Link
        className=" border-[1px] border-[rgba(223,223,223,0.1)] inset-shadow-gray-500 inset-shadow-sm text-center w-48 rounded-2xl h-14 relative text-white text-xl font-semibold group hover:shadow-[0_20px_50px_rgba(255,_255,_255,_0.2)] duration-700 ease-out"
        type="button"
        href="mailto:rada07zavadil@gmail.com"
      >
        <div
          className="bg-black border-[1px] border-[rgba(223,223,223,0.1)] inset-shadow-white inset-shadow-xs rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500"
        >

          <Image src={Star} alt='Stars' quality={100} className='' width={35}/>

        </div>
        <p className="translate-x-2 pt-3">Send</p>
      </Link>

    </main>
  )
}