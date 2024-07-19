import Image from 'next/image'
import React from 'react'

const PlayerCard = () => {
  return (
    <div className='w-full flex gap-[12px] items-center'>
      
      {/* Profile photo wrapper */}
      <div className='relative cursor-pointer'>
        <span className='absolute top-[2px] left-[2px] w-[5px] h-[5px] bg-green rounded-[50%]'></span>
        <div className='w-[60px] h-[60px]'>
          <Image width={60} height={60} className='w-full h-full rounded-[50%]' src="/avatar/avatar.png" alt='avatar' />
        </div>
      </div>

      {/* Profile Data */}
      <div className='flex gap-[12px] items-start cursor-pointer'>
        <div className='flex flex-col gap-[5px]'>

          {/* User name */}
          <p className='text-black text-[15px] font-[600] leading-normal'>
            @cyber_crush
          </p>

          {/* Win counts */}
          <div className='flex gap-[7px]'>
            
            {/* valleyBall */}
            <div className='flex gap-[5px] items-center'>
              
              {/* valleyBall Icon */}
              <div className='w-[19px]'>
                <Image className='w-full' width={19} height={19} src="/emojis/ball.svg" alt='football' />
              </div>

              {/* Counts */}
              <p className='text-[#242424b3]'>278</p>
            </div>

            {/* Football */}
            <div className='flex gap-[5px] items-center'>
              
              {/* Football Icon */}
              <div className='w-[19px]'>
                <Image className='w-full' width={19} height={19} src="/emojis/valleyball.svg" alt='volleyball' />
              </div>

              {/* Counts */}
              <p className='text-[#242424b3]'>278</p>
            </div>

            {/* Table Tennis */}
            <div className='flex gap-[5px] items-center'>
              
              {/* Table Tennis Icon */}
              <div className='w-[19px]'>
                <Image className='w-full' width={19} height={19} src="/emojis/tennis.svg" alt='table tennis' />
              </div>

              {/* Counts */}
              <p className='text-[#242424b3]'>278</p>
            </div>

          </div>

          {/* From && Date */}
          <p className='text-black/40 text-[0.688rem] font-[400] leading-[normal]'>Тошкент. 27 лет</p>
        </div>

        {/* Lighting */}
        <div className='flex items-center'>

          <div className='flex items-center mr-[12px]'>
            <Image width={19} height={19} className='w-[19px]' src="/icons/lightning.svg" alt='lightning' />
            <p className='text-black text-[15px] leading-[normal]'>54</p>
          </div>
        </div>

      </div>

      {/* suggest */}
      <p className='text-black font-[500] leading-[16px] text-[15px] self-start cursor-pointer'>suggest</p>
    </div>
  )
}

export default PlayerCard