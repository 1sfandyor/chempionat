'use client'
import { VenuesType } from '@/interfaces/venues.interface'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { FC } from 'react'
import BookingCard from '../BookingCard/BookingCard'

const VenuesDetail: FC<VenuesType> = (props) => {
  const router = useRouter()

  const HandleRoute = () => {
    router.back();
  }

  return (
    <div className=''>
      <div onClick={HandleRoute}  className='flex item-center cursor-pointer mb-6'>
        <FontAwesomeIcon className='mr-5 self-center h-full' icon={faAngleLeft} fontSize={16} width={16} height={16}/>
        <h2 className='text-black text-[17px] font-bold leading-[20px]'>{props.name}</h2>
      </div>
      <div className='px-[35px]'>
      
      <BookingCard name={props.name}/>

        <div className='grid grid-cols-2  gap-1 mb-[22px]'>
          {
            props?.gallery?.map((img,i) => (<Image className='rounded-[7px] w-[210px] h-[126px]' key={i} src={img} alt='' width={210} height={126}/>))
          }
        </div>
        <div>
          <h2 className='text-black text-[17px] font-bold leading-[20px] mb-2.5'>{props.name}️‍♀️🌿</h2>
          <div className='flex flex-col'>
            <p className='mb-8'>{props.description}</p>

            <ul className='flex flex-col'>
            {
              props.features.map((item,i) => (
                <li className='' key={i}>{item}</li>
              ))
            }
          </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default VenuesDetail