'use client'
import { Actions } from "@/components/Actions/Actions";
import { UserProfile } from "@/components/Profile/Profile";
import { TeamProfile } from "@/components/TeamProfile/TeamProfile";


const Team = () => {


  return (
    <div className="w-full overflow-y-hidden text-black flex h-screen">
      <Actions /> 
      <div className='w-1/2 overflow-y-hidden text-black'>
        <div className='pt-[19px] w-[540px] px-6 border-x-[1px] overflow-scroll border-x-border h-full'>
        
          <TeamProfile/>
          
        </div>
      </div>
    </div>
  )
}

export default Team;