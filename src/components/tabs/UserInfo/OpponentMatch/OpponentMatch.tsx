import { UserCard } from "@/components/UserCard/UserCard"
import { OpponentMatchs } from "@/config/constants/Opponents";

const OpponentMatch = () => {
  return (
    <section className='flex flex-col gap-[30px] h-[100vh] overflow-auto pb-[100px]'>
      {
        OpponentMatchs.map(item => (
          <UserCard isOpponent={true} 
                    key={item.id}
                    name={item.opponent_1_name}
                    opponent_img={item.opponent_img}
                    opponent_name={item.opponent_2_name}
                    energy_icon={item.energy_icon}
                    energy={item.energy}
                    opponent_energy={item.opponent_energy}
                    location={item.matchLoc}
                    start_date={item.match_date}
                    time={item.match_start_time}
                    sport_icon={item.match_type}
                    />
        ))
      }
    </section>
  )
}

export default OpponentMatch;