import { UserCard } from "@/components/UserCard/UserCard"
import { Teams } from "@/config/constants/Teams"

const Team = () => {
  return (
    <section className='flex flex-col gap-[30px] h-[100vh] overflow-auto pb-[100px]'>
      {
        Teams.map(item => (
          <UserCard isTeam={true} 
                    key={item.id}
                    img={item.logo}
                    name={item.name}
                    energy_icon={item.energy_icon}
                    energy={item.energy}
                    sendRequest={item.sendReq}
                    team_icon={item.teamIcon}
                    team_members={item.memebers}
                    sport_icon={item.sportType}
                    />
        ))
      }
    </section>
  )
}

export default Team