import Image from 'next/image'
import React from 'react'
import { TPost } from '@/interfaces/post.interface'

const ReelsCard = ({profile_photo, user_name, recently, posted_date, description, post, stats}: TPost) => {
  return (
    <div className='w-full pb-[30px] border-b-[1px] border-solid border-primaryBorder'>
      
      <div className='flex justify-between items-start mb-[14px]'>

        {/* User profile data */}
        <div className='flex items-center gap-[5px]'>

          {/* Avatar */}
          <div className='w-[40px] h-[40px]'>
            <Image width={40} height={40} className='w-full h-full object-cover object-center' src={profile_photo} alt='' />
          </div>

          <div className='flex flex-col'>
            {/* User name */}
            <h3 className='text-black font-[600] leading-normal text-[0.938rem]'>{user_name}</h3>
            {/* Date */}
            <span className='text-black text-[0.813rem] font-normal leading-normal'>{recently}</span>
          </div>  
        </div>

        {/* Date */}
        <div>
          <span className='text-black font-[400] text-[0.813rem] leading-[normal]'>{posted_date}</span>
        </div>
      </div>

      {/* Description */}
      <p className='text-black text-[0.813rem] font-[400] leading-[18px] mb-[10px]'>
        {description}
      </p>

      {/* Post wrapper */}
      <div className='w-full h-[456px] relative'>

        {/* Post */}
        <div className='w-full h-full bg-black'>
          <Image width={0} sizes='auto' height={456} className='w-full h-full object-contain' src={post} alt='post' />
        </div>

        {/* Functions */}
        <div className='absolute flex flex-col gap-[7px] z-[999] bottom-[10px] right-[10px]'>

          {/* Coment */}
          <div className=''>

            <div className='flex justify-center items-center w-[32px] h-[32px] bg-primaryBg p-[8px] rounded-[50%] mb-[2px]'>
              <div>
                <Image width={40} height={40} src="/icons/coment.svg" alt='coment' />
              </div>
            </div>

            <p className='text-white text-[0.688rem] font[600] leading-[normal] text-center'>{stats.coment}</p>
          </div>

          {/* like */}
          <div>
            <div className='flex justify-center items-center w-[32px] h-[32px] bg-primaryBg p-[8px] rounded-[50%] mb-[2px]'>
              <div>
                <Image width={40} height={40} src="/icons/like.svg" alt='like' />
              </div>
            </div>

            <p className='text-white text-[0.688rem] font[600] leading-[normal] text-center'>{stats.like}</p>
          </div>

          {/* edit */}
          <div className='mb-[18px]'>
            <div className='flex justify-center items-center w-[32px] h-[32px] bg-primaryBg p-[8px] rounded-[50%]'>
              <div>
                <Image width={40} height={40} src="/icons/edit.svg" alt='edit' />
              </div>
            </div>
          </div>

          {/* Mute */}
          <div>
            <div className='flex justify-center items-center w-[32px] h-[32px] bg-primaryBg p-[8px] rounded-[50%]'>
              <div>
                <Image width={40} height={40} src="/icons/mute.svg" alt='mute' />
              </div>
            </div>
          </div>
        </div>

        {/*  */}
      </div>
    </div>
  )
}

export default ReelsCard