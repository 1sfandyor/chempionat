import { Actions } from "@/components/Actions/Actions"
import VenuesDetail from "@/components/VenuesDetail/VenuesDetail";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
const Venues = () => {
  return (
    <div className="w-full overflow-y-hidden text-black flex h-screen">
      <Actions /> 
      <div className='w-1/2 overflow-y-hidden text-black'>
        <div className='pt-[19px] w-[540px] px-6 border-x-[1px] overflow-scroll border-x-border h-full'>
          <VenuesDetail name='Mini football stadion'
                        location='М.Улугбекский район. ул.Темур Малик'
                        work_time="24/7"
                        price="60 000 сум"
                        phone="90 123-45-67"
                        gallery={['/Venues/mini_football_stadion_1.png', '/Venues/mini_football_stadion_2.png', "/Venues/mini_football_stadion_3.png", '/Venues/mini_football_stadion_4.png']}
                        description="Хотите жить долго и качественно? Включите спорт в свою жизнь! Научные исследования доказывают, что регулярные физические нагрузки способствуют не только укреплению мышц и сердца, но и улучшению качества жизни в целом."
                        features={[
                                    "✅ Здоровое сердце: Регулярные физические упражнения снижают риск сердечно-сосудистых заболеваний, укрепляют сердечную мышцу и улучшают кровообращение.", 
                                    "✅ Мозговая активность: Спорт стимулирует мозговую деятельность, улучшает память, концентрацию внимания и когнитивные функции.",
                                    "✅ Качество сна: Регулярные тренировки способствуют глубокому и качественному сну, что важно для восстановления организма и общего самочувствия."
                                  ]}
                        />
        </div>
      </div>
    </div>
  )
}

export default Venues;