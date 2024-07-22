'use client'
import { Venues_card } from "@/components/Venues_card/Venues_card";
import { Venues_info } from "@/config/constants/Venues";
import { useRouter } from "next/navigation";

const Venues = () => {

  const rourter = useRouter()

  return (
    <section className='flex flex-col gap-[30px] h-[100vh] overflow-auto pb-[100px]'>
      {
        Venues_info.map(item => (
          <Venues_card isVenue={true} 
                    key={item.id}
                    sport_icon={item.sport_type}
                    name={item.name}
                    book={item.booking}
                    location={item.location}
                    work_time={item.work_time}
                    price={item.price}
                    phone={item.phone}
                    gallery={item.gallery}
                    onClick={() => rourter.push(`/venues/${item.name}`)}
                    />
        ))
      }
    </section>
  )
}

export default Venues;