import { ReactNode } from "react"

export interface RegisterModalType {
  className?: string,
  href?: string,
  text: string
  children: ReactNode
  setOpenRegisterModal?: () => void;
  }

  export interface LoginModalType {
    className?: string,
    href?: string,
    text: string
    children: ReactNode
    setOpenRegisterModal?: () => void;
    }