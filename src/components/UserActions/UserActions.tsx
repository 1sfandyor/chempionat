'use client'
import Image from 'next/image';
import { CategorySport } from '../CategorySport/CategorySport';
import { UserExtraAction } from '../UserExtraAction/UserExtraAction';
import { useRouter } from 'next/navigation';
import { UserCard } from '../UserCard/UserCard';

export const UserActions = () => {

  const router = useRouter();

  return (
    <div className='w-[393px] flex flex-col h-full'>
      
      <UserCard isUser={true} 
                img='/avatar.png'
                nickname='A.Janizakov'
                name='Abbos Janizakov'
                chatIcon={'/chat.svg'}
                notificationCount={3}
                energy_icon={'/thunder.svg'}
                energy={54}
                health_icon={'/breath.svg'}
                health_percentage='32%' />
                
      <CategorySport/>
      
      <UserExtraAction nickname={'A.Janizakov'}/>
    </div>
  )
}
