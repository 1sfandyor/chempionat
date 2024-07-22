import { UserCardType } from "@/interfaces/UserCard"
import { VenuesType } from "@/interfaces/venues.interface"
import Image from "next/image"
import { FC } from "react"

export const Venues_card: FC<VenuesType> = (props) => {
  return(
    <div>
      <Image src={props.sport_icon as string} alt="" width={20} height={20}/>
      <div className="flex flex-col">
        <div className="flex items-center mb-0.5">
          <h2 onClick={props.onClick} className="text-black text-[15px] font-semibold mr-2.5 cursor-pointer">{props.name}</h2>
          <span className="text-[13px] font-medium text-black/70">{props.book}</span>
        </div>
        <div className="flex items-center text-black text-[11px] font-normal">
          <p className="mr-2.5">{props.location}</p>
          <p className="mr-2.5">{props.work_time}</p>
          <p className="mr-2.5">{props.price}</p>
          <p className="mr-2.5">{props.phone}</p>
        </div>
        
        <div className="flex items-center ">
          {
            props?.gallery?.map((gallery, i) => (
              <div className="mr-[5px] w-[100px] h-[60px] cursor-pointer" key={i}>
                <Image src={gallery} alt="" width={100} height={60}/>
              </div>
            ))
          }
        </div>

      </div>
    </div>
  )
}