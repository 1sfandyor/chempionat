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
        <form className="">
            <div className=" flex items-center">
                <div className="relative">
                  <input type="time" id="time" 
                          className="time-input max-w-16 mr-1 pl-[18px] bg-white border border-grayBorder text-black text-sm rounded-lg block w-full p-1.5" 
                          min="09:00" max="18:00" value="00:00" required/>
                </div>

                <div className="relative">
                  <input type="time" id="time" 
                          className=" max-w-16 mr-1 pl-[18px] bg-white border border-grayBorder text-black text-sm rounded-lg p-1.5" 
                          min="09:00" 
                          max="18:00"
                          value="00:00" 
                          required/>
                </div>

                <div className="relative mr-1">
                  <input type="date" id="time" 
                          className="time-input pl-[18px] w-[111px] bg-white border border-grayBorder text-black text-sm rounded-lg block p-1.5" 
                          required/>
                </div>

                  <span className="cursor-pointer pl-[18px] text-blue-400 bg-white border border-grayBorder text-[13px] rounded-lg p-1.5"                   >
                    Mini football stadion
                  </span>

            </div>
        </form>
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