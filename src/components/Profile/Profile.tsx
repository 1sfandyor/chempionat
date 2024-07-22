'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation"
import { UserCard } from "../UserCard/UserCard";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

export const UserProfile = () => {

  const router = useRouter();

  return (
    <>
      <div className="flex items-center mb-6 cursor-pointer" onClick={() => router.back()}>
        <FontAwesomeIcon className="mr-[5px]" icon={faAngleLeft} width={20} height={20}/>
        <p className="text-[15px] font-medium">Профиль</p>
      </div>
      <UserCard isUserProfile={true}
                img="/janizakov.png"
                nickname="A.Janizakov"
                gear_icon="/gear.svg"
                birthLoc="Ташкент"
                age={27}
                userStat={[
                  {
                    icon: '/thunder.svg',
                    state: '54'
                  },
                  {
                    icon: '/breath.svg',
                    state: '68%'
                  },
                  {
                    icon: '/walk.svg',
                    state: '24.6 км'
                  },
                ]}/>
      
    </>
  )
}
