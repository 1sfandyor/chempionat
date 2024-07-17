'use client'
import Image from "next/image"
import logo from '@/../public/logo.svg';
import { Button } from "../Button/Button";
import { useState } from "react";
import { SFPro } from "@/utils/customFont";

export const Actions = () => {

  const [openLoginModal, setOpenLoginModal] = useState(false);
  

  return (
    <div className="w-1/2 flex items-start justify-center container mx-auto pt-[19px]">
      <Image className="2xl:mr-[82.91px]" src={logo} alt="Logo" width={36} height={36}/>
      <div className="flex flex-col h-full w-[393px]"> 
        <div className="mb-[20px]">
          <Button button={{
                    className: 'bg-black rounded-[65px] text-white gap-10 mr-[3px]',
                    spanClasses: 'text-[15px] font-semibold leading-normal',
                    onClick: () => setOpenLoginModal(true),
                    px: 'px-[22px]',
                    py: 'py-[15px]',
                    text: 'вход'
          }} />

          <Button button={{
                    className: `bg-gray rounded-[65px] gap-10`,
                    spanClasses: `text-[15px] text-black  font-semiBold leading-normal ${SFPro.variable}`,
                    onClick: () => setOpenLoginModal(true),
                    px: 'px-[22px]',
                    py: 'py-[15px]',
                    text: 'регистрация'
          }} />
        </div>
        
        <div className="mb-[20px] flex items-center ">
          <p className="text-[15px] mr-16 font-medium text-black/40 leading-normal">Категории спорта</p>

          <Button button={{
                    className: ``,
                    spanClasses: `text-[15px] text-black  font-medium text-black/40 leading-normal ${SFPro.variable}`,
                    onClick: () => setOpenLoginModal(true),
                    text: 'добавить'
          }} />
        </div>

      </div>
    </div>
  )
}
