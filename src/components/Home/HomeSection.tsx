"use client"

import { useTab } from '@/hooks/useTab/useTab'
import React from 'react'
import { TableTabFilter } from '../tab-filter'
import { tab_items } from '@/config/constants/Navbar'
import Reels from '../tabs/reels'

export const HomeSection = () => {
  const {value, onValueChange} = useTab()

  return (
    <section className='w-1/2 pt-[19px] container border-s-[1px] border-s-slate-500 overflow-y-hidden'>
      <TableTabFilter tabs={tab_items} value={value} onTabChange={onValueChange} />

      {/* Contnet Wrapper */}
      <section className='px-[80px] w-[540px]'>
        {value === 'all' && <p>all</p>}

        {value === 'players' && <p>players</p>}

        {value === 'team' && <p>team</p>}

        {value === 'match' && <p>match</p>}

        {value === 'tournament' && <p>tournamet</p>}

        {value === 'venues' && <p>venues</p>}

        {value === 'reels' && <Reels />}
      </section>
    </section>
  )
}
