"use client"
import { UserCardType } from "@/interfaces/UserCard"
import Image from "next/image"
import { useRouter } from "next/navigation"
import React, { FC } from "react"

export const UserCard: FC<UserCardType> = (props) => {
  const router = useRouter();

  // User
  const isUser = () => (
    <div className='flex items-center mb-[23px]'>
      <div className="flex items-center mr-10 cursor-pointer" onClick={() => router.push(`/profile/@${props.nickname}`)}>
        <Image className='rounded-full mr-[11px]' src='/avatar.png' alt="Avatar" width={40} height={40}/>
        <div className='flex flex-col mr-auto cursor-pointer'>
          <p className='font-bold text-[15px] leading-normal hover:text-purple '>@{props.nickname}</p>
          <p className='font-normal text-[13px] text-black'>{props.name}</p> 
        </div>
      </div>
      <div>
        <ul className='flex items-center'>
          <li className='mr-[15px]'>
            <button className='flex items-center' onClick={() => router.push('/messages')}>
              <Image className='mr-1' src={props.chatIcon as string} alt={"Notifications"} width={20} height={20}/>
              <span className='text-black font-medium text-[13px] leading-normal'>{props.notificationCount}</span>
            </button>
          </li>
          <li className='mr-[15px]'>
            <button className='flex items-center'>
              <Image src={props.energy_icon as string} className='mr-1' alt={"Power"} width={20} height={20}/>
              <span className='text-black font-medium text-[13px] leading-normal'>{props.energy}</span>
            </button>
          </li>
          <li className='mr-[15px]'>
            <button className='flex items-center'>
              <Image src={props.health_icon as string} className='mr-1' alt={'Health'} width={20} height={20}/>
              <span className='text-black font-medium text-[13px] leading-normal'>{props.health_percentage}</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  )

  // UserProfile
  const isUserProfile = () => (
    <div className="flex items-center mb-[25px]">
      <Image className="rounded-full mr-[16px]" src={props.img as string} alt="User avatar" width={80} height={80}/>
      <div className="flex flex-col">
        <div className="flex items-center mb-1">
          <p className="text-[17px] text-black font-semibold mr-4">@{props.nickname}</p>
          <Image className="cursor-pointer" onClick={() => router.push(`/setting`)} src={props.gear_icon as string} alt="" width={20} height={20}/>
        </div>
        <p className="flex items-center text-[13px] text-black font-normal mb-[9px]">
          <span>{props.birthLoc}.</span>
          <span>{props.age} лет.</span>
        </p>
        <div className="flex items-center">
          {
            props.userStat?.map((item,i) => (
              <p className="flex items-center text-black text-[13px] leading-none font-medium mr-2.5" key={i}>
                <Image src={item.icon as string} alt="" width={20} height={20}/>
                <span>{item.state}</span>
              </p>
            ))
          }
        </div>
      </div>
    </div>
  )

    // UserProfile
    const isMemberProfile = () => (
      <div className="flex items-center mb-[25px]">
        <Image className="rounded-full mr-[16px]" src={props.img as string} alt="User avatar" width={80} height={80}/>
        <div className="flex flex-col">
          <div className="flex items-center mb-1">
            <p className="text-[17px] text-black font-semibold mr-4">@{props.nickname}</p>


          </div>
          <p className="flex items-center text-[13px] text-black font-normal mb-[9px]">
            <span>{props.birthLoc}.</span>
            <span>{props.age} лет.</span>
          </p>
          <div className="flex items-center">
            {
              props.userStat?.map((item,i) => (
                <p className="flex items-center text-black text-[13px] leading-none font-medium mr-2.5" key={i}>
                  <Image src={item.icon as string} alt="" width={20} height={20}/>
                  <span>{item.state}</span>
                </p>
              ))
            }
          </div>
        </div>
      </div>
    )

  // Team Profile
  const isTeamProfile = () => (
    <div className="flex  mb-[14px] items-center w-full">
        <div className="flex relative mr-2.5 ">
          <Image className="flex min-w-[60px] min-h-[60px] shrink-0" src={`${props.img}`} alt="" width={60} height={60}/>
        </div>

        <div className="flex flex-col text-black mr-[17px]">
          <p className="text-[15px] font-semibold leading-normal mr-2.5">@{props.nickname}</p>

          <div className="flex items-center mb-[3px]">
            <span className="flex items-center mr-2.5">
              <Image className="w-[16px] h-[16px] mr-[5px]" src={props.sport_icon as string} alt="" width={16} height={16}>{}</Image>
              <Image className="w-[20px] h-[20px]" src={props.team_icon as string} alt="" width={20} height={20} />
              <span className="text-[13px] font-medium">{props.team_members}</span>
            </span>
            <div className="flex items-center mr-0.5">
              <Image src={props.energy_icon as string} alt="" width={16} height={16}/>
              <p className="text-[13px] font-semibold leading-normal ">{props.energy}</p>
            </div>
          </div>

          <p className="flex items-center text-black/40 text-[11px] font-normal leading-[13px]">{props.teamLoc}</p>
        </div>

        <div className="flex items-center self-start">
          <button className="text-[13px] bg-gray font-medium py-[3px] px-2.5 rounded-[5px] mr-[5px]">{props.write}</button>
          <button className="text-[13px] bg-gray font-medium py-[3px] px-2.5 rounded-[5px]">{props.suggest}</button>
        </div>
      </div>
  )

  // Reels
  const isReels = () => (
    <div className="flex w-full">
      <Image className="cursor-pointer hover:opacity-80 acritve:opacity-60 w-10 h-10 mr-2.5" onClick={() => router.push(`memeber-profile/${props.name}`)} src={`${props.img}`} alt="" width={40} height={40}/>
      <div className="flex flex-col w-full text-black">
        <div className="flex w-full items-center justify-between">
          <p className="text-[15px] font-semibold leading-normal cursor-pointer hover:opacity-80 active:opacity-60 hover:text-purple" onClick={() => router.push(`member-profile/@${props.name}`)}>{props.name}</p>
          <p className="text-[13px] font-normal leading-normal text-nowrap pointer-events-none">{props.postedAt}</p>
        </div>
        <p className="text-[13px] font-normal pointer-events-none	">{props.lastOnline}</p>
      </div>
    </div>
)

  // IncomeMsg
  const isIncomeMsg = () => (
      <div className="flex  mb-[14px] items-start w-full">
        <div className="flex relative mr-2.5 before:relative">
          <span className="text-[white] text-[10px] flex items-center justify-center mr-2.5 font-medium absolute top-[5px] left-0 z-50 content-[1] w-4 h-4 rounded-full bg-black before:absolute before:top-0 before:left-0 before:-translate-y-full before:w-[5px] before:h-[5px] before:rounded-full before:bg-green before:bg-no-repeat ">{props.notificationCount}</span>
          <Image className="flex min-w-[50px] min-h-[50px] shrink-0" src={`${props.img}`} alt="" width={50} height={50}/>
        </div>
        <div className="flex flex-col w-full text-black mr-[17px]">
          <div className="flex w-full items-center mb-[5px]">
            <p className="text-[15px] font-semibold leading-normal mr-2.5 hover:text-purple cursor-pointer">@{props.name}</p>
            <div className="flex items-center">
              <Image src={props.energy_icon as string} alt="" width={16} height={16}/>
              <p className="text-[13px] font-semibold leading-normal ">{props.energy}</p>
            </div>
          </div>
          <div className="flex">
            <p className="text-[13px] font-normal leading-normal truncate grow">{props.msg}</p>
            <p className="text-[13px] font-normal leading-normal self-end">{props.incomingMsgDate}</p>
          </div>
        </div>
      </div>
  ) 

  // Players
  const isPlayers = () => (
    <div className="flex  mb-[14px] items-center w-full">
        <div className="flex relative mr-2.5 ">
          <span className="absolute top-[5px] left-0 -translate-y-full w-[5px] h-[5px] rounded-full bg-green bg-no-repeat "/>
          <Image className="flex min-w-[60px] min-h-[60px] shrink-0" src={`${props.img}`} alt="" width={60} height={60}/>
        </div>

        <div className="flex flex-col w-full text-black mr-[17px]">
          <div className="flex w-full items-center mb-[5px]">
            <p className="text-[15px] font-semibold leading-normal mr-2.5 cursor-pointer hover:text-purple">@{props.name}</p>
            <div className="flex items-center mr-0.5">
              <Image src={props.energy_icon as string} alt="" width={16} height={16}/>
              <p className="text-[13px] font-semibold leading-normal ">{props.energy}</p>
            </div>
            <button className="px-[11px] py-[4.5px] rounded-full text-[11px] font-medium">{props.sendRequest}</button>
          </div>

          <div className="flex items-center mb-[5px]">
          {
            props.totalGames?.map((info, index) => (
                <p className="flex items-center text-black/70 text-[11px] leading-none font-normal mr-[7px]" key={index}>
                  <Image src={info.game} alt="" width={18} height={18}/>
                  <span>{info.count}</span>
                </p>
              ))
          }
          </div>
          <p className="flex items-center text-black/40 text-[11px] font-normal leading-normal">{props.birthLoc}. {props.age} лет</p>
        
        </div>

      </div>
  )

  // TEAM
  const isTeam = () => (
    <div className="flex  mb-[14px] items-center w-full">
        <div className="flex relative mr-2.5">
          <span className="absolute top-[5px] left-0 -translate-y-full w-[5px] h-[5px] rounded-full bg-green bg-no-repeat "/>
          <Image className="flex min-w-[60px] min-h-[60px] shrink-0 cursor-pointer" src={`${props.img}`} alt="" width={60} height={60} onClick={() => router.push(`team/${props.name}`)} />
        </div>

        <div className="flex flex-col w-full text-black mr-[17px]">
          <div className="flex w-full items-center mb-[3px]">
            <p className="text-[15px] font-semibold leading-normal mr-2.5 cursor-pointer hover:text-purple" onClick={() => router.push(`team/${props.name}`)}>@{props.name}</p>
            <div className="flex items-center mr-0.5">
              <Image src={props.energy_icon as string} alt="" width={16} height={16}/>
              <p className="text-[13px] font-semibold leading-normal ">{props.energy}</p>
            </div>
            <button className="px-[11px] py-[4.5px] rounded-full text-[11px] font-medium">{props.sendRequest}</button>
          </div>

          <div className="flex items-center mb-[3px]">
            <span className="flex items-center mr-[5px]">
              <Image className="w-[20px] h-[20px]" src={props.team_icon as string} alt="" width={20} height={20} />
              <span className="text-[13px] font-medium">{props.team_members}</span>
            </span>
            <Image className="w-[16px] h-[16px]" src={props.sport_icon as string} alt="" width={16} height={16}>{}</Image>
          </div>

          <p className="flex items-center text-black/40 text-[11px] font-normal leading-[13px]">{props.teamLoc}</p>
        </div>
      </div>
  )

   // TOURNAMENT
  const isTournament = () => (
    <div className="flex  mb-[14px] items-start w-full">
      <Image className="flex min-w-[60px] min-h-[60px] shrink-0 mr-2.5" src={`${props.img}`} alt="" width={60} height={60}/>

        <div className="flex flex-col w-full text-black mr-[17px]">
          <div className="flex w-full items-center mb-[3px]">
            <p className="text-[13px] font-semibold leading-normal mr-[49px] hover:text-purple cursor-pointer">@{props.name}</p>
            <button className="px-[11px] py-[4.5px] rounded-full text-[11px] font-medium">{props.sendRequest}</button>
          </div>

          <div className="flex items-center mb-[3px] text-[11px] leading-[13px]">
            <p className="mr-2">{props.prize}</p>
            <span className="flex">{props.start_date} | {props.end_date} </span>
          </div>

          <div className="flex items-center mb-2.5">
            <span className="flex items-center mr-[5px]">
              <Image className="w-[16px] h-[16px]" src={props.team_icon as string} alt="" width={16} height={16} />
              <span className="text-[13px] font-medium leading-[16px]">{props.team_members}</span>
            </span>
            <Image className="w-[16px] h-[16px] mr-[9px]" src={props.sport_icon as string} alt="" width={16} height={16}>{}</Image>
            <p className="text-[11px]">{props.schedule}</p>
          </div>

          <p className="flex items-center text-black/70 text-[11px] font-normal leading-[16px]">{props.msg}</p>
        </div>
      </div>
  )

  // OPPONENT
  const isOpponent = () => (
    <div className="flex  mb-[14px] items-start w-full">
        <div className="flex items-center">
          <p className="text-[22px] flex items-center font-extrabold leading-0 mr-2.5">:</p>
          <Image className="flex min-w-[60px] min-h-[60px] shrink-0 mr-2.5" src={`${props.opponent_img}`} alt="" width={60} height={60}/>
        </div>
        
        <div className="flex flex-col w-full text-black mr-[17px]">

          <div className="flex w-full items-center mb-[3px]">
            {/*  */}
            <div className="flex items-center">
              <p className="text-[13px] font-medium leading-normal hover:text-purple cursor-pointer">@{props.name}</p>
              <div className="flex items-center">
                <Image src={props.energy_icon as string} alt="" width={16} height={16}/>
                <p className="text-[13px] font-medium leading-normal">{props.energy}</p>
              </div>
            </div>

            <span className="text-[11px] text-black/40 mx-[5px]">vs</span>

            {/*  */}
            <div className="flex items-center">
              <p className="text-[13px] font-medium leading-normal">@{props.opponent_name}</p>
              <div className="flex items-center">
                <Image src={props.energy_icon as string} alt="" width={16} height={16}/>
                <p className="text-[13px] font-medium leading-normal">{props.opponent_energy}</p>
              </div>
            </div>

          </div>

          <div className="flex items-center mb-[3px] text-[11px] leading-[13px]">
            <p className="mr-2">{props.location}</p>
            <span className="flex">{props.start_date} | {props.time} </span>
          </div>

          <Image className="w-[16px] h-[16px] mr-[9px]" src={props.sport_icon as string} alt="" width={16} height={16}>{}</Image>
        </div>
      </div>
  )

  // MATCH
  const isMatch = () => (
    <div className="flex  mb-[14px] items-start w-full">
        {/* OPPONENTS IMAGE */}
        <div className="flex items-center">
          {/* OPPONENT 1 IMAGE & TOOLTIP */}
          <div className="relative ">
            <Image className="flex avatar min-w-[60px] min-h-[60px] shrink-0" src={`${props.opponent_img}`} alt="" width={60} height={60}/>
            
            {/* OPPONENT 1 TOOLTIP */}
            <div className="user_tooltip bg-white z-50 w-[100px] absolute top-2/3 left-2/3 py-1.5 px-[9.5px] rounded-md">
              <span className="tooltip"></span>
              <p className="text-[13px] font-semibold">@{props.name}</p>
              <div className="flex items-center">
                {
                  props.tooltipData?.map((info, index) => (
                    <span className="text-black/70 flex text-[11px] leading-none font-normal mr-1" key={index}>
                      <Image  src={info.game} alt="" width={12} height={12} className="w-3"/>
                      <div className="flex item-center">
                        <Image src={`${info.energy_icon}`} alt="" width={12} height={12} className=""/>
                        <p>{info.energy}</p>
                      </div>
                    </span>
                  ))
                }
              </div>
              <div className="flex text-[11px] text-black/40">
                <p>{props.age} лет. </p>
                <p>{props.birthLoc}</p>
              </div>
            </div>
          </div>

          <p className="text-[22px] flex items-center font-extrabold leading-0 mx-2.5">:</p>

          {/* OPPONENT 2 IMAGE & TOOLTIP*/}
          <div className="relative">
            <Image className="flex avatar min-w-[60px] min-h-[60px] shrink-0 mr-2.5" src={`${props.img}`} alt="" width={60} height={60}/>
            
            {/* OPPONENT 2 TOOLTIP */}
            <div className="user_tooltip  bg-white z-50 w-[110px] absolute top-[45%] left-2/3 py-1.5 px-[9.5px] rounded-md">
              <span className="tooltip"></span>
              <p className="text-[13px] font-semibold">@{props.opponent_name}</p>
              <div className="flex items-center">
                {
                  props.opponent_tooltipData?.map((info, index) => (
                    <span className="text-black/70 flex text-[11px] leading-none font-normal mr-1" key={index}>
                      <Image  src={info.game} alt="" width={12} height={12} className="w-3"/>
                      <div className="flex item-center">
                        <Image src={`${info.energy_icon}`} alt="" width={12} height={12} className=""/>
                        <p>{info.energy}</p>
                      </div>
                    </span>
                  ))
                }
              </div>
              <div className="flex items-start text-[11px] text-black/40">
                <p className="flex">{props.opponent_age} лет. </p>
                <p>{props.opponent_birthLog}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* MATCH INFO */}
        <div className="flex flex-col w-full text-black mr-[17px]">
          <div className="flex w-full items-center mb-[3px]">

            {/* OPPONENT 1 INFO */}
            <div className="flex items-center">
              <p className="text-[13px] font-medium leading-normal hover:text-purple cursor-pointer">@{props.name}</p>
              <div className="flex items-center">
                <Image src={props.energy_icon as string} alt="" width={16} height={16}/>
                <p className="text-[13px] font-medium leading-normal">{props.energy}</p>
              </div>
            </div>

            <span className="text-[11px] text-black/40 mx-[5px]">vs</span>

            {/* OPPONENT 2 INFO */}
            <div className="flex items-center">
              <p className="text-[13px] font-medium leading-normal hover:text-purple cursor-pointer">@{props.opponent_name}</p>
              <div className="flex items-center">
                <Image src={props.energy_icon as string} alt="" width={16} height={16}/>
                <p className="text-[13px] font-medium leading-normal">{props.opponent_energy}</p>
              </div>
            </div>
          </div>
          

          {/* MATCH DATA & LOCATION */}
          <div className="flex items-center mb-[3px] text-[11px] leading-[13px]">
            <p className="flex items-center">
              <span className="">{props.location} | </span><span className="flex"> { props.start_date}. {props.time}</span>
            </p>
          </div>
          
          {/* GENERAL MATCH TYPE */}
          <Image className="w-[16px] h-[16px] mr-[9px]" src={props.sport_icon as string} alt="" width={16} height={16}>{}</Image>
        </div>
      </div>
  )

  return (
      props.isUser ? isUser() 
    : props.isUserProfile ? isUserProfile()
    : props.isMemberProfile ? isMemberProfile()
    : props.isReels ? isReels()
    : props.isIncoming ? isIncomeMsg()
    : props.isPlayers ? isPlayers()
    : props.isTeam ? isTeam()
    : props.isTeamProfile ? isTeamProfile()
    : props.isTournament ? isTournament()
    : props.isOpponent ? isOpponent()
    : props.isMatch ? isMatch()
    : <></>
  )
}
