import { FC } from 'react';
// import upload from '@/public/upload.png';
import Image from 'next/image';

interface UserData {
  city: string;
  gender: string;
  birthYear: string;
  nickname: string;
}

interface UserDataFormProps {
  userData: UserData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const UserDataForm: FC<UserDataFormProps> = ({ userData, handleChange }) => {
  return (
    <div className="flex items-center">
      <div className="flex items-center justify-center w-[66px] h-[66px] mr-0.5">
        <label htmlFor="dropzone-file" className="flex p-2.5 w-full h-full rounded-lg cursor-pointer bg-gray hover:bg-gray-100 dark:hover:border-gray-500">
          <div className="flex flex-col items-center justify-center">
            <Image src='/upload.png' alt='upload image' width={45} height={45} />
          </div>
          <input id="dropzone-file" type="file" className="hidden" />
        </label>
      </div>
      
      <div>
        <div className="flex items-center mb-0.5">
          <select
            className="border border-borderGray w-[150px] py-2 px-3.5 rounded-[9px] text-[13px] mr-0.5"
            name="city"
            value={userData.city}
            onChange={handleChange}
          >
            <option value="">Bыбери город</option>
            <option value="Париж">Париж</option>
            <option value="Ташкент">Ташкент</option>
            <option value="Самарканд">Самарканд</option>
            <option value="Германия">Германия</option>
          </select>

          <select
            className="border border-borderGray w-[80px] py-2 px-3.5 rounded-[9px] text-[13px] mr-0.5"
            name="gender"
            value={userData.gender}
            onChange={handleChange}
          >
            <option value="">гендер</option>
            <option value="Мужской">Мужской</option>
            <option value="Женский">Женский</option>
          </select>

          <input
            type="date"
            className="border border-borderGray w-[120px] py-1.5 px-3.5 rounded-[9px] text-[13px] mr-0.5"
            name="birthYear"
            value={userData.birthYear}
            onChange={handleChange}
            placeholder="год ржд"
          />
        </div>
        <input
          className="border border-borderGray py-2 px-3.5 rounded-[9px] text-[13px] mr-0.5 w-full"
          type="text"
          placeholder="никнейм:  (это может быть ваше имя)"
          name="nickname"
          value={userData.nickname}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default UserDataForm;
