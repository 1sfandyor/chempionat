import React from 'react'
import { TPost } from '@/interfaces/post.interface'
import { UserCard } from '@/components/UserCard/UserCard'
import Image from 'next/image'

const ReelsCard = ({profile_photo, user_name, recently, posted_date, description, post_img, stats}: TPost) => {
  return (
    <div className='w-full pb-[30px] border-b-[1px] border-solid border-primaryBorder'>
      <div className='flex justify-between items-start mb-[14px]'>
        {/* User profile data */}
        <UserCard isReels={true} img={profile_photo} name={user_name} lastOnline={recently} status={stats} postedAt={posted_date}/>
      </div>

      {/* Description */}
      <p className='text-[13px] leading-[18px] mb-2.5'>{description}</p>
      {/* Post wrapper */}
      <div className='w-full h-[456px] relative'>
        {/* Post */}
        <div className='w-full h-full bg-black'>
          <Image width={0} sizes='auto' height={456} className='w-full h-full object-contain' src={post_img} alt='post' />
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

            <p className='text-white text-[0.688rem] font[600] leading-[normal] text-center'>{stats?.comment}</p>
          </div>

          {/* like */}
          <div>
            <div className='flex justify-center items-center w-[32px] h-[32px] bg-primaryBg p-[8px] rounded-[50%] mb-[2px]'>
              <div>
                <Image width={40} height={40} src="/icons/like.svg" alt='like' />
              </div>
            </div>

            <p className='text-white text-[0.688rem] font[600] leading-[normal] text-center'>{stats?.like}</p>
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