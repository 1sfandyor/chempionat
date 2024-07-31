'use client'
import { AllScoreGames } from "@/config/constants/AllScoreGames"
import { AllScoresCard } from "../AllScoresCard/AllScoresCard"
import { Fragment } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons"
import { useRouter } from "next/navigation"


const AllScores = () => {

  const router = useRouter();

  return (
    <section className='flex flex-col gap-[30px] h-[100vh] overflow-auto pb-[100px] px-9'>
      
      <div className="flex items-center mb-6 cursor-pointer" onClick={() => router.back()}>
        <FontAwesomeIcon className="mr-[5px]" icon={faAngleLeft} width={20} height={20}/>
        <p className="text-[15px] font-medium mr-5">Назад</p>
        <p className="text-[15px] font-medium">Все счета за неделе</p>
      </div>
      {
        AllScoreGames.map((item, i) => (
          <Fragment key={i}>
            <p className="text-black/70 text-[11px] border-b border-b-border pb-[15px]">12.Июнь. 2024</p>
            {
              item.map((item, i) => (
                <>
                  <div className="[&:nth-child(5n)]:mb-[30px]" key={i}>
                    <AllScoresCard key={i} 
                                opponent_1_score={item?.opponent_1_score}
                                opponent_1_image={item?.opponent_1_image}
                                opponent_1_nickname={item?.opponent_1_nickname}
                                opponent_1_energy={item?.opponent_1_energy}
                                opponent_1_birthLoc={item?.opponent_1_birthLoc}
                                opponent_1_age={item?.opponent_1_age}
                                
                                opponent_2_score={item?.opponent_2_score}
                                opponent_2_image={item?.opponent_2_image}
                                opponent_2_nickname={item?.opponent_2_nickname}
                                opponent_2_energy={item?.opponent_2_energy}
                                opponent_2_birthLoc={item?.opponent_2_birthLoc}
                                opponent_2_age={item?.opponent_2_age}

                                sport_type={item?.sport_type}
                                location={item?.location}
                                start_date={item?.start_date}
                                end_date={item?.end_date}
                                energy_icon={item?.energy_icon}
                                gallery={item?.gallery}/>
                  </div>
                </>
              ))
            }
          </Fragment>
        ))
      }
    </section>
  )
}

export default AllScores