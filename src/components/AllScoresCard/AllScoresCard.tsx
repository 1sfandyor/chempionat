import { AllScores } from "@/interfaces/allScores.interface"
import Image from "next/image"
import { FC } from "react"

export const AllScoresCard: FC<AllScores> = (props) => {
  return (
    <div className="flex items-start">
      <div className="flex items-center mr-2.5">
        <p className="flex items-center text-black text-xl leading-normal font-semibold mr-2.5">
          <span>{props.opponent_1_score}</span>
          <span className="mx-[5px]">:</span>
          <span>{props.opponent_2_score}</span>
        </p>
        <Image className="mr-[5px]" src={props.sport_type as string} alt="" width={20} height={20}/> 
      </div>

      <div className="flex flex-col ">
        <div className="flex items-center justify-between">

          {/* OPPONENT 1 */}
          <div className="flex items-center">
            <Image className="mr-[5px]" src={props.opponent_1_image as string} alt="" width={32} height={32}/>
            <div className="flex flex-col">
              <div className="flex items-center text-[13px]">
                <p className="mr-1">@{props.opponent_1_nickname}</p>
                <div className="flex items-center">
                  <Image src={props.energy_icon as string} alt="" width={12} height={12}/>
                  <p>{props.opponent_1_energy}</p>
                </div>
              </div>
              <div className="flex items-center text-black/70 text-[11px] font-normal">
                  <span>{props.opponent_1_birthLoc}.</span>
                  <span>{props.opponent_1_age} лет</span>
              </div>
            </div>
          </div>

          <span className="mx-5 text-black/40 text-[13px] font-normal">vs</span>

          {/* OPPONENT 2 */}
          <div className="flex items-center">
            <Image className="mr-[5px]" src={props.opponent_1_image as string} alt="" width={32} height={32}/>
            <div className="flex flex-col">
              <div className="flex items-center text-[13px]">
                <p className="mr-1">@{props.opponent_1_nickname}</p>
                <div className="flex items-center">
                  <Image src={props.energy_icon as string} alt="" width={12} height={12}/>
                  <p>{props.opponent_1_energy}</p>
                </div>
              </div>
              <div className="flex items-center text-black/70 text-[11px] font-normal">
                  <span>{props.opponent_1_birthLoc}.</span>
                  <span>{props.opponent_1_age} лет</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <p className="text-[13px] text-black/70 leading-[18px] font-normal">{props.location}</p>
          <div className="flex items-center text-black/70">
            <p className="text-[11px] leading-[18px]">{props.start_date}</p> <span className="mx-2.5">-</span> <p className="text-[11px] leading-[18px]">{props.end_date}</p>
          </div>
        </div>
        <div className="flex items-center">
          {
            props.gallery?.map((img,i) => (
              <Image key={i} className="rounded-sm mr-1" src={img} alt="" width={100} height={60}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}
