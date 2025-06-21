import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
        <div className='flex justify-between'>
          
            <ul className="flex">
                <li>&copy;RADIMZAVADIL</li>
                <li>ALL RIGHTS RESERVED</li>
            </ul>
            <ul className="flex">
                <Link href='mailto:radimzavadil15@gmail.com?subject=Inquiry&body=Write message here ...'>CONTACT</Link>
                <li>TERMS</li>
                <li>PRIVACY</li>
            </ul>
          </div>
          
    </footer>
  )
}
