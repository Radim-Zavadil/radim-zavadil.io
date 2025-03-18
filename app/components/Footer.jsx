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
                <Link href="/contact">CONTACT</Link>
                <li>TERMS</li>
                <li>PRIVACY</li>
            </ul>
          </div>
          
    </footer>
  )
}
