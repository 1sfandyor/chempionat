import { FC, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import MapComponent from '../GoogleMap/GoogleMap';
import CompetitionForm from '../createCompetition/CompetitionForm';
import { RegisterModalType } from '@/interfaces/registerModal.interface';

interface CreateMeetingProps {
  modalItem: RegisterModalType;
  setOpenCreateMeet: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateMeeting: FC<CreateMeetingProps> = ({ setOpenCreateMeet }) => {

  return (
    <div className="z-[99999] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
      <div className="relative flex flex-col items-start bg-white w-[539px] h-[453px] p-[5px] pt-10 pb-[7px] rounded-xl shadow-[0px_44px_85px_0px_rgba(72,66,60,0.12)]">
        <div className="flex items-start justify-between w-full px-[38px]">
          <p className="text-black text-2xl font-normal w-[264px] mb-5">🤝Найти игрока</p>
          <label className="inline-flex items-center mb-5 cursor-pointer">
            <span className="text-[13px] font-normal text-black mr-[5px]">В настоящее время</span>
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-6 h-4 peer-focus:outline-none rounded-full border border-black peer peer-checked:after:translate-x-[70%] rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[1px] after:start-[1px] after:bg-black after:peer-checked:bg-white after:peer-checked:border-transparent peer-checked:border-transparent after:border-white after:border after:rounded-full after:h-3 after:w-3 after:transition-all border-gray-600 peer-checked:bg-black"></div>
          </label>
        </div>

        <CompetitionForm />

        <MapComponent />
        
        <div className="absolute pb-[5px] px-[5px] rounded-b-xl bottom-0.5 left-[230px] translate-y-full flex items-center bg-white before:content-[''] before:w-4 before:h-4 before:absolute before:top-[1px] before:-left-[16px] before:rounded-tr-[11px] before:bg-transparent before:shadow-[4px_-4px_0_0.7px_white] after:content-[''] after:w-4 after:h-4 after:absolute after:top-[1px] after:-right-[16px] after:-rotate-90 after:rounded-tr-[11px] after:bg-transparent after:shadow-[4px_-4px_0_0.7px_white]">
          <button className="flex text-[15px] py-3 px-[30px] rounded-[11px] font-medium mr-1 text-white background">Создать</button>
          <button className="flex text-[15px] py-3 px-[30px] rounded-[11px] font-medium bg-[#F0F0F0]" onClick={() => setOpenCreateMeet(false)}>Отметить</button>
        </div>
      </div>
    </div>
  )
};

export default CreateMeeting;
