import { RatingCard } from "@/components/RatingCard/RatingCard"
import { UserRating } from "@/config/constants/Ratings"

const Rating = () => {
  return (
    <div className="flex flex-col">
      <p className="text-black text-[13px] leading-[15.51px] mb-5">Фильтр</p>
      {
        UserRating.map(item => (
          <RatingCard key={item.id}
                      sport_icon={item.sport_icon}
                      sport_name={item.sport_name}
                      ratings={item.ratings}
                      />
        ))
      }
    </div>
  )
}

export default Rating