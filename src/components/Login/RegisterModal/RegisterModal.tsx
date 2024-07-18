import { RegisterModalType } from "@/interfaces/registerModal.interface";
import { FC } from "react";
import ReactDOM  from "react-dom";
import { RegisterForm } from "../RegisterForm/RegisterForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { LoginForm } from "../LoginForm/LoginForm";

interface RegisterModalProps {
  modalItem: RegisterModalType;
  modal: string;
}


export const RegisterModal: FC<RegisterModalProps> = ({modalItem, modal}) => {


  const handleClose = () => {
    if (modalItem.setOpenRegisterModal) {
      modalItem.setOpenRegisterModal();
    }
  };

  return ReactDOM.createPortal((
    <div className="z-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-start bg-white w-[539px] h-[453px] p-5 rounded-xl shadow-[0px_44px_85px_0px_rgba(72,66,60,0.12)]">
      <div className="flex items-start justify-between w-full">
        <p className="text-black text-2xl font-normal w-[264px] mb-9">{modalItem.text}</p>

        <button className="p-2" onClick={handleClose}>
          <FontAwesomeIcon icon={faXmark}/>
        </button>
      </div> 

      {
        modal === 'register' &&
        <RegisterForm setOpenRegisterModal={modalItem.setOpenRegisterModal}/>
      }

      {
        modal === 'login' &&
        <LoginForm setOpenRegisterModal={modalItem.setOpenRegisterModal}/>
      }
      
    </div>
  ), document.getElementsByTagName('main')[0]);

}
