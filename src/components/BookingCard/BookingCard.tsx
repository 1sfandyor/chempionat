'use client'
import { FC } from "react"
import { useRouter } from "next/navigation"
import { Button } from "../Button/Button"

const BookingCard: FC<{ name?: string }> = ({ name = 'name' }) => {
  const router = useRouter()

  const handleClick = () => {
    router.push(`${name}/chat`)
    console.log(name);
    
  }

  return (
    <div className="bg-grayBg mb-[17px] rounded-[7px]">
      <div className="p-[15px]">
        {/* Your content here */}
      </div>
      <Button button={
        {
          spanClasses: "text-black p-[12px] flex items-center justify-center text-[13px] font-medium", 
          className: "w-full border rounded-b-[7px] border-grayBorder" ,
          type: "submit" ,
          text: "забронировать",
          onClick: handleClick,
        }
      }/>
    </div>
  )
}

export default BookingCard;