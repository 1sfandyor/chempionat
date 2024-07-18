import Image from "next/image"
import bassketboll from '/public/bassketball.png' ;
import tennis from '/public/tesnnis.png';
import cs from '/public/cs.png'; 

export const CategorySport = () => {
  return (
    <div className="flex flex-col items-start">
      <div className="flex items-center text-black/40 text-[15px] font-medium leading-normal mb-[23px]">
        <p className="mr-16">Категории спорта</p>
        <button className="">добавить</button>
      </div>

      <div className="flex items-start flex-col">

        <div className="flex items-center mb-2.5 hover--state">
          <div className="rounded-full p-2 bg-gray mr-[11px]">
            <Image src={bassketboll} alt="" width={24} height={24}/>
          </div>
          <div className="flex items-start wrapper">
            <div className="text-black mr-[55px]">
              <p className={'text-[15px] font-medium'}>баскетболл</p>
              <p className={'text-[13px] font-medium opacity-50'}>Q 267</p>
            </div>
            <button className="text-purple text-[15px] font-medium hidden">Cоздать встречу</button>
          </div>
        </div>

        <div className="flex items-center mb-2.5 hover--state">
          <div className="rounded-full p-2 bg-gray mr-[11px]">
            <Image src={tennis} alt="" width={24} height={24}/>
          </div>
          <div className="flex items-start wrapper">
            <div className="text-black mr-[55px]">
              <p className={'text-[15px] font-medium'}>стол теннис</p>
              <p className={'text-[13px] font-medium opacity-50'}>Q 129</p>
            </div>
            <button className="text-purple text-[15px] font-medium hidden">Cоздать встречу</button>
          </div>
        </div>


        <div className="flex items-center mb-2.5 hover--state">
          <div className="rounded-full p-2 bg-gray mr-[11px]">
            <Image className="rounded-full" src={cs} alt="" width={24} height={24}/>
          </div>

          <div className="flex items-start wrapper">
            <div className="text-black mr-[100px]">
              <p className={'text-[15px] font-medium'}>CS2</p>
              <p className={'text-[13px] font-medium opacity-50'}>Q 644</p>
            </div>
            <button className="text-purple text-[15px] font-medium hidden">Cоздать встречу</button>
          </div>

        </div>

      </div>     
    </div>
  )
}
