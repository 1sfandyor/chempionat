'use client'
import { MessageChats } from "@/config/constants/messages"
import { UserCard } from "../UserCard/UserCard"
import { useRouter } from "next/navigation"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft, faSearch } from "@fortawesome/free-solid-svg-icons"

export const Messages = () => {

  const router = useRouter()
  return (
    <div>
      <div className='flex item-center cursor-pointer mb-6'>
        <FontAwesomeIcon className='mr-5 self-center h-full cursor-pointer ' onClick={() => router.back()}   icon={faAngleLeft} fontSize={16} width={16} height={16}/>
        
        <div className="flex items-center">
          <FontAwesomeIcon className="mr-2.5" icon={faSearch} width={16} height={16} />
          <span className='text-black text-[15px] font-medium leading-normal'>Chat</span>
        </div>
      </div>
      {
        MessageChats.map((item,i) => (
          <UserCard key={i} isIncoming={true}
                            notificationCount={item.msg_count}
                            img={item.sender_img}
                            name={item.sender_nickname}
                            energy_icon={item.energy_icon}
                            energy={item.energy}
                            msg={item.msg}
                            incomingMsgDate={item.time}
                            
                            />
        ))
      }
    </div>
  )
}
