import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface UserCardType {
  className?: string,
  name?: string,
  nickname?: string,
  description?:string,
  postImg?: string,
  opponent_name?: string,
  opponent_team?: string,
  opponent_img?: string,
  postedAt?: string,
  lastOnline?: string,
  team_members?: number,
  energy?: number,
  opponent_energy?: number,
  health_percentage?: string,
  location?: string,
  // onClick?: () => void
  msg?: string,
  incomingMsgDate?: string,
  sendRequest?: string,
  prize?: string,
  start_date?: string,
  end_date?: string,
  schedule?: string,
  time?: string,
  msgTime?: string,
  chatIcon?: SVGElement | string,
  energy_icon?: SVGElement | string,
  health_icon?: SVGElement | string,
  team_icon?: SVGElement | string,
  sport_icon?: SVGElement | string,
  gear_icon?: string,
  count?: string,
  notificationCount?: number,
  bio?: string,
  birthLoc?: string,
  opponent_birthLog?: string,
  teamLoc?: string,
  age?: number,
  opponent_age?: number,
  date?: string,
  price?: string,
  opinion?: string,
  link?: string,
  img?: string
  playedGames?: string
  totalGames?: {
    game: string,
    count: number
  }[],
  tooltipData?:{
    game: string,
    energy_icon: SVGElement | string,
    energy: number
  }[],
  opponent_tooltipData?:{
    game: string,
    energy_icon: SVGElement | string,
    energy: number
  }[],
  status?: {
    comment: number,
    like: number,
  },
  userStat?: {
    icon: string,
    state: string
  }[]
  isUser?: boolean,
  isUserProfile?: boolean
  isReels?: boolean
  isIncoming?: boolean
  isPlayers?: boolean
  isTeam?: boolean
  isTournament?: boolean
  isOpponent?: boolean
  isMatch?: boolean

  }