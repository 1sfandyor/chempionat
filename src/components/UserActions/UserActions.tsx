import avatar from '@/../public/avatar.png';
import Image from 'next/image';
import msg from '@/../public/chat.svg'
import thunder from '@/../public/thunder.svg'
import breath from '@/../public/breath.svg';
import { CategorySport } from '../CategorySport/CategorySport';

export const UserActions = () => {
  return (
    <div className='w-[393px] flex flex-col'>
      <div className='flex items-center mb-[23px]'>
        <Image className='rounded-full mr-[11px]' src={avatar} alt="Avatar" width={40} height={40}/>
        <div className='flex flex-col mr-auto'>
          <p className='font-bold text-[15px] leading-normal'>@nickname</p>
          <p className='font-normal text-[13px] text-black/70 leading-normal'>Abbos Janizakov</p>
        </div>
        <div>
          <ul className='flex items-center'>
            <li className='mr-[15px]'>
              <button className='flex items-center'>
                <Image className='mr-1' src={msg} alt={"Notifications"} width={20} height={20}/>
                <span className='text-black font-medium text-[13px] leading-normal'>3</span>
              </button>
            </li>
            <li className='mr-[15px]'>
              <button className='flex items-center'>
                <Image className='mr-1' src={thunder} alt={"Power"} width={20} height={20}/>
                <span className='text-black font-medium text-[13px] leading-normal'>54</span>
              </button>
            </li>
            <li className='mr-[15px]'>
              <button className='flex items-center'>
                <Image className='mr-1' src={breath} alt={'Health'} width={20} height={20}/>
                <span className='text-black font-medium text-[13px] leading-normal'>32%</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <CategorySport/>
    </div>
  )
}
