'use client'
import { Actions } from "@/components/Actions/Actions";
import { Messages } from "@/components/Messages/Messages";
const MessagePage = () => {


  return (
    <div className="w-full overflow-y-hidden text-black flex h-screen">
      <div className='w-1/2 overflow-y-hidden text-black'>
        <div className='pt-[19px] w-[540px] px-6 border-x-[1px] overflow-scroll border-x-border h-full'>
          <Messages/>
        </div>
      </div>
    </div>
  )
}

export default MessagePage;