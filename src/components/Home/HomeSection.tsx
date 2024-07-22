"use client"

import { useTab } from '@/hooks/useTab/useTab';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import { TableTabFilter } from '../tab-filter';
import { tab_items } from '@/config/constants/Navbar';
import Reels from '../tabs/reels';
import Players from '../tabs/players';
import Teams from '../tabs/teams';
import { Suspense } from 'react'
import Match from '../tabs/Match';
import Tournament from '../tabs/Tournament';
import Venues from '../tabs/Venues';


export const HomeSection: React.FC = () => {
  const { value, onValueChange } = useTab();
  const searchParams = useSearchParams();
  const tabValue = searchParams.get('tab') || 'Лента'; 

  const gameCount = [
    {
      game: 'football.svg',
      energy_icon: 'thunder.svg',
      energy: 22
    },
    {
      game: '/tennis.png',
      energy_icon: 'thunder.svg',
      energy: 54
    }
  ]

  return (
    <section className='w-1/2 overflow-y-hidden'>
      <div className='pt-[19px] w-[540px] border-x-[1px] border-x-border h-full'>
        <TableTabFilter search={true} tabs={tab_items} value={value} onTabChange={onValueChange} />

        {/* Content Wrapper */}
        <section className='px-[80px] w-[540px]'>
          {tabValue === 'Лента' && <Reels />}
          {tabValue === 'Игроки' && <Players />}
          {tabValue === 'Команда' && <Teams />}
          {tabValue === 'Мач' && <Match/> }
          {tabValue === 'Турнир' && <Tournament/> }
          {tabValue === 'Площадки' && <Venues/>}
        </section>
      </div>
    </section>
  );
};

export function HomeSectionWrapper() {
  return (
    <Suspense>
      <HomeSection />
    </Suspense>
  )
}