import React from 'react'
import ReelsCard from './reels-card'
import { TPost } from '@/interfaces/post.interface'
import avatar from '@/assets/avatar/avatar.png'
import post from '@/assets/avatar/post.png'

const Reels = () => {
  const posts: TPost[] = [
    {
      profile_photo: avatar,
      user_name: 'Darkzone.esport',
      recently: '1 дн',
      posted_date: '7 дней назад',
      description: 'Каким был ваш самый захватывающим моментом в DARK ZONE ? Поделитесь своими игровыми историями 🦸🏻🔥',
      post: post,
      stats: {
        coment: 678,
        like: 1209,
      }
    },
    {
      profile_photo: avatar,
      user_name: 'Darkzone.esport',
      recently: '1 дн',
      posted_date: '7 дней назад',
      description: 'Каким был ваш самый захватывающим моментом в DARK ZONE ? Поделитесь своими игровыми историями 🦸🏻🔥',
      post: post,
      stats: {
        coment: 678,
        like: 1209,
      }
    },
    {
      profile_photo: avatar,
      user_name: 'Darkzone.esport',
      recently: '1 дн',
      posted_date: '7 дней назад',
      description: 'Каким был ваш самый захватывающим моментом в DARK ZONE ? Поделитесь своими игровыми историями 🦸🏻🔥',
      post: post,
      stats: {
        coment: 678,
        like: 1209,
      }
    },
    {
      profile_photo: avatar,
      user_name: 'Darkzone.esport',
      recently: '1 дн',
      posted_date: '7 дней назад',
      description: 'Каким был ваш самый захватывающим моментом в DARK ZONE ? Поделитесь своими игровыми историями 🦸🏻🔥',
      post: post,
      stats: {
        coment: 678,
        like: 1209,
      }
    },
    {
      profile_photo: avatar,
      user_name: 'Darkzone.esport',
      recently: '1 дн',
      posted_date: '7 дней назад',
      description: 'Каким был ваш самый захватывающим моментом в DARK ZONE ? Поделитесь своими игровыми историями 🦸🏻🔥',
      post: post,
      stats: {
        coment: 678,
        like: 1209,
      }
    },
  ];

  return (
    <section className='flex pb-[100px] flex-col gap-[30px] overflow-auto h-[100vh]'>
      {
        posts.map((item, index) => (
          <ReelsCard profile_photo={item.profile_photo} user_name={item.user_name} recently={item.recently} posted_date={item.posted_date} description={item.description} post={item.post} stats={item.stats}  />
        ))
      }
    </section>
  )
}

export default Reels