'use client'
import { Actions } from '@/components/Actions/Actions';
import BookingCard from '@/components/BookingCard/BookingCard';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Chat = () => {

  const router = useRouter()

  return (
    <div className="w-full overflow-y-hidden text-black flex h-screen">
      <div className='w-1/2 overflow-y-hidden text-black'>
        <div className='pt-[19px] w-[540px] px-6 border-x-[1px] overflow-scroll border-x-border h-full'>
            <div className='flex items-start'>
              <FontAwesomeIcon onClick={() => router.back()} className='mt-1 mr-5 cursor-pointer' icon={faAngleLeft} width={16} height={16}/>
              <Image className='mr-2.5' src='/Venues/venue_avatar.png' alt='' width={40} height={40}/>
              <div className='flex flex-col'>
                <p className='text-black font-medium text-[15px] mb-[3px]'>Mini football stadion</p>
                <small className='text-black/40 text-[11px] font-medium'>Чат</small>
              </div>
            </div>

            <div className='flex flex-col h-full'>
              <div className='flex flex-col h-full'>
                <div className='flex items-center justify-between mb-2.5'>
                  <p className='text-black/70 text-[13px] font-normal'>Ваше заявка на бронирование стадиона отправлена</p>
                  <span className='text-orange bg-orange/20 rounded-[3px] py-0.5 px-[7px] text-[11px] font-normal'>ожидание</span>
                </div>

                <BookingCard/>

                <div className='flex flex-col pt-10 grow h-full'>
                  <div className='flex flex-col items-end justify-end w-[317px] self-end'>
                    <div className='flex flex-col mb-5 items-end text-end'>
                      <p className='text-black text-[15px] font-medium mb-[7px]'>Assalomu Alaykum! Oka yaxshimisiz?</p>
                      <small className='text-black/40 font-medium text-[11px]'>19:40</small>
                    </div>
                    
                    <div className='flex flex-col mb-[17px]  items-end text-end'>
                      <p className='text-black text-[15px] font-medium mb-[7px]'>Oka shu paytga bo’shmi stadion bza 2 ta komanda bormochidik</p>
                      <small className='text-black/40 font-medium text-[11px]'>19:40</small>
                    </div>
                  </div>

                  <div className='flex flex-col items-start w-[317px]'>
                    <div className='flex flex-col mb-5 items-start'>
                      <p className='text-black text-[15px] font-medium mb-[7px]'>Voalaykum Assalom!</p>
                      <small className='text-black/40 font-medium text-[11px]'>19:40</small>
                    </div>
                    
                    <div className='flex flex-col mb-[17px]  items-start'>
                      <p className='text-black text-[15px] font-medium mb-[7px]'>xmmm</p>
                      <small className='text-black/40 font-medium text-[11px]'>19:40</small>
                    </div>

                    <div className='flex flex-col mb-[17px]  items-start'>
                      <p className='text-black text-[15px] font-medium mb-[7px]'>soat 6 dan soat 9 gacha bo’sh oka 13 chi chisloda maqul kelsa belgilab tashavoring!</p>
                      <small className='text-black/40 font-medium text-[11px]'>19:40</small>
                    </div>
                  </div>
                </div>

                <div className='flex flex-col'>
                  <small className='text-black/40 font-medium text-[11px] mb-[8px]'>19:40</small>
                  <input className='w-full py-[11px] px-[16px] border border-[#ddd]/40 rounded-[4px]' type="text" placeholder='Habar yozing..' />
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
export default Chat;