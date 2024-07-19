import Image from 'next/image'
import React from 'react'

const TeamCard = () => {
  return (
    <div className='w-full flex gap-[12px] items-center cursor-pointer'>
      
      {/* Profile photo wrapper */}
      <div className='relative'>
        <span className='absolute top-[2px] left-[2px] w-[5px] h-[5px] bg-green rounded-[50%]'></span>
        <div className='w-[60px] h-[60px]'>
          <Image width={60} height={60} className='w-full h-full rounded-[50%]' src='/avatar/team-avatar.png' alt='avatar' />
        </div>
      </div>

      {/* Profile Data */}
      <div className='flex gap-[12px] items-start'>
        <div className='flex flex-col gap-[5px]'>

            {/* User name */}
            <p className='text-black text-[15px] mr-[3.5px] font-[600] leading-normal'>
                @football_team
            </p>

            {/* Players Count */}
            <div className='flex items-center'>
                <Image className='mr-[5px] w-5 h-5' src="/icons/players.svg" alt='players icon' width={20} height={20} />
                <p className='text-black text-[0.813rem] fnot-[500] leading-[normal] mr-[5px] mb-[3px]'>7</p>
                <Image width={19} height={19} src={"/emojis/ball.svg"} alt='ball icon' />
            </div>

            {/* From && Date */}
            <p className='text-black/40 text-[11px] font-[400] leading-[normal]'>Тошкент</p>
        </div>

        {/* Lighting */}
        <div className='flex items-center'>
            <div className='flex items-center mr-[12px]'>
              <Image height={19} width={19} className='w-full' src={"/icons/lightning.svg"} alt='lightning' />
              <p className='text-black text-[0.96rem] leading-[normal]'>54</p>
            </div>
            <p className='text-black font-[500] leading-normal text-[0.96rem]'>предлагать</p>
        </div>

      </div>
    </div>
  )
}

export default TeamCard