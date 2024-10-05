'use client'
import { Actions } from "@/components/Actions/Actions";
import Comment from "@/components/Comment/Comment";
import Reels from "@/components/tabs/reels";
import ReelsCard from "@/components/tabs/reels/reels-card";


const CommentPage = () => {


  return (
    <div className="w-full overflow-y-hidden text-black flex h-screen">
      <div className='w-1/2 overflow-y-hidden text-black'>
        <div className='pt-[19px] w-[540px] px-6 border-x-[1px] overflow-scroll border-x-border h-full'>
          <Comment />
        </div>
      </div>
    </div>
  )
}

export default CommentPage;