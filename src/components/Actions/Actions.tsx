'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
// import logo from '@/public/logo.svg';
import { Button } from "@/components/Button/Button";
import { SFPro } from "@/utils/customFont";
import { UserActions } from "../UserActions/UserActions";
import { RegisterModal } from "../Login/RegisterModal/RegisterModal";
import { RegisterModalType } from "@/interfaces/registerModal.interface";
import { Privacy_Policy } from "../Privacy_Policy/Privacy_Policy";

export const Actions = () => {
  const [nickname, setNickname] = useState<string | null>(null);
  const [openRegisterModal, setOpenRegisterModal] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [email, setEmail] = useState<string | null>(null);
  const [pin, setPin] = useState<string | null>(null);
  const [storedNickname, setStoredNickname] = useState<string | null>()

  useEffect(() => {
    setNickname(localStorage?.getItem('nickname'));
  }, [])

  useEffect(() => {
    const storedEmail = window.localStorage.getItem('email');
    const storedPin = window.localStorage.getItem('pincode');

    setNickname(localStorage?.getItem('nickname'));
    setEmail(storedEmail);
    setPin(storedPin);
  }, [openRegisterModal, storedNickname]);

  const modalItem: RegisterModalType = {
    text: email === null
      ? "🧔👩 Спасибо что выбрал здоровый образ жизни!"
      : pin === null
        ? '📮Мы отправили смс с кодом для активации аккаунта'
        : 'Придумайте для себя никнейм )',
    children: '',
    setOpenRegisterModal: () => setOpenRegisterModal(false)
  };

  return (
    <>
      <div className="w-1/2 flex items-start justify-center container mx-auto pt-[19px] pb-[23px]">
        <Image src='/logo.svg' className="2xl:mr-[82.91px]" alt="Logo" width={36} height={36} />
        {
          nickname
            ? <UserActions />
            : <div className="flex flex-col h-full w-[393px]">

              {/* LOGIN & REGISTER BTN */}
              <div className="mb-[20px]">
                <Button button={{
                  className: 'bg-black rounded-[65px] text-white gap-10 mr-[3px]',
                  spanClasses: 'text-[15px] font-semibold leading-normal',
                  onClick: () => setOpenLoginModal(true),
                  px: 'px-[22px]',
                  py: 'py-[15px]',
                  text: 'вход',
                  type: 'button'
                }} />

                <Button button={{
                  className: `bg-gray rounded-[65px] gap-10`,
                  spanClasses: `text-[15px] text-black  font-semiBold leading-normal ${SFPro.variable}`,
                  onClick: () => setOpenRegisterModal(true),
                  px: 'px-[22px]',
                  py: 'py-[15px]',
                  text: 'регистрация',
                  type: 'button'
                }} />
              </div>

              {/* CATEGORY SPORT */}
              <div className="mb-[20px] flex items-start grow">
                <p className="text-[15px] mr-16 font-medium text-black/40 leading-normal">Категории спорта</p>

                <Button button={{
                  className: ``,
                  spanClasses: `text-[15px] text-black  font-medium text-black/40 leading-normal ${SFPro.variable}`,
                  onClick: () => setOpenRegisterModal(true),
                  text: 'добавить',
                  type: 'button'
                }} />
              </div>
              
              <Privacy_Policy/>
            </div>
        }
      </div>

      {
        openRegisterModal && (
          <>
            <div className="fixed top-0 left-0 w-full h-full bg-black/40" onClick={() => setOpenRegisterModal(false)}></div>
            <RegisterModal modal="register" modalItem={modalItem} />
          </> 
        )
      }

      {
        openLoginModal && (
          <>
            <div className="fixed top-0 left-0 w-full h-full bg-black/40" onClick={() => setOpenLoginModal(false)}></div>
            <RegisterModal modal="login" modalItem={modalItem} />
          </> 
        )
      }

    </>
  );
};
