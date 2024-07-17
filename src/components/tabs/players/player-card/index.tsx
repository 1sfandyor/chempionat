import Image from 'next/image'
import React from 'react'
import avatar from '../../../../../public/avatar/avatar.png'
import lightning from '../../../../../public/icons/lightning.svg'
import valleyBall from '../../../../../public/emojis/valleyball.svg'
import tennis from '../../../../../public/emojis/tennis.svg'
import ball from '../../../../../public/emojis/ball.svg'

const PlayerCard = () => {
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
            @cyber_crush
          </p>

          {/* Win counts */}
          <div className='flex gap-[7px]'>
            
            {/* valleyBall */}
            <div className='flex gap-[5px] items-center'>
              
              {/* valleyBall Icon */}
              <div className='w-[19px]'>
                <Image className='w-full' src={valleyBall} alt='tenns' />
              </div>

              {/* Counts */}
              <p className='text-[#242424b3]'>278</p>
            </div>

            {/* Football */}
            <div className='flex gap-[5px] items-center'>
              
              {/* Football Icon */}
              <div className='w-[19px]'>
                <Image className='w-full' src={ball} alt='volleyball' />
              </div>

              {/* Counts */}
              <p className='text-[#242424b3]'>278</p>
            </div>

            {/* Table Tennis */}
            <div className='flex gap-[5px] items-center'>
              
              {/* Table Tennis Icon */}
              <div className='w-[19px]'>
                <Image className='w-full' src={tennis} alt='table tennis' />
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
          <div className='w-[19px]'>
            <Image width={19} className='w-full' src={lightning} alt='lightning' />
          </div>
          <p className='text-black text-[0.96rem] leading-[normal]'>54</p>
        </div>

        {/* suggest */}
        <p className='text-black font-[500] leading-normal text-[0.96rem]'>suggest</p>
      </div>
    </div>
  )
}

export default PlayerCard