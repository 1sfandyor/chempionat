'use client'
import { useTab } from "@/hooks/useTab/useTab";
import { TableTabFilter } from "../tab-filter"
import { UserFreqActs } from "@/config/constants/UserFreqActTab";
import {v4 as uuidv4} from 'uuid';
import Image from "next/image";
import { FC } from "react";
import { UserCardType } from "@/interfaces/UserCard";

export const UserExtraAction: FC<UserCardType> = ({ nickname }) => {
  const { value, onValueChange } = useTab();

  const nextOpponents = [
    {
      id: uuidv4(),
      img: '/vanessa.png'
    },
    {
      id: uuidv4(),
      img: '/vanessa.png'
    },
    {
      id: uuidv4(),
      img: '/vanessa.png'
    },
    {
      id: uuidv4(),
      img: '/vanessa.png'
    },
    {
      id: uuidv4(),
      img: '/vanessa.png'
    },
    {
      id: uuidv4(),
      img: '/vanessa.png'
    },
    {
      id: uuidv4(),
      img: '/vanessa.png'
    },
    {
      id: uuidv4(),
      img: '/vanessa.png'
    },
  ]

  return (
    <>
        <TableTabFilter nickname={nickname as string} className="px-0" tabs={UserFreqActs} value={value} onTabChange={onValueChange} />
        <div>
          <p className="text-[13px] font-medium mb-5">Предыдущие соперники</p>
          <div className="flex items-center mb-[30px]">
            {
              nextOpponents.map(item => (
                <button className="mr-[5px]" key={item.id}>
                  <Image className="rounded-full w-10 h-10" src={item.img} alt="" width={40} height={40} />
                </button>
              ))
            }
          </div>

          <div className="flex flex-col">
            <p className="text-lg font-semibold leading-normal">4648 м</p>
            <label className="inline-flex items-center mb-5 cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer"/>
              <div className="relative w-5 h-3 mr-[4px] peer-focus:outline-none  rounded-full border border-black peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full  after:content-[''] after:absolute after:top-[1px] after:start-[1px] after:bg-black after:peer-checked:bg-white  peer-checked:after:border-transparent peer-checked:border-transparent after:border-gray-300 after:border after:rounded-full after:h-2 after:w-2 after:transition-all border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="text-sm font-medium text-gray-900">СТАРТ</span>
            </label>
          </div>
        </div>
    
    </>
  )
}
