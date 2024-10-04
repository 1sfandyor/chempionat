import { Actions } from '@/components/Actions/Actions'
import { ChildProps } from '@/interfaces/types'
import React from 'react'

const HomeLayout = ({children}: ChildProps) => {
  return (
    <main className="w-full overflow-y-hidden text-black flex h-screen">
      <Actions />
      <section className='w-1/2 overflow-y-hidden'>
        {children}
      </section>
    </main>
  )
}

export default HomeLayout