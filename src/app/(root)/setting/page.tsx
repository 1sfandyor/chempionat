'use client'
import { Actions } from "@/components/Actions/Actions";
import { Button } from "@/components/Button/Button";
import Form from "@/components/Form/Form";
import ProfileUploader from "@/components/ImageUpload/ImageUpload";
import { UserProfile } from "@/components/Profile/Profile";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";


const Setting = () => {

  const [nickName, setNickName] = useState<string | null>(null);

  useEffect(() => {
    setNickName(localStorage.getItem('nickname'))
  }, [])

  const handleFormSubmit = (data: Record<string, string>) => {
    console.log(data);
  };

  const fields = [
    { label: 'Фамилия', name: 'name', type: 'text', required: true },
    { label: 'Имя', name: 'surname', type: 'text', required: true },
    { label: 'Отчество', name: 'familyName', type: 'text', required: true },
    { label: 'E-mail', name: 'email', type: 'email', required: true },
  ];

  return (
    <div className="w-full overflow-y-hidden text-black flex h-full">
      <Actions /> 
      <div className='w-1/2 overflow-y-hidden text-black'>
        <div className='pt-[19px] w-[540px] px-6 border-x-[1px] overflow-hidden border-x-border'>

          {/* UPLOAD IMAGE */}
          <div className="flex items-center text-[15px] text-black font-medium mb-6">
            <FontAwesomeIcon icon={faAngleLeft} width={20} height={20} />
            <p>Настройка профилья</p>
          </div>

          {/* SET NAME AND INFO */}
          <div className="flex flex-col items-center justify-center mb-7">
            <ProfileUploader/>
            <p className="text-[17px] font-semibold leading-[20.29px] mb-0.5">@{nickName}</p>
            <span className="text-[13px] leading-[15.51px]">Ташкент. 27 лет.</span>
          </div>
        </div>

        {/* UPDATE FORM */}
        <div className="w-[540px] border-x-[1px] overflow-scroll border-x-border h-full bg-grayBg pt-[30px] px-[60px]">
          <div className="flex flex-col h-[72%] grow ">
            <p className="text-black text-[13px] font-medium mb-5">Данные пользователя</p>
            <Form fields={fields} onSubmit={handleFormSubmit} />
            

            <p className="text-black text-[13px] font-medium mb-5">Данные входа</p>
            <Form fields={fields} onSubmit={handleFormSubmit} />
          </div>


          <Button key={1} button={{
          className: 'bg-black w-full rounded-[7px] py-[8px]',
          onClick() {handleFormSubmit},
          text: 'Submit'
          }}/>
        </div>
      </div>
    </div>
    
  )
}

export default Setting; 