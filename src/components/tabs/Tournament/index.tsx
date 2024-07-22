import { UserCard } from "@/components/UserCard/UserCard"
import { Tournaments } from "@/config/constants/Tournament";

const Tournament = () => {
  return (
    <section className='flex flex-col gap-[30px] h-[100vh] overflow-auto pb-[100px]'>
      {
        Tournaments.map(item => (
          <UserCard isTournament={true} 
                    key={item.id}
                    img={item.logo}
                    name={item.name}
                    sendRequest={item.sendReq}
                    prize={item.prize}
                    start_date={item.start_date}
                    end_date={item.end_date}
                    team_icon={item.teamIcon}
                    team_members={item.memebers}
                    sport_icon={item.sportType}
                    schedule={item.schedule}
                    msg={item.msg}
                    />
        ))
      }
    </section>
  )
}

export default Tournament;