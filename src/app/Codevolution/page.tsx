'use client';
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import React from 'react'

const Codevolutin = () => {

  const path = usePathname();
  
  return (
    <div className='w-full h-screen flex items-center justify-center bg-zinc-700 text-white'>
      <h1 className='text-2xl font-bold'>
      <ol>
        <li className='hover:text-sky-300 animation duration-500'>
          <Link href={`${path}/Blog`}>Blog page 1</Link>
        </li>
      </ol>
    </h1>
    </div>
  )
}

export default Codevolutin