import { ScoreType } from "@/interfaces/score.interface"
import Image from "next/image"
import { FC } from "react"

export const ScoreCard: FC<ScoreType> = (props) => {
  return (
    <div className="mb-10">
        <p className="pb-[12px] text-[11px] text-black/70 font-medium border-b border-b-border">{props.date}.{props.month}. {props.year}</p>
        
        <div className="w-full pt-5">
            <div className="flex items-start">
              <div className="flex items-center mr-5">
                <p className="text-xl leading-normal font-normal">{props.opponent_1_score}</p><span className="mx-[7px]">:</span><p className="text-xl leading-normal font-normal">{props.opponent_2_score}</p>
              </div>

              <div className="flex flex-col">
                <div className="flex item-center">
                  <div className="flex items-center text-[13px] font-medium">
                    <p className="">{props.opponent_1_name}</p>
                    <div className="flex items-center">
                      <Image src={props.energy_icon as string} alt="" width={12} height={12}/>
                      <span>{props.opponent_1_energy}</span>
                    </div>
                  </div>
                  
                  <span className="mx-[5px] text-[11px] text-black/40 self-center">vs</span> 

                  <div className="flex items-center text-[13px] font-medium">
                    <p className="">{props.opponent_2_name}</p>
                    <div className="flex items-center">
                      <Image src={props.energy_icon as string} alt="" width={12} height={12}/>
                      <span>{props.opponent_1_energy}</span>
                    </div>
                  </div>
                </div>

                <p className="text-[11px] texy-black font-normal my-[3px]">{props.location} | {props.short_date} {props.time}</p>
                <Image src={props.sport_icon as string} alt="" width={16} height={16}/>
              </div>
            </div>
        </div>
        
    </div>
  )
}
