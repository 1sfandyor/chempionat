import { ScoreCard } from "@/components/ScoreCard/ScoreCard"
import { UserMatchScore } from "@/config/constants/UserScore"

const UserScore = () => {
  return (
    <div>
      <p className="text-black text-[13px] leading-[15.51px] mb-5">Фильтр</p>
      {
        UserMatchScore.map(item => (
          <ScoreCard key={item.id} 
                      date={item.date}
                      month={item.month}
                      year={item.year}
                      short_date={item.short_date}
                      opponent_1_score={item.opponent_1_score}
                      opponent_2_score={item.opponent_2_score}
                      opponent_1_name={item.opponent_1_name}
                      opponent_1_energy={item.opponent_2_energy}
                      opponent_2_name={item.opponent_2_name}
                      opponent_2_energy={item.opponent_2_energy}
                      location={item.location}
                      energy_icon={item.energy_icon}
                      sport_icon={item.sport_type}/>
        ))
      }
    </div>
  )
}

export default UserScore