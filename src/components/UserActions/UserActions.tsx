'use client'
import { CategorySport } from '../CategorySport/CategorySport';
import { UserExtraAction } from '../UserExtraAction/UserExtraAction';
import { UserCard } from '../UserCard/UserCard';
interface UserActionsProps {
  setOpenCreateMeet: (open: boolean) => void;
  setOpenSearchBar: (open: boolean) => void;
}
export const UserActions: React.FC<UserActionsProps> = ({ setOpenCreateMeet, setOpenSearchBar }) => {

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
      <CategorySport setOpenCreateMeet={setOpenCreateMeet} setOpenSearchBar={setOpenSearchBar} />
      
      <UserExtraAction nickname={'A.Janizakov'}/>
    </div>
  )
}
