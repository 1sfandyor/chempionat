'use client'
import { Actions } from "@/components/Actions/Actions";
import AllScores from "@/components/AllScores/AllScores";
import { UserProfile } from "@/components/Profile/Profile";


const AllScoresPage = () => {


  return (
    <div className="w-full overflow-y-hidden text-black flex h-screen">
      <Actions /> 
      <div className='w-1/2 overflow-y-hidden text-black'>
        <div className='pt-[19px] w-[540px] px-6 border-x-[1px] overflow-scroll border-x-border h-full'>
        <AllScores/>
        </div>
      </div>
    </div>
  )
}

export default AllScoresPage;