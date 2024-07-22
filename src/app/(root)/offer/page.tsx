'use client'
import { Actions } from '@/components/Actions/Actions';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/navigation';
import {v4 as uuidv4} from 'uuid';

const Offer = () => {
  const route = useRouter()

  const HandleRoute = () => {
    route.back()
  }

  const advantage = [
    {
      id: uuidv4(),
      text: 'Персонализированный подход: Наши опытные тренеры разработают для вас индивидуальную программу тренировок, учитывая ваши цели и физическую подготовку.'
    },
    {
      id: uuidv4(),
      text: 'Регулярные тренировки: Мы предлагаем разнообразные тренировки, включающие аэробные и силовые упражнения, йогу и функциональные тренировки.'
    },
    {
      id: uuidv4(),
      text: 'Контроль результатов: Систематическое отслеживание прогресса поможет вам достичь поставленных целей и поддерживать мотивацию на высоком уровне.'
    },
    {
      id: uuidv4(),
      text: 'Экспертные советы: Наши специалисты по физической подготовке и питанию поделятся с вами полезными советами по оптимизации тренировок и поддержанию здорового образа жизни.'
    }
  ]

  return (
    <div className="w-full overflow-y-hidden text-black flex h-screen">
      <Actions /> 
      <div className='w-1/2 overflow-y-hidden text-black'>
        <div className='pt-[19px] w-[540px] px-6 border-x-[1px] border-x-border h-full'>
          <div onClick={HandleRoute}  className='flex item-center cursor-pointer mb-6'>
            <FontAwesomeIcon className='mr-5 self-center h-full' icon={faAngleLeft} fontSize={16} width={16} height={16}/>
            <span className='text-black text-[17px] font-bold leading-[20px]'>Ommaviy oferta shartlari</span>
          </div>

          <div className='flex flex-col mx-5'>
            <h1 className='text-[15px] font-bold leading-[22px] mb-2.5'>Программа &quot;ЗаЖизнь: Спорт для долголетия&quot;</h1>
            <p className='text-[13px] leading-[22px] font-normal mb-2.5'>
              Хотите жить долго и качественно? Присоединяйтесь к нашей программе &quot;ЗаЖизнь: Спорт для долголетия&quot; и начните инвестировать в свое здоровье уже сегодня!
            </p>
            <h2 className='text-[15px] font-bold leading-[22px] mb-2.5'>Что вы получите:</h2>
            <ol className='list-decimal	mb-2.5'>
              {
                advantage.map(item => (
                  <li className='text-[13px] leading-[22px]' key={item.id}>{item.text}</li>
                ))
              }
            </ol>
            <p className='text-[13px] leading-[22px] font-normal'>Присоединяйтесь к нашей программе уже сегодня и начните путь к здоровой и активной жизни!</p>
          </div>
        </div>
      </div>
  </div>
  )
}

export default Offer;