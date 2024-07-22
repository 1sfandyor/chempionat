import { UserCard } from "@/components/UserCard/UserCard"
import { Matchs } from "@/config/constants/Match"

const Match = () => {
  return (
    <section className='flex flex-col gap-[30px] h-[100vh] overflow-auto pb-[100px]'>
      {
        Matchs.map(item => (
          <UserCard isMatch={true} 
                    key={item.id}
                    name={item.opponent_1_name}
                    img={item.opponent_1}
                    age={item.opponent_1_age}
                    birthLoc={item.opponent_1_birthLoc}
                    tooltipData={item.opponent_1_games}
                    opponent_name={item.opponent_2_name}
                    opponent_img={item.opponent_2}
                    opponent_age={item.opponent_2_age}
                    opponent_birthLog={item.opponent_2_birthLoc}
                    opponent_tooltipData={item.opponent_2_games}
                    energy_icon={item.energy_icon}
                    energy={item.energy}
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

export default Match;