'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation"
import { UserCard } from "../UserCard/UserCard";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { TableTabFilter } from "@/components/tab-filter";
import { profile_tab_items } from "@/config/constants/profile.tabs";
import { useTab } from "@/hooks/useTab/useTab";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { OpponentMatch, Rating, UserScore } from '@/components/tabs/UserInfo'
import Reels from "../tabs/reels";
import Players from "../tabs/players";
import Team from "../tabs/teams";



export const TeamProfile = () => {

  const router = useRouter();
  const { value, onValueChange } = useTab();
  const searchParams = useSearchParams();
  const tabValue = searchParams.get('tab') || 'matchs'; 

  useEffect(() => {
    if (value !== tabValue) {
      onValueChange(tabValue);
    }
  }, [tabValue, value, onValueChange]);
  return (
    <>
      <div className="flex items-center mb-6 cursor-pointer" onClick={() => router.back()}>
        <FontAwesomeIcon className="mr-[5px]" icon={faAngleLeft} width={20} height={20}/>
        <p className="text-[15px] font-medium">Профиль</p>
      </div>
      
      <div className="px-[25px] overflow-x-hidden">
        <UserCard isTeamProfile={true}
                  img="/teams/team_1.png"
                  nickname="simba"
                  gear_icon="/gear.svg"
                  sport_icon={'/football.png'}
                  teamLoc="Ташкент"
                  team_icon={'/team.svg'}
                  team_members={7}
                  energy={54}
                  energy_icon={'/thunder.svg'}
                  suggest="предлагать"
                  write="написать"
                  />

        <TableTabFilter className="px-0" tabs={profile_tab_items} value={value} onTabChange={onValueChange} />

        {/* Content Wrapper */}
        <section className='w-[540px]'>
          {tabValue === 'matchs' && <OpponentMatch/>}
          {tabValue === 'score' && <UserScore/>}
          {tabValue === 'reels' && <Reels/>}
          {tabValue === 'friends' && <Players/>}
          {tabValue === 'team' && <Team/>}
          {tabValue === 'rating' && <Rating/>}
        </section>
      </div>
      
    </>  )
}
