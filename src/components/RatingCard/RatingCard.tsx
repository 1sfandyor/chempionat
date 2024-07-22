import { UserRatingType } from "@/interfaces/rating.interface"
import Image from "next/image";
import { FC } from "react";

export const RatingCard: FC<UserRatingType> = (props) => {
  return (
    <div className="flex flex-col mb-[50px]">
      <div className="flex items-center mb-5">
        <Image className="mr-[5px] w-5 h-5" src={props.sport_icon as string} alt="" width={20} height={20}/>
        <p className="text-[13px] font-semibold">{props.sport_name}</p>
      </div>

      <div className="flex flex-wrap">
        {
          props.ratings?.map((item,i) => (
            <div className="flex items-center mr-[53px]" key={i}>
              <p className="text-[17px] font-normal mr-[7px]">{item.score}</p>
              <Image className=" mr-5" src={item.icon as string} alt="" width={16} height={16}/>
              <p className="text-[13px] font-medium">{item.name}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}
