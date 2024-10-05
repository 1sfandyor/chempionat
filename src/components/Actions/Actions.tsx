'use client'
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/Button/Button";
import { SFPro } from "@/utils/customFont";
import { UserActions } from "../UserActions/UserActions";
import { RegisterModal } from "../Login/RegisterModal/RegisterModal";
import { Privacy_Policy } from "../Privacy_Policy/Privacy_Policy";
import AnimatedScoreCards from "../Animation/Animation";
import CreateMeeting from "../createMeeting/createMeeating";
import SearchBar from "../Search/Search";
import Link from "next/link";
import { useRegisterModal } from "@/hooks/useRegisterModal";
import { useLoginModal } from "@/hooks/useLoginModal";
import React from "react";

export const Actions = () => {
  const [nickname, setNickname] = useState<string | null>(null);
  const [openRegisterModal, setOpenRegisterModal] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const [openCreateMeet, setOpenCreateMeet] = useState(false);
  const [email, setEmail] = useState<string | null>(null);
  const [pin, setPin] = useState<string | null>(null);
  const [storedNickname, setStoredNickname] = useState<string | null>()

  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  
  const onOpenRegisterModal = useCallback(() => {
    console.log('kirdi');
    
      registerModal.onOpen();
  }, [registerModal]);

  const onOpenLoginModal = useCallback(() => {
    loginModal.onOpen();
}, [loginModal]);




  return (
    <>
      <RegisterModal />
      <section className="w-1/2 flex items-start justify-center container mx-auto pt-[19px] pb-[23px]">
        <Link className="hover:opacity-80 active:opacity-60" href={'/'}>
          <Image src='/logo.svg' className="2xl:mr-[82.91px]" alt="Logo" width={36} height={36} />
        </Link>
        {
          nickname
            ? <UserActions setOpenSearchBar={setOpenSearchBar} setOpenCreateMeet={setOpenCreateMeet} />
            : <div className="flex flex-col h-full w-[393px]">

              {/* LOGIN & REGISTER BTN */}
              <div className="mb-[20px]">
                <Button button={{
                  className: 'bg-black rounded-[65px] text-white gap-10 mr-[3px] hover:bg-black/80 transition-all duration-200 active:bg-black/60',
                  spanClasses: 'text-[15px] font-semibold leading-normal',
                  onClick: () => onOpenRegisterModal(),
                  px: 'px-[22px]',
                  py: 'py-[15px]',
                  text: 'вход',
                  type: 'button'
                }} />

                <Button button={{
                  className: `bg-gray rounded-[65px] gap-10 hover:bg-gray transition-all duration-200 active:bg-gray`,
                  spanClasses: `text-[15px] text-black font-semiBold leading-normal ${SFPro.variable}`,
                  onClick: () => setOpenRegisterModal(true),
                  px: 'px-[22px]',
                  py: 'py-[15px]',
                  text: 'регистрация',
                  type: 'button'
                }} />
              </div>

              {/* CATEGORY SPORT */}
              <div className="mb-[20px] flex items-start grow">
                <p className="text-[15px] mr-16 font-medium text-black leading-normal">Категории спорта</p>

                <Button button={{
                  className: ``,
                  spanClasses: `text-[15px] font-medium text-black hover:text-purple leading-normal ${SFPro.variable}`,
                  onClick: () => setOpenRegisterModal(true),
                  text: 'добавить',
                  type: 'button'
                }} />
              </div>
              <AnimatedScoreCards/>
              <Privacy_Policy/>
            </div>
        }
      </section>

      {
        openCreateMeet && (
          <>
            <div className="fixed top-0 left-0 w-full h-full  z-50" onClick={() => setOpenCreateMeet(false)}></div>
            <CreateMeeting setOpenCreateMeet={setOpenCreateMeet}/>
          </> 
        )
      }


      {
        openSearchBar && (
          <>
            <div className="fixed top-0 left-0 w-full h-full z-50" onClick={() => setOpenSearchBar(false)}></div>
            <SearchBar setOpenCreateMeet={setOpenCreateMeet}/>
          </> 
        )
      }

    </>
  );
};
