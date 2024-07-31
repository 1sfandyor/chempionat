import { FC } from 'react';
import Image from 'next/image';


const CompetitionForm: FC = () => {

  return (
    <div className="flex flex-col items-center px-10 mb-[30px]">
      <div className="flex items-center ">
        <div className="flex items-center justify-center w-[66px] h-[66px] mr-0.5">
          <label htmlFor="dropzone-file" className="flex p-2.5 w-full h-full rounded-lg cursor-pointer bg-gray hover:bg-gray-100 dark:hover:border-gray-500">
            <div className="flex flex-col items-center justify-center">
              <Image src='/bassketball_big.png' alt='upload image' width={45} height={45} />
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>
        
        <div>
          <div className="flex items-center mb-0.5">
            <select
              className="border appearance-none border-borderGray w-[150px] py-[6px] leading-[15.51px] px-3.5 rounded-[9px] text-[13px] mr-0.5"
              name="city">
              <option value="">Bыбери город</option>
              <option value="Париж">Париж</option>
              <option value="Ташкент">Ташкент</option>
              <option value="Самарканд">Самарканд</option>
              <option value="Германия">Германия</option>
            </select>

            <input type='date'
              className="border border-borderGray leading-[15.51px] py-[6px] px-3.5 rounded-[9px] text-[13px] mr-0.5"
              name="gender"/>

            <input type="time"
              className="border appearance-none! leading-[15.51px] border-borderGray w-[120px] py-[6px] px-3.5 rounded-[9px] text-[13px] mr-0.5"
              name="birthYear" placeholder="год ржд"/>
          </div>

          <input
            className="border border-borderGray leading-[15.51px] py-[6px] px-3.5 rounded-[9px] text-[13px] mr-0.5 w-full"
            type="text"
            placeholder="Площадка"
            name="nickname"/>
            
        </div>
      </div>

    </div>
  );
};

export default CompetitionForm;
