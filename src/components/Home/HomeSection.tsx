"use client"

import { useTab } from '@/hooks/useTab/useTab'
import React from 'react'
import { TableTabFilter } from '../tab-filter'
import { tab_items } from '@/config/constants/Navbar'
import Reels from '../tabs/reels'
import Players from '../tabs/players'
import Teams from '../tabs/teams'

export const HomeSection = () => {
  const {value, onValueChange} = useTab()

  return (
    <section className='w-1/2 overflow-y-hidden'>
      <div className='pt-[19px] border-x-[1px] border-x-border'>
      <TableTabFilter tabs={tab_items} value={value} onTabChange={onValueChange} />

      {/* Contnet Wrapper */}
      <section className='px-[80px] w-[540px]'>
        {value === 'all' && <Reels />}

        {value === 'players' && <Players />}

        {value === 'team' && <Teams />}

        {value === 'match' && <p>match</p>}

        {value === 'tournament' && <p>tournamet</p>}

        {value === 'venues' && <p>venues</p>}

        {value === 'reels' && <Reels />}
      </section>
      </div>
    </section>
  )
}
