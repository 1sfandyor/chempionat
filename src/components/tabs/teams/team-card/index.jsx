import Image from 'next/image'
import React from 'react'
import avatar from '../../../../../public/avatar/team-avatar.png'
import lightning from '../../../../../public/icons/lightning.svg'
import ball from '../../../../../public/emojis/ball.svg'
import players from '../../../../../public/icons/players.svg'

const TeamCard = () => {
  return (
    <div className='w-full flex gap-[12px] items-center cursor-pointer'>
      
      {/* Profile photo wrapper */}
      <div className='relative'>
        <span className='absolute top-[2px] left-[2px] w-[5px] h-[5px] bg-green rounded-[50%]'></span>
        <div className='w-[60px] h-[60px]'>
          <Image width={60} height={60} className='w-full h-full rounded-[50%]' src={avatar} alt='avatar' />
        </div>
      </div>

      {/* Profile Data */}
      <div className='flex gap-[12px] items-start'>
        <div className='flex flex-col gap-[5px]'>

            {/* User name */}
            <p className='text-black text-[0.0.938rem] font-[600] leading-normal'>
                @football_team
            </p>

            {/* Players Count */}
            <div className='flex items-center'>
                <div className='mr-[4px]'>
                    <Image src={players} alt='players icon' />
                </div>
                <p className='text-black text-[0.813rem] fnot-[500] leading-[normal] mr-[7px]'>7</p>
                <div>
                    <Image src={ball} alt='ball icon' />
                </div>
            </div>

            {/* From && Date */}
            <p className='text-black/40 text-[0.688rem] font-[400] leading-[normal]'>Тошкент</p>
        </div>

        {/* Lighting */}
        <div className='flex items-center '>
          <div className='w-[19px]'>
            <Image width={19} className='w-full' src={lightning} alt='lightning' />
          </div>
          <p className='text-black text-[0.96rem] leading-[normal]'>54</p>
        </div>

        {/* suggest */}
        <p className='text-black font-[500]  leading-normal text-[0.96rem]'>предлагать</p>
      </div>
    </div>
  )
}

export default TeamCard