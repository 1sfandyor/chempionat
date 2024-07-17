'use client'
import Image from "next/image"
import logo from '@/../public/logo.svg';
import { Button } from "../Button/Button";
import { useState } from "react";
import { SFPro } from "@/utils/customFont";

export const Actions = () => {

  const [openLoginModal, setOpenLoginModal] = useState(false);
  

  return (
    <div className="w-1/2 flex items-start justify-center bg-green-300 container mx-auto">
      <Image className="2xl:mr-[82.91px]" src={logo} alt="Logo" width={36} height={36}/>
      <div className="flex flex-col h-full bg-blue-300 w-[393px]"> 
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
        
        <div className="mb-[20px]">
          <Button button={{
                    className: '',
                    spanClasses: 'text-[15px] font-medium text-black/40 leading-normal',
                    onClick: () => setOpenLoginModal(true),
                    text: 'Категории спорта'
                    
          }} />

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
