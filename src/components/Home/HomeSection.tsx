'use client';

import { useTab } from '@/hooks/useTab/useTab';
import { useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';
import { TableTabFilter } from '../tab-filter';
import { tab_items } from '@/config/constants/Navbar';
import Reels from '../tabs/reels';
import Players from '../tabs/players';
import Teams from '../tabs/teams';
import { Suspense } from 'react';
import Match from '../tabs/Match';
import Tournament from '../tabs/Tournament';
import Venues from '../tabs/Venues';

export const HomeSection: React.FC = () => {
  const { value, onValueChange } = useTab();
  const searchParams = useSearchParams();
  const tabValue = searchParams.get('tab') || 'reels'; 

  useEffect(() => {
    if (value !== tabValue) {
      onValueChange(tabValue);
    }
  }, [tabValue, value, onValueChange]);

  return (
    <section className='w-1/2 overflow-y-hidden'>
      <div className='pt-[19px] w-[540px] border-x-[1px] border-x-border h-full'>
        <TableTabFilter search={true} tabs={tab_items} value={value} onTabChange={onValueChange} />

        {/* Content Wrapper */}
        <section className='px-[80px] w-[540px]'>
          {tabValue === 'reels' && <Reels />}
          {tabValue === 'players' && <Players />}
          {tabValue === 'team' && <Teams />}
          {tabValue === 'match' && <Match />}
          {tabValue === 'tournament' && <Tournament />}
          {tabValue === 'venues' && <Venues />}
        </section>
      </div>
    </section>
  );
};

export function HomeSectionWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeSection />
    </Suspense>
  );
}
