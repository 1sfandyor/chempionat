"use client"

import { useTab } from '@/hooks/useTab/useTab';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import { TableTabFilter } from '../tab-filter';
import { tab_items } from '@/config/constants/Navbar';
import Reels from '../tabs/reels';
import Players from '../tabs/players';
import Teams from '../tabs/teams';

export const HomeSection = () => {
  const { value, onValueChange } = useTab();
  const searchParams = useSearchParams();
  const tabValue = searchParams.get('tab') || 'Лента'; 

  
  return (
    <section className='w-1/2 overflow-y-hidden'>
      <div className='pt-[19px] border-x-[1px] border-x-border'>
        <TableTabFilter tabs={tab_items} value={value} onTabChange={onValueChange} />

        {/* Content Wrapper */}
        <section className='px-[80px] w-[540px]'>
          {tabValue === 'Лента' && <Reels />}
          {tabValue === 'Игроки' && <Players />}
          {tabValue === 'Команда' && <Teams />}
          {tabValue === 'Мач' && <p>match</p>}
          {tabValue === 'Турнир' && <p>tournament</p>}
          {tabValue === 'Площадки' && <p>venues</p>}
        </section>
      </div>
    </section>
  );
};
